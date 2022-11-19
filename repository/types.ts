export interface ILine {
  id: string;
  name: string;
  groups: string[];
  maxOrders: number;
  isPublic: boolean;
  next?: string;
  expiresTime: number;
  confirmations: string[];
}

export interface IGroup {
  id: string;
  name: string;
  users: string[];
  tag: string[];
  viewOnly: boolean;
  site: string;
}

export interface ITag {
  id: string;
  name: string;
  description: string;
}

export interface IProduct {
  id: string;
  metadata: {
    name: string;
    description: string;
    tag: string[];
  };
  picture?: string;
}

export interface IOrder {
  user: string;
  id: string;
  line: string;
  price: number;
  product: string;
  site: string;
  status: string;
  date: Date;
  lastUpdated: Date;
}

export interface IConfirmation {
  id: string;
  date: Date;
  line: string;
  order: string;
  type: string;
  user: string;
}

export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  created: Date;
  location: string;
}
