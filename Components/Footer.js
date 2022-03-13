import style from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
      <div className={style.container}>
        {/* footer left  */}

        <div className={style.cardL}>
          <h1 className={style.title}>ＳＨＡＫＩＬ CREATIVES.</h1>
          <h1 className={style.linkTitle}>
            <Link href="/contact" className={style.link} passHref>
              <>
                <span className={style.linkText}>WORK WITH US</span>
                <Image
                  src={"/img/link.png"}
                  width="40px"
                  height="40px"
                  alt=""
                />
              </>
            </Link>
          </h1>
        </div>
        
        {/* footer middle  */}
        <div className={style.cardS}>

          <div className={style.cardItem}>
            45 ADAM STREET,
            <br /> USA
          </div>
          <div className={style.cardItem}>
            CONTACT@LAMA.DEV
            <br /> 111_438_5244
          </div>
        </div>

      {/* footer right  */}
        <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={style.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
        
      </div>
    );
};

export default Footer;