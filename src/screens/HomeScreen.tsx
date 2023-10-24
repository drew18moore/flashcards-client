import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useGetAllDecksQuery } from '../store/features/deck/deckSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/features/auth/authSlice';
import Deck from '../store/features/deck/Deck';

export default function HomeScreen() {
  const { data: decks } = useGetAllDecksQuery();
  const user = useSelector(selectCurrentUser);

  return (
    <SafeAreaView>
      <ScrollView className="h-full px-4" contentContainerStyle={{ rowGap: 5, paddingBottom: 60}}>
        {decks?.map(deck => (
          <Deck key={deck.id} id={deck.id} userId={deck.userId} name={deck.name} isPrivate={deck.isPrivate} createdAt={deck.createdAt} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}