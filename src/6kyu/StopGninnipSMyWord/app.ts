function spinWords(words: string): string {
	// Prevent falsy words.
	if (!words) return '';
	// Create a array contains each word.
	const wordsArray = words.split(' ');
	// Map a new array contains reverse word while length <=5.
	const mappedWordsArray = wordsArray.map(word =>
		word.length >= 5 ? word.split('').reverse().join('') : word
	);
	return mappedWordsArray.join('');
}
