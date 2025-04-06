import React from 'react'
// import { ImageTag } from './AboveTheFold';

interface ITwoParagraphsBullets {
  title: string;
  subtitle: string;
  paragraph1: string;
  paragraph2: string;
  bullets: string[];
}

const WgtTwoParagraphsBullets = ({ props }: { props: ITwoParagraphsBullets }) => {
  const numberBullets = props.bullets.length % 2 === 0 ? props.bullets.length / 2 : (props.bullets.length + 1) / 2;
  const bullets1 = props.bullets.slice(0, numberBullets);
  const bullets2 = props.bullets.slice(numberBullets, props.bullets.length);

  return (
    <>
      <div className="heading mb-8">
        <h6 className="font-montserrat !font-semibold !text-secondary">{props.subtitle}</h6>
        <h4 className="font-playfair !text-primary">{props.title}</h4>
        <h6 className="font-raleway mt-[18px] text-left !font-semibold !text-gray">
          {props.paragraph1}<br /><br />
          {props.paragraph2}
        </h6>
      </div>
      <div className="flex sm:gap-8 md:gap-12">
        <ul className="w-1/2 mb-5 space-y-2 sm:mb-0">
          {bullets1.map((bullet, i) => (
            <li key={i} className="flex items-center gap-3">
              <img src="/assets/images/estrella.png" alt="viñeta" className="h-6 w-auto" />
              <span className="text-lg font-extrabold text-gray">{bullet}</span>
            </li>
          ))}
        </ul>
        <ul className="w-1/2 space-y-2">
          {bullets2.map((bullet, i) => (
            <li key={i} className="flex items-center gap-3">
              <img src="/assets/images/estrella.png" alt="viñeta" className="h-6 w-auto" />
              <span className="text-lg font-extrabold text-gray">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WgtTwoParagraphsBullets;