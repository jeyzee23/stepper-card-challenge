import type { LayoutChangeEvent } from 'react-native';

export interface HomeScreenFooterProps {
  backLabel: string;
  bottomInset: number;
  isFirstStep: boolean;
  nextLabel: string;
  onBack: () => void;
  onLayout: (event: LayoutChangeEvent) => void;
  onNext: () => void;
}
