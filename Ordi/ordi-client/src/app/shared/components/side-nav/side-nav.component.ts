import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit {

  constructor(private categoryService: CategoryService, private cdr: ChangeDetectorRef) { }

  categories$ !: Observable<any>
  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    this.cdr.detectChanges();
    
  }
}
