function accum(s: string): string {
	// Prevent a falsy s.
	if (!s) return '';

	// Create a char array from given s.

	const upperCaseCharArray = s.toUpperCase().split('');

	// Create a sequence array.

	const sequence = upperCaseCharArray.map(
		(upperCaseChar, index) =>
			`${upperCaseChar}${upperCaseChar.toLowerCase().repeat(index)}`
	);

	// Return in valid format.
	return sequence.join('-');
}
