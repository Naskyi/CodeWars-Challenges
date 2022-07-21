function findMissingLetter(array: string[]): string {
	// Prevent empty array.
	if (!array.length) return '';
	// Create a ascii code letter array from given array.
	const asciCodeArray = array.map(letter => letter.charCodeAt(0));
	// Find a missing number.
	const missingAsciNumber =
		Number(asciCodeArray.filter((el, idx) => asciCodeArray[idx + 1] - el > 1)) +
		1;
	return String.fromCharCode(missingAsciNumber);
}
