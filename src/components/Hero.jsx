import React from 'react'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import { SplitText} from "gsap/all";

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, word' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'chars, lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplit.chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#home',
                    start: 'top top',
                end: 'bottom top',
                scrub: true,
        }
    }).to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0)
    },[]);
    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">Kaffa</h1>
                <img src="/images2/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>
                <img src="/images2/hero-right-leaf.png" alt="right-leaf" className="right-leaf"/>
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Aromatic. Classy.</p>
                            <p className="subtitle">
                                Sip the spirit <br/>of Kaffa
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">Every cup we serve is crafted from carefully selected beans, bold character, and classic roasting traditions — made to elevate every sip.
                        </p>
                            <a href="#coffee">View Coffee</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Hero
