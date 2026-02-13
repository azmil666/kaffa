import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { coffeeLists, mockLists } from '../../constants/index.js'

const Coffee = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#coffee',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline
            .from('#c-left-leaf', {
                x: -100, y: 100
            })
            .from('#c-right-leaf', {
                x: 100, y: 100
            })
    })

    return (
        <section id="coffee" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular coffee:</h2>

                    <ul>
                        {coffeeLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved coffee:</h2>

                    <ul>
                        {mockLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Coffee