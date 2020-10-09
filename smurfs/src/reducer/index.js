import { FETCHING_DATA_SUCCESS } from '../actions'

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_SUCCESS:
      return action.payload;
    default:
      return state
  }
  
}

export default reducer;