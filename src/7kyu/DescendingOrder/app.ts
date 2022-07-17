export function descendingOrder(n: number): number {
	// Prevent a falsy n.

	if (!n) return 0;

	// Create a array of numbers from given n.

	const arrayOfNumbers: number[] = n
		.toString()
		.split('')
		.map(el => Number(el));

	// Sort a array in descending order.

	const descendingOrderSortArray = arrayOfNumbers.sort((a, b) => (b -= a));

	// Convert array into number.

	return Number(descendingOrderSortArray.join(''));
}
