import { View, Text } from 'react-native'
import React from 'react'

const WrittenQuestion = ({ questionText, answer }: WrittenQuestion) => {
  return (
    <View>
      <Text>WrittenQuestion</Text>
      <Text>{questionText}</Text>
    </View>
  )
}

export default WrittenQuestion