function selectPortfolioItem(item) {
  console.log('selected', item);
  return {
    type: 'SELECT_PORTFOLIO',
    payload: item
  }
}

export default selectPortfolioItem;
