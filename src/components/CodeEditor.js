import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";

import io, { Socket } from 'Socket.IO-client'
let socket;


export default function CodeEditor({ sessionId }) {

    const [input, setInput] = useState('')

    const onChangeHandler = (e) => {
        setInput(e)
        socket.emit('input-change', e, sessionId)
    }

    useEffect(() => {
        
        console.log('internal sessionID:', sessionId)
        socketInitializer()
    }, [])
    
    useEffect(() => {
        fetch('./themes/Monokai.json').then(
            data => data.json()
        ).then(data => {
            Editor.defineTheme('monokai', data);
            Editor.setTheme('monokai');
        })
    })
    
    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = io()

        socket.emit('join-room', sessionId)
        socket.on('connect', () => {
            console.log(`connected with user ${sessionId}`)
            
        })

        socket.on('update-input', msg => {
            setInput(msg)
        })
    }

    return (
      <div>
        <Editor
            height="90vh"
            width="50vw"
            defaultLanguage="javascript"
            defaultValue='//start typing code here'
            theme="vs-dark"
            value={input}
            onChange={(e) => onChangeHandler(e)}
        />
      </div>
    )
}
