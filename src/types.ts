export type Group = {
	// [index: string]: string | number | string[],
	id: number,
	course: string,
	groupName: string,
	description: string,
	professor: string,
	schedule: string,
	capacity: number,
	duration: number
}

export type BulkSearch = {
	grupos: string,
	importe: string,
	importe_amount: string

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