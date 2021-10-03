import {ADD_ARTICLE,GET_ALL_USERS} from '../constants/action-types'

const initialState = {
    articles: [],
    usersList : [],
    remoteArticles: []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({},state,{
            articles: state.articles.concat(action.payload)
        })
      }
      if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }
      if(action.type == GET_ALL_USERS){
        return Object.assign({},state, {
          usersList: action.payload
        });
      }
      return state;
  };
  
  export default rootReducer;