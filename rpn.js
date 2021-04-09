const args = process.argv;

var stack = [];

for (let i = 2; i < args.length; i++) {
    const arg = args[i];
    if (arg === "+") {
        var val1 = stack.pop();
        var val2 = stack.pop();
        stack.push(val1 + val2);
    } else if (arg === "-") {
        var val1 = stack.pop();
        var val2 = stack.pop();
        stack.push(val1 - val2);
    } else if (arg === "*") {
        var val1 = stack.pop();
        var val2 = stack.pop();
        stack.push(val1 * val2);
    } else {
        stack.push(parseFloat(arg));
    }
}

console.log("Result: " + stack[0]);
