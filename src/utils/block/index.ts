import { v4 as uuidv4 } from 'uuid';
import handlebars from 'handlebars';
import { EventBus } from '../event-bus';
import { Meta } from './types.ts';

export class Block <Props extends Record<string, unknown>> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  id = `i_${uuidv4()}`;

  _element: HTMLElement | null = null;

  _meta: Meta;

  _eventBus: () => EventBus;

  _props: Props;

  _children: Record<string, Block<any>>;

  _setUpdate: boolean = false;

  constructor(propsAndChildren: Props, tagName: string = 'div') {
    const eventBus = new EventBus();
    this._eventBus = () => eventBus;
    const { props, children } = this._getPropsAndChildren(propsAndChildren);
    this._meta = {
      tagName,
      props,
    };

    this._children = children;

    this._props = this._makePropsProxy(props);

    this._eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, (props) => {
      this._componentDidUpdate(props as {oldProps: Props; newProps: Props});
    });
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init() {
    this._createResources();
    this.init();
    this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(props: {oldProps: Props, newProps: Props}) {
    if (this.componentDidUpdate(props.oldProps, props.newProps)) {
      this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  _getPropsAndChildren(propsAndChildren: Props) {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block<Record<string, unknown>>> = {};

    Object.keys(propsAndChildren).forEach((key) => {
      if (propsAndChildren[key] instanceof Block) {
        children[key as string] = propsAndChildren[key] as Block<Record<string, unknown>>;
      } else {
        props[key] = propsAndChildren[key];
      }
    });
    return { props, children };
  }

  setProps(newProps: Props) {
    if (!newProps) {
      return;
    }

    this._setUpdate = false;
    const oldValue = { ...this._props };
    const { props, children } = this._getPropsAndChildren(newProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }

    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }

    if (this._setUpdate) {
      this._eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, this._props);
      this._setUpdate = false;
    }
  }

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    this._removeEvents();
    this._element!.innerHTML = '';
    this._element!.append(block);
    this._addEvents();
    this._addAttributes();
    this._addListeners();
  }

  render() {
    return new DocumentFragment();
  }

  _removeEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.removeEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _addEvents() {
    let events: object = {};
    if (this._props.events) {
      events = this._props.events;
      Object.keys(events).forEach((event) => {
        this._element?.addEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _addListeners() {}

  _addAttributes() {
    let attributes: object = {};
    if (this._props.attributes) {
      attributes = this._props.attributes;
      Object.keys(attributes).forEach((attribute) => {
        this._element?.setAttribute(attribute, attributes[attribute as keyof typeof attributes]);
      });
    }
  }

  compile(template: string, data: any) {
    const propsAndStubs = { ...data };
    Object.keys(this._children).forEach((key) => {
      propsAndStubs[key] = `<div data-id=${this._children[key].id}></div>`;
    });
    const html = handlebars.compile(template)(propsAndStubs);
    const temp = document.createElement('template');
    temp.innerHTML = html;
    Object.keys(this._children).forEach((key) => {
      const stub = temp.content.querySelector(`[data-id=${this._children[key].id}]`);
      if (!stub) {
        return;
      }
      stub.replaceWith(this._children[key].getContent()!);
    });
    return temp.content;
  }

  getContent() {
    return this._element;
  }

  _makePropsProxy(props: any) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        if (target[prop] !== value) {
          target[prop] = value;
          this._setUpdate = true;
        }
        return true;
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}
