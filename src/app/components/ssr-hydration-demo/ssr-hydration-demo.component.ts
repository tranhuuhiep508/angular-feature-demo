import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ssr-hydration-demo',
  
  imports: [CommonModule],
  template: `
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">SSR & Hydration Demo</h2>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Server-Side Rendered Content</h3>
          <p class="text-gray-700">
            This content was rendered on the server and hydrated on the client.
          </p>
          <div class="mt-4 p-4 bg-blue-50 rounded-lg">
            <p class="text-blue-700">
              Server-side rendered at: {{ serverTime }}
            </p>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Client-Side Interactivity</h3>
          <p class="text-gray-700 mb-4">
            After hydration, this component becomes interactive on the client.
          </p>
          
          <div class="space-y-4">
            <button 
              (click)="incrementCounter()"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Increment Counter
            </button>
            
            <div class="p-4 bg-green-50 rounded-lg">
              <p class="text-green-700">
                Counter: {{ counter }}
              </p>
            </div>
          </div>
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-200">
          <h4 class="text-lg font-semibold mb-2">About SSR & Hydration</h4>
          <p class="text-gray-600">
            This component demonstrates Angular's Server-Side Rendering (SSR) and hydration capabilities.
            The initial content is rendered on the server, and then the component becomes interactive
            on the client after hydration.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SsrHydrationDemoComponent implements OnInit {
  serverTime: string = new Date().toLocaleString();
  counter: number = 0;

  ngOnInit() {
    // This will only run on the client side after hydration
    this.serverTime = new Date().toLocaleString();
  }

  incrementCounter() {
    this.counter++;
  }
}
