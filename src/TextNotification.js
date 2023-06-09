import React, { useState } from 'react';
import './TextNotification.css';
import { FaImage } from "react-icons/fa";

function TextNotification() {
    //Text notification from the client
    const [state] = useState({
        from: "3342079227",
        text: "This is a message from your client about a loan",
        threadId: "123456789"
    });

    //Send message(state information)
    const [message, setMessage] = useState("");

    //print threadId in the console
    function navigateToInboxThread() {
        console.log(`navigate to threaded - ${state.threadId}`);
    }

    //handle submit and prevention of browser default behavior
    function handleSubmit(evt) {
        evt.preventDefault();
        const sentMessage = { message };
        console.log(sentMessage);
    }

    return (
        <div className='container'>
            <div className='interfaceContainer'>
                <div className='threadBox'>
                    <button className='threadBtn' onClick={navigateToInboxThread}><FaImage /></button>
                </div>
                <div className='textBox'>
                    <h1 className='newMessageFrom'>New message from:</h1>
                    <h1 className='phoneNumber'>{state.from}</h1>
                    <h1 className='messageAboutALoan'>{state.text}</h1>
                    <input type='text'
                        placeholder='Your reply to be sent'
                        className='inputText'
                        value={message}
                        onChange={(evt) => setMessage(evt.target.value)}
                    ></input>
                    <button className='replyBtn' onClick={handleSubmit}><FaImage /> Send Reply</button>
                </div>
            </div>
        </div>
    )
}

export default TextNotification;