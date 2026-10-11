import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { ThemedText } from '@/components/themed-text';
import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Pressable style={styles.container} onPress={() => router.push('/test')}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            RoutineSlim
          </ThemedText>
          <ThemedText style={styles.team}>코리아IT아카데미 1조</ThemedText>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: Spacing.three,
  },
  title: {
    textAlign: 'center',
    color: Colors.light.text,
  },
  team: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 600,
    textAlign: 'center',
    color: Colors.light.textSecondary,
  },
});
