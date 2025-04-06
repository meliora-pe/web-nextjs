import Link from 'next/link';
import { FoldSectionProps } from '../AboveTheFold';

const Heading = ({ props }: { props: FoldSectionProps }) => {
    return (
        <section className="relative">
            <div className="-top-11 h-[700px] lg:h-[840px]">
                <img src={`/assets/images/${props.image.src}`} className="flex h-full w-full object-cover" alt={props.image.alt} title={props.image.title} />
            </div>
            <div
                className="z-1 absolute inset-0 opacity-30"
                style={{ background: 'linear-gradient(90deg, rgba(8, 17, 31, 0.95) 57.29%, rgba(8, 17, 31, 0.4) 100%)' }}
            ></div>
            <div className="z-1 absolute inset-x-0 top-[19%] text-white md:top-1/3">
                <div className="container flex flex-col items-center gap-x-32 lg:flex-row lg:items-start">
                    <div className="max-w-[624px] text-center lg:text-left">
                        <h1 className="mb-3 font-playfair text-xl font-semibold text-[#eb8dc2] md:text-2xl">{props.header}</h1>
                        <h2 className="font-playfair text-4xl font-semibold text-primary md:text-5xl xl:text-[60px] xl:leading-[72px]">{props.title}</h2>
                        <p className="mt-8 hidden font-montserrat text-lg lg:flex">{props.subtitle}</p>
                        <button type="button" className="btn mt-10 bg-white px-8 py-[19px] text-black hover:bg-secondary hover:text-white">
                            <button onClick={() => []} className="font-raleway font-semibold">
                                {props.cta.text}
                            </button>
                        </button>
                    </div>
                    <div className="text-right">
                        <div className="h-auto w-full">
                            <img
                                src="/assets/images/landings/10 blanqueamiento dental.png"
                                alt=""
                                className="m-6 h-48 w-48 lg:m-0 lg:h-80 lg:w-80 lg:object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heading;
