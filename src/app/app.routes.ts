import { Routes } from '@angular/router';
import { Start } from './Pages/start/start';
import { Biography } from './Pages/biography/biography';
import { Experience } from './Pages/experience/experience';
import { Contact } from './Pages/contact/contact';
import { InstitucionInfo } from './Pages/institucion-info/institucion-info';

export const routes: Routes = [
    { path: '', component: Start },
    { path: 'biography', component: Biography },
    { path: 'experience', component: Experience },
    { path: 'contact', component: Contact },
    { path: 'school/:name', component: InstitucionInfo },
    { path: '**', redirectTo: '' }
];
