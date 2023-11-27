import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { selectTestQuestions } from '../store/features/deck/testSlice'

const TestScreen = () => {
  const testQuestions = useSelector(selectTestQuestions);
  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <Text>TestScreen</Text>
      <View className="space-y-2">
        {testQuestions?.map(question => (
          <View>
            <Text>{question.questionText}</Text>
            <Text>{question.questionType}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default TestScreen