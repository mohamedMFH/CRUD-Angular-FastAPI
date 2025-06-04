import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsComponent } from './components/forms/forms.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
		...canActivate(redirectLoggedInToHome)
	},
	{
		path: 'home',
		component: FormsComponent,
		...canActivate(redirectUnauthorizedToLogin)
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];
