import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;
  @Input() nexPage: boolean = false;
  @Input() previousPage: boolean = true;

  @Output() nextPage = new EventEmitter<void>();
  @Output() prevPage = new EventEmitter<void>();

  constructor() { }

  onNextPage() {
    this.nextPage.emit();
  }

  onPrevPage() {
    this.prevPage.emit();
  }
}
