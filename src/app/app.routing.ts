import { ModuleWithProviders } from '@angular/core';

// Import routing module on Angular 2
import { Routes, RouterModule }   from '@angular/router';

// Import custom components
import { SearchComponent } from './search/search.component';

// Create routes
const appRoutes: Routes = [
{ path: 'search', pathMatch: 'full', component: SearchComponent }
];

// Export routing constant to import on app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
