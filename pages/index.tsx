import type { NextPage } from 'next';
import Head from 'next/head';
import Present from '../Components/Present';
import Technologies from '../Components/Tech';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import NavBar from '../Components/Navbar';
import Menu from '../Components/Menu';


const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen snap-y snap-proximity overflow-scroll scroll-smooth overflow-x-hidden scrollbar-hide p-0 m-0'>
      <div className='flex flex-col md:items-end w-full'>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Menu />
        <Present />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default Home
