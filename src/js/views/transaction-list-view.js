export class TransactionListView {
  constructor() {
    this.transactionsListElement = document.getElementById("transactions-list");
    this.onDelete = null;
  }

  render(transactions) {
    this.transactionsListElement.innerHTML = "";

    transactions.forEach((transaction) => {
      const transactionElement = document.createElement("div");

      transactionElement.classList.add("transaction", transaction.type);

      transactionElement.innerHTML = `
        <p>${transaction.category} (${transaction.type}): ${transaction.amount} руб.</p>
        <button class="delete-btn" data-id="${transaction.id}">Удалить</button>
      `;

      this.transactionsListElement.appendChild(transactionElement);

      const deleteButton = transactionElement.querySelector(".delete-btn");
      deleteButton.addEventListener("click", () => {
        if (this.onDelete) this.onDelete(transaction.id);
      });
    });
  }
}
