import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../Model/product.model';
import { CommonModule } from '@angular/common';
import { AudioGearTextComponent } from '../audio-gear-text/audio-gear-text.component';
import { CategoryComponent } from '../category/category.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, AudioGearTextComponent, CategoryComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product: Product;
  productQuantity: number = 1;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pageName = params['name'];
      this.product = this.productService.GetProduct(pageName);
      console.log(params['name']);
    });
  }
  removeWordFromString(inputString: string, wordToRemove: string): string {
    // Create a regular expression to match the word to remove globally
    const regex = new RegExp('\\b' + wordToRemove + '\\b', 'gi');
    // Replace all occurrences of the word with an empty string
    return inputString.replace(regex, '');
  }
}
