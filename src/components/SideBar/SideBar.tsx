import React, { useEffect, useRef, useState } from 'react'
import './SideBar.css'

export default function SideBar(props: SideBarType) {
    const [open, isOpen] = useState(false)
    const sideBarRef = useRef<HTMLElement | null>(null)

    const handleOpen = () => {
        if (sideBarRef.current)
            sideBarRef.current.classList.add('__side-bar-open__')
    }

    const handleClose = () => {
        if (sideBarRef.current)
            sideBarRef.current.classList.remove('__side-bar-open__')
    }

    return (
        <>
        <button onClick={handleOpen}>open</button>
        <button onClick={handleClose}>close</button>
        <aside
            ref={sideBarRef}
            className={`${props.className} __side-bar__`}>
            {props.children}
        </aside>
        </>
        
    )
}

interface SideBarType {
    children: React.ReactNode | undefined
    className?: string | undefined
    open?: boolean | undefined
    onOpen?: () => any | undefined
    onClose?: () => any | undefined
}