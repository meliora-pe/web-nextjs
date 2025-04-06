import React from 'react';
import { ServiceItem } from './Services';

interface WidgetListServicesProps {
    title1: string;
    title2: string;
    subtitle: string;
    list: ServiceItem[];
}

const WidgetListServices = ({ props }: { props: WidgetListServicesProps }) => {
    return (
        <section className="bg-black py-12 dark:bg-gray-black lg:py-20">
            <div className="container">
                <div className="heading text-center">
                    <h4 className="">
                        <span className="text-primary">{props.title1}</span>
                        <span className="text-secondary"> {props.title2}</span>
                    </h4>
                    <h5 className="mt-2 !font-medium !text-gray dark:!text-white">{props.subtitle}</h5>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {props.list.map((service, i) => {
                        return (
                            <div key={service.image.src} className="group relative overflow-hidden rounded-xl border-2 border-transparent duration-200" data-aos="fade-up-left" data-aos-duration={1000}>
                                {/* <Link href="#" className="absolute inset-0 h-full w-full"></Link> */}
                                <img src={`/assets/images/${service.image.src}`} alt={service.image.alt} title={service.image.title} />
                                <div className="space-y-[14px] bg-white px-4 py-5 dark:bg-gray-dark">
                                    <h5 className="text-lG font-extrabold text-black hover:text-secondary dark:text-white">{service.title}</h5>
                                    <p className="text-base font-medium">{service.subtitle}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WidgetListServices;
