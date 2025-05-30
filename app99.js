function sum(...arguments) {
    return arguments.reduce((sum , el) => sum + el);
}

function min(message, ...args) {
    console.log(message);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}