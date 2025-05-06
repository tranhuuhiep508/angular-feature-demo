import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-route-redirect-demo',
  
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Route Redirect Demo</h2>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Authentication Status</h3>
          
          <div class="p-4 mb-4 rounded-lg" [class.bg-green-100]="authService.isLoggedIn()" [class.bg-red-100]="!authService.isLoggedIn()">
            <p [class.text-green-700]="authService.isLoggedIn()" [class.text-red-700]="!authService.isLoggedIn()">
              {{ authService.isLoggedIn() ? 'Logged In' : 'Not Logged In' }}
            </p>
          </div>
          
          <div class="flex space-x-4">
            <button 
              (click)="authService.login()"
              class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Login
            </button>
            
            <button 
              (click)="authService.logout()"
              class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Protected Content</h3>
          
          @if (authService.isLoggedIn()) {
            <div class="p-4 bg-blue-50 rounded-lg">
              <p class="text-blue-700">
                This content is only visible when logged in.
              </p>
            </div>
          } @else {
            <div class="p-4 bg-yellow-50 rounded-lg">
              <p class="text-yellow-700">
                Please log in to view this content.
              </p>
            </div>
          }
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-200">
          <h4 class="text-lg font-semibold mb-2">About Function-Based Redirects</h4>
          <p class="text-gray-600">
            This component demonstrates Angular's function-based route redirects.
            The authentication state is managed using signals, and the router
            configuration uses a function to determine if a user should be
            redirected to the login page.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class RouteRedirectDemoComponent {
  constructor(public authService: AuthService) {}
}
