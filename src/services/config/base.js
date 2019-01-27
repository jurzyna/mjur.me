import * as firebase from "firebase";
import firebaseOptions from "./base-config";

firebase.initializeApp(firebaseOptions);

const database = firebase.database();

export default database;
