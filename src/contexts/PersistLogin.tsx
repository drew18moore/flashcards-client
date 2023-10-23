import { ReactNode, useEffect } from 'react'
import { useGetUserFromTokenQuery } from '../store/features/auth/authApiSlice';
import * as SecureStorage from "expo-secure-store";
import { selectCurrentToken, setToken, setUser } from '../store/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function PersistLogin({ children }: { children: ReactNode }) {
  const token = useSelector(selectCurrentToken);
  // const { data } = useGetUserFromTokenQuery({ skip: !token });
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const token = await SecureStorage.getItemAsync("flashcards-jwt");
        if (token) {
          dispatch(setToken(token));
          // dispatch(setUser(data?.userDTO || null))
        }
      } catch (err) {
        console.error(err);
      }
    }
    retrieveToken();
  }, [])

  return children;
}