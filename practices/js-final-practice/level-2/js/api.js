const BASE_URL = "http://localhost:4000/expenses";

export async function getDatas(id = "") {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
}

export async function createData(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function editData(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function deleteData(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}

// export async function filterDatas(category) {
//   const datas = await getDatas();
//   const filteredDatas = datas.filter((data) => data.category === category);

//   return filteredDatas;
// }
