function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
	// Create a tribonacci sequence array contains first 3 numbers.
	const tribonacciSequence = [a, b, c];

	// Calculate a tribonacci started length.
	const tribonacciSequenceLength = tribonacciSequence.length - 1;

	if (n < tribonacciSequence.length) {
		return tribonacciSequence.slice(0, n);
	}

	// Calculate a next number in tribonacci sequence.
	for (
		let i = tribonacciSequenceLength;
		i <= n - tribonacciSequenceLength;
		i++
	) {
		const nextNumberInSequence =
			tribonacciSequence[i] +
			tribonacciSequence[i - 1] +
			tribonacciSequence[i - 2];
		tribonacciSequence.push(nextNumberInSequence);
	}

	return tribonacciSequence;
}
