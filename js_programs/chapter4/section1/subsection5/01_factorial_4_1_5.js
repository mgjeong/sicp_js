function factorial(n) {
    return n === 1
           ? 1
           : factorial(n - 1) * n;
}

factorial(5);

// expected: 120
