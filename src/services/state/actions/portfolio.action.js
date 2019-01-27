import base from './../../config/base';

/**
 * ACTION TYPES
 */
export const GET_PORTFOLIO = 'get portfolio';
export const ADD_PORTFOLIO = 'add portfolio';
export const REMOVE_PORTFOLIO = 'remove portfolio';

/**
 * ACTION CREATORS
 */
export const getPortfolio = (payload) => ({type: GET_PORTFOLIO, payload});
export const addPortfolio = (payload) => ({type: ADD_PORTFOLIO, payload});
export const removePortfolio = (payload) => ({type: REMOVE_PORTFOLIO, payload});

/**
 * THUNKS
 */
export function getPortfolioThunk() {
  return dispatch => {
    const items = [];

    /// export const portfolioRef = databaseRef.child("portfolio");
    base.ref('/portfolio/entities')
      .once('value', snap => {
        snap.forEach(data => {
        items.push(data.val())
      })
    })
    .then(() => dispatch(getPortfolio(items)))
  }
}

export function watchTaskAddedPortfolio(dispatch) {
  base.ref('/portfolio').on('child_added', (snap) => {
    dispatch(addPortfolio(snap.val()));
  });
}

export function watchTaskRemovedEvent(dispatch) {
  base.ref('/').on('child_removed', (snap) => {
    dispatch(removePortfolio(snap.val()));
  });
}
