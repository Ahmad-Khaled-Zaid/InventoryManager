import Head from 'next/head'
import Header from '../components/Header'
import Search from '../components/Search'
import SideBar from '../components/SideBar'
export default function User() {
  return (
    <div className=''>
      <Head>
        <title>Inventer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <SideBar/>
      <main>
        <Search name=" Search "/>
        
        
      </main>
    </div>
  )}