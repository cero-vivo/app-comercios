export function timeAgo(isoDate: string): string {
	const date = new Date(isoDate);
	const now = new Date();

	const msDiff = now.getTime() - date.getTime();
	const minutes = Math.floor(msDiff / (1000 * 60));
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const weeks = Math.floor(days / 7);
	const months = Math.floor(days / 30);
	const years = Math.floor(days / 365);

	if (minutes < 1) return "Justo ahora";
	if (minutes < 60) return `Hace ${minutes} min`;
	if (hours < 24) return `Hace ${hours} ${hours === 1 ? "hora" : "hs"}`;
	if (days < 7) return `Hace ${days} ${days === 1 ? "día" : "días"}`;
	if (days < 30) return `Hace ${weeks} ${weeks === 1 ? "semana" : "semanas"}`;
	if (days < 365) return `Hace ${months} ${months === 1 ? "mes" : "meses"}`;

	const remainingMonths = Math.floor((days % 365) / 30);
	let result = `Hace ${years} ${years === 1 ? "año" : "años"}`;
	if (remainingMonths > 0) {
		result += ` y ${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`;
	}
	return result;
}

export function timeUntil(expireIn: string): string {
	const future = new Date(expireIn);
	const now = new Date();

	const msDiff = future.getTime() - now.getTime();
	if (msDiff <= 0) return "Ya terminó";

	const minutes = Math.floor(msDiff / (1000 * 60));
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const weeks = Math.floor(days / 7);
	const months = Math.floor(days / 30);
	const years = Math.floor(days / 365);

	if (minutes < 60) return `Termina en ${minutes} min`;
	if (hours < 24) return `Termina en ${hours} ${hours === 1 ? "hora" : "hs"}`;
	if (days < 7) return `Termina en ${days} ${days === 1 ? "día" : "días"}`;
	if (days < 30) return `Termina en ${weeks} ${weeks === 1 ? "semana" : "semanas"}`;
	if (days < 365) return `Termina en ${months} ${months === 1 ? "mes" : "meses"}`;

	const remainingMonths = Math.floor((days % 365) / 30);
	let result = `Termina en ${years} ${years === 1 ? "año" : "años"}`;
	if (remainingMonths > 0) {
		result += ` y ${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`;
	}
	return result;
}

