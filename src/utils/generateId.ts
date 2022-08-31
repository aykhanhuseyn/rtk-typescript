function* generator(start?: number) {
	let id = start ?? 0;

	while (true) {
		yield id;
		id++;
	}
}

const instance = generator();

export function generateId(): number {
	return instance.next().value as number;
}
