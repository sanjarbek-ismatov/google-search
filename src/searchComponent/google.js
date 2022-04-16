import React, { useEffect, useState } from "react";
import { temp, FetchFunc } from "./fetch";
function Google() {
  const [array, setArray] = useState([]);
  var firstData;
  useEffect(() => {
    firstData = FetchFunc(temp);

    firstData.then((data) => {
      setArray(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <input type="text" />

      {/* <ul>{array && array.items.map((element) => console.log(element))}</ul> */}
    </>
  );
}

export default Google;
