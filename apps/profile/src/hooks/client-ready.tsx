import { useEffect, useState } from "react";

export const useClientReady = () => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsReady(true);
		}
	}, []);

	return isReady;
};
