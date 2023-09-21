import frontPageImg from "../assets/frontpage-img-min.webp";
import SomeIcons from "../components/SomeIcons";
import TextSwitch from "../components/TextSwitch";



export default function Homepage() {
    return (
        
            <main
                className="homepage-main"
            >
                <section className="intro-wrapper">
                    <h1>Mads Kristensen</h1>
                    <TextSwitch />
                    <h2>Frontend developer</h2>
                </section>

                <section className="image-wrapper">
                    <img className="frontpage-img" src={frontPageImg} alt="Image of Mads Kristensen" />
                </section>

                <section className="icon-wrapper">
                    <SomeIcons />
                    <p>Click the menu to navigate my portfolio</p>
                </section>
            </main>

    )
}