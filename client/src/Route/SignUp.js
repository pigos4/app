import React from "react";

function SignUp() {
    /*#__PURE__*/
    return (React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        name: "signUpForm",
        action: "/auth/signUp",
        method: "post"
    }, "Register Your account here", /*#__PURE__*/React.createElement("br", null), "Usermame:", /*#__PURE__*/React.createElement("input", {
        name: "username",
        id: "username"
    }), /*#__PURE__*/React.createElement("br", null), "Password: ", /*#__PURE__*/React.createElement("input", {
        type: "password",
        name: "password",
        id: "password"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "Sign up"
    }))))
}



export default SignUp;