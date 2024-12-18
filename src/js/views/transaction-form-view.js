export class TransactionFormView {
  constructor() {
    this.formContainer = document.getElementById("form-container");
  }

  render() {
    const formElement = document.createElement("div");
    formElement.classList.add("form-container");

    formElement.innerHTML = `
        <form id="transaction-form">
          <select id="type" required>
            <option value="">Выберите тип операции</option>
            <option value="income">Доход</option>
            <option value="expense">Расход</option>
          </select>
  
          <select id="category" required>
            <option value="">Выберите категорию</option>
            <option value="salary">Зарплата</option>
            <option value="food">Еда</option>
            <option value="transport">Транспорт</option>
            <option value="entertainment">Развлечения</option>
          </select>
  
          <input type="number" id="amount" placeholder="Сумма" required />
  
          <button type="submit">Добавить операцию</button>
        </form>
      `;

    this.formContainer.appendChild(formElement);

    this.formElement = document.getElementById("transaction-form");
    this.typeInput = document.getElementById("type");
    this.categoryInput = document.getElementById("category");
    this.amountInput = document.getElementById("amount");
  }

  getFormData() {
    return {
      type: this.typeInput.value,
      category: this.categoryInput.value,
      amount: parseFloat(this.amountInput.value),
    };
  }

  clearForm() {
    this.typeInput.value = "";
    this.categoryInput.value = "";
    this.amountInput.value = "";
  }

  setOnSubmit(callback) {
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      callback(this.getFormData());
    });
  }
}
