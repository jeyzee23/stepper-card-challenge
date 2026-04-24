import { Platform, type ViewStyle } from 'react-native';

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
