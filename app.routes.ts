import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotesiteComponent } from './pages/notesite/notesite.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
    
    { path: 'home', component: HomeComponent },
    { path: 'notesite', component: NotesiteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
   // { path: 'registration', component: RegistrationComponent },
    // Paraméterezett útvonalak
    // { path: 'task-edit/:id', component: TaskEditComponent },

    // Üres elérési út - alapértelmezett útvonal
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // Wildcard útvonal - ha egyik útvonal sem egyezik
    //{ path: '**', component: HomeComponent }
    //{ path: '**', component: PageNotFoundComponent },

    // Útvonalak egymásba ágyazása
    /*
    {
        path: 'tasks',
        title: 'Tasks',
        component: TasksComponent,
        children: [
            { path: 'completed', component: CompletedComponent },
        ]
    },
    */
];
