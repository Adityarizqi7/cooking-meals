import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcumb',
  imports: [],
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss'
})
export class BreadcumbComponent implements OnInit {

  constructor(
      private router: Router
  ) {}

  ngOnInit(): void {
    this.currentPageChange()
  }

  @Output() currentPage = new EventEmitter<string>()

  currentPageChange() {
    this.currentPage.emit('Detail Ingredient')
  }

  backToHome() {
      this.router.navigate(['/'])
  }
}
