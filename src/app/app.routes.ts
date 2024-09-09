import { Routes } from '@angular/router';
import { GreetingsComponent } from './modules/pages/greetings/greetings.component';
import { FinancasComponent } from './modules/pages/financas/financas.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { DesenvolvedorComponent } from './modules/pages/desenvolvedor/desenvolvedor.component';
import { ListComponent } from './modules/components/list/list.component';

export const routes: Routes = [
  { path: '', component: GreetingsComponent },
  { path: 'greetings', component: GreetingsComponent },
  { path: 'financas', component: FinancasComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: ListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dev', component: DesenvolvedorComponent },
];
