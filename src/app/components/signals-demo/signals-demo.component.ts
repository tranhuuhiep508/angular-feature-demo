import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals-demo',

  imports: [CommonModule],
  template: `
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Signals Demo</h2>

      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Counter with Signals</h3>

          <div class="flex items-center space-x-4 mb-4">
            <button
              (click)="decrement()"
              class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Decrement
            </button>

            <div class="text-2xl font-bold min-w-[3rem] text-center">
              {{ count() }}
            </div>

            <button
              (click)="increment()"
              class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Increment
            </button>
          </div>

          <div class="p-4 bg-blue-50 rounded-lg">
            <p class="text-blue-700">Double Count: {{ doubleCount() }}</p>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Effect Example</h3>
          <p class="text-gray-700 mb-4">
            The background color changes based on the counter value:
          </p>

          <div
            class="p-8 rounded-lg transition-colors duration-300"
            [class.bg-green-100]="count() > 0"
            [class.bg-red-100]="count() < 0"
            [class.bg-gray-100]="count() === 0"
          >
            <p class="text-center">Current Count: {{ count() }}</p>
          </div>
        </div>

        <div class="mt-6 pt-6 border-t border-gray-200">
          <h4 class="text-lg font-semibold mb-2">About Signals</h4>
          <p class="text-gray-600">
            This component demonstrates Angular's new Signals API, which
            provides:
          </p>
          <ul class="list-disc list-inside mt-2 text-gray-600">
            <li>Reactive state management with signals</li>
            <li>Computed values with computed()</li>
            <li>Side effects with effect()</li>
            <li>Fine-grained reactivity</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SignalsDemoComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    // Effect to log count changes
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }
}
