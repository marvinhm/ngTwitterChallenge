import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TweetsComponent} from './components/tweets/tweets.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'index', component: TweetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
