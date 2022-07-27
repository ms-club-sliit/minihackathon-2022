import { Db, Storage } from "../../Firebase";
import {
	collection,
	Timestamp,
	doc,
	runTransaction,
	updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { EmailExists } from "../errors/errors";

export const registerAwarenessSession = async (member_details) => {
	return await runTransaction(Db, async (transaction) => {
		const counter_ref = doc(Db, "awareness_session", "--counter--");
		let counter_doc = await transaction.get(counter_ref);

		const doc_ref = doc(Db, "awareness_session", member_details.email);
		const document = await transaction.get(doc_ref);

		if (document.exists()) {
			throw new EmailExists(document.data().email, document.id);
		}

		if (!counter_doc.exists()) {
			await transaction.set(counter_ref, { ticket_count: 1 });
		}

		let new_count = 1;
		if (counter_doc.data()) {
			new_count = counter_doc.data().ticket_count + 1;
		}

		transaction.update(counter_ref, { ticket_count: new_count });
		member_details.number = new_count;
		transaction.set(doc_ref, { ...member_details });
		member_details.ref = doc_ref;
		return member_details;
	});
};

export const updateTicket = async (ref, ticket_url) => {
	await updateDoc(ref, { ticket_url });
};

export const saveTicket = async (image_string) => {
	let fileName = generateFileName();
	const storageRef = ref(Storage, `/ticket-images/${fileName}`);
	let snapshot = await uploadBytes(storageRef, dataURItoBlob(image_string));
	return await getDownloadURL(snapshot.ref);
};

export const registerTeam = async (teamInfo) => {
	teamInfo.created = Timestamp.now();

	// Image tasks
	let tasks = [];

	for (let i = 1; i <= 4; i++) {
		if (`member0${i}` in teamInfo) {
			let member = teamInfo[`member0${i}`];

			// Add upload image task (team.image is a FileList)
			if (member.image && member.image.length > 0) {
				let fileName = generateFileName();
				const storageRef = ref(Storage, `/profile-images/${fileName}`);

				let task = uploadBytes(storageRef, member.image[0])
					.then((snapshot) => getDownloadURL(snapshot.ref))
					.then((url) => (member.image = url));

				tasks.push(task);
			} else {
				member.image = "default";
			}
		}
	}

	await Promise.all(tasks);

	return await runTransaction(Db, async (transaction) => {
		const counter_ref = doc(Db, "teams", "--counter--");
		let counter_doc = await transaction.get(counter_ref);

		let doc_ref = doc(collection(Db, "teams"));

		if (!counter_doc.exists()) {
			await transaction.set(counter_ref, { ticket_count: 1 });
		}

		let new_count = 1;
		if (counter_doc.data()) {
			new_count = counter_doc.data().ticket_count + 1;
		}

		transaction.update(counter_ref, { ticket_count: new_count });
		teamInfo.number = new_count;
		transaction.set(doc_ref, teamInfo);
		teamInfo.ref = doc_ref;
		return teamInfo;
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

const dataURItoBlob = (dataURI) => {
	// convert base64 to raw binary data held in a string
	// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
	let byteString = atob(dataURI.split(",")[1]);

	// separate out the mime component
	let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

	// write the bytes of the string to an ArrayBuffer
	let ab = new ArrayBuffer(byteString.length);

	// create a view into the buffer
	let ia = new Uint8Array(ab);

	// set the bytes of the buffer to the correct values
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	// write the ArrayBuffer to a blob, and you're done
	let blob = new Blob([ab], { type: mimeString });
	return blob;
};
