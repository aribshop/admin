import { headers } from "next/headers";
import {
  IChain,
  IClient,
  IConfirmation,
  ICustomProduct,
  IGroup,
  ILine,
  IOrder,
  IProduct,
  IStandardProduct,
  ITag,
} from "./types";

const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://api-yboq3dpusa-uc.a.run.app/"
    : "http://localhost:3001";

const auth =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjoiZHNkIn0.YSDNYBsfLHcc20s7gT0_DjkTj8DmcQICurdz0NWtnIY";

export async function getLines(auth: string): Promise<ILine[]> {
  const response = await fetch(`${ENDPOINT}/chain/lines`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });

  const data = await response.json();
  return data.lines;
}

export async function getGroups(): Promise<IGroup[]> {
  const response = await fetch(`${ENDPOINT}/chain/groups`, {
    credentials: "include",
  });

  const data = await response.json();
  return data.groups;
}

export async function getTags(): Promise<ITag[]> {
  const response = await fetch(`${ENDPOINT}/chain/tags`, {
    credentials: "include",
  });

  const data = await response.json();
  return data.tags;
}

export async function getProducts(siteId: string): Promise<IProduct[]> {
  const response = await fetch(`${ENDPOINT}/site/products/${siteId}`);
  const data = await response.json();
  return data.products;
}

export async function getOrders(lineId: string): Promise<IOrder[]> {
  const response = await fetch(`${ENDPOINT}/chain/orders/${lineId}`, {
    credentials: "include",
  });

  const data = await response.json();
  return data.orders.map((order: any) => ({
    ...order,
    date: new Date(order.date),
    lastUpdated: new Date(order.lastUpdated),
  }));
}

export async function getOrderConfirmations(
  orderId: string
): Promise<IConfirmation[]> {
  const response = await fetch(
    `${ENDPOINT}/chain/order/confirmations/${orderId}`,
    {
      credentials: "include",
    }
  );

  const data = await response.json();
  return data.confirmations.map((confirmation: any) => ({
    ...confirmation,
    date: new Date(confirmation.date),
  }));
}

// get product from id
export async function getProduct(id: string): Promise<IProduct> {
  const response = await fetch(`${ENDPOINT}/site/product/${id}`, {
    credentials: "include",
  });

  const data = await response.json();
  return data.product;
}

// get client from ClientID
export async function getClient(id: string): Promise<IClient> {
  const response = await fetch(`${ENDPOINT}/users/client/${id}`, {
    credentials: "include",
  });

  const data = await response.json();
  return {
    ...data.client,
    created: new Date(data.client.created),
  };
}

// get chain
export async function getChain(token: string): Promise<IChain> {
  const response = await fetch(`${ENDPOINT}/chain`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });

  const data = await response.json();
  return data.chain;
}
