import { Button, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useGetAllDecksQuery } from '../store/features/deck/deckSlice';
import { useDispatch } from 'react-redux';
import { logout } from '../store/features/auth/authSlice';
import Deck from '../store/features/deck/Deck';
import * as SecureStorage from "expo-secure-store";

export default function DecksScreen() {
  const { data: decks } = useGetAllDecksQuery();
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    await SecureStorage.deleteItemAsync("flashcards-jwt");
  }

  return (
    <SafeAreaView>
      <Button title='logout' onPress={onLogout} />
      <ScrollView className="h-full px-4" contentContainerStyle={{ rowGap: 5, paddingBottom: 60}}>
        {decks?.map(deck => (
          <Deck key={deck.id} id={deck.id} userId={deck.userId} name={deck.name} isPrivate={deck.isPrivate} createdAt={deck.createdAt} numCards={deck.numCards} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}