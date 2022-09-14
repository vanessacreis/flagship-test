import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlagshipProvider } from '@flagship.io/react-native-sdk'
import { Square } from './src/components/square'



export default function App() {
  return (
    <FlagshipProvider
      envId='ccgvh4qa87kg02re8jl0'
      apiKey='DHiKxZFFFisUXMqwiWObkskOKQLRDrJBjNrTUIyI'
      visitorData={{}}
    >
      <View style={styles.container}>
        <Text>alouuuuu</Text>
        <Square />
        <StatusBar style="auto" />
      </View>
    </FlagshipProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
