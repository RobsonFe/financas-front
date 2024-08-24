import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FinancasService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/financas/';
  constructor(private http: HttpClient) {}
}
