import React from 'react';
import { CtaTag, ImageTag } from './AboveTheFold';
import Link from 'next/link';
import { PhotoSlider } from './PhotoSlider';

interface BeforeAfterProps {
    title: string;
    text: string;
    cta?: CtaTag;
    before: ImageTag;
    after: ImageTag;
}

const BeforeAfterPic = ({ props }: { props: BeforeAfterProps }) => {
    return (
        <div className="relative flex flex-col items-center justify-between gap-[43px] overflow-hidden rounded-2xl bg-black bg-[url(/assets/images/app-bg.png)] bg-cover bg-no-repeat py-10 px-4 text-center dark:bg-white/5 md:p-16 md:ltr:text-left md:rtl:text-right lg:flex-row" data-aos="zoom-in" data-aos-duration="1000">
            <div className="heading z-1 relative mb-0 flex-1 px-7">
                <p className="mb-3 text-2xl !text-white">{props.title}</p>
                <p className="text-left">{props.text}</p>
                {props.cta && (
                    <Link href={props.cta.href} className="btn mt-6 rounded-md bg-secondary font-raleway font-semibold text-white hover:bg-primary">
                        {props.cta.text}
                    </Link>
                )}
            </div>
            <div className="flex-1 pt-4 pb-2">
                <PhotoSlider before={props.before} after={props.after} />
            </div>
        </div>
    );
};

export default BeforeAfterPic;
