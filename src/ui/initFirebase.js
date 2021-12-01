// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import {
   EXPO_FIREBASE__apiKey,
   EXPO_FIREBASE__authDomain,
   EXPO_FIREBASE__projectId,
   EXPO_FIREBASE__storageBucket,
   EXPO_FIREBASE__messagingSenderId,
   EXPO_FIREBASE__appId,
   EXPO_FIREBASE__measurementId,
} from '@env'
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: EXPO_FIREBASE__apiKey,
   authDomain: EXPO_FIREBASE__authDomain,
   projectId: EXPO_FIREBASE__projectId,
   storageBucket: EXPO_FIREBASE__storageBucket,
   messagingSenderId: EXPO_FIREBASE__messagingSenderId,
   appId: EXPO_FIREBASE__appId,
   measurementId: EXPO_FIREBASE__measurementId,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

export default {
   app,
   analytics,
}
