import { IGroup, ILine, IOrder, IProduct, ITag } from "./types";

const ENDPOINT = "http://localhost:3001";

const auth =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyIjoiZHNkIn0.YSDNYBsfLHcc20s7gT0_DjkTj8DmcQICurdz0NWtnIY";

export async function getLines(): Promise<ILine[]> {
  const response = await fetch(`${ENDPOINT}/chain/lines`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  });

  const data = await response.json();
  return data.lines;
}

export async function getGroups(): Promise<IGroup[]> {
  const response = await fetch(`${ENDPOINT}/chain/groups`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  });

  const data = await response.json();
  return data.groups;
}

export async function getTags(): Promise<ITag[]> {
  const response = await fetch(`${ENDPOINT}/chain/tags`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
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
    headers: {
      Authorization: "Bearer " + auth,
    },
  });

  const data = await response.json();
  return data.orders;
}
