import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Navigation -->
      <nav class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <h1 class="text-xl font-bold text-gray-900">Angular Feature Demo</h1>
              </div>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a 
                  *ngFor="let route of routes"
                  [routerLink]="route.path"
                  routerLinkActive="border-indigo-500 text-gray-900"
                  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  {{ route.title }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Main content -->
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  routes = [
    { path: 'defer', title: 'Defer' },
    { path: 'control-flow', title: 'Control Flow' },
    { path: 'vite-esbuild', title: 'Vite + esbuild' },
    { path: 'standalone', title: 'Standalone' },
    { path: 'ssr-hydration', title: 'SSR & Hydration' },
    { path: 'signals', title: 'Signals' },
    { path: 'route-redirect', title: 'Route Redirect' },
    { path: 'fallback-ng-content', title: 'Fallback ng-content' }
  ];
}
