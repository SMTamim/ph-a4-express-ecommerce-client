export type TProductProperty = {
  icon: React.ReactNode;
  title: string;
};

export type TUIProduct = {
  _id?: string;
  imageURL: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  reviewCount: number;
  productLink: string;
  productProperties: TProductProperty[];
};

export interface IProduct {
  _id?: string;
  name: string;
  brand: string;
  price: number;
  model: string;
  stock: number;
  description: string;
  category: string;
  images: string[];
  specifications: ISpecifications;
}

export interface ISpecifications {
  seatingCapacity: number;
  fuelType: string;
  mileage: string;
  hasAC: boolean;
  availableColors: string[];
}
