import React, { useState } from 'react'
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min'

export default function MyForm() {
  const [isPrompt, setIsPrompt] = useState(false);

  return (
    <div>
      <Prompt 
      when={isPrompt}
      message={'确认离开页面？'}/>
      <h2>MyForm</h2>
      <input 
      type='text'
      onChange={e=>setIsPrompt(e.target.value.trim().length !== 0
      )}/>
    </div>
  )
}
