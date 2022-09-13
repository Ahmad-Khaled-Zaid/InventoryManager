import Head from 'next/head'
import Header from '../components/Header'
import Search from '../components/search'
import SideBar from '../components/sideeBar'
import Table from '../components/table'

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
        <Search name=" Add User "/>
        
        
      </main>
    </div>
  )}