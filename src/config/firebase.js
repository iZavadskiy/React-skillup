import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

export const listRef = databaseRef.child('list');

listRef.on('value', (snapshot) => {
  console.log(snapshot.val());
});
