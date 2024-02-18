import { useReducer } from "react"

/**
 * Hook to use Local Storage data to initialize a useReducer React Hook
 * 
 * @param {string} key the key of localStorage data to be recovered
 * @param {Function} reducer the reducer function for the state
 * @param {*} initialValue the initial state value if no data is found in localStorage
 * @returns array with state and dispatch function
 * 
 */ 

export default function useLocalStorageReducer (key, reducer, initialValue) {
    const [state,dispatch] = useReducer(
        reducer,
        initialValue,
        (defaultValue)=>{
            const localData = localStorage.getItem(key);
            return localData ? JSON.parse(localData): defaultValue;
        }
    )
    
    return [state,dispatch];
}