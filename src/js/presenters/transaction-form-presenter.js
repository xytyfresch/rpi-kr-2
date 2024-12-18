export class TransactionFormPresenter {
  constructor(transactionFormView, transactionListPresenter) {
    this.transactionFormView = transactionFormView;
    this.transactionListPresenter = transactionListPresenter;
  }

  init() {
    this.transactionFormView.render();
    this.transactionFormView.setOnSubmit(this.handleFormSubmit.bind(this));
  }

  handleFormSubmit(transactionData) {
    this.transactionListPresenter.addTransaction(transactionData);

    this.transactionFormView.clearForm();
  }
}
