import { useEffect, useState } from "react";

export type SwiperContainerProps = {
    items: JSX.Element[],
    currentItem?: number,
    onClose?: Function
};

export type SwiperItemProps = {
    name: string
};

const SwiperContainer = ({ items, onClose, currentItem = 0 }: SwiperContainerProps) => {
    const [_currentItem, _setCurrentItem] = useState(currentItem);
    return (
        <div className="h-screen">
            <div className="flex h-4 items-center content-center">
                {
                    items.map((item) => {
                        return (
                            <div className="h-2 w-full flex mx-1 bg-red-400 rounded-full"></div>
                        )
                    })
                }
                {/* <button className='text-red-400'><CloseIcon /></button> */}
            </div>
            {
                items.map((item, index) => {
                    return (
                        index === _currentItem ? <div>
                            {item}
                        </div> : <></>
                    )
                })
            }</div>
    )
};

const CloseIcon = () => {
    return (<svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" viewBox="0 -960 960 960"><path d="m249-183-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z" /></svg>)
}

export {
    SwiperContainer
}