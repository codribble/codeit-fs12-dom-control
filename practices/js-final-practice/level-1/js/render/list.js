/**
 * 지출 목록을 화면에 렌더링합니다.
 * - #expense-list (tbody)에 지출 항목들을 <tr>로 렌더링하세요
 * - 각 행에 날짜, 카테고리, 설명, 금액, 삭제 버튼을 포함하세요
 * - 삭제 버튼에는 data-id 속성으로 해당 지출의 id를 저장하세요
 * - 삭제 버튼의 class는 "btn-delete"로 설정하세요
 *
 * 힌트:
 * - innerHTML이나 insertAdjacentHTML을 사용하세요
 * - 금액은 toLocaleString()으로 천단위 구분자를 추가하면 좋습니다
 *
 * @param {Array} expenses - 지출 객체 배열
 */
export function renderExpenses(expenses) {
  const tbody = document.getElementById("expense-list");
  // TODO: tbody에 지출 목록을 렌더링하세요

  // console.log("render expenses => ", expenses);
  // ADD: 삭제 td 까지 한번에 해결하기 위해 id 를 맨 뒤로 보내는 작업을 map으로 처리함
  const reordered = expenses.map(({ id, ...rest }) => ({
    ...rest,
    id,
  }));
  // console.log(reordered);

  reordered.forEach((item) => {
    // console.log(item);
    const tr = document.createElement("tr");

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.textContent = "삭제";

    Object.entries(item).forEach(([key, value]) => {
      // console.log(key, value);

      const td = document.createElement("td");
      if (key === "id") {
        btnDelete.dataset.id = value;
        td.appendChild(btnDelete);
      } else {
        td.textContent = key === "amount" ? value.toLocaleString() : value; // 금액인 경우 천단위 콤마
      }
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}
