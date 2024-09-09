import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaginationService } from '../../service/pagination.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../../home/home.component';
import { Financas } from '../../types/financas.type';
import { UpdateFinancas } from '../../types/financas-update.type';
import { FinancasService } from '../../service/financas.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ModalComponent,
    PaginationComponent,
    FormsModule,
    RouterLink,
    HomeComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  financas: Financas[] = [];
  financasDetails: Financas | null = null;
  financasToUpdate: UpdateFinancas = {
    id: '',
    nome: '',
    entradas: 0,
    saidas: 0,
  };
  financasToDelete: Financas | null = null;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  success: boolean = false;
  deletou: boolean = false;
  error: string = '';

  constructor(
    private financasServce: FinancasService,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.paginationService.currentPage$.subscribe((page) => {
        console.log('Página atual:', page);
        this.listFinancas(page, 5);
      })
    );

    this.subscriptions.push(
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.loadFinancasDetails(id);
        }
      })
    );
  }

  listFinancas(page: number, pageSize: number): void {
    this.financasServce.findAll(page, pageSize).subscribe((response: any) => {
      console.log('Resposta completa da API:', response);
      console.log('Tipo de response:', typeof response);
      console.log('Conteúdo de response:', response);
      if (response && response.results) {
        this.financas = response.results || [];
        console.log('Load Finanças:', this.financas);
      } else {
        console.error('Nenhum resultado encontrado.');
      }
    });
  }

  loadFinancasDetails(id: string): void {
    this.financasServce.findById(id).subscribe((details: Financas) => {
      this.financasDetails = details;
      this.financasToUpdate = { ...details };
    });
  }

  UpdateFinancas(): void {
    console.log('Método updateFinanças chamado');
    console.log('ID da Finança a ser atualizado:', this.financasToUpdate.id);
    console.log('Dados da finança a ser atualizado:', this.financasToUpdate);
    if (this.financasToUpdate.id) {
      console.log('Atualizando livro com:', this.financasToUpdate);
      this.financasServce
        .update(this.financasToUpdate.id, this.financasToUpdate)
        .subscribe(
          (response) => {
            console.log('Resposta da atualização:', response);
            this.success = true;
            this.listFinancas(1, 5);
            this.loadFinancasDetails(this.financasToUpdate.id);
            this.closeEditModal();
            setTimeout(() => (this.success = false), 3000);
          },
          (error) => {
            this.error = 'Erro ao atualizar a finança';
            console.error('Erro ao atualizar a finança:', error);
          }
        );
    }
  }

  confirmDelete(): void {
    console.log('Finança a ser removida:', this.financasToDelete);
    if (this.financasToDelete && this.financasToDelete.id) {
      this.financasServce.delete(this.financasToDelete.id).subscribe(
        () => {
          this.deletou = true;
          console.log('Finança removida com sucesso!');
          this.listFinancas(1, 5); // Recarregar a lista após remoção
          this.closeDeleteModal();
          setTimeout(() => (this.deletou = false), 3000);
        },
        (error) => {
          this.error = 'Erro ao remover a Finança';
          console.error('Erro ao remover a Finança:', error);
        }
      );
    } else {
      console.error('ID da finança é inválido ou não definido');
    }
  }

  openEditModal(financas: Financas): void {
    this.financasToUpdate = { ...financas };
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  openDeleteModal(financas: Financas): void {
    this.financasToDelete = { ...financas };
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
