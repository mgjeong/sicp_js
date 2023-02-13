function is_tagged_list(component, the_tag) {
    return is_pair(component) && head(component) === the_tag;
}
function is_primitive_function(fun) {
    return is_tagged_list(fun, "primitive");
}

function primitive_implementation(fun) { return head(tail(fun)); }
const my_primitive_plus =
    list("primitive", (x, y) => x + y );
primitive_implementation(my_primitive_plus);
is_primitive_function(my_primitive_plus);
apply_primitive_function(my_primitive_plus, list(1, 2));
