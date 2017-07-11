export class Customer {
    constructor(
        public customerName: string,
        public customerAddress: string,
        public customerPostalCode: string,
        public customerCity: string,
        public customerEmailAddress: string,
        public customerId?: (number)
  ){}
};