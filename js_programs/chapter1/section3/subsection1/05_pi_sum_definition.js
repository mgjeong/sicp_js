function pi_sum(a, b) {
    return a > b
           ? 0
           : 1 / (a * (a + 2)) + pi_sum(a + 4, b);
}

8 * pi_sum(1, 1000);

// expected: 3.139592655589783
