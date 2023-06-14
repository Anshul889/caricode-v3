import React from 'react'
import { AiChatBox1, AiChatBox2, ChatContainer, Typing1, Typing2, UserChatBox2, UserChatBox1 } from './styles'

const Chat = () => {
  return (
    <ChatContainer>
      <UserChatBox1>Explain quantum computing in simple terms</UserChatBox1>
      <Typing1>
        <span></span>
        <span></span>
        <span></span>
      </Typing1>
      <AiChatBox1>
        Sure! Quantum computing is a fascinating field that deals with computers
        that work differently from the ones we are used to. Instead of using
        regular bits to store and process information (which can represent
        either a 0 or a 1), quantum computers use something called quantum bits
        or qubits.
      </AiChatBox1>
      {/* <UserChatBox2>What is your favorite thing about being an AI?</UserChatBox2>
      <Typing2>
        <span></span>
        <span></span>
        <span></span>
      </Typing2>
      <AiChatBox2>
        As an AI, I don't have personal feelings or preferences, so I don't have
        a favorite thing about being an AI. However, one of the advantages of
        being an AI is the ability to gather and process vast amounts of
        information quickly.
      </AiChatBox2> */}
    </ChatContainer>
  )
}

export default Chat
