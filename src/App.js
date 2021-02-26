// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const names =['Jahid Hasan','Hasan','Niloy'];
  // const profession = ['Web Developer','Web Designer','Programmer'];
  const products = [{name:'PhotoShop',price:'$90.99'},{name:'PDF Reader', price:'$30.99'}];
  // const productName = products.map(product => product.name);
  
  // console.log(productName);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>Name : {product.name} Price : {product.price}</li>)
          }
        </ul>
        

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p style = {style}>My first react paragraph</p>
        <h1 style = {{padding:'10px', backgroundColor:'cyan'}}>Name {person.name} And Age {person.age}</h1> */}

      

        {/* <Person name ={names[0]} passion="Web Developer"></Person>
        <Person name="Hasan" passion="web Designer"></Person>
        <Person name="Niloy" passion="Programmer"></Person> */}

        {/* <Person name = {names[0]} professionName={profession[0]}></Person>
        <Person name = {names[1]} professionName={profession[1]}></Person> */}
        {/* <Product name = {products[0].name} price = {products[0].price}></Product> */}

        {
          products.map(product => <Product product = {product}></Product>)
        }
{/* 
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product> */}
        <Counter></Counter>
        <User></User>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div style = {{marginBottom : '70px'}}>
      <h1>Count : {count}</h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function User(){
  const [users,setUser] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  }, [])
  
  return(
    <div>
      <h3>Dynamic Data API</h3>
      {
        <ul>
         {
            users.map(user => <li>{user.name}</li>)
         }
        </ul>
      }
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
    backgroundColor:'blue',
    // height:'200px',
    padding:'20px',
    width:'200px',
    float:'left',
    marginBottom:'20px'
  }
  const {name , price} = props.product;

  return(
    <div style={productStyle}>
        {/* <h2>Name : {props.name}</h2>
        <h3>Price : {props.price}</h3> */}
        <h2>Name : {name}</h2>
        <h3>Price : {price}</h3>
        <button>Buy Now</button>
    </div>
  )
}

// function Counter (){
//   const [count, setCount] = useState(0);
//   const handelIncrease = () => {
//     const newCount = count + 1;
//     setCount(newCount)
//   }
//   return (
//     <div style= {{marginBottom:'70px'}}>
//       <h1>Count : {count}</h1>
//       <button onClick = {handelIncrease}>Increase</button>
//     </div>
//   )
// }







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
