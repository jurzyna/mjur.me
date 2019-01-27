import firebase from "firebase";

const config = firebase.initializeApp({
  apiKey: "AIzaSyBpXPOfa20xRiHAIq1VcYUW2oezQ7leWGY",
  authDomain: "my-react-portfolio.firebaseapp.com",
  databaseURL: "https://my-react-portfolio.firebaseio.com",
});

const base = config.database().ref();

export default base;
