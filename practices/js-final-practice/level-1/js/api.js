const BASE_URL = "http://localhost:4000/expenses";

/**
 * 모든 지출 목록을 가져옵니다.
 * - GET 요청을 보내세요
 * - 응답을 JSON으로 파싱하여 반환하세요
 *
 * @returns {Promise<Array>} 지출 목록 배열
 */
export async function getExpenses() {
  // TODO: fetch를 사용하여 GET 요청을 보내고, 결과를 반환하세요
  const res = await fetch(BASE_URL);
  const expenses = await res.json();
  // console.log("get expenses => ", expenses);

  return expenses;
}

/**
 * 새로운 지출을 추가합니다.
 * - POST 요청을 보내세요
 * - headers에 'Content-Type': 'application/json'을 설정하세요
 * - body에 expenseData를 JSON 문자열로 변환하여 전달하세요
 *
 * @param {Object} expenseData - { date, category, description, amount }
 * @returns {Promise<Object>} 생성된 지출 객체
 */
export async function createExpense(expenseData) {
  console.log(expenseData);

  // TODO: fetch를 사용하여 POST 요청을 보내고, 결과를 반환하세요
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expenseData),
  });
  const created = await res.json();
  console.log(created);

  return created;
}

/**
 * 지출을 삭제합니다.
 * - DELETE 요청을 보내세요
 * - URL에 id를 포함하세요 (예: `${BASE_URL}/${id}`)
 *
 * @param {number} id - 삭제할 지출의 id
 * @returns {Promise<Object>} 삭제 응답
 */
export async function deleteExpense(id) {
  // TODO: fetch를 사용하여 DELETE 요청을 보내고, 결과를 반환하세요

  // console.log(id);
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  const deleted = res.json();

  return deleted;
}
