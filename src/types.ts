export type Group = {
	// [index: string]: string | number | string[],
	id: number,
	course: string,
	groupName: string,
	description: string,
	professor: string,
	schedule: string,
	cap: number,
	duration: number
}

export type BulkSearch = {
	groupName: string,
	amountInGroup: string,
	comparisonOption: string


}

export type Contact = {
	id: number,
	firstName: string,
	lastName: string,
	personalId?: string,
	phoneNumber?: string,
	email: string,
	country?: string,
	address?: string,
	department?: string,
	dob?: string,
	gender?: string,
	groups?: string
	accessLevel: string

}


export type Course = {
	id: number,
	courseName: string,
	coursePrice: number,
	registrationFee?: number,
	courseDescription?: string,
	startDate: string,
	endDate: string,
	isAvailable: boolean
}

export type SelectOption = {
	label: string;
	value: string | number;
};

export type RadioButtonOptions = {
	label: string;
	name: string;
	disabled?: boolean;
}

export type ButtonConfigTypes = {
	btnName: string;
	iconLabel: string;
	onClick: () => void;
};

export interface InscriptionCreate {
	user: number; // ID del alumno
	group: number; // ID del grupo
	assignedMonthlyPayment: number;
	billingDay: number;
	scholarship: boolean;
}

export interface InscriptionResponse extends InscriptionCreate {
	id: number;
	createdAt: string;
	status: 'ACTIVE' | 'INACTIVE';
}

/*

export type Contact = {
	id: string,
	firstName: string,
	lastName:string,
	personalId?: string,
	phoneNumber?: string,
	email: string,
	country?: string,
	address?:string,
	department?: string,
	DOB?: string,
	gender?: string,
	scholarship: boolean,
	assignedMonthlyPayment: string,
	firstPaymentDate: string,
	lastPaymentDate: string,
	groups?: string

}

*/