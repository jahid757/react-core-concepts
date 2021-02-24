// import logo from './logo.svg';
import './App.css';

function App() {

  const names =['Jahid Hasan','Hasan','Niloy'];
  // const profession = ['Web Developer','Web Designer','Programmer'];
  const products = [{name:'PhotoShop',price:'$90.99'},{name:'PDF Reader', price:'$30.99'}]
  return (
    <div className="App">
      <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p style = {style}>My first react paragraph</p>
        <h1 style = {{padding:'10px', backgroundColor:'cyan'}}>Name {person.name} And Age {person.age}</h1> */}

        <p>I Am From React</p>

        {/* <Person name ={names[0]} passion="Web Developer"></Person>
        <Person name="Hasan" passion="web Designer"></Person>
        <Person name="Niloy" passion="Programmer"></Person> */}

        {/* <Person name = {names[0]} professionName={profession[0]}></Person>
        <Person name = {names[1]} professionName={profession[1]}></Person> */}
        <Product name = {products[0].name}></Product>
        <Product product = {products[0]}></Product>
      </header>
    </div>
  );
}


// function Person(props){
//   const personStyle = {
//     border:'1px solid red',
//     marginBottom:'10px',
//     padding:'10px',
//     boxSizing:'border-box',
//     width:'400px'
//   }
//   return(
//     <div style = {personStyle}>
//       <h1>Name : {props.name}</h1>
//       <p>Profession : {props.professionName}</p>
//     </div>
//   )
// }

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'blue'
  }
  return(
    <div style={productStyle}>
        <h2>Name : {props.name}</h2>
        <h3></h3>
        <button>Buy Now</button>
    </div>
  )
}









// function Person(props){
//   const personStyle = {
//     border:'1px solid red',
//     marginBottom:'10px',
//     padding:'10px',
//     boxSizing:'border-box',
//     width:'400px'
//   }
//   console.log(props);
//   return (
//     <div style= {personStyle}>
//       <h2>Name : {props.name}</h2>
//       <p>A {props.passion}</p>
//     </div>
//   )
// }

export default App;
