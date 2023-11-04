import { ReactNode, useEffect } from "react";
import * as SecureStorage from "expo-secure-store";
import { setToken, setUser } from "../store/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Platform } from "react-native";

export default function PersistLogin({ children }: { children: ReactNode }) {
  const BASE_URL =
    Platform.OS === "android"
      ? process.env.EXPO_PUBLIC_BASE_URL_ANDROID
      : process.env.EXPO_PUBLIC_BASE_URL;

  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const token = await SecureStorage.getItemAsync("flashcards-jwt");
        if (token) {
          dispatch(setToken(token));
          const res = await fetch(`${BASE_URL}/auth/persist`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (res.ok) {
            const data = await res.json();
            dispatch(setUser(data.userDTO));
          } else {
            SecureStorage.deleteItemAsync("flashcards-jwt");
            setUser(null);
            setToken(null);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    retrieveToken();
  }, []);

  return children;
}
