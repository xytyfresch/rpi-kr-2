export class FilterPresenter {
  constructor(filterView, transactionListPresenter) {
    this.filterView = filterView;
    this.transactionListPresenter = transactionListPresenter;
  }

  init() {
    this.filterView.render();
  }
}
