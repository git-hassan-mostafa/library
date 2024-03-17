import Close from '../assets/Close'
import './Modal.css'
export default function Modal(props: ModalType) {

    const handleClose = () => {

    }
    return (
        <div style={{
            backgroundColor: props.backgroundColor || 'white',
            borderRadius: `${props.rounded || 0}px`
        }} className={`__modal__ ${props.center ? '__modal-center__' : ' '} `}>
            <div className="__modal-header__">
                <h2 style={{
                    color: props.titleColor || 'black'
                }}> {(props?.title?.length as number) > 20 ? props.title?.toUpperCase().slice(0, 20) + '...' : props.title?.toUpperCase()} </h2>
                <Close width={35} height={35} color={props.closeColor || 'black'} className='__modal-close__' onClose={handleClose} />
            </div>
            <p style={{
                color: props.messageColor || 'rgb(92, 90, 90)'
            }} className="__modal-message__">
                {props.message}
            </p>
            <div className="__modal-btns__">
                {props.confirm && <button style={{
                    color: props.buttonsColor || 'black',
                    border:` 1px solid ${props.buttonsColor || 'black'}`
                }} onClick={props.onCancel} className="__modal-cancel__">cancel</button>}
                <button
                    style={{
                        backgroundColor: props.buttonsColor || 'black',
                        color: props.backgroundColor || 'white',
                    }}
                    onClick={props.onOk} className="__modal-ok__"> {props.confirm ? 'confirm' : 'ok'}</button>
            </div>
        </div>
    )
}

interface ModalType {
    rounded?: number | undefined
    messageColor?: string | undefined
    backgroundColor?: string | undefined
    closeColor?:string | undefined
    buttonsColor?:string | undefined
    titleColor?: string | undefined
    title: string | undefined
    message: string | undefined
    confirm?: boolean | undefined
    onOk: () => void | undefined
    onCancel?: () => void | undefined
    onClose?: () => void | undefined
    className?: string | undefined
    center?: boolean | undefined
}