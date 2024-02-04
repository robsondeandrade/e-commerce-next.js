export interface IProducts {
  id: string;
  title: string;
  brand: string;
  quantity: number;
  description: string;
  thumbnail: string;
  price: number;
  available_quantity: number;
}

export interface IProductState {
  products: IProducts[];
}
