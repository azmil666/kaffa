import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { featureLists, goodLists } from '../../constants/index.js'

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskTimeline
            .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
            .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
            .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
    })

    return (
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">The ART</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/images2/check.png" alt="check" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img">
                        <img
                            src="/images2/cafe.jpg"
                            alt="cafe"
                            className="abs-center masked-img size-full object-contain"
                        />
                    </div>

                    <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="/images2/check.png" alt="check" />
                                <p className="md:w-fit w-60">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Brewed to Perfection</h2>
                    <div id="masked-content">
                        <h3>Roasted with Care, Served with Passion</h3>
                        <p>This isn’t just a cup of coffee. It’s a slow-crafted experience, shaped by aroma, warmth, and the art of every pour.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Art