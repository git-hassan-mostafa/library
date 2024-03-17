import React from 'react'
import './Container.css'

export default function Container(props:ContainerType) {
  return (
    <div className={!props.size ? `__container__`:`__container-${props.size}__`}>
      {props.children}
    </div>
  )
}

interface ContainerType  {
    children:React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'
}
