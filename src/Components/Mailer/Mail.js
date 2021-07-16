import React, { useState } from 'react';

const Mail = () => {
    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")
    const handleSend = async (e) => {
        setSent(true)
        try {            
            await fetch("http://localhost:5000/mail/test", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'                   
                },                
                body: text
            })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            {!sent ? (
                <form onSubmit={handleSend}>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

                    <button type="submit">Send Email</button>
                </form>
            ) : (
                <h1>Email Sent</h1>
            )}

        </div>
    );
};

export default Mail;
