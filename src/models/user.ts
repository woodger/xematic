type IGroup = 'admin' | 'author' | 'guest';

interface IProduct {
  id: number,
  price: number,
  description: string | null
}

interface IOrder {
  id: number,
  product: IProduct,
  description: string | null
}

export interface IUser {
  id?: number,
  firstName?: string | null,
  lastName?: string | null,
  email: boolean,
  passwd: string,
  groups: IGroup[],
  orders?: IOrder[],
  createdAt?: Date,
  modifiedAt?: Date
}
