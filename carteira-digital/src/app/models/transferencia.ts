export interface Transferencia {
    id?: number;
    contaOrigem: string;
    contaDestino: string;
    valor: number;
    taxa?: number;
    dataTransferencia: string;
    dataAgendamento?: string;
  }