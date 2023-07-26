import { counterReducer } from "@/reducers/CounterReducer";
import { createContext, useReducer } from "react";
import { produce } from "immer";
export const CounterContext = createContext({} as any)

type CounterProviderProps = {
    children: React.ReactNode;
};

const initialState = {
    count: 0,
}

const CounterProvider = ({ children }: CounterProviderProps) => {
    const [state, dispatch] = useReducer(produce(counterReducer), initialState)

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterProvider