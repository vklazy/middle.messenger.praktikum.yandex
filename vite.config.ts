import {defineConfig} from "vite";
import {resolve} from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login/login.html'),
        signup: resolve(__dirname, 'src/pages/signup/signup.html'),
        chat: resolve(__dirname, 'src/pages/chat/chat.html'),
        view: resolve(__dirname, 'src/pages/profile/view/view.html'),
        edit: resolve(__dirname, 'src/pages/profile/edit/edit.html'),
        change_password: resolve(__dirname, 'src/pages/profile/change_password/change_password.html'),
        page_404: resolve(__dirname, 'src/pages/errors/404.html'),
        page_500: resolve(__dirname, 'src/pages/errors/500.html'),
      }
    }
  },
  server: {
    port: 3000,
  }
});
