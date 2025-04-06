import Link from 'next/link';
import React from 'react';
import { CtaTag } from './AboveTheFold';

interface IWidgetTwoParagraphsButton {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    button?: CtaTag;
}

const WidgetTwoParagraphsButton = ({ props }: { props: IWidgetTwoParagraphsButton }) => {
    return (
        <>
            <div className="heading mb-0 text-center lg:text-left">
                <h2 className="pb-3 font-montserrat text-[18px] font-bold !text-secondary">{props.subtitle}</h2>
                <h4 className="mb-3 font-playfair">{props.title}</h4>
            </div>
            <div className="my-8 text-left font-raleway text-lg font-semibold sm:grid-cols-2 md:my-6">
                <p>{props.paragraph1}</p>
                <br />
                <p>{props.paragraph2}</p>
            </div>
            {props.button && (
                <div className="mt-4 text-center ltr:lg:text-left rtl:lg:text-right">
                    <Link href={props.button.href} className="btn bg-secondary font-raleway font-semibold text-white hover:bg-primary sm:px-14 sm:py-5">
                        {props.button.text}
                    </Link>
                </div>
            )}
        </>
    );
};

export default WidgetTwoParagraphsButton;
