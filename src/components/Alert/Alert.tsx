import { useState } from 'react'
import Close from '../assets/Close'
import Danger from '../assets/Danger'
import Info from '../assets/Info'
import Primary from '../assets/Primary'
import Success from '../assets/Success'
import Warning from '../assets/Warning'
import './Alert.css'

export default function Alert(props: AlertType) {

    const [isMouseDown, setIsMouseDown] = useState(false)

    const Icon = props.severity === 'success' ? Success :
        props.severity === 'warning' ? Warning :
            props.severity === 'danger' ? Danger :
                props.severity === 'info' ? Info :
                    props.severity === 'secondary' ? Primary :
                        Primary



    return (
        <div
            onMouseLeave={() => setIsMouseDown(false)}
            onMouseUp={() => setIsMouseDown(false)}
            onMouseDown={() => setIsMouseDown(true)}
            onClick={props?.onClose as () => any}
            className={props.toast ? props.position ? `${isMouseDown && '__alert-mouse-down__ '} __toast-notification__ __alert-toast__ __alert-toast-${props.position}__` : `__toast-notification__ __alert-toast__ __alert-toast-bottom-left__` : ''} >

            <div className={
                props.variant ?
                    props.variant === 'contained' ?
                        `__alert__ __alert-${props.severity}-contained__` :
                        `__alert__ __alert-${props.severity}__` :
                    '__alert__ __alert-primary__'}
            >
                <Icon className={
                    props.variant ?
                        props.variant === 'contained' ?
                            `__alert-icon__ __alert-icon-${props.severity}-contained__` :
                            `__alert-icon__ __alert-icon-${props.severity}__` :
                        '__alert-icon__ __alert-icon-primary__'
                } />
                <div> {props.text} </div>
                <div className='__close__'>
                    <Close onClose={props?.onClose as () => any} className={
                        props.variant ?
                            props.variant === 'contained' ?
                                `__alert-close-icon__ __alert-icon-${props.severity}-contained__` :
                                `__alert-close-icon__ __alert-icon-${props.severity}__` :
                            '__alert-close-icon__ __alert-icon-primary__'
                    } />
                </div>


            </div>
            <audio style={{ display: 'none' }} src={props.sound} controls autoPlay />
        </div>
    )
}


interface AlertType {
    variant?: 'contained' | 'outlined'
    severity: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | undefined
    text: string | undefined
    toast?: boolean
    position?: 'top' | 'top-left' | 'top-right' | 'left-center' | 'right-center' | 'bottom' | 'bottom-left' | 'bottom-right'
    onClose?: () => any | undefined
    className?: string | undefined
    sound?: string | undefined
}

