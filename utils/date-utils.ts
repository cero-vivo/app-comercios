import { OpeningHours } from "@/modules/about/model/entities";

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

const parseHour = (time: string): number => {
	const [h, m] = time.split(":").map(Number);
	return h * 60 + m;
};

export const isOpen = (openingHours: OpeningHours[]) => {
	const now = new Date();
	const nowMinutes = now.getHours() * 60 + now.getMinutes();

	const jsDay = now.getDay();
	const dayIndex = (jsDay + 6) % 7;

	const todaySchedule = openingHours[dayIndex];

	const fromMinutes = parseHour(todaySchedule.from);
	let toMinutes = parseHour(todaySchedule.to);
	if (toMinutes <= fromMinutes) {
		toMinutes += 1440;
	}

	const isOpenToday = nowMinutes >= fromMinutes && nowMinutes < toMinutes;

	const yesterdayIndex = (dayIndex - 1 + 7) % 7;
	const yesterdaySchedule = openingHours[yesterdayIndex];

	const yFrom = parseHour(yesterdaySchedule.from);
	let yTo = parseHour(yesterdaySchedule.to);
	if (yTo <= yFrom) {
		yTo += 1440;
	}

	const isOpenFromYesterday = nowMinutes + 1440 >= yFrom && nowMinutes + 1440 < yTo;

	const result = isOpenToday || isOpenFromYesterday;

	return result;
};

const formatTime = (totalSeconds: number): string => {
	const h = Math.floor(totalSeconds / 3600);
	const m = Math.floor((totalSeconds % 3600) / 60);
	const s = totalSeconds % 60;
	return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const getTimeUntilChange = (openingHours: OpeningHours[]): string => {
	const now = new Date();
	const nowMinutes = now.getHours() * 60 + now.getMinutes();
	const nowSeconds = now.getSeconds();

	const jsDay = now.getDay();
	const dayIndex = (jsDay + 6) % 7;

	const parseSchedule = (dayOffset: number) => {
		const index = (dayIndex + dayOffset + 7) % 7;
		const schedule = openingHours[index];
		const from = parseHour(schedule.from) + dayOffset * 1440;
		let to = parseHour(schedule.to) + dayOffset * 1440;
		if (to <= from) to += 1440;
		return { from, to, labelFrom: schedule.from, labelTo: schedule.to };
	};

	const today = parseSchedule(0);
	const yesterday = parseSchedule(-1);

	if (nowMinutes >= today.from && nowMinutes < today.to) {
		const remaining = (today.to - nowMinutes) * 60 - nowSeconds;
		return `Abierto hasta las ${today.labelTo} hs, cerramos en ${formatTime(remaining)} hs`;
	}

	if (nowMinutes + 1440 >= yesterday.from && nowMinutes + 1440 < yesterday.to) {
		const remaining = (yesterday.to - (nowMinutes + 1440)) * 60 - nowSeconds;
		return `Abierto hasta las ${yesterday.labelTo} hs, cerramos en ${formatTime(remaining)} hs`;
	}

	for (let i = 0; i < 7; i++) {
		const future = parseSchedule(i);
		if (nowMinutes < future.from) {
			const remaining = (future.from - nowMinutes) * 60 - nowSeconds;
			return `Cerrado hasta las ${future.labelFrom} hs, abrimos en ${formatTime(remaining)} hs`;
		}
	}

	return "Cerrado, sin próximas aperturas programadas.";
};
