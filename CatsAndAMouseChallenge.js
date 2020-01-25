function catAndMouse(x, y, z) {
	const left = Math.abs(x - z);
	const right = Math.abs(y - z);

	if (left > right) {
		return "Cat B";
	} else if (left < right) {
		return "Cat A";
	} else {
		return "Mouse C";
	}
}
