import React from 'react';
import { Text, View } from 'react-native';

import { capabilitiesListStyles as styles } from './CapabilitiesList.styles';

interface CapabilitiesListProps {
  features: string[];
  title: string;
  translateFeature: (feature: string) => string;
}

export function CapabilitiesList({
  features,
  title,
  translateFeature,
}: CapabilitiesListProps) {
  return (
    <View style={styles.capabilitiesCard}>
      <Text style={styles.sectionLabel}>{title}</Text>
      {features.map((feature, index) => (
        <View
          key={feature}
          style={[
            styles.featureRow,
            index < features.length - 1 ? styles.featureRowBorder : null,
          ]}
        >
          <View style={styles.featureDot} />
          <Text style={styles.featureLabel}>{translateFeature(feature)}</Text>
        </View>
      ))}
    </View>
  );
}
