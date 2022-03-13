import Head from 'next/head'
import Circle from "../Components/Circle";
import style from "../styles/Contact.module.css";

const contact = () => {
    return (
        <div className={style.component}>
            <Head>
                <meta charSet="utf-8" />
                <title>Shakil Agency</title>
                <meta name="description" content="We provide Services about web development, design, production, photography" />
                <meta property='og:title' content="Shakil agency for web development, design,photography,production" />
            </Head>
            <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
            <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
            <h1 className={style.title}>Get in Touch</h1>

            {/* contact form  */}
            <form className={style.form}>
                <input className={style.inputS} type="text" placeholder="Name" />
                <input className={style.inputS} type="text" placeholder="Phone" />
                <input className={style.inputL} type="text" placeholder="Email" />
                <input className={style.inputL} type="text" placeholder="Subject" />
                <textarea
                    className={style.textArea}
                    type="text"
                    rows={6}
                    placeholder="Message"
                />
                <button className={style.button}>SUBMIT</button>
            </form>
        </div>
    );
};

export default contact;