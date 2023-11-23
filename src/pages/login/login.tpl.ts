export const tpl = `
    <div class="card">
      <div class="form-title">{{title}}</div>
        <form class="form-login">
          {{{inputLogin}}}
          {{{inputPassword}}}
          <div class="form-buttons">
            {{{buttonLogin}}}
            <a href="/signup">
             {{{buttonSignUp}}}
            </a>
          </div>
        </form>
      </div>
`;
