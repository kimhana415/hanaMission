export async function FetchTodos() {
  console.log('FetchTodos() 실행됨!');
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');

  console.log('API 통신 실행됨!');
  if (!response.ok) {
    throw new Error('데이터를 불러오기 실패입니다!');
  }

  const data = await response.json();
  console.log(data);
  return data;
}
