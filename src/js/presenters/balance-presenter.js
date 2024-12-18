export class BalancePresenter {
  constructor(balanceView) {
    this.balanceView = balanceView;
    this.transactionListPresenter = null;
  }

  setTransactionListPresenter(transactionListPresenter) {
    this.transactionListPresenter = transactionListPresenter;
  }

  init() {
    this.updateBalance();
  }

  updateBalance() {
    if (!this.transactionListPresenter) return;

    const totalBalance = this.transactionListPresenter.getTotalBalance();
    this.balanceView.render(totalBalance);
  }
}
