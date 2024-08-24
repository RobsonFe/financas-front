import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../service/pagination.service';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { FinancasService } from '../../service/financas.service';
import { Financas } from '../../types/financas.type';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, NgFor, NgForOf],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  financas: Financas[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 5;
  pageNumbers: number[] = [];

  constructor(
    private paginationService: PaginationService,
    private financasService: FinancasService
  ) {}

  ngOnInit(): void {
    this.paginationService.currentPage$.subscribe((page) => {
      this.currentPage = page;
      this.loadFinancas();
    });
  }

  loadFinancas(): void {
    this.financasService
      .findAll(this.currentPage, this.pageSize)
      .subscribe((response) => {
        this.financas = response.result || [];
        this.totalPages = Math.ceil(response.count / this.pageSize);
        this.pageNumbers = Array.from(
          { length: this.totalPages },
          (_, i) => i + 1
        );
      });
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
      this.paginationService.setCurrentPage(page);
    }
  }
}
