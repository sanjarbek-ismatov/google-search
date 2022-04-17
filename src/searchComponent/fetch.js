export var temp;
export async function FetchFunc(text) {
  var state;
  temp = text;

  await fetch(temp)
    .then((res) => res.json())
    .then((data) => {
      state = data;
    })
    .catch((error) => {});
  return state;
}
