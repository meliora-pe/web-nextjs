import React, { useEffect, useState } from 'react';

import { ImageTag } from './AboveTheFold';

export const PhotoSlider = ({ before, after }: { before: ImageTag; after: ImageTag }) => {
    const [value, setValue] = useState<string>('50%');
    let pos = '--position';

    const slide = (e: any) => {
        setValue(`${e.target!.value}%`);
    };

    useEffect(() => {
        const slider = document.querySelector('.slider');

        if (slider) {
            slider?.addEventListener('input', slide);
        }

        return () => {
            if (slider) {
                slider?.removeEventListener('input', slide);
            }
        };
    }, [value]);

    return (
        <div className="container-photoslider" style={{ [pos]: value }}>
            <div className="image-container">
                <img className="image-before slider-image" src={before.src} alt={before.alt} title={before.title} />
                <img className="image-after slider-image" src={after.src} alt={after.alt} title={after.title} />
            </div>
            <input type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown" className="slider" onChange={slide} />
            <div className="slider-line" aria-hidden="true"></div>
            <div className="slider-button" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                        x1="128"
                        y1="40"
                        x2="128"
                        y2="216"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                    <line
                        x1="96"
                        y1="128"
                        x2="16"
                        y2="128"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                    <polyline
                        points="48 160 16 128 48 96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></polyline>
                    <line
                        x1="160"
                        y1="128"
                        x2="240"
                        y2="128"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                    <polyline
                        points="208 96 240 128 208 160"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></polyline>
                </svg>
            </div>
        </div>
    );
};
