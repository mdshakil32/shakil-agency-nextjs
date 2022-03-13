import style from "../styles/Services.module.css";
import Link from "next/link";
import Image from "next/image"

const Services = ({services}) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>What We Can Do?</h1>
            <h1 className={style.subtitle}>Services we can help you with</h1>
            <div className={style.services}>
                {
                    services.map(service => (
                        <Link key={service.id} href={`/products/${service.name}`} passHref >
                            <div className={style.service}>
                                <div className={style.catInfo}>{service.desc}</div>
                                <span className={style.cat}>{service.title}</span>
                                 <div className={style.media}>
                                    {service.video ? (
                                        <video
                                            className={style.video}
                                            src={`/img/${service.video}`}
                                            muted
                                            autoPlay
                                            loop
                                        />
                                    ) : (
                                        <Image
                                            src={`/img/${service.photo}`}
                                            width="100%"
                                            height="100%"
                                            layout="responsive"
                                            objectFit="cover"
                                            alt=""
                                        />
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;