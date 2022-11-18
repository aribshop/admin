import { IGroup, ILine, IOrder, IProduct, ITag } from "./types";

const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://api-yboq3dpusa-uc.a.run.app/"
    : "http://localhost:3001";

const auth =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjoiZHNkIn0.YSDNYBsfLHcc20s7gT0_DjkTj8DmcQICurdz0NWtnIY";

export async function getLines(): Promise<ILine[]> {
  const response = await fetch(`${ENDPOINT}/chain/lines`, {
    credentials: "include",

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
  return data.orders;
}
