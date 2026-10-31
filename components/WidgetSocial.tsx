import Link from 'next/link';
import React, { ReactNode } from 'react';

import { facebookSvg, instagramSvg } from '../data/svg';

export interface WidgetContactProps {
    href: string;
    color: string;
    targetRel?: boolean;
    svg: ReactNode;
    title: string;
    subtitle?: string;
}

const WidgetSocial = ({ props }: { props: WidgetContactProps }) => {
    return (
        <a href={props.href} target={props.targetRel ? '_blank' : ''} rel={props.targetRel ? 'noreferrer' : ''}>
            <div className="rounded-[32px] bg-white px-4 py-6  dark:bg-gray-dark md:w-full md:p-7" data-aos="fade-up" data-aos-duration="1000">
                <div className="mb-4 flex items-center justify-center gap-2 text-secondary">
                    <div>
                        <img src="/assets/images/like.png" alt="logotipo red social" className="h-7 w-auto" />
                    </div>
                    <span className="text-[22px] font-bold">Síguenos</span>
                </div>
                <ul className="mt-1 flex items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="500">
                    <li className="h-[50px] w-[50px]">
                        <Link href="https://www.facebook.com/profile.php?id=61560595868897" className="group">
                            {facebookSvg}
                        </Link>
                    </li>
                    <li className="h-[50px] w-[50px]">
                        <Link href="https://www.instagram.com/meliora.pe/" className="group">
                            {instagramSvg}
                        </Link>
                    </li>
                </ul>
            </div>
        </a>
    );
};

export default WidgetSocial;
