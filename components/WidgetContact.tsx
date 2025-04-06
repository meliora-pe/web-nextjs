import React, { ReactNode } from 'react';

export interface WidgetContactProps {
    href: string;
    color: string;
    targetRel?: boolean;
    svg: ReactNode;
    title: string;
    subtitle?: string;
}

const WidgetContact = ({ props }: { props: WidgetContactProps }) => {
    return (
        <a href={props.href} target={props.targetRel ? '_blank' : ''} rel={props.targetRel ? 'noreferrer' : ''}>
            <div
                className="items-center justify-center rounded-[32px] bg-white px-4 py-6 hover:bg-secondary/20 dark:bg-gray-black md:p-7"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className={`mb-4 flex items-center justify-center gap-3 ${props.color}`}>
                    <div>{props.svg}</div>
                    <span className="text-[22px] font-bold">{props.title}</span>
                </div>
                {props.subtitle && <h5 className="my-2 text-center font-bold text-gray dark:text-white lg:text-lg">{props.subtitle}</h5>}
            </div>
        </a>
    );
};

export default WidgetContact;
