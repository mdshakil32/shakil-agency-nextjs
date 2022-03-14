import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Intro from '../Components/Intro'
import styles from '../styles/Home.module.css'
import Services from '../Components/Services'
import { data } from '../data'
import Testimonials from '../Components/Testimonials'

export default function Home({services}) {
  console.log(services);
  return (
    <div className={styles.container}>
      <Head>
        <title>Shakil Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="We provide Services about web development, design, production, photography" />
        <meta property='og:title' content="Shakil agency for web development, design,photography,production" />
        
      </Head>
      <Intro />
      <Services services={services}/>
      <Testimonials />
    </div>
  )
}

export const getStaticProps =async ()=>{
  const services = data;
  return{props:{services}}
}