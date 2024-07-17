type Warehouse = {
  id: string;
  productId: string;
  quantity: number;
  position: string;
  importDate: string | Date;  
  exportDate: string | Date;
  deleteAt: string | Date;
}

export {type Warehouse};