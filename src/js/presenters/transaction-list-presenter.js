import { TransactionModel } from "../models/transaction-model.js";
export class TransactionListPresenter {
  constructor(transactionListView, transactionsData, balancePresenter) {
    this.transactionListView = transactionListView;
    this.transactions = transactionsData.map(
      (transaction) => new TransactionModel(transaction)
    );
    this.balancePresenter = balancePresenter;
    this.transactionListView.onDelete = this.handleDeleteTransaction.bind(this);
  }

  init() {
    this.transactionListView.render(this.transactions);
    this.balancePresenter.updateBalance(); 
  }

  addTransaction(transaction) {
    const newTransaction = new TransactionModel(transaction);
    this.transactions.push(newTransaction);
    this.transactionListView.render(this.transactions);
    this.balancePresenter.updateBalance();
  }

  handleDeleteTransaction(transactionId) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    this.transactionListView.render(this.transactions);
    this.balancePresenter.updateBalance();
  }

  getTotalBalance() {
    return this.transactions.reduce((total, transaction) => {
      return transaction.type === "income"
        ? total + transaction.amount
        : total - transaction.amount;
    }, 0);
  }
}
