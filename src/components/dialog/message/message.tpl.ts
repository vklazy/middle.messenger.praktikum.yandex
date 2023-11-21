export const tpl = `
<div class="dialog-message-{{#if directionFrom}}from{{else}}to{{/if}}">
  <div class="dialog-message-content-{{#if directionFrom}}from{{else}}to{{/if}}">
    <div>{{ message }}</div>
    <div class="message-date-{{#if directionFrom}}from{{else}}to{{/if}}">
      {{#unless directionFrom}}<span class="mdi mdi-check-all"></span>{{/unless}}
      {{ date }}
    </div>
  </div>
</div>
`;
