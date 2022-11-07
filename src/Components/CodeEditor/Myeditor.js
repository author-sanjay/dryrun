import React from 'react'
import Editor from '@monaco-editor/react'
const Myeditor = () => {
  return (
    
    <Editor
    height="75%"
    // language="clang"
    theme='vs-dark'
    defaultLanguage='javascript'
    defaultValue="// some comment"
  />
  
  )
}

export default Myeditor