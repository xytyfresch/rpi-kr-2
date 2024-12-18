import { TRANSACTIONS_DATA } from "./mocks/transactions-data.js";
import { TransactionListView } from "./views/transaction-list-view.js";
import { TransactionFormView } from "./views/transaction-form-view.js";
import { FilterView } from "./views/filter-view.js";
import { BalanceView } from "./views/balance-view.js";
import { TransactionListPresenter } from "./presenters/transaction-list-presenter.js";
import { TransactionFormPresenter } from "./presenters/transaction-form-presenter.js";
import { FilterPresenter } from "./presenters/filter-presenter.js";
import { BalancePresenter } from "./presenters/balance-presenter.js";

const transactionListView = new TransactionListView();
const transactionFormView = new TransactionFormView();
const filterView = new FilterView();
const balanceView = new BalanceView();

const transactionListPresenter = new TransactionListPresenter(
  transactionListView,
  TRANSACTIONS_DATA
);
transactionListPresenter.init();

const transactionFormPresenter = new TransactionFormPresenter(
  transactionFormView,
  transactionListPresenter
);
transactionFormPresenter.init();

const filterPresenter = new FilterPresenter(
  filterView,
  transactionListPresenter
);
filterPresenter.init();

const balancePresenter = new BalancePresenter(
  balanceView,
  transactionListPresenter
);
balancePresenter.init();
