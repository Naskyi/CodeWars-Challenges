const checkDuplicateCharacterInText = (text: string, character: string) => {
	return text.indexOf(character) !== text.lastIndexOf(character);
};

function duplicateCount(text: string): number {
	// Count for a text length === 0.
	if (!text.length) return 0;

	// Change all letters to lowercase.
	const lowerCaseText = text.toLowerCase();

	const solution: string[] = [];
	// Loop over lower text and check if index of current character is same from start and end.
	for (let i = 0; i < lowerCaseText.length; i++) {
		const character = lowerCaseText[i];
		const isAnotherCharacter = checkDuplicateCharacterInText(
			lowerCaseText,
			character
		);

		if (isAnotherCharacter && !solution.includes(character)) {
			solution.push(character);
		}
	}
	// Return a count.
	return solution.length;
}
