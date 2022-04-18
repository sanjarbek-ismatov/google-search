export var temp;
export async function FetchFunc(text) {
  var state;
  temp = text;

  await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyBbFGoK91L85xUu9ONymejA1ecQPAVN8gM&cx=344518b235096fb90&q=${temp}`
  )
    .then((res) => res.json())
    .then((data) => {
      state = data;
    })
    .catch((error) => {});
  return state;
}
