import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const SlidesLayout = (props: { tabs: { title: string, content: any }[] }) => {
    const [itemStates, setItemState] = useState<any>({});

    const handleClick = (e: any, _index: number) => {
        e.preventDefault();
        setItemState({ ...itemStates, [_index]: !itemStates[_index] });
    };

    const classes = "bg-gray-100 text-gray-900 p-4";
    const getClass = (_index: number) => {
        if (itemStates[_index]) {
            return classes + "border-b-2 border-blue-500";
        }
        return classes;
    };

    return (
        <div>
            <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}  >
                {props.tabs.map((tab, _index) => (
                    <SwiperSlide key={_index} >
                        <div key={_index} onClick={(e) => handleClick(e, _index)} className={getClass(_index)}>
                            {tab.title}
                        </div>
                        <div className="mt-4">
                            {tab.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
