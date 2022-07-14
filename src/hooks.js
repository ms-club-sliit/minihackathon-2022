import { useState, useEffect } from "react";

function useDisplaySize() {
    const [size, setSize] = useState(0);
    const onMediaQuery = (e) => {
		if(e.matches)
			setSize(1);
		else
			setSize(0);
	}

    useEffect(() => {
		let handler = window.matchMedia("(min-width: 640px)")

		onMediaQuery(handler);
		handler.addEventListener("change", onMediaQuery);

		return () => {
			handler.removeEventListener("change", onMediaQuery);
		}
	}, []);

    return size;
}

export { useDisplaySize }