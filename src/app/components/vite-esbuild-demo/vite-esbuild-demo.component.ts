import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vite-esbuild-demo',
  
  imports: [CommonModule],
  template: `
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Vite + esbuild Demo</h2>
      
      <div class="bg-blue-50 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Build Tool Information</h3>
        
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span class="font-medium">Vite</span>
          </div>
          
          <p class="text-gray-700">
            This project uses Vite as its build tool, which provides:
          </p>
          
          <ul class="list-disc list-inside space-y-2 text-gray-600">
            <li>Lightning-fast development server</li>
            <li>Optimized production builds</li>
            <li>Hot Module Replacement (HMR)</li>
            <li>Native ESM support</li>
          </ul>
          
          <div class="mt-4 pt-4 border-t border-blue-100">
            <div class="flex items-center space-x-2">
              <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="font-medium">esbuild</span>
            </div>
            
            <p class="text-gray-700 mt-2">
              Powered by esbuild for:
            </p>
            
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Extremely fast bundling</li>
              <li>Minimal configuration</li>
              <li>TypeScript support out of the box</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ViteEsbuildDemoComponent {}
