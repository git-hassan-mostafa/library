import React, { useEffect } from 'react';
import './Draggable.css';

export default function Draggable(props: DraggableType) {
    const [isDraggable, setIsDraggable] = React.useState(false);
    const [element, setElement] = React.useState<{ elementX: number; elementY: number } | null>(null);
    const modalRef = React.useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const clientX = e.clientX;
        const clientY = e.clientY;

        const left = modalRef?.current?.offsetLeft as number;
        const top = modalRef?.current?.offsetTop as number;
        const elementX = clientX - left;
        const elementY = clientY - top;
        setElement({ elementX, elementY });

        setIsDraggable(true);

    };

    const handleMouseUp = () => {
        setIsDraggable(false);
    };

    const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {

        if (isDraggable) {
            setTimeout(() => {
                const currentStyle = modalRef.current?.style;

                if (currentStyle) {
                    const clientX = e.clientX;
                    const clientY = e.clientY;
                    currentStyle.left = `${clientX - (element?.elementX as number)}px`;
                    currentStyle.top = `${clientY - (element?.elementY as number)}px`;
                    if (props.position === 'center') {
                        if (parseInt(currentStyle.top as string) - (modalRef?.current?.offsetHeight as number) / 2 <= 0)
                            currentStyle.top = `${(modalRef?.current?.offsetHeight as number) / 2}px`
                        if (parseInt(currentStyle.left) - (modalRef?.current?.offsetWidth as number) / 2 <= 0)
                            currentStyle.left = `${(modalRef?.current?.offsetWidth as number) / 2}px`;
                        if (parseInt(currentStyle.left as string) >= window.innerWidth - (modalRef?.current?.offsetWidth as number) + (modalRef?.current?.offsetWidth as number) / 2)
                            currentStyle.left = `${window.innerWidth - (modalRef?.current?.offsetWidth as number) + (modalRef?.current?.offsetWidth as number) / 2}px`
                        if (parseInt(currentStyle.top as string) >= window.innerHeight - (modalRef?.current?.offsetHeight as number) + (modalRef?.current?.offsetHeight as number) / 2)
                            currentStyle.top = `${window.innerHeight - (modalRef?.current?.offsetHeight as number) + (modalRef?.current?.offsetHeight as number) / 2}px`
                    }
                    else {
                        if (parseInt(currentStyle.top as string) <= 0)
                            currentStyle.top = '0px'
                        if (parseInt(currentStyle.left) <= 0)
                            currentStyle.left = '0px';
                        if (parseInt(currentStyle.left as string) >= window.innerWidth - (modalRef?.current?.offsetWidth as number))
                            currentStyle.left = `${window.innerWidth - (modalRef?.current?.offsetWidth as number)}px`
                        if (parseInt(currentStyle.top as string) >= window.innerHeight - (modalRef?.current?.offsetHeight as number))
                            currentStyle.top = `${window.innerHeight - (modalRef?.current?.offsetHeight as number)}px`
                    }


                }
            }, props.delay || 0)

        }
    };

    useEffect(() => {
        if (isDraggable) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDraggable]);

    return (
        <div
            style={props.position === 'center' ? {
                cursor: 'move',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
            } : {
                cursor: 'move',
                position: 'fixed',
                top: `${props.position?.top}px`,
                left: `${props.position?.left}px`,
                right: `${props.position?.right}px`,
                bottom: `${props.position?.bottom}px`,
            }}
            ref={modalRef}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            className='__draggable__'
        >
            {props.children}
        </div>
    );
}

interface DraggableType {
    children: React.ReactNode;
    delay?: number
    position?: {
        top?: number | 0
        left?: number | 0
        right?: number | 0
        bottom?: number | 0
    } | 'center'
}
