export const tpl = `
  <div class="back-panel">
    <div class="back-panel-button">
      <a href="/profile_view">
        <button class="button-back"><span class="mdi mdi-arrow-left"></span></button>
      </a>
    </div>
  </div>
  <div class="profile-wrapper">
    <div class="profile-avatar">
      <div class="profile-avatar-img">
        <span class="mdi mdi-account-circle"></span>
      </div>
    </div>
    <form class="form-change-password">
      <div class="profile-items">
        {{{profileInputOldPassword}}}
        {{{profileInputNewPassword}}}
        {{{profileInputConfirmNewPassword}}}
      </div>
      <div class="profile-items">
        <div class="profile-button-save">
          {{{buttonSave}}}
        </div>
      </div>
    </form>
  </div>
`;
