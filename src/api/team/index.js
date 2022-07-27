import { collection, where, getDocs, query } from "firebase/firestore";
import { Db } from "../../Firebase";
import { TicketDoesNotExist } from "../errors/errors";

export const getAllTeams = async (round) => {
	const teams_ref = collection(Db, "teams");
	const doc_ref = await getDocs(teams_ref);
	const docs = doc_ref.docs.map((doc) => doc.data());

	const mapped = docs.filter((doc) => {
		// "if" is to distinguish between counter doc and actual team
		if ("team_name" in doc) {
			doc.team_id = doc.number;
			delete doc.number;

			doc.members = {};

			for (let i = 1; i < doc.team_size + 1; i++) {
				doc.members[`Member${i}`] = doc[`member0${i}`].name;
				delete doc[`member0${i}`];
			}

			doc.team_image = "https://cdn-icons-png.flaticon.com/512/0/14.png";
			doc.round = typeof doc.round === "number" ? doc.number : 1;
			return true;
		}

		return false;
	});

	// Sort by current round specific team is in
	const sorted = mapped.sort((doc1, doc2) => {
		return doc2.round - doc1.round;
	});

	return sorted;
};

export const getTeam = async (number) => {
	const teams_ref = collection(Db, "teams");
	const q = query(teams_ref, where("number", "==", number));
	const q_snapshot = await getDocs(q);

	if (q_snapshot.empty) {
		throw new TicketDoesNotExist();
	}

	return q_snapshot.docs[0].data();
};
