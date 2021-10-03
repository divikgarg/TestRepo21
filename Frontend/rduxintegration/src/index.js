import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
/*
var MyClass1 = function () {
  this.member1 = "m1";
};

MyClass1.prototype.function1 = function () {
  return "return from function1";
};

var instance1 = new MyClass1();
var instance2 = Object.create(MyClass1.prototype, {
  member2: { value: "m2", writable: true },
});

console.log("instance1.member1: " + instance1.member1); //m1
console.log("instance1.function1: " + instance1.function1()); //return from function1
console.log("instance2.member1: " + instance2.member1); //undefined
console.log("instance2.member2: " + instance2.member2); //m2
console.log("instance2.function1: " + instance2.function1()); //return from function1
console.log("instance1.member2: " + instance1.member2); //undefined
*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';
// import index from "./js/index";
// import {Provider} from "react-redux";
// import store from "./js/store/index";
// import App from "./js/components/App";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
