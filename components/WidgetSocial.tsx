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
        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:w-full md:p-7" data-aos="fade-up" data-aos-duration="1000">
            <div className="mb-4 flex items-center justify-center gap-2 text-secondary">
                <img src="/assets/images/like.png" alt="" className="h-7 w-auto" />
                <span className="text-[22px] font-bold">Síguenos</span>
            </div>

            <ul className="mt-1 flex items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="500">
                <li className="h-[50px] w-[50px]">
                    <a
                        href="https://www.facebook.com/profile.php?id=61560595868897"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visitar Facebook de Meliora"
                        className="group"
                    >
                        {facebookSvg}
                    </a>
                </li>

                <li className="h-[50px] w-[50px]">
                    <a
                        href="https://www.instagram.com/meliora.pe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visitar Instagram de Meliora"
                        className="group"
                    >
                        {instagramSvg}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSocial;
