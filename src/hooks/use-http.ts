import { useState, useCallback } from "react";

//this hook requires improvements for types. 

type HttpRequest = {
	url: string
	method: string
	headers: {}
	body: {}
}

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestConfig: HttpRequest, applyData: (data: {}) => {}) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method ? requestConfig.method : "GET",
				headers: requestConfig.headers ? requestConfig.headers : {},
				body: requestConfig.body
					? JSON.stringify(requestConfig.body)
					: null,
			});

			if (!response.ok) {
				throw new Error("Request failed!");
			}

			const data = await response.json();

			applyData(data);
		} catch (err: any) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	}, []);

	return {
		isLoading,
		error,
		sendRequest,
	};
};

export default useHttp;