import { useState, useEffect } from "react";

export default function useWindowDimensions() {
	// checks if window is defined, if not, set to null
	const hasWindow = typeof window !== "undefined";

	// if window is defined, set width and height to window.innerwidth and window.innerheight
	function getWindowDimensions() {
		const width = hasWindow ? window.innerWidth : null;
		const height = hasWindow ? window.innerHeight : null;
		return {
			width,
			height,
		};
	}

	// Use getWindowDimensions() to set windowDimensions state
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	// useEffect to add event listener to window resize if window exists
	useEffect(() => {
		if (hasWindow) {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [hasWindow]);

	return windowDimensions;
}

// link to above code block: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs/59185109#59185109
