export const tpl = `
  <div class="back-panel">
    <div class="back-panel-button">
      <a href="/chat">
        <button class="button-back"><span class="mdi mdi-arrow-left"></span></button>
      </a>
    </div>
  </div>
  <div class="profile-wrapper">
    <div class="profile-avatar">
      <div class="profile-avatar-img">
        <span class="mdi mdi-account-circle"></span>
      </div>
      <div class="profile-avatar-text">
        <span class="avatar-text">Поменять<br>аватар</span>
      </div>
    </div>
    <div class="avatar-name">Иван</div>
    <div class="profile-items">
      {{{profileFieldEmail}}}
      {{{profileFieldLogin}}}
      {{{profileFieldFirstName}}}
      {{{profileFieldSecondName}}}
      {{{profileFieldDisplayName}}}
      {{{profileFieldPhone}}}
    </div>
    <div class="profile-items">
      {{{profileLinkEdit}}}
      {{{profileLinkChangePassword}}}
      {{{profileLinkExit}}}
    </div>
  </div>
`;
