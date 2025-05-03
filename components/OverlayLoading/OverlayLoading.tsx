import { colors } from '@/styles/colors';
import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, Text } from 'react-native';

interface OverlayLoadingProps {
    isLoading: boolean
}

export const OverlayLoading: React.FC<OverlayLoadingProps> = (props) => {

    const { isLoading } = props;

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                animationType="fade"
                visible={isLoading}
            >
                <View style={styles.overlay}>
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={colors.tertiary} />
                        <Text style={styles.loadingText}>
                        Cargando...
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.opacityModal
    },
    loadingContainer: {
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 20,
    },
    loadingText: {
        marginTop: 10,
        color: colors.tertiary
    },
});

