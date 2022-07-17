function paperwork(n: number, m: number): number {
	// Prevent a invalid classmates and paperwork inputs.

	if (n < 0 || m < 0) return 0;

	// Calculate a copied paperwork

	return n * m;
}
