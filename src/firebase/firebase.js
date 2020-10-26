import * as firebase from 'firebase';
import { firebaseConfig } from './config';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {
  auth
}