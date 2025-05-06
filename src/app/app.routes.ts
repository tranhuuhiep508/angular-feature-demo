import { Routes } from '@angular/router';
import { AuthService } from './components/route-redirect-demo/auth.service';

export const routes: Routes = [
  {
    path: 'defer',
    loadComponent: () => import('./components/defer-demo/defer-demo.component').then(m => m.DeferDemoComponent)
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./components/control-flow-demo/control-flow-demo.component').then(m => m.ControlFlowDemoComponent)
  },
  {
    path: 'vite-esbuild',
    loadComponent: () => import('./components/vite-esbuild-demo/vite-esbuild-demo.component').then(m => m.ViteEsbuildDemoComponent)
  },
  {
    path: 'standalone',
    loadComponent: () => import('./components/standalone-demo/standalone-demo.component').then(m => m.StandaloneDemoComponent)
  },
  {
    path: 'ssr-hydration',
    loadComponent: () => import('./components/ssr-hydration-demo/ssr-hydration-demo.component').then(m => m.SsrHydrationDemoComponent)
  },
  {
    path: 'signals',
    loadComponent: () => import('./components/signals-demo/signals-demo.component').then(m => m.SignalsDemoComponent)
  },
  {
    path: 'route-redirect',
    loadComponent: () => import('./components/route-redirect-demo/route-redirect-demo.component').then(m => m.RouteRedirectDemoComponent),
    canActivate: [(authService: AuthService) => {
      if (!authService.isLoggedIn()) {
        // In a real app, you would navigate to a login page
        alert('Please log in to access this page');
        return false;
      }
      return true;
    }]
  },
  {
    path: 'fallback-ng-content',
    loadComponent: () => import('./components/fallback-ng-content-demo/fallback-ng-content-demo.component').then(m => m.FallbackNgContentDemoComponent)
  },
  {
    path: '',
    redirectTo: 'defer',
    pathMatch: 'full'
  }
];
