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

// todo check id this pattren is good, we are creating two types of the same thing execept the ID!!, i think the frontend should create the id, since we are doing this in some routes!!

export interface INewGroup {
  site: string;
  name: string;
  viewOnly: boolean;
}

export interface ITag {
  id: string;
  name: string;
  description: string;
}

export interface INewTag {
  name: string;
  description: string;
  site: string;
}

export interface ICustomProduct {
  id: string;
  metadata: {
    name: string;
    description: string;
    tag: string[];
  };
  isCustom: true;
  dailyLimit: number;
  form: {
    version: number;
    lastUpdated: string;
    fields: any[]; // todo add type
  };
  isPaused: boolean;
}

export interface IStandardProduct {
  id: string;
  metadata: {
    name: string;
    description: string;
    tag: string[];
  };
  isCustom: false;
  price: number;
  quantity: number;
  discount: number;
  picture: string;
  isPaused: boolean;
}

export type IProduct = ICustomProduct | IStandardProduct;

export interface IOrder {
  client: string;
  id: string;
  line: string;
  price: number;
  product: string;
  site: string;
  status: string;
  productValue: any;
  date: Date;
  lastUpdated: Date;
}

export interface IConfirmation {
  id: string;
  type: string;
  group?: string;
  user?: string;
  line: string;
  order: string;
  src?: string;
  date: Date;
}

export interface IUnConfirmed {
  orderId: string;
  confirmationTypes: "verification"[];
  nextLine: string;
  title: string;
  currentLine: string;
}

export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  created: Date;
  location: string;
}

export interface IStuff {
  id: string;
  name: string;
  picture: string;
  groups: string[];
  site: string;
  isAdmin: boolean; // one attribute to distinguache between the Admin and Stuff
}

export interface IChain {
  id: string;
  name: string;
  site: string;
  lines: ILine[];
  members: number;
}

export interface IProductDetails {
  product: IProduct;
  link: string;
  customers: number;
}

export interface ITemplate {
  id: string;
  name: string;
  description: string;
  previewOG: string;
  type: string;
}

export interface INewWesbite {
  site: {
    name: string;
    description: string;
    subname: string;
  };

  template: {
    name: string;
    description: string;
    type: string;
    previewOG: string; // todo don't allow user to insert this!!!
  };
}

export interface IWebsite {
  name: string;
  description: string;
  subname: string;
  user: string;
  template: {
    id: string;
    type: string;
    name: string;
    description: string;
    previewOG: string;
  };
}

export interface INewLine {
  name: string;
  maxOrders: number;
  isPublic: boolean;
  next?: string;
  expiresTime: number;
  site: string;
  confirmations: string[];
}
