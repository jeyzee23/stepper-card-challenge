import {
  Platform,
  PlatformColor,
  StyleSheet,
  type ViewStyle,
} from 'react-native';

const iosColor = (name: string, fallback: string) =>
  Platform.OS === 'ios' ? PlatformColor(name) : fallback;

export const colors = {
  background: iosColor('systemGroupedBackground', '#F2F2F7'),
  surface: iosColor('secondarySystemGroupedBackground', '#FFFFFF'),
  surfaceElevated: iosColor('systemBackground', '#FFFFFF'),
  surfaceMuted: iosColor('tertiarySystemGroupedBackground', '#F2F2F7'),
  fill: iosColor('tertiarySystemFill', '#ECECF1'),
  ink: iosColor('label', '#111111'),
  text: iosColor('label', '#111111'),
  textMuted: iosColor('secondaryLabel', '#636366'),
  textSubtle: iosColor('tertiaryLabel', '#8E8E93'),
  line: iosColor('separator', '#C6C6C8'),
  accent: iosColor('systemBlue', '#0A84FF'),
  accentSoft: iosColor('systemGray6', '#F2F2F7'),
  accentStrong: iosColor('systemBlue', '#0A84FF'),
  success: iosColor('systemGreen', '#34C759'),
  successSoft: '#E6F7EC',
  warning: iosColor('systemOrange', '#FF9F0A'),
  warningSoft: '#FFF4E5',
  danger: iosColor('systemRed', '#FF3B30'),
  dangerSoft: '#FFE9E7',
  info: iosColor('systemIndigo', '#5856D6'),
  infoSoft: '#ECEBFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 20,
  pill: 999,
};

export const hairlineWidth = StyleSheet.hairlineWidth;

export const shadowStyles: Record<'card' | 'soft', ViewStyle> = {
  card:
    Platform.select<ViewStyle>({
      ios: {
        shadowColor: '#10233A',
        shadowOffset: {
          width: 0,
          height: 18,
        },
        shadowOpacity: 0.1,
        shadowRadius: 22,
      },
      android: {
        elevation: 8,
        shadowColor: '#10233A',
      },
      default: {
        boxShadow: '0 18px 44px rgba(16, 35, 58, 0.10)',
      },
    }) ?? {},
  soft:
    Platform.select<ViewStyle>({
      ios: {
        shadowColor: '#10233A',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
        shadowColor: '#10233A',
      },
      default: {
        boxShadow: '0 8px 24px rgba(16, 35, 58, 0.08)',
      },
    }) ?? {},
};

export const typography = {
  titleFamily: 'System',
  bodyFamily: 'System',
};
