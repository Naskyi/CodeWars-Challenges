class Challenge {
	static solution(number: number) {
		// Prevent a falsy number.

		if (!number) return 0;

		// Calculate a numbers of multiples 3 or 5.

		const numbers: number[] = [];

		for (let i = 1; i < number; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				numbers.push(i);
				continue;
			}
			if (i % 5 === 0 || i % 3 === 0) numbers.push(i);
		}

		// Calculate a sum of numbers.
		return numbers.reduce((prev, next) => (prev += next), 0);
	}
}
