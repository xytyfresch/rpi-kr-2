import { TransactionModel } from "../models/transaction-model.js";

export class TransactionListPresenter {
  constructor(transactionListView, transactionsData) {
    this.transactionListView = transactionListView;

    this.transactions = transactionsData.map(
      (transaction) => new TransactionModel(transaction)
    );
  }

  init() {
    this.transactionListView.render(this.transactions);
  }
}
