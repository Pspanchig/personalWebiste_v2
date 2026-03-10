import { Routes } from '@angular/router';
import { Start } from './Pages/start/start';
import { Biography } from './Pages/biography/biography';
import { Experience } from './Pages/experience/experience';
import { Contact } from './Pages/contact/contact';
import { InstitucionInfo } from './Pages/institucion-info/institucion-info';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    { path: 'app', pathMatch: 'full', component: Start },
    { path: 'app/biography', component: Biography },
    { path: 'app/experience', component: Experience },
    { path: 'app/contact', component: Contact },
    { path: 'app/school/:name', component: InstitucionInfo },
    { path: '**', redirectTo: 'app' }
];
