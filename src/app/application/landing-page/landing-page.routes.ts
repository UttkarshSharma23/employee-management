import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(lg => lg.LoginModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('../pages/pages.module').then(p => p.PagesModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('../todo/todo.module').then(t => t.TodoModule)
  },
  {
    path :'chatbot',
    loadChildren: () => import('../chatbot/chatbot.module').then(c => c.ChatbotModule)
  }
];
