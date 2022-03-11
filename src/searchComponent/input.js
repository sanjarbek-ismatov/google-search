function Input(props) {
  return (
    <>
      <input
        type="search"
        onChange={(e) => {
          props.setText(e.target.value);
          console.log(props.text);
        }}
      />
    </>
  );
}
export default Input;
