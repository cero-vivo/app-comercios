/**
 * Sistema de Diseño de Colores - App de Gamificación (Modo Claro)
 * 
 * Este sistema está diseñado para ser flexible y personalizable
 * mientras mantiene consistencia en toda la aplicación.
 */

// Tipos para el sistema de colores
export type ColorHex = string;
export type ColorName = string;

// Interfaz para colores individuales
export interface Color {
	name: ColorName;
	hex: ColorHex;
	description: string;
}

// Interfaces para estados interactivos
export interface InteractiveState {
	default: ColorHex;
	hover?: ColorHex;
	focus?: ColorHex;
	disabled?: ColorHex;
}

// Interfaz para gradientes
export interface Gradient {
	name: string;
	from: ColorHex;
	to: ColorHex;
	description: string;
}

export interface InteractionsColor {
	text: InteractiveState;
	icons: InteractiveState;
	button: InteractiveState;
	separators: InteractiveState;
}
// Interfaz para niveles de membresía
export interface MembershipLevel {
	name: string;
	color: ColorHex;
	gradient: Gradient;
	style: string;
	interactions: InteractionsColor
}

/**
 * Sistema completo de colores
 */
export interface ColorSystem {
	// Colores base
	primary: {
		main: Color;
		action: Color;
		premium: Color;
	};

	secondary: {
		success: Color;
		reward: Color;
		urgent: Color;
	};

	// Neutrales y fondos
	backgrounds: {
		main: Color;
		secondary: Color;
		container: Color;
	};

	grays: {
		text: Color;
		secondaryText: Color;
		border: Color;
	};

	// Estados interactivos
	states: {
		primary: InteractiveState;
		action: InteractiveState;
	};

	// Niveles de membresía
	membershipLevels: {
		fan: MembershipLevel;
		superFan: MembershipLevel;
		hero: MembershipLevel;
	};

	// Feedback y notificaciones
	feedback: {
		success: Color;
		warning: Color;
		error: Color;
		info: Color;
	};

	// Gradientes dopaminérgicos
	gradients: {
		progress: Gradient;
		reward: Gradient;
		premium: Gradient;
	};
}

/**
 * Implementación por defecto del sistema de colores
 */
const defaultColorSystem: ColorSystem = {
	// Colores base
	primary: {
		main: {
			name: "Azul Primario",
			hex: "#2D7FF9",
			description: "Identidad de marca, botones principales, highlights"
		},
		action: {
			name: "Naranja Acción",
			hex: "#FF6B35",
			description: "Call-to-actions, botones de acción, alertas positivas"
		},
		premium: {
			name: "Violeta Premium",
			hex: "#8A4FFF",
			description: "Contenido exclusivo, elementos premium"
		}
	},

	secondary: {
		success: {
			name: "Verde Progreso",
			hex: "#26D07C",
			description: "Indicadores de avance, éxito, confirmaciones"
		},
		reward: {
			name: "Amarillo Recompensa",
			hex: "#FFCD29",
			description: "Recompensas, premios, elementos destacados"
		},
		urgent: {
			name: "Rojo Urgencia",
			hex: "#FF4060",
			description: "Alertas, ofertas por tiempo limitado, notificaciones"
		}
	},

	// Neutrales y fondos
	backgrounds: {
		main: {
			name: "Blanco Nieve",
			hex: "#FAFBFD",
			description: "Fondo principal de la app"
		},
		secondary: {
			name: "Azul Hielo",
			hex: "#F2F5FA",
			description: "Fondo secundario, secciones"
		},
		container: {
			name: "Lila Susurro",
			hex: "#EDF0F7",
			description: "Contenedores, tarjetas"
		}
	},

	grays: {
		text: {
			name: "Negro Texto",
			hex: "#2A2E34",
			description: "Texto principal"
		},
		secondaryText: {
			name: "Gris Texto",
			hex: "#73777F",
			description: "Texto secundario, información no prioritaria"
		},
		border: {
			name: "Gris Borde",
			hex: "#D1D5DB",
			description: "Bordes, separadores, elementos inactivos"
		}
	},

	// Estados interactivos
	states: {
		primary: {
			default: "#2D7FF9",
			hover: "#1C70EA",
			focus: "#0B62DB",
			disabled: "#2D7FF980"
		},
		action: {
			default: "#FF6B35",
			hover: "#F55C26",
			focus: "#E64D17",
			disabled: "#FF6B3580"
		}
	},

	// Niveles de membresía
	membershipLevels: {
		fan: {
			name: "Fan",
			color: "#2D7FF9",
			gradient: {
				name: "Fan Gradient",
				from: "#2D7FF9",
				to: "#1C70EA",
				description: "Gradiente para nivel Fan"
			},
			style: "Distintivo con diseño simple y elegante",
			interactions: {
				text: {
					default: "#D8E8FF"
				},
				icons: {
					default: "#A0C4FF"
				},
				button: {
					default: "#A0C4FF"
				},
				separators: {
					default: "#1A60C1"
				}
			}
		},
		superFan: {
			name: "Super Fan",
			color: "#8A4FFF",
			gradient: {
				name: "Super Fan Gradient",
				from: "#8A4FFF",
				to: "#6E35E0",
				description: "Gradiente para nivel Super Fan"
			},
			style: "Añade reflejos y efectos luminosos",
			interactions: {
				text: {
					default: "#E2D8FF"
				},
				icons: {
					default: "#C4B0FF"
				},
				button: {
					default: "#FFFFFF"
				},
				separators: {
					default: "#6A35D9"
				}
			}
		},
		hero: {
			name: "Héroe",
			color: "#00C2A3",
			gradient: {
				name: "Hero Gradient",
				from: "#00C2A3",
				to: "#00A3B4",
				description: "Gradiente para nivel Héroe"
			},
			style: "Incluye elementos radiantes y partículas",
			interactions: {
				text: {
					default: "#D8FFF5"
				},
				icons: {
					default: "#A0FFE8"
				},
				button: {
					default: "#A0FFE8"
				},
				separators: {
					default: "#00A087"
				}
			}
		}
	},

	// Feedback y notificaciones
	feedback: {
		success: {
			name: "Éxito",
			hex: "#26D07C",
			description: "Acciones completadas, confirmaciones"
		},
		warning: {
			name: "Advertencia",
			hex: "#FFCD29",
			description: "Alertas de precaución"
		},
		error: {
			name: "Error",
			hex: "#FF4060",
			description: "Errores, acciones bloqueadas"
		},
		info: {
			name: "Información",
			hex: "#2D7FF9",
			description: "Mensajes informativos, ayuda"
		}
	},

	// Gradientes dopaminérgicos
	gradients: {
		progress: {
			name: "Progreso",
			from: "#26D07C",
			to: "#8A4FFF",
			description: "Barras de progreso, completado de retos"
		},
		reward: {
			name: "Recompensa",
			from: "#FFCD29",
			to: "#FF6B35",
			description: "Iconos de recompensas, premios"
		},
		premium: {
			name: "Premium",
			from: "#8A4FFF",
			to: "#2D7FF9",
			description: "Contenido exclusivo, ofertas especiales"
		}
	}
};

/**
 * Función para personalizar el sistema de colores
 * Permite sobreescribir partes específicas del sistema de colores predeterminado
 */
export function createCustomColorSystem(customization: Partial<ColorSystem>): ColorSystem {
	return {
		...defaultColorSystem,
		...customization,
		// Permite personalización profunda de objetos anidados
		primary: { ...defaultColorSystem.primary, ...customization.primary },
		secondary: { ...defaultColorSystem.secondary, ...customization.secondary },
		backgrounds: { ...defaultColorSystem.backgrounds, ...customization.backgrounds },
		grays: { ...defaultColorSystem.grays, ...customization.grays },
		states: { ...defaultColorSystem.states, ...customization.states },
		membershipLevels: { ...defaultColorSystem.membershipLevels, ...customization.membershipLevels },
		feedback: { ...defaultColorSystem.feedback, ...customization.feedback },
		gradients: { ...defaultColorSystem.gradients, ...customization.gradients },
	};
}

// Exporta el sistema de colores por defecto
export const colorSystem = defaultColorSystem;

/**
 * Ejemplo de personalización:
 * 
 * const myCustomColorSystem = createCustomColorSystem({
 *   primary: {
 *     main: {
 *       name: "Mi Azul Principal",
 *       hex: "#1A65D0",
 *       description: "Mi color personalizado"
 *     }
 *   },
 *   backgrounds: {
 *     main: {
 *       hex: "#FFFFFF"
 *     }
 *   }
 * });
 */