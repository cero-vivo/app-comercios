export const colors = {
	primary: "#38737B",
	secondary: "#1F2937",
	tertiary: "#D2EDF3",
	white: "#FFFFFF",
	background: "#F5F5F5",
	bodyText: "#6B7280",
	opacityModal: 'rgba(0, 0, 0, 0.5)',
  } as const
  
  export type IColors = typeof colors
  export type ColorTypes = keyof IColors
  