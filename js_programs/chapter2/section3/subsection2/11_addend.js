function make_sum(a1, a2) { return list("+", a1, a2); }

function make_product(m1, m2) { return list("*", m1, m2); }
function addend(s) { return head(tail(s)); }

addend(make_sum("x", 3));

// expected: 'x'
