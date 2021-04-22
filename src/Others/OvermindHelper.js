// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";
import {Logics} from "./Logics";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        counter: 0
    },
    actions: {
        setCartCounter({state}, counter) {
            state.counter = counter
        },
    }
});
