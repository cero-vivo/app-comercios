export const colors = {
	primary: "#662D91",        // Púrpura intenso, utilizado en el logotipo y elementos destacados
	secondary: "#ED7509",      // Naranja vibrante, empleado en botones y llamadas a la acción
	tertiary: "#D1C4E9", // Lavanda suave, más saturado y con presencia
	white: "#FFFFFF",          // Blanco puro, fondo principal del sitio
	background: "#F4F1FA",     // Fondo principal
	bodyText: "#333333",       // Gris oscuro, texto principal
	opacityModal: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente para modales
	error: "#E57373",
	success: "#2E7D6F"
  } as const;
  
  
  
  export type IColors = typeof colors
  export type ColorTypes = keyof IColors
  