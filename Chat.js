import { FaPaperPlane } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEllipsisV } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Chat = () => {

    const [inChat, setInChat] = useState(() =>
        {
            const storedInChat = localStorage.getItem('inChat')
            return storedInChat ? JSON.parse(storedInChat) : []    
})
    

    const [userMessage, setUserMessage] = useState('')

    useEffect(() => {
        localStorage.setItem('inChat', JSON.stringify(inChat))
    }, [inChat])
    const handleChat = () => {
        const trimmedMessage = userMessage.trim()
        if(!trimmedMessage) return
        setInChat((prevChat) => [...prevChat, {id: prevChat.length + 1, className: 'outgoing chat', item: trimmedMessage}, ])
        setUserMessage('')
    }


  return (
    <div className='container'>
        
        <section className='header'>
            <h2>Chat Area</h2>
        </section>
        
        <ul className="chatBox">
            {inChat.map((item) => (
                <li className='outgoing chat' key={item.id}>
                    <FaEllipsisV className='dot'/>
                <p>{item.item}</p>
            </li>
            ))}

        </ul>
        <div className="form">
            <textarea 
                cols="5" 
                placeholder="Send Message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                ></textarea>
            <FaPaperPlane 
                role='button'
                onClick={handleChat}
            />
            
        </div>

    </div>
  )
}

export default Chat