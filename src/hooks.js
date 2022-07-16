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

function usePerspectiveOnMouseMoveEffect(ref) {
	const onMove = (e) => {
		const ticketElm = ref.current;
		const { x, y, width, height } = ticketElm.getBoundingClientRect();
		const centerPoint = { x: x + width / 2, y: y + height / 2 };

		const degreeX = (e.clientY - centerPoint.y) * 0.008;
		const degreeY = (e.clientX - centerPoint.x) * -0.008;

		ticketElm.style.transform = `perspective(500px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
	}

	useEffect(() => {
        window.addEventListener('mousemove', onMove);
		return () => {
			window.removeEventListener('mousemove', onMove);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
}
export { useDisplaySize, usePerspectiveOnMouseMoveEffect }