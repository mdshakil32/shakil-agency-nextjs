import style from "../styles/Intro.module.css";
import Image from "next/image"
import Circle from "./Circle";

const intro = () => {
    return (
        <div className={style.container}>

        <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
        <Circle backgroundColor="#01c686" right="-40vh" />
        <div className={style.card}>
            <h1 className={style.title}>
            <span className={style.brandName}>ＳＨＡＫＩＬ</span> DIGITAL PRODUCT
                AGENCY
            </h1>
            <p className={style.desc}>
                Create live segments and target the right people for messages based on
                their behaviors.
            </p>
            <button className={style.button}>DISCOVER</button>
        </div>

        <div className={style.card}>
            <Image 
                src="/img/Avocado.png" 
                width="100%"  
                height="100px"  
                layout="fill" 
                objectFit="cover"
                alt="" />
        </div>
    </div>
    );
};

export default intro;