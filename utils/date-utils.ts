import { OpeningInfo } from "@/components/SnackOpenClose/SnackOpenClose";


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

export type OpeningHours = {
	day: "0" | "1" | "2" | "3" | "4" | "5" | "6"
	shifts?: {
		from?: string // "06:00"
		to?: string   // "20:00"
	}[]
}

const parseTime = (timeStr: string, baseDate: Date): Date => {
	const [hours, minutes] = timeStr.split(":").map(Number);
	const result = new Date(baseDate);
	result.setHours(hours, minutes, 0, 0);
	return result;
};

export const msToHMS = (ms: number): string => {
	const totalSeconds = Math.floor(ms / 1000);
	const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
	const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
	const seconds = String(totalSeconds % 60).padStart(2, "0");
	return `${hours}:${minutes}:${seconds}`;
};

export const getOpeningInfo = (today: OpeningHours, week: OpeningHours[]): OpeningInfo => {
	const now = new Date();
	const currentTime = now.getTime();

	const todaySchedule = today.shifts || [];

	// Buscar si actualmente está dentro de algún turno
	for (const shift of todaySchedule) {
		if (!shift.from || !shift.to) continue;

		const from = parseTime(shift.from, now);
		const to = parseTime(shift.to, now);

		if (currentTime >= from.getTime() && currentTime <= to.getTime()) {
			return {
				isOpen: true,
				closesAtTime: shift.to,
				closesIn: msToHMS(to.getTime() - currentTime),
			};
		}
	}

	// Si no está abierto, buscar la próxima apertura
	let hrsAfter = 0;
	for (let i = now.getDay(); i < 7; i++) {  // Aseguramos que recorremos toda la semana
		const dayIndex = i;  // Volver al día 0 si llegamos al final de la semana

		const futureShifts = week[dayIndex]?.shifts || [];

		let closestShift = null;
		let closestOpenTime = Infinity;  // Usamos un valor grande para comparar

		// Buscar el turno más cercano en el futuro
		for (const shift of futureShifts) {
			if (!shift.from) continue;

			const openDate = parseTime(shift.from, now);

			// Verificamos si el turno es posterior al tiempo actual
			if (openDate.getTime() > currentTime && openDate.getTime() < closestOpenTime) {
				closestOpenTime = openDate.getTime();
				closestShift = shift;
			}
		}
		


		// Si encontramos un turno futuro, devolver la información
		if (closestShift) {
			const openDate = parseTime(closestShift.from, now);
			return {
				isOpen: false,
				opensAtTime: closestShift.from,
				opensIn: msToHMS((openDate.getTime() - currentTime) + (hrsAfter* 60*60*1000)),
			};
		} else {
			hrsAfter += 24;
		}
	}

	return {
		isOpen: false,
	};
};


export const hmsToMs = (hms: string): number => {
	const [hours, minutes, seconds] = hms.split(':').map(Number);
	return ((hours * 60 * 60) + (minutes * 60) + seconds) * 1000;
};

