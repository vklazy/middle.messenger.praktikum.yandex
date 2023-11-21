export const tpl = `
    <div class="card">
      <div class="form-title">{{title}}</div>
       <form class="form-signup">
        {{{inputEmail}}}
        {{{inputLogin}}}
        {{{inputFirstName}}}
        {{{inputSecondName}}}
        {{{inputPhone}}}
        {{{inputPassword}}}
        {{{inputConfirmPassword}}}
        <div class="form-buttons">
          {{{buttonSignUp}}}
          <a href="/login">
            {{{buttonLogin}}}
          </a>
        </div>
      </form>
    </div>
`;
