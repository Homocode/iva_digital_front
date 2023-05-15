export interface ICliente {
  cuit: string;
  razonSocial: string;
}

export interface IClienteState {
  selectedCliente: ICliente | null;
  isSelected: boolean;
}

export interface IComprobanteCompra {
  fechaEmision: string;
  mesImputacion: string;
  tipoComprobante: string;
  numeroComprobante: string;
  nombreProveedor: string;
  cuitProvedor: string;
  total: number;
  toalNetosGravados: number;
  totalIva: number;
  ConceptosExentosNoGravados: number;
  percepcionesIva: number;
  percepcionesIibb: number;
}
