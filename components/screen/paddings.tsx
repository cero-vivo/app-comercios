import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const usePaddings = () => {

    const insets = useSafeAreaInsets()

    const logoHeight = 85

    return {
        screenPaddingBottom: insets?.bottom + (Platform.OS === "android" ? 130 : 80),
        screenLogoPaddingTop: insets?.top + logoHeight + (Platform.OS === "android" ? 20 : -40),
        screenPaddingTop: insets?.top + (Platform.OS === "android" ? 20 : -40),
        paddingScreenHorizontal: "5%"
    }
}
