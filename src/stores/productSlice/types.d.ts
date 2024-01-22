export interface IProducts {
  id: string;
  name: string;
  brand: string;
  quantity: number;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  quantidy: number;
}

export interface IProductState {
  products: IProducts[];
}
