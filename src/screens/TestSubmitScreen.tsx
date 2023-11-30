import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const TestSubmitScreen = () => {
  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : "flex-1"}>
      <Text>TestSubmitScreen</Text>
    </SafeAreaView>
  )
}

export default TestSubmitScreen