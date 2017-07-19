export class ProductOrder {
  constructor(
  public productId: number,
  public productName: string,
  public productPrice: number,
  public totalPrice: number,
  public quantity: number,
  public orderId?: (number)
  ){}
};