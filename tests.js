import { compile } from "./script";
import { intoTree } from "./script";

export function runTests() {
    
}

function fib() {
    const program = `]=$100zero]=$101one]=$102one]=$103twenty^w~!~=$103zero]=$100~+$101$102]=$101$102]=$102$100]=$103~-$103one]p$100^d`;

    const result = compile(program);

    console.log(JSON.stringify(result));
}