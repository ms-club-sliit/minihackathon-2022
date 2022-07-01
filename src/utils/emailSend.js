export default async function sendEmail(to, subject, body) {
    let response = await fetch(process.env.REACT_APP_EMAIL_ENDPOINT, {
        method: "post",
        body: JSON.stringify({
            email: to,
            subject: subject,
            body: body
        })
    })

    if(response.ok){
        return await response.json();
    }

    throw new Error(`Email sending failed with code ${response.status}`);
}