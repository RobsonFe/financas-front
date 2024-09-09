export interface UpdateFinancas {
  id: string;
  nome: string;
  entradas: number;
  saidas: number;
  saldo?: number;
}
