export interface ICondition {
  id?: number,
  createdate?: Date,
  label?: string,
  description?: string,
  tooltip?: string,
  image?:  string,
  limit?: number,
  price?: number
}

export enum Condition {
  Blower = "pump",
  Basket = "basket",
  Delivery = "delivery"
}