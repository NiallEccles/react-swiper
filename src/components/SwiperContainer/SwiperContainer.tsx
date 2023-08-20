import { useState } from "react";

export type SwiperContainerProps = {
    items: JSX.Element[],
};

export type SwiperItemProps = {
    name: string
};

const SwiperContainer = ({ items }: SwiperContainerProps) => {
    const [currentItem, setCurrentItem] = useState(0);
    return (
        <div>
            {items.length}
            {
                items.map((item, index) => {
                    return (
                        <div className={index !== currentItem ? 'hidden' : ''}>
                            {item}
                        </div>
                    )
                })
            }</div>
    )
};

export {
    SwiperContainer
}