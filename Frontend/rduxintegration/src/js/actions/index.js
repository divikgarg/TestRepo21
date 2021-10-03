import {ADD_ARTICLE,FOUND_BAD_WORD,GET_ALL_USERS} from '../constants/action-types'
import config from "../config/index"
import axios from "axios"
// src/js/actions/index.js

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };

//   export function invalidArticle(payload) {
//     return { type: FOUND_BAD_WORD }
//   };

//   export function getData() {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => {
//         return { type: "DATA_LOADED", payload: json };
//       });
//   }

export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }

  export function getAllUsers(dispatch)
  {
    axios.get(config.baseUrl + config.endPoints.users)
      .then(response => {
        return response.data;
      })
      .then(json => {
        dispatch({type: GET_ALL_USERS, payload: json});
      });
  }

  export function AddUser(dispatch, user)
  {
    console.log("fun called B");
    axios.post(config.baseUrl + config.endPoints.adduser,user)
    .then(response => {
      console.log("Response Data");
          console.log(response);
          getAllUsers(dispatch);
    });
  } 

  // export function getAllUsers(endpoint)
  // {
  //   console.log("Hiiii");
  //   return function(dispatch) {
  //     return axios.get(config.baseUrl + config.endPoints)
  //     .then(response => {
  //       console.log("Hiiii222");
  //       console.log(response.json());
  //       return response.json();
  //     })
  //     .then(json => {
  //       console.log("json");
  //       console.log(json);
  //       dispatch({type: "GET_ALL_USERS", payload: json});
  //     });
  //   };
  // }