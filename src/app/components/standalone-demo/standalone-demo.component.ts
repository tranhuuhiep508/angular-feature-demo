import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './price.pipe';

@Component({
  selector: 'app-standalone-demo',
  
  imports: [CommonModule, PricePipe],
  template: `
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Standalone Demo</h2>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold mb-4">Custom Price Pipe</h3>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span>Default Currency (USD):</span>
            <span class="font-medium">{{ 1234.56 | price }}</span>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span>Euro (EUR):</span>
            <span class="font-medium">{{ 1234.56 | price:'EUR' }}</span>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span>Japanese Yen (JPY):</span>
            <span class="font-medium">{{ 1234.56 | price:'JPY' }}</span>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span>British Pound (GBP):</span>
            <span class="font-medium">{{ 1234.56 | price:'GBP' }}</span>
          </div>
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-200">
          <h4 class="text-lg font-semibold mb-2">About Standalone Components</h4>
          <p class="text-gray-600">
            This component demonstrates the use of standalone components in Angular 17+.
            The price pipe is also a standalone component that can be imported and used
            independently in any other component.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class StandaloneDemoComponent {}
