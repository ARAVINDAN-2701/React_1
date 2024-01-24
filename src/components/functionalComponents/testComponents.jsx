// function <function component name>{} this is how we create a functional component
// component name should start in capital letter
import React from "react";
function Test() {
    // contents inside the return is jsx which is further boiled down to tags
    return (
        <div><p>This is functional component</p></div>
    )
}
// need to export to use it i another file
export default Test;