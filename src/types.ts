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