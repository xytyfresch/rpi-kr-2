import { TransactionModel } from "../models/transaction-model.js";
export class TransactionListPresenter {
  constructor(transactionListView, transactionsData, balancePresenter) {
    this.transactionListView = transactionListView;

    this.transactions = transactionsData.map(
      (transaction) => new TransactionModel(transaction)
    );

    this.filteredTransactions = [...this.transactions];

    this.balancePresenter = balancePresenter;

    this.transactionListView.onDelete = this.handleDeleteTransaction.bind(this);
  }

  init() {
    this.transactionListView.render(this.filteredTransactions);
    this.balancePresenter.updateBalance(); 
  }

  addTransaction(transaction) {
    const newTransaction = new TransactionModel(transaction);
    this.transactions.push(newTransaction);

    this.applyFilter();
    this.transactionListView.render(this.filteredTransactions);

    this.balancePresenter.updateBalance();
  }

  handleDeleteTransaction(transactionId) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    this.applyFilter();
    this.transactionListView.render(this.filteredTransactions);

    this.balancePresenter.updateBalance();
  }

  applyFilter(filter = {}) {
    const { type, category } = filter;

    this.filteredTransactions = this.transactions.filter((transaction) => {
      let matchesType = true;
      let matchesCategory = true;

      if (type) {
        matchesType = transaction.type === type;
      }

      if (category) {
        matchesCategory = transaction.category === category;
      }

      return matchesType && matchesCategory;
    });
  }

  filterTransactions(filter) {
    this.applyFilter(filter);
    this.transactionListView.render(this.filteredTransactions);
  }

  getTotalBalance() {
    return this.transactions.reduce((total, transaction) => {
      return transaction.type === "income"
        ? total + transaction.amount
        : total - transaction.amount;
    }, 0);
  }
}
