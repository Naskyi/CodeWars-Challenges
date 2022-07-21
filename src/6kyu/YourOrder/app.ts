function order(words: string): string {
	// Return a empty string if falsy words length.
	if (!words.length) return '';

	// Create a words array contains each word from string.

	const wordsArray = words.split(' ');

	// Create a mock array to contain a solution string.
	const mocksArray = new Array(wordsArray.length).fill('');

	// Get a numbers from words.

	const numberArrayFromWords = wordsArray.map(
		el => +el.split('').filter(it => !Number.isNaN(Number(it)))[0]
	);

	// Set a each idx in mocks array.
	mocksArray.forEach((mockIndex, idx) => {
		const idxNumberFromArray = numberArrayFromWords[idx];
		mocksArray[idxNumberFromArray] = wordsArray[idx];
	});

	return mocksArray.join(' ');
}
