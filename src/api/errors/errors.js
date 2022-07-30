class EmailExists extends Error {
	constructor(email, document_id) {
		super("The username already exists.");
		this.email = email;
		this.document_id = document_id;
	}
}

class TicketDoesNotExist extends Error {
	constructor() {
		super("Team doesn't exist.");
	}
}

class TeamExist extends Error {
	constructor() {
		super("There's a team with the same name");
	}
}



export { EmailExists, TicketDoesNotExist, TeamExist };
