import { Platform, PlatformColor } from 'react-native';

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
} as const;
