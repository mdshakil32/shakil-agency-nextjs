import Head from 'next/head'
import {data} from "../../data.js";
import style from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

const Product = ({product}) => {
    return (
        <div className={style.container}>
          <Head>
            <title>Shakil Agency</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

            <meta name="description" content={`We provide best ${product.title} service and resonable price`}  />
            <meta property={`og:${product.title}`} content={`${product.longDesc}`} />
            
          </Head>

            <div className={style.cardL}>
                {product.images.map((img) => (
                <div key={img.id} className={style.imgContainer}>
                    <Image 
                    src={img.url} 
                    width="100%" 
                    height="100%" 
                    objectFit="cover" 
                    alt={`${product.title}`}
                    layout="responsive" />
                </div>
                ))}
            </div>

            <div className={style.cardS}>
                <h1 className={style.title}>{product.title}</h1>
                <p className={style.desc}>{product.longDesc}</p>
                <button className={style.button}>
                <Link href="/contact">Contact</Link>
                </button>
            </div>
        </div>
    );
};



export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};



export const getStaticProps =async(ctx)=>{
    const name = ctx.params.name;
    const product = data.filter(item=>item.name === name)[0];
    return{
        props:{product}
    }

}

export default Product;