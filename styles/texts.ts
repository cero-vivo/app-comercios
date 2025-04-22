import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from './colors'

export const textTheme = StyleSheet.create({
  title: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: colors.secondary,
  },
  subtitle: {
    fontSize: RFValue(16),
    fontWeight: '600',
    color: colors.secondary,
  },
  body: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: colors.secondary,
  },
  small: {
    fontSize: RFValue(12),
    fontWeight: '400',
    color: colors.secondary,
  },
  tag: {
    fontSize: RFValue(12),
    fontWeight: '800',
    color: colors.white,
  },
  timestamp: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: colors.primary,
  },
  link: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: colors.secondary,
    textDecorationLine: 'underline',
  },
})
