import React from 'react'
import Layout from '../../Components/Shared/Layout/Layout'
import Construction from '../../Assets/page-under-construction.png'

const DeadLinks = () => {

    return(
    <>
    <Layout>
        {/* <h1 className="coming-soon">Coming Soon</h1> */}
        <img className="construction-image" src={Construction}/>
    </Layout>
    </>
    )
}

export default DeadLinks