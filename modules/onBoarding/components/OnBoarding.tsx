import { colors } from '@/styles/colors'
import React, { useEffect, useMemo } from 'react'
import Swiper from 'react-native-swiper'
import { onBoardingPresenter } from '../presentation/onboarding-presenter'
import { OnBoardingActionsResolver } from '../presentation/onboarding-actions-resolver'
import { OnBoardingSlice } from '../model/entities'
import { HttpStates } from '@/http/HttpStates'
import { ActivityIndicator, DimensionValue, StyleSheet, Text, View } from 'react-native'
import { usePaddings } from '@/components/screen/paddings'
import { Image } from 'expo-image'
import { shadowStyle } from '@/styles/shadows'
import { textTheme } from '@/styles/texts'
import { RFValue } from 'react-native-responsive-fontsize'
import { AppButton } from '@/components/Button/AppButton'
import { useRouter } from 'expo-router'
import { useAppStore } from '@/store/app-store'

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export const OnBoarding = () => {

    const [onBoardingData, setOnBoardingData] = React.useState<OnBoardingSlice[]>([])
    const [httpState, setHttpState] = React.useState<HttpStates>("idle")

    const paddings = usePaddings()

    const router = useRouter();

    const toggleBranchSelectorModal = useAppStore(state => state.toggleBranchSelectorModal)

    const screenHandler: OnBoardingActionsResolver = {
        getOnBoardingDataSuccess: (data) => {
            setHttpState("success")
            setOnBoardingData(data.data)
        },
        getOnBoardingDataError: (err) => {
            setHttpState("fail")
            console.log(err)
        }
    }

    useEffect(() => {
        setHttpState("loading")
        presenter?.getOnBoardingData()
    }, [])

    const presenter = onBoardingPresenter(screenHandler)

    const slices = useMemo(() => {
        return onBoardingData.map((item, index) => {
            const isLast = index === onBoardingData.length - 1
            return (
                <View style={styles(paddings).slice} key={item.title}>
                    <Image
                        style={styles(paddings).logo}
                        contentFit="contain"
                        transition={100}
                        placeholder={{ blurhash }}
                        source={require("@/assets/images/logo-1.png")}
                        cachePolicy="memory"
                        priority={"high"}
                    />
                    <Text style={styles(paddings).title}>{item.title}</Text>
                    <Text style={styles(paddings).description}>{item.description}</Text>
                    {isLast && <AppButton text="Ingresar a la app" style={{marginTop: 20, maxWidth: "70%", alignSelf: "center"}} onPress={toggleBranchSelectorModal}/>}
                </View>
            )
        })
    }, [onBoardingData?.length])

    return httpState === "loading" ? <ActivityIndicator size="large" color={colors.secondary} /> : (
        <Swiper
            activeDotStyle={{ width: 30 }}
            dotColor={colors.primary}
            activeDotColor={colors.secondary}
            loop={false}
            style={{ backgroundColor: colors.tertiary }}
        >
            {slices}
        </Swiper>
    )
}


const styles = (paddings: { screenPaddingTop: number, screenLogoPaddingTop: number, paddingScreenHorizontal: string }) => StyleSheet.create({
    slice: {
        justifyContent: "center",
        flexGrow: 1,
        paddingHorizontal: paddings.paddingScreenHorizontal as DimensionValue,
        gap: 20
    },
    logo: {
        width: "90%",
        height: 85,
        alignSelf: "center",
        ...shadowStyle("primary").medium
    },
    title: {
        ...textTheme.title,
        color: colors.secondary,
        fontSize: RFValue(25)
    },
    description: {
        ...textTheme.subtitle,
        color: colors.primary,
        fontSize: RFValue(19),
        fontWeight: "regular",
        lineHeight: 30
    }
})