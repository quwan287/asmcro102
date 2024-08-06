// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Cấu hình Firebase từ Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyDyigxKfxm300N5vDrKh2CBwiWKrFjT7h0',
  authDomain: 'pro02-c8ea3.firebaseapp.com',
  projectId: 'pro02-c8ea3',
  storageBucket: 'pro02-c8ea3.appspot.com',
  messagingSenderId: '121604858398',
  appId: '1:121604858398:android:7f2f0ab48885ce24b6c40f',
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo các dịch vụ bạn cần
export const auth = getAuth(app);
export const firestore = getFirestore(app);
