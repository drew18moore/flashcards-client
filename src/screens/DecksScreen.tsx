import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useGetAllDecksQuery } from '../store/features/deck/deckSlice';
import Deck from '../store/features/deck/Deck';

export default function DecksScreen() {
  const { data: decks } = useGetAllDecksQuery();

  return (
    <SafeAreaView>
      <ScrollView className="h-full px-4" contentContainerStyle={{ rowGap: 5, paddingBottom: 60}}>
        {decks?.map(deck => (
          <Deck key={deck.id} id={deck.id} userId={deck.userId} name={deck.name} isPrivate={deck.isPrivate} createdAt={deck.createdAt} numCards={deck.numCards} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}