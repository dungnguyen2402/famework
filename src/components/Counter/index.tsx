// import { useContext } from "react";
import { decrement, increament, increase } from "@/slices/Couter";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "@/store/hook";
// import { CounterContext } from "@/Context/CounterContext";

const Counter = () => {
    // const { count, increment, decrement } = useContext(CounterContext);
    // const { state, dispatch } = useContext(CounterContext);
    // console.log(state);

    const dispatch = useAppDispatch()
    const { count } = useAppSelector((state: any) => state.counter)

    return (
        <div>
            Counter: {count}
            <Button type="primary" onClick={() => dispatch(increament())}>
                Increment
            </Button>
            <Button type="primary" onClick={() => dispatch(decrement())}>
                Decrement
            </Button>
            <Button type="primary" onClick={() => dispatch(increase(10))}>
                Increase
            </Button>
        </div>
    );
};

export default Counter;