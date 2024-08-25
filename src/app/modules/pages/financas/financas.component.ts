import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { FinancasService } from '../../service/financas.service';
import { CreateFinancas } from '../../types/financas-create.type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-financas',
  standalone: true,
  imports: [
    PaginationComponent,
    RouterLink,
    HttpClientModule,
    CommonModule,
    FormsModule,
    PaginationComponent,
    NgxMaskDirective,
  ],
  templateUrl: './financas.component.html',
  styleUrl: './financas.component.css',
})
export class FinancasComponent implements OnInit {
  newFinancas: CreateFinancas = {
    nome: '',
    entradas: 0,
    saidas: 0,
  };
  success: boolean = false;
  erro: boolean = false;

  constructor(private financasService: FinancasService) {}
  ngOnInit(): void {}

  criarFinancas(): void {
    const saldo = this.newFinancas.entradas - this.newFinancas.saidas;

    this.newFinancas.saldo = saldo;

    console.log(this.newFinancas);
    this.financasService.create(this.newFinancas).subscribe(
      (response) => {
        console.log('Nova Finança criada com sucesso:', response);
        this.success = true;
        this.limpar();
        setTimeout(() => {
          this.success = false;
        }, 5000);
      },
      (error) => {
        console.error(`Erro ao cadastrar Finança: ${error}`);
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 5000);
      }
    );
  }

  limpar() {
    this.newFinancas = {
      nome: '',
      entradas: 0,
      saidas: 0,
    };
  }
}
