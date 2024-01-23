import React from "react";

function Footer() {

    const date = new Date();
    return <footer> 
    <h1>Copyright@{date.getFullYear()}</h1>
    </footer>
}

export default Footer;