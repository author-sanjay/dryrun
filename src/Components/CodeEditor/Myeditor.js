import React from 'react'
import Editor from '@monaco-editor/react'
const Myeditor = () => {
  return (
    
    <Editor
    height="75%"
    // language="clang"
    theme='hc-black'
  
    defaultLanguage='javascript'
    defaultValue="// some comment"
  />
  
  )
}

export default Myeditor