export class TransactionModel {
  constructor({ id, type, category, amount }) {
    this.id = id;
    this.type = type;
    this.category = category;
    this.amount = parseFloat(amount);
  }
}
