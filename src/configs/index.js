const FirebaseConfigs = {
	API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
	AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
	PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
	STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
	MESSAGING_SENDER_ID: process.env.REACT_APP_MESSAGING_SENDER_ID,
	APP_ID: process.env.REACT_APP_APP_ID,
	MEASUREMENT_ID: process.env.REACT_APP_MEASUREMENT_ID,
};

const emailConfigs = {
	USER_NAME: process.env.REACT_APP_MAIL_USER_NAME,
	PASSWORD: process.env.REACT_APP_MAIL_PASSWORD,
	HOST: process.env.REACT_APP_MAIL_HOST,
	SSL: process.env.REACT_APP_MAIL_SSL,
};

export { FirebaseConfigs, emailConfigs };
