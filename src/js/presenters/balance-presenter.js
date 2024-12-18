export class BalancePresenter {
    constructor(balanceView, transactionListPresenter) {
      this.balanceView = balanceView;
      this.transactionListPresenter = transactionListPresenter;
    }
  
    init() {
      this.balanceView.render();
    }
  }
  