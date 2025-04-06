import React, { ReactNode } from 'react';
import { ImageTag } from './AboveTheFold';

export interface WidgetTopProps {
    bgImage: string;
    title: string;
    subtitle?: string;
    illustration?: ImageTag;
    svg?: ReactNode;
}

const WidgetTopBackground = ({ props }: { props: WidgetTopProps }) => {
    return (
        <section className={`bg-[url(/assets/images/fondo.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px] dark:bg-gray-dark`}>
            <div className="relative">
                <div className="container">
                    <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                        <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right" data-aos='fade-right' data-aos-duration="1500">
                            {props.subtitle && <h3 className='font-montserrat text-l text-secondary'>{props.subtitle}</h3>}
                            <h2 className="!text-white font-playfair font-light text-4xl">{props.title}</h2>
                        </div>
                        <div className="relative my-3 md:mt-0" data-aos='fade-left' data-aos-duration="1500">
                            {props.illustration && (
                                <img
                                    src={props.illustration.src}
                                    alt={props.illustration.alt}
                                    title={props.illustration.title}
                                    className="mx-auto mb-6 block"
                                />
                            )}
                            {props.svg && props.svg}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WidgetTopBackground;
