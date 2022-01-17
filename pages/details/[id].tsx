import React from 'react'
import { useRouter } from 'next/router';

import Person from '../../components/Person';
import Layout from '../../components/common/Layout';

const Details = () => {
    const router = useRouter();
    const  {id}  = router.query;


    return (
        <Layout>
            <Person id={id}/>
        </Layout>
      
    )
}

export default Details
