import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppStore } from '@/store/app-store';

const SHOW_ONBOARDING_KEY = "SHOW_ONBOARDING_KEY"

export const useInitApp = () => {

    const setShowOnboarding = useAppStore(state => state.setShowOnboarding)

    const showOnboarding = async () : Promise<boolean> => {
        try {
            const value = await AsyncStorage.getItem(SHOW_ONBOARDING_KEY) || undefined
            if (value == null) {
                await AsyncStorage.setItem(SHOW_ONBOARDING_KEY, "true");
                return true
            } else return false
        } catch (e) {
            console.log("error", e)
            return true
        }
    }
    const checkOnBoardingState = async () => {
        try {
            const onboarding = await showOnboarding()
            setShowOnboarding(onboarding)
        } catch (e) {
            console.log("error", e)
        }
    }

    return {
        checkOnBoardingState
    }
}
