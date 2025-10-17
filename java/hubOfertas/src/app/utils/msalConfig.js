export const msalConfig = {
	auth: {
		clientId: "7ac5c70f-913f-4a2a-bdd3-f464dfec017a",
		authority: 'https://login.microsoftonline.com/97e05be6-37b8-44e4-a9d5-4bd3fd6d05fe/',
		response_type: 'token',
		response_mode: 'query',
		redirectUri: "/",
		// state: '12',
		// client_secret: 'bQY7Q~tYBIuCKGwqHR31ylWMVsruyLrlfq6OQ',
		// client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
	},
	cache: {
		cacheLocation: "sessionStorage", // This configures where your cache will be stored
		storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
	},
	// system: {
	// 	allowNativeBroker: false, // Disables WAM Broker
	// }
};

export const loginRequest = {
	scopes: ["User.Read"]
};
