import React from "react";

export default function EmailTemplate({ image }) {
    return (
        <html>
            <body>
                <h1>Test Email</h1>
                <img src={image} alt="Your Ticket"></img>
            </body>
        </html>
    )
}