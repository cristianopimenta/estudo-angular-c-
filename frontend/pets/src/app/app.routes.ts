import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';

export const routes: Routes = [
    
        {path: "", component:HomeComponent},
        {path:"login", component:LoginComponent}
      
];
