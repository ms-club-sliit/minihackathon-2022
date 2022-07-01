import { Db, Storage } from "../../Firebase";
import { collection, addDoc, Timestamp, doc, runTransaction } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { EmailExists } from "../errors/errors";

const isDebugModeOn = false; // Enable debug mode to print the console.log

export const registerAwarenessSession = async (member_details) => {
	await runTransaction(Db, async (transaction) => {
		const counter_ref = doc(Db, "awareness_session", "--stats--");
		let counter_doc = await transaction.get(counter_ref);
		const doc_ref = doc(Db, "awareness_session", member_details.email);
		const document = await transaction.get(doc_ref);

		if(document.exists()){
			throw new EmailExists(document.data().email, document.id);
		}

		if(!counter_doc.exists()){
			await transaction.set(counter_ref, { ticket_count: 1 });
		}
		
		let new_count = 1;
		if(counter_doc.data()) {
			new_count = counter_doc.data().ticket_count + 1
		}

		transaction.update(counter_ref, { ticket_count: new_count });
		member_details.number = new_count;
		transaction.set(doc_ref, member_details);
	})
}

export const registerTeam = async (teamInfo) => {
	return new Promise(async (resolve, reject) => {
		let teamObj = {
			member01: {},
			member02: {},
			member03: {},
			member04: {},
			team_name: "",
			created: "",
		};

		try {
			if (teamInfo.member01.image) {
				let fileName = generateFileName();
				const storageRef = ref(Storage, `/profile-images/${fileName}`);
				await uploadBytes(storageRef, teamInfo.member01.image)
					.then((snapshot) => {
						return getDownloadURL(snapshot.ref);
					})
					.then((url) => {
						teamObj.member01.image = url;
					});
			}

			if (teamInfo.member02.image) {
				let fileName = generateFileName();
				const storageRef = ref(Storage, `/profile-images/${fileName}`);
				await uploadBytes(storageRef, teamInfo.member02.image)
					.then((snapshot) => {
						return getDownloadURL(snapshot.ref);
					})
					.then((url) => {
						teamObj.member02.image = url;
					});
			}

			if (teamInfo.member03.image) {
				let fileName = generateFileName();
				const storageRef = ref(Storage, `/profile-images/${fileName}`);
				await uploadBytes(storageRef, teamInfo.member03.image)
					.then((snapshot) => {
						return getDownloadURL(snapshot.ref);
					})
					.then((url) => {
						teamObj.member03.image = url;
					});
			}

			if (teamInfo.member04.image) {
				let fileName = generateFileName();
				const storageRef = ref(Storage, `/profile-images/${fileName}`);
				await uploadBytes(storageRef, teamInfo.member04.image)
					.then((snapshot) => {
						return getDownloadURL(snapshot.ref);
					})
					.then((url) => {
						teamObj.member04.image = url;
					});
			}
		} catch (error) {
			return reject(error);
		}

		teamObj.team_name = teamInfo.teamName;
		teamObj.created = Timestamp.now();

		teamObj.member01.name = teamInfo.member01.name;
		teamObj.member01.email = teamInfo.member01.email;
		teamObj.member01.it_number = teamInfo.member01.itNumber;
		teamObj.member01.academic_year = teamInfo.member01.academicYear;
		teamObj.member01.contact_no = teamInfo.member01.contactNumber;
		teamObj.member01.faculty = teamInfo.member01.faculty;

		teamObj.member02.name = teamInfo.member02.name;
		teamObj.member02.email = teamInfo.member02.email;
		teamObj.member02.it_number = teamInfo.member02.itNumber;
		teamObj.member02.academic_year = teamInfo.member02.academicYear;
		teamObj.member02.contact_no = teamInfo.member02.contactNumber;
		teamObj.member02.faculty = teamInfo.member02.faculty;

		teamObj.member03.name = teamInfo.member03.name;
		teamObj.member03.email = teamInfo.member03.email;
		teamObj.member03.it_number = teamInfo.member03.itNumber;
		teamObj.member03.academic_year = teamInfo.member03.academicYear;
		teamObj.member03.contact_no = teamInfo.member03.contactNumber;
		teamObj.member03.faculty = teamInfo.member03.faculty;

		teamObj.member04.name = teamInfo.member04.name;
		teamObj.member04.email = teamInfo.member04.email;
		teamObj.member04.it_number = teamInfo.member04.itNumber;
		teamObj.member04.academic_year = teamInfo.member04.academicYear;
		teamObj.member04.contact_no = teamInfo.member04.contactNumber;
		teamObj.member04.faculty = teamInfo.member04.faculty;

		return resolve(teamObj);
	})
		.then(async (data) => {
			return await addDoc(collection(Db, "teams"), data);
		})
		.catch((error) => {
			isDebugModeOn && console.error(error.message);
		});
};

const generateFileName = () => {
	return (
		new Date().getTime() +
		"-" +
		Math.floor(Math.random() * 1000000 + 1) +
		".jpg"
	);
};
