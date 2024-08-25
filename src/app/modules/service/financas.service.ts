import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CreateFinancas } from '../types/financas-create.type';
import { Observable } from 'rxjs';
import { UpdateFinancas } from '../types/financas-update.type';
import { Financas } from '../types/financas.type';

@Injectable({
  providedIn: 'root',
})
export class FinancasService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/financas';
  constructor(private http: HttpClient) {}

  // Criar Finanças
  create(financasCreate: CreateFinancas): Observable<any> {
    return this.http.post(`${this.apiUrl}/create/`, financasCreate);
  }

  //Atualizar Finanças
  update(id: string, updateFinancas: UpdateFinancas): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updateFinancas);
  }

  // Encontrar Finanças
  findById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/update/${id}`);
  }

  // Deletar Finanças
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Encontrar todas as Finanças
  findAll(
    page: number,
    pageSize: number
  ): Observable<{
    result: Financas[];
    count: number;
    page: number;
    limit: number;
  }> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<{
      result: Financas[];
      count: number;
      page: number;
      limit: number;
    }>(`${this.apiUrl}/list`, { params });
  }
}
