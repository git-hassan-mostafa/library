import React from 'react'
import './Input.css'
export default function Input(props: InputType) {
    const [isFocused,setIsFocused] = React.useState(false)
    return (
        <div className={`form ${isFocused?'focused':''}`}>
            <button>
                {
                    <>
                        {
                            props?.icon || <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        }
                    </>
                }

            </button>
            <input onBlur={()=>setIsFocused(false)} onFocus={()=>setIsFocused(true)} onChange={props?.onChange} className={"input "+props.className} placeholder={' '+props?.placeholder} type={props.type || 'text'} />
        </div>
    )
}

interface InputType {
    icon?: React.ComponentType | React.ReactElement | undefined
    placeholder?:string | undefined
    type?:React.HTMLInputTypeAttribute | undefined
    className? : string | undefined
    onChange?:React.ChangeEventHandler<HTMLInputElement> | undefined

}
