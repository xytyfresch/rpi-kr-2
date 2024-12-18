export class FilterView {
  constructor() {
    this.filtersContainer = document.getElementById("filters-container");
  }

  render() {
    const filtersElement = document.createElement("div");

    filtersElement.classList.add("filters");

    filtersElement.innerHTML = `
        <h2>Фильтры</h2>
        <select id="type-filter">
          <option value="">Все операции</option>
          <option value="income">Доходы</option>
          <option value="expense">Расходы</option>
        </select>
  
        <select id="category-filter">
          <option value="">Все категории</option>
          <option value="salary">Зарплата</option>
          <option value="food">Еда</option>
          <option value="transport">Транспорт</option>
          <option value="entertainment">Развлечения</option>
        </select>
      `;

    this.filtersContainer.appendChild(filtersElement);

    this.typeFilter = document.getElementById("type-filter");
    this.categoryFilter = document.getElementById("category-filter");
  }

  getFilters() {
    return {
      type: this.typeFilter.value,
      category: this.categoryFilter.value,
    };
  }

  setOnFilterChange(callback) {
    this.typeFilter.addEventListener("change", () => callback(this.getFilters()));
    this.categoryFilter.addEventListener("change", () => callback(this.getFilters()));
  }
}
