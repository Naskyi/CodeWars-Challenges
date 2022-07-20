function arrayDiff(a: number[], b: number[]): number[] {
	// Filter in a array and check if b include it.
	const arrayDifference = a.filter(number => !b.includes(number));

	return arrayDifference;
}
