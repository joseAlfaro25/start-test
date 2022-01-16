//Import Lib
import axios from 'axios'
import type { NextPage } from 'next'
//Components
import List from '../components/List';
import Layout from '../components/common/Layout';
//Style
import styles from '../styles/Home.module.css'

interface Props{
  data:[]
}

const Home: NextPage<Props> = ({data}:Props) => {
  
  return (
  <Layout>
    <div className={styles.container}>
      <List data={data}/>
    </div>
  </Layout>
  )
}
Home.getInitialProps = async () => {
  const response: any = await axios.get('https://akabab.github.io/starwars-api/api/all.json')
  const { data } = response
  return { data: data }
}

export default Home
