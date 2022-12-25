import React, { ReactNode } from 'react'

type TextErrorProps = {
  children: React.ReactNode
}

function TextError({children}: TextErrorProps) {
  return (
    <div >
      {children}
    </div>
  )
}

export default TextError