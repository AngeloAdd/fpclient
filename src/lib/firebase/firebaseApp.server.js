import {
	FB_API_KEY,
	FB_AUTH_DOMAIN,
	FB_PROJECT_ID,
	FB_APP_ID,
	FB_MEASUREMENT_ID,
	FB_MESSAGING_SENDER_ID,
	FB_STORAGE_BUCKET
} from '$env/static/private';
import { initializeApp } from 'firebase/app';
// import serviceAccount from '../database/teams/fantapronostico2022-firebase-adminsdk-dz3dd-afd80628d3.json'

const firebaseConfig = {
	apiKey: FB_API_KEY,
	authDomain: FB_AUTH_DOMAIN,
	projectId: FB_PROJECT_ID,
	storageBucket: FB_STORAGE_BUCKET,
	messagingSenderId: FB_MESSAGING_SENDER_ID,
	appId: FB_APP_ID,
	measurementId: FB_MEASUREMENT_ID
	// credential: cert(serviceAccount)
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
