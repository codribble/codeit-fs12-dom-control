export default function renderExpenseList(datas, keyword = "") {
  const expenseList = document.getElementById("expense-list");

  expenseList.innerHTML = "";

  if (datas.length > 0) {
    datas.forEach((data) => {
      const li = document.createElement("li");
      const info = document.createElement("div");
      const main = document.createElement("div");
      const sub = document.createElement("div");
      const btnGroup = document.createElement("div");
      const deleteBtn = document.createElement("button");
      const editBtn = document.createElement("button");

      li.dataset.id = data.id;
      deleteBtn.textContent = "삭제";
      deleteBtn.classList.add("btn-delete");
      editBtn.textContent = "수정";
      editBtn.classList.add("btn-edit");

      btnGroup.classList.add("btn-group");
      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(deleteBtn);

      info.classList.add("expense-item");

      const expenseDate = document.createElement("span");
      const category = document.createElement("span");
      const item = document.createElement("p");
      const price = document.createElement("p");

      expenseDate.classList.add("expense-date");
      expenseDate.textContent = data.date;
      category.classList.add("item-category");
      category.textContent = data.category;
      item.classList.add("item-title");
      item.textContent = data.description;
      price.classList.add("item-price");
      price.textContent = data.amount.toLocaleString();

      main.appendChild(item);
      main.appendChild(price);
      sub.appendChild(category);
      sub.appendChild(expenseDate);

      info.appendChild(sub);
      info.appendChild(main);
      li.appendChild(info);
      li.appendChild(btnGroup);

      expenseList.appendChild(li);
    });
  } else {
    expenseList.innerHTML = `<p class="empty-list">'${keyword || ""}' 분류로 검색된 지출 내역이 없습니다.</p>`;
  }

  return expenseList;
}
