import { ReactNode, useEffect } from "react";
import { useGetUserFromTokenQuery } from "../store/features/auth/authApiSlice";
import * as SecureStorage from "expo-secure-store";
import {
  selectCurrentToken,
  setToken,
  setUser,
} from "../store/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PersistLogin({ children }: { children: ReactNode }) {
  const token = useSelector(selectCurrentToken);
  const { data, isSuccess, isError, error } = useGetUserFromTokenQuery(undefined, {
    skip: !token,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const token = await SecureStorage.getItemAsync("flashcards-jwt");
        if (token) {
          dispatch(setToken(token));
        }
      } catch (err) {
        console.error(err);
      }
    };
    retrieveToken();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data.userDTO));
    }
  }, [isSuccess, data]);

  useEffect(() => {
    const removeToken = async () => {
      try {
        await SecureStorage.deleteItemAsync("flashcards-jwt");
        dispatch(setToken(null));
        dispatch(setUser(null));
      } catch (err) {
        console.error(err)
      }
    }
    
    if (error && "status" in error && error.status === 500) {
      removeToken();
    }
  }, [isError])

  return children;
}
