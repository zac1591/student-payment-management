export type Group = {
	// [index: string]: string | number | string[],
	id: string,
	groupName: string,
	description: string,
	price: number,
	members: string[],
	startDate: string,
	endDate:  string,
	schedule: string,
	
}

export type masive = {
	grupos: string,
	importe: string,
	importe_amount: string

}

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