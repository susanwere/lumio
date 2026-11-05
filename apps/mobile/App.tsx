import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text accessibilityRole="header" style={styles.title}>
        Welcome to Lumio
      </Text>
      <Text style={styles.description}>
        Your journey to conversational fluency starts here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    padding: 32,
  },
  title: {
    color: '#172554',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    color: '#475569',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 16,
    textAlign: 'center',
    maxWidth: 360,
  },
});
