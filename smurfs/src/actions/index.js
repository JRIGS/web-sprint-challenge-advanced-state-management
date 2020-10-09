import axios from 'axios';

//our cases
export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getSmurf = () => dispatch => {
    //The start of data fetching
    dispatch({ type: FETCHING_DATA_START });

axios.get("http://localhost:3333/smurfs")
.then(res => {
  console.log("getting data from request: ", res.data);
  dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data})
}
  )
  .catch(err => {
    dispatch({ type: FETCHING_DATA_FAILURE });
    console.log(err);
  })
}