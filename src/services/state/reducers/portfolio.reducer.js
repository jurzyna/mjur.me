import { GET_PORTFOLIO } from '../actions/portfolio.action';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PORTFOLIO:
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    default:
      return state;
  }
}
