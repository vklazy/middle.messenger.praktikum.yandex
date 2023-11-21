export const tpl = `
    <div class="left-panel">
      <div class="left-panel-top">
        <a class="a-profile" href="/profile_view">
          <div class="profile-link">Профиль<span class="mdi mdi-chevron-right"></span></div>
        </a>
        <form class="form-chat-search">
          <div class="search">
            <span class="mdi mdi-magnify"></span>
            <input class="input-search" name="search" placeholder="Поиск">
          </div>
        </form>
      </div>
      {{{contactCard_0}}}
      {{{contactCard_1}}}
    </div>
    <div class="dialog-wrapper">
      <div class="dialog">
        <div class="dialog-head">
          <div class="dialog-head-user-info">
            <div class="dialog-head-user-info-avatar"></div>
            <div class="dialog-head-user-info-name">Андрей</div>
          </div>
          <div class="dialog-head-user-btn"><span class="mdi mdi-dots-vertical"></span></div>
        </div>
        <div class="dialog-main">
          <div class="dialog-main-messages">
            <div class="dialog-main-messages-date">19 июня</div>
            {{{dialogMessage_0}}}
            {{{dialogMessage_1}}}
            {{{dialogMessage_2}}}
          </div>
        </div>
        <form class="form-send-message">
          <div class="dialog-footer">
            <div class="dialog-footer-button">
              <button class="button-paperclip"><span class="mdi mdi-paperclip"></span></button>
            </div>
            <div class="dialog-footer-input">
              <input class="input-message" type="text" name="message" placeholder="Сообщение">
            </div>
            <div class="dialog-footer-button">
              <button class="button-send" type="submit">
                <span class="mdi mdi-arrow-right"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
`;
