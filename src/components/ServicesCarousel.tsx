'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import styles from './ServicesCarousel.module.css';

const services = [
    {
        id: 1,
        title: 'Front End Development',
        desc: 'Building responsive, high-performance web applications using React, Next.js, and modern CSS.',
        icon: '💻'
    },
    {
        id: 2,
        title: 'SaaS Solutions',
        desc: 'Architecting scalable Software as a Service platforms with robust backend integration.',
        icon: '🚀'
    },
    {
        id: 3,
        title: 'Brand Identity',
        desc: 'Crafting unique visual identities, logos, and design systems that stand out.',
        icon: '🎨'
    },
    {
        id: 4,
        title: 'Video Production',
        desc: 'Creating engaging video content, editing, and motion graphics for digital marketing.',
        icon: '🎥'
    }
];

export default function ServicesCarousel() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'start', dragFree: true },
        // Negative speed makes it scroll in the opposite direction
        [AutoScroll({ speed: -1, stopOnInteraction: false, stopOnMouseEnter: false })]
    );

    return (
        <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.container}>
                {[...services, ...services, ...services].map((service, index) => (
                    <div key={`${service.id}-${index}`} className={styles.slide}>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <span className={styles.icon}>{service.icon}</span>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.description}>{service.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
