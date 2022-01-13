import React from 'react'
import { useRouter } from 'next/router';

import Person from '../Person';

const Details = () => {
    const router = useRouter();
    const  id  = router.query.id;

    return (
        <div>
            <Person id={id}/>
        </div>
    )
}

export default Details
