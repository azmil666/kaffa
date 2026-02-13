import React, {useRef} from 'react'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import {useMediaQuery} from "react-responsive";

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 });
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                    start: 'top top',
                end: 'bottom top',
                scrub: true,
        }
    }).to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0)
            .to(".arrow", { y: 100 }, 0);

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: videoRef.current,
                start: startValue,
                end: "+=220%",
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            videoRef.current.currentTime = 0.1;

            tl.fromTo(
                videoRef.current,
                { currentTime: 0 },
                { currentTime: videoRef.current.duration, ease: "none" }
            );
        };

    },[]);
    return (
        <>
            <section id="hero">
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
            <div className="video absolute inset-0 ">
                <video ref={videoRef} src="/videos2/output.mp4" muted playsInline preload="auto" autoPlay/>
            </div>
        </>
    )
}
export default Hero
