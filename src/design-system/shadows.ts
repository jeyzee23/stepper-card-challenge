import { Platform, type ViewStyle } from 'react-native';

export const shadowStyles: Record<'card' | 'soft', ViewStyle> = {
  card:
    Platform.select<ViewStyle>({
      ios: {
        shadowColor: '#3A2417',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.08,
        shadowRadius: 18,
      },
      android: {
        elevation: 3,
        shadowColor: '#3A2417',
      },
      default: {
        boxShadow: '0 12px 28px rgba(58, 36, 23, 0.08)',
      },
    }) ?? {},
  soft:
    Platform.select<ViewStyle>({
      ios: {
        shadowColor: '#3A2417',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.06,
        shadowRadius: 12,
      },
      android: {
        elevation: 2,
        shadowColor: '#3A2417',
      },
      default: {
        boxShadow: '0 8px 20px rgba(58, 36, 23, 0.06)',
      },
    }) ?? {},
};
