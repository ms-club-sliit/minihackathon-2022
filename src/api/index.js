const getShareURL = (ticket_no, type) => {
	switch (type) {
		case "team":
			return `${process.env.REACT_APP_SHARE_ENDPOINT}/teams/ticket/${ticket_no}`;
		case "awareness":
			return `${process.env.REACT_APP_SHARE_ENDPOINT}/awareness-session/ticket/${ticket_no}`;
		default:
			return "";
	}
};

export { getShareURL };
