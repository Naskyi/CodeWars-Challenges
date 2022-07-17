type XO = {
	x: number;
	o: number;
};

function xo(str: string) {
	// Prevent a empty string.
	if (!str.length) return true;

	// Container to calculate amounts of each letter.

	const xoValues: XO = {
		x: 0,
		o: 0,
	};

	// Create a array contains all chars from given string.
	const charArray = str.split('');

	// Loop over array and check if char in object, then increase amount.
	charArray.forEach(char => {
		const lowerCaseChar = char.toLowerCase();
		if (lowerCaseChar in xoValues) {
			xoValues[lowerCaseChar as keyof typeof xoValues]++;
		}
	});

	return xoValues.x === xoValues.o;
}
