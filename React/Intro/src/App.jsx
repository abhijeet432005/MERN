const App = () => {

  //  js logics ....

  const btnCliked = () => {
    alert("mujhe bahut maara")
  }

  const handelparameter = (msg) => {
    alert(msg)
  }

  // const wrapper = () =>  handelparameter("batti")
  
  return (
    <>
      <div>Hello</div>
      <div>World</div>
      <button onClick={() =>  handelparameter("batti")}>Click 2</button>
      <button onClick={btnCliked}>Click</button>
    </>

  )
}

export default App;
export const x = "Hello";
export const y = "World";

// a function component will always return HTML 
//  we can not write anything after return 
// we can only return single data/entity/variable/value
//  there must be single return in a function and that must be the last statement