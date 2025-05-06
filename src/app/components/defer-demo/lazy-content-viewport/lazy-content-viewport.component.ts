import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-content-viewport',
  template: ` <div class="bg-purple-100 p-4 rounded-lg mt-8">
    <h3 class="text-xl font-semibold mb-2">Viewport Triggered Content</h3>
    <p>This content loads when it becomes visible in the viewport!</p>
    <img
      src="https://picsum.photos/400/300"
      alt="Random image"
      class="mt-4 rounded-lg shadow-lg"
    />
  </div>`,
})
export class LazyContentViewportComponent {}
