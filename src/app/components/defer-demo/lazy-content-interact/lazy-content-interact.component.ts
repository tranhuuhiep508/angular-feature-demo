import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-content-interact',
  template: ` <div class="bg-green-100 p-4 rounded-lg h-[400px]">
    <h3 class="text-xl font-semibold mb-2">Lazy Loaded Content</h3>
    <p>Content will load soon</p>
    <img
      src="https://picsum.photos/400/300"
      alt="Random image"
      class="mt-4 rounded-lg shadow-lg"
    />
  </div>`,
})
export class LazyContentInteractComponent {}
