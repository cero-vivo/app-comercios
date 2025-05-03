import { useAboutScreen } from '@/modules/about/hooks/useAboutScreen';
import { colors } from '@/styles/colors';
import { textTheme } from '@/styles/texts';
import { getOpeningInfo } from '@/utils/date-utils';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface OpeningInfo {
    isOpen: boolean;
    closesAtTime?: string;
    closesIn?: string;
    opensAtTime?: string;
    opensIn?: string;
  }

interface Props extends React.ComponentProps<typeof View> { }

export const SnackOpenClose: FC<Props> = (props) => {

    const { businessData } = useAboutScreen();

    const { top } = useSafeAreaInsets()

    const [info, setInfo] = useState<OpeningInfo>();

    const [showBanner, setShowBanner] = useState(false);
    useEffect(() => {
        if (businessData && businessData.openingHours) {
            setInfo(getOpeningInfo(businessData.openingHours[new Date().getDay() - 1] || {}));
        }
    }, [businessData?.openingHours?.length])


    return (
        <View style={props.style}>
            <TouchableOpacity
                style={[
                    styles(top).snackButton,
                    { backgroundColor: info?.isOpen ? colors.success : colors.error },
                ]}
                onPress={() => {
                    if (businessData && businessData.openingHours) {
                        setInfo(getOpeningInfo(businessData.openingHours[new Date().getDay() - 1] || {}));
                    }
                    setShowBanner((prev) => !prev)
                }}
            >
                <Text
                    style={[
                        textTheme.tag,
                        { color: colors.white, fontSize: RFValue(10) },
                    ]}
                >
                    {info?.isOpen ? 'Abierto' : 'Cerrado'}
                </Text>
            </TouchableOpacity>

            {showBanner && (
                <Animated.View
                    entering={SlideInUp.duration(400).stiffness(123456)}
                    exiting={SlideOutUp.duration(400)}
                    style={[
                        styles(top).snackMsgBox,
                        { backgroundColor: info?.isOpen ? colors.success : colors.error }
                    ]}>
                    <Text style={[textTheme.body, { color: colors.white, paddingRight: 50 }]}>
                        {info?.isOpen
                            ? `Abierto hasta las ${info.closesAtTime} hs, cerramos en ${info.closesIn} hs`
                            : info?.opensIn && info.opensAtTime
                                ? `Cerrado hasta las ${info.opensAtTime} hs, abrimos en ${info.opensIn} hs`
                                : 'Cerrado, no volvemos a abrir esta semana'}
                    </Text>

                    <TouchableOpacity
                        style={styles(top).closeButton}
                        onPress={() => setShowBanner(false)}
                    >
                        <AntDesign
                            name="closecircle"
                            size={RFValue(18)}
                            color={colors.opacityModal}
                        />
                    </TouchableOpacity>
                </Animated.View>

            )}
        </View>
    );
};

const styles = (insetTop: number) => StyleSheet.create({
    snackButton: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 20,
        position: 'absolute',
        right: '5%',
        top: insetTop / 3
    },
    snackMsgBox: {
        minHeight: 50,
        padding: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
        position: "absolute",
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
