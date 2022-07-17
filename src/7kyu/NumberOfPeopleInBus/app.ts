function number(busStops: [number, number][]): number {
	// Calculate a how many people stay in bus after each bus stop.
	const peoplesOnEachBusStop = busStops.map(
		([passengersIn, passengersOut]) => passengersIn - passengersOut
	);

	// Calculate after last bus stop.
	const peoplesAfterLastBusStop = peoplesOnEachBusStop.reduce(
		(prev, next) => (prev += next),
		0
	);

	return peoplesAfterLastBusStop;
}
