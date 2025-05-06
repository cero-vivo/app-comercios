import { AppButton } from '@/components/Button/AppButton';
import { LogoHeader } from '@/components/screen/LogoHeader';
import { usePaddings } from '@/components/screen/paddings';
import { useAppStore } from '@/store/app-store';
import { colors } from '@/styles/colors'
import { textTheme } from '@/styles/texts';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useMemo } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';

const branches = [
    {
        id: "1",
        address: "Godoy Cruz 1743, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "2",
        address: "Av. San Martín 1234, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "3",
        address: "Av. San Martín 1432, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "4",
        address: "Av. San Cruz 453, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "5",
        address: "Godoy Cruz 1743, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "6",
        address: "Av. San Martín 1234, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "7",
        address: "Av. San Martín 1432, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "8",
        address: "Av. San Cruz 453, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "9",
        address: "Godoy Cruz 1743, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "10",
        address: "Av. San Martín 1234, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "11",
        address: "Av. San Martín 1432, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },
    {
        id: "12",
        address: "Av. San Cruz 453, C1414CYK C1414CYK, Cdad. Autónoma de Buenos Aires"
    },

]

export const BracnhSelectorModal = () => {

    const showBranchSelectorModal = useAppStore((state) => state.showBranchSelectorModal);
    const toggleBranchSelectorModal = useAppStore((state) => state.toggleBranchSelectorModal);
    const selectedBranchId = useAppStore((state) => state.branchSelected?.id);
    const setBranchSelected = useAppStore((state) => state.setBranchSelected);

    const paddings = usePaddings()

    const branchesSelectors = useMemo(() => {
        return branches.map((branch) => {
            const branchIsSelected = branch.id === selectedBranchId
            const selectBranch = () => setBranchSelected(branch)
            return (
                <TouchableOpacity onPress={selectBranch} key={branch.id} style={[styles.branchButton, { backgroundColor: branchIsSelected ? colors.primary : colors.tertiary }]}>
                    <Text style={[textTheme.body, { color: branchIsSelected ? colors.secondary : colors.primary }]}>{branch.address}</Text>
                </TouchableOpacity>
            )
        })
    }, [branches?.length, selectedBranchId])

    const submitBranchSelection = () => {
        toggleBranchSelectorModal()
        router.push("/(tabs)")
    }


    return (
        <Modal
            isVisible={showBranchSelectorModal}
            animationIn={'slideInUp'}
            animationOut={'slideOutUp'}
            animationOutTiming={300}
            backdropColor={colors.primary}
            backdropOpacity={0.3}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
        >
            <SafeAreaView style={styles.box}>
     

                <LogoHeader top={RFValue(30)} imageStyle={{ width: "70%" }} />

                <Text style={[textTheme.title, { paddingTop: paddings.screenLogoPaddingTop + 40 }]}>Elegí tu sucursal</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: "center", gap: 10, paddingTop: 20, paddingBottom:selectedBranchId ? 85 + 40 : 20 }}>
                    {branchesSelectors}
                </ScrollView>
                {selectedBranchId &&
                    <AppButton
                        onPress={submitBranchSelection}
                        text="Confirmar"
                        style={{ position: "absolute", bottom: "5%" }}
                    />
                }
            </SafeAreaView>
        </Modal>
    )
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: colors.background,
        height: "90%",
        width: "100%",
        borderRadius: RFValue(12),
        alignItems: "center",
        paddingVertical: "5%",
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    branchButton: {
        width: "95%",
        height: 85,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.tertiary,
        paddingHorizontal: "5%"
    }
});
