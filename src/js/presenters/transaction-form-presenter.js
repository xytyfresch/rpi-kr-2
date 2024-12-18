export class TransactionFormPresenter {
  constructor(transactionFormView, transactionListPresenter) {
    this.transactionFormView = transactionFormView;
    this.transactionListPresenter = transactionListPresenter;
  }

  init() {
    this.transactionFormView.render();
  }
}
