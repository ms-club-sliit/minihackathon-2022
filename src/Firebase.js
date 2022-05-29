import { initializeApp } from "firebase/app";
import { FirebaseConfigs } from "./configs";

const FirebaseApp = initializeApp({
	apiKey: FirebaseConfigs.API_KEY,
	authDomain: FirebaseConfigs.AUTH_DOMAIN,
	projectId: FirebaseConfigs.PROJECT_ID,
	storageBucket: FirebaseConfigs.STORAGE_BUCKET,
	messagingSenderId: FirebaseConfigs.MESSAGING_SENDER_ID,
	appId: FirebaseConfigs.APP_ID,
	measurementId: FirebaseConfigs.MEASUREMENT_ID,
});

export default FirebaseApp;
