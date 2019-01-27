export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';

// export default function (state = null, action) {
//   switch (action.type) {
//     case (FETCH_PORTFOLIO):
//       return action.payload
//     default:
//       return state;
//   }
// }



export function fetchPortfolio() {
  const mockPortfolio = [
    { title: "Javascript: The Good Parts", pages: 101 },
    { title: "Harry Potter", pages: 39 },
    { title: "The Dark Tower", pages: 85 },
    { title: "Eloquent Ruby", pages: 1 }
  ];

  return {
    type: FETCH_PORTFOLIO,
    payload: mockPortfolio
  };
}
