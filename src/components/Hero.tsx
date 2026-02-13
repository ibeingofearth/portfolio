'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import styles from './Hero.module.css';

const useTypewriter = (words: string[], typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const handleTyping = () => {
            if (isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return displayText;
};

export default function Hero() {
    const typeWriterText = useTypewriter(['Graphics Designer', 'SaaS Builder', 'Developer', 'Video Editor']);
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.content}
                >
                    <div className={styles.badge}>
                        Available for Hire
                    </div>

                    <h1 className={styles.title}>
                        Irshad <span className={styles.highlight}>Ahamed</span>
                    </h1>

                    <div className={styles.subtitle}>
                        I am a{' '}
                        <span className={styles.typewriterWrapper}>
                            <span className={`${styles.role} ${styles.highlight} ${styles.typewriterText}`}>
                                {typeWriterText}
                            </span>
                            <span className={styles.cursor}>_</span>
                        </span>
                    </div>

                    <p className={styles.description}>
                        I transform complex problems into elegant, scalable digital solutions. With a blend of technical expertise and creative vision, I help businesses build trust and authority through exceptional design and engineering.
                    </p>

                    <div className={styles.ctaGroup}>
                        <a href="#contact" className={styles.primaryBtn}>
                            Let&apos;s Talk <Mail size={20} />
                        </a>
                        <a href="#projects" className={styles.secondaryBtn}>
                            View Projects <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={styles.graphicColumn}
                >
                    <div className={styles.imageWrapper}>
                        <div className={styles.glow} />
                        <div className={styles.imageContainer}>
                            <Image
                                src="/profile.jpg"
                                alt="Irshad Ahamed"
                                fill
                                className={styles.profileImage}
                                priority
                                suppressHydrationWarning
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className={styles.scrollIndicator}>
                Scroll Down
            </div>
        </section>
    );
}
