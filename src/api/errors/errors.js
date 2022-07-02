class EmailExists extends Error {
	constructor(email, document_id) {
		super("The username already exists.");
		this.email = email;
		this.document_id = document_id;
	}
}

export { EmailExists };
