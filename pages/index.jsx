import Head from 'next/head'
import Hero from '../components/Hero'



export default function Home() {
  const data = {
    heading:"Captur Photography",
    message:"I capture moments in nature and keep them alive."
}
  return (
    <div  className=''>
      <Head>
        <title>Next Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero {...data} />
   
    </div>
  )
}
