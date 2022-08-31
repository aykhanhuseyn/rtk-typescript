export interface Geo {
	lat: string;
	lng: string;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: `AZ${number}`;
	geo: Geo;
}

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

export interface Error {
	messages: string[];
}

export interface State {
	data: User[];
	status?: number;
	isUninitialized: boolean;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	error?: Error;
}
