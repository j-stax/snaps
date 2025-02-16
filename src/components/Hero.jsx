import './Hero.scss'

export default function Hero() {
    return (
        <section className="hero">
            <p className="hero__mission">Our mission:</p>
            <p className="hero__mission-statement">
                Provide photographers a space to share photos of the neighborhoods they cherish, 
                <span className="hero__italic"> expressed in their unique style.</span>
            </p>
        </section>
    )
}