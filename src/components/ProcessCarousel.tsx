'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import styles from './ProcessCarousel.module.css';

const steps = [
    {
        id: 1,
        title: 'Discovery',
        desc: 'Understanding your business goals, target audience, and project requirements.',
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)'
    },
    {
        id: 2,
        title: 'Strategy',
        desc: 'Developing a roadmap and selecting the right technologies for scalability.',
        gradient: 'linear-gradient(135deg, #4AC29A 0%, #BDFFF3 100%)'
    },
    {
        id: 3,
        title: 'Design',
        desc: 'Creating high-fidelity wireframes and interactive prototypes.',
        gradient: 'linear-gradient(135deg, #C6FFDD 0%, #FBD786 100%)'
    },
    {
        id: 4,
        title: 'Development',
        desc: 'Writing clean, efficient code using modern frameworks.',
        gradient: 'linear-gradient(135deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%)'
    },
    {
        id: 5,
        title: 'Launch',
        desc: 'Testing, deploying, and ensuring a smooth go-live experience.',
        gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)'
    }
];

export default function ProcessCarousel() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'start', dragFree: true },
        [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: false })]
    );

    return (
        <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.container}>
                {steps.map((step) => (
                    <div key={step.id} className={styles.slide}>
                        <div className={styles.card} style={{ background: step.gradient }}>
                            <div className={styles.content}>
                                <span className={styles.number}>0{step.id}</span>
                                <h3 className={styles.title}>{step.title}</h3>
                                <p className={styles.description}>{step.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
