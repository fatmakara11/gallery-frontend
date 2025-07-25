import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from '../services/category';

@Component({
  selector: 'app-component-dashboard',
  templateUrl: './component-dashboard.html',
  styleUrls: ['./component-dashboard.scss'],
  standalone:false
})
export class ComponentDashboard implements OnInit {

  categories: Category[] = [];
  newCategoryName: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: data => this.categories = data,
      error: err => console.error('Kategori çekme hatası:', err)
    });
  }

  addCategory(): void {
    if (!this.newCategoryName.trim()) {
      alert('Kategori adı boş olamaz!');
      return;
    }
    const newCategory: Category = { name: this.newCategoryName };
    this.categoryService.saveCategory(newCategory).subscribe({
      next: () => {
        this.newCategoryName = '';
        this.loadCategories();
      },
      error: err => console.error('Kategori ekleme hatası:', err)
    });
  }
}
