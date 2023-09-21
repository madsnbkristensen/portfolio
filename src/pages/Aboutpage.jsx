import aboutPageImg from "../assets/aboutpage-img-min.webp";
import jsIcon from "../assets/javascript-1.svg";
import htmlIcon from "../assets/html-1.svg";
import cssIcon from "../assets/css-3.svg";
import reactIcon from "../assets/react-2.svg";
import resume from "../assets/downloads/cv-mads-kristensen.pdf"

export default function Aboutpage() {
    return (

        <main className="contentpages-main">
            <div className="column-1">
                <section className="aboutpage-sections">
                    <h3 className="content-headline">About me</h3>
                    <p>
                        I'm a 23-year-old energetic young guy living in Aarhus with an outgoing and smiling personality. I love diving into new challenges and always approach things with a fresh perspective. When it comes to work, I'm hardworking and dedicated - it's tough for me to say no to new tasks. I take responsibility for my actions and always strive to deliver my best.
                    </p>
                </section>
                <section className="aboutpage-sections">
                    <h3 className="content-headline">Education</h3>
                    <p>
                        My educational journey commenced at Rosborg Gymnasium in 2016, where I embarked on my STX (General Studies) program. Over the course of three years at the gymnasium, I not only honed my academic skills but also developed my capacity for creative and problem-oriented thinking. This period at Rosborg Gymnasium provided me with the necessary foundation and intellectual depth crucial to my current path as a multimedia designer. Currently, I am in my third semester of my multimedia design program, specializing in frontend development and further expanding my knowledge and skills in this field.
                    </p>
                </section>
            </div>
            <div className="column-2">
                <div className="technical-wrapper">
                    <section className="aboutpage-sections">
                        <h3 className="content-headline">Technical skills</h3>
                        <p>
                            I am proficient in languages such as HTML, CSS, and JavaScript. In addition, my preferred framework is React. I have experience in using Git, and my favorite code editor is VS Code. Furthermore, I am skilled at creating prototypes in Figma.
                        </p>
                        <div className="technical-icons-wrapper">
                            <img className="technical-icon" src={htmlIcon} alt="html5 icon" />
                            <img className="technical-icon" src={cssIcon} alt="css3 icon" />
                            <img className="technical-icon" src={jsIcon} alt="javascript icon" />
                            <img className="technical-icon" src={reactIcon} alt="react icon" />
                        </div>

                    </section>
                    <a href={resume} download className="resume-btn">
                        Download resume
                    </a>
                </div>
                <img className="about-page-img" src={aboutPageImg} alt="Image of me working" />
            </div>

        </main>
    )
}