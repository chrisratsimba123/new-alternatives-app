import React from 'react'
import Layout from '../../Components/Shared/Layout/Layout'
import Construction from '../../Assets/page-under-construction.png'
import './DeadLinks.css'

const DeadLinks = () => {

    return(
    <>
    <Layout>
        <div className="dead-image-div">
            {/* <h1 className="coming-soon">Coming Soon</h1> */}
        <img className="construction-image" src={Construction}/>
        </div>
    </Layout>
    </>
    )
}

export default DeadLinks