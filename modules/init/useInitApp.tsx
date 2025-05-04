import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useInitApp = () => {

    const showOnboarding = async () : Promise<boolean> => {
        try {
            const value = await AsyncStorage.getItem('displayOnboarding') || undefined
            console.log("🚀 ~ showOnaboarding ~ value:", value)
            if (/* value == null */true) {
                await AsyncStorage.setItem('displayOnboarding', "true");
                return true
            } else return false
        } catch (e) {
            console.log("error", e)
            return true
        }
    }

    return {
        showOnboarding
    }
}
