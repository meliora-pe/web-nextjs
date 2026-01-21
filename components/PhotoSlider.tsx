import React, { useEffect, useRef, useState } from 'react';

import { ImageTag } from './AboveTheFold';

export const PhotoSlider = ({ before, after, autoPlay = true, speed = 25 }: { before: ImageTag; after: ImageTag; autoPlay?: boolean; speed?: number }) => {
    const [value, setValue] = useState(50);
    const directionRef = useRef<1 | -1>(1);
    const autoPlayRef = useRef(autoPlay);
    const isHoveringRef = useRef(false);

    // Animación automática tipo vaivén
    useEffect(() => {
        if (!autoPlayRef.current) return;

        const interval = setInterval(() => {
            if (isHoveringRef.current) return;

            setValue((prev) => {
                let next = prev + directionRef.current;

                if (next >= 100) {
                    directionRef.current = -1;
                    return 100;
                }

                if (next <= 0) {
                    directionRef.current = 1;
                    return 0;
                }

                return next;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [speed]);

    // Usuario toma control manual
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        autoPlayRef.current = false;
        setValue(Number(e.target.value));
    };

    return (
        <div
            className="container-photoslider"
            style={{ ['--position' as any]: `${value}%` }}
            onMouseEnter={() => (isHoveringRef.current = true)}
            onMouseLeave={() => (isHoveringRef.current = false)}
        >
            <div className="image-container">
                <img className="image-before slider-image" src={before.src} alt={before.alt} title={before.title} />
                <img className="image-after slider-image" src={after.src} alt={after.alt} title={after.title} />
            </div>

            <input type="range" min="0" max="100" value={value} aria-label="Comparación antes y después" className="slider" onChange={handleChange} />

            <div className="slider-line" aria-hidden="true"></div>

            <div className="slider-button" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <line x1="128" y1="40" x2="128" y2="216" stroke="currentColor" strokeWidth="16" />
                    <line x1="96" y1="128" x2="16" y2="128" stroke="currentColor" strokeWidth="16" />
                    <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" strokeWidth="16" />
                    <line x1="160" y1="128" x2="240" y2="128" stroke="currentColor" strokeWidth="16" />
                    <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" strokeWidth="16" />
                </svg>
            </div>
        </div>
    );
};
