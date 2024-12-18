export class FilterPresenter {
  constructor(filterView, transactionListPresenter) {
    this.filterView = filterView;
    this.transactionListPresenter = transactionListPresenter;
  }

  init() {
    this.filterView.render();

    this.filterView.setOnFilterChange(this.handleFilterChange.bind(this));
  }

  handleFilterChange(filters) {
    this.transactionListPresenter.filterTransactions(filters);
  }
}
