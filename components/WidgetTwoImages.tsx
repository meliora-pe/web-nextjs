import React from 'react'
import { ImageTag } from './AboveTheFold';

const WidgetTwoImages = ({ props }: { props: { image1: ImageTag, image2: ImageTag } }) => {
    return (
        <>
            <div className="z-1 relative flex-1 sm:h-[300px] sm:w-[270px]" data-aos="fade-up" data-aos-duration="1000">
                <div className="h-full overflow-hidden rounded-2xl rtl:rotate-y-180">
                    <img
                        className="h-full w-full object-cover"
                        src={`/assets/images/${props.image1.src}`}
                        alt={props.image1.alt}
                        title={props.image1.title} />
                </div>
            </div>
            <div className="z-1 relative flex-1 sm:h-[300px] sm:w-[270px] lg:-mt-14 lg:ml-auto" data-aos="fade-left" data-aos-duration="1000">
                <div className="h-full overflow-hidden rounded-2xl rtl:rotate-y-180">
                    <img
                        className="h-full w-full object-cover"
                        src={`/assets/images/${props.image2.src}`}
                        alt={props.image2.alt}
                        title={props.image2.title} />
                </div>
            </div>
        </>
    )
}

export default WidgetTwoImages