import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'electronics' | 'clothing' | 'books';
  inStock: boolean;
}

@Component({
  selector: 'app-control-flow-demo',
  imports: [CommonModule],
  templateUrl: './control-flow-demo.component.html',
  styles: [],
})
export class ControlFlowDemoComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      category: 'electronics',
      inStock: true,
    },
    {
      id: 2,
      name: 'T-Shirt',
      price: 19.99,
      category: 'clothing',
      inStock: true,
    },
    {
      id: 3,
      name: 'JavaScript Book',
      price: 29.99,
      category: 'books',
      inStock: false,
    },
    {
      id: 4,
      name: 'Smartphone',
      price: 699.99,
      category: 'electronics',
      inStock: true,
    },

    { id: 5, name: 'Jeans', price: 49.99, category: 'clothing', inStock: true },
  ];
}
