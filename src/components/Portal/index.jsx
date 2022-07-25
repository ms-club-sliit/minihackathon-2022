import React from "react";

function Portal({ children }) {
    return ReactDOM.createPortal(children, 'portal-root')
}

export default Portal;