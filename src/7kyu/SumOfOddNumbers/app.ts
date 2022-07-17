function multiplePlusTwo(n: number): number {
	let multiples = 1;
	for (let i = n - 1; i > 1; i--) {
		multiples += i;
	}
	return multiples;
}

function rowSumOddNumbers(n: number): number {
	// Prevent a falsy n.
	if (!n) return 0;

	// Calculate for floor of index 1.
	if (n === 1) return 1;

	// Current floor of odd numbers.
	const floorIndex = n;

	// Calculate a how much two was added before a floor index.
	const startingOddNumberInFloor = multiplePlusTwo(floorIndex) * 2 + 1;

	// Crate a solution array contains first odd number in floor.
	const solution = [startingOddNumberInFloor];

	for (let i = 1; i < n; i++) {
		solution.push(startingOddNumberInFloor + 2 * i);
	}

	return solution.reduce((prev, next) => (prev += next), 0);
}
