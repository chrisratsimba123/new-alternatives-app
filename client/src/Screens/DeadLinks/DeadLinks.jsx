import React from "react"
import Layout from "../../Components/Shared/Layout/Layout"
import Construction from "../../Assets/page-under-construction.png"
import "./DeadLinks.css"

const DeadLinks = () => {

    return(
    <>
    <Layout>
        <div className="dead-image-div">
            <img className="construction-image" src={Construction} alt="Graphic of a cartoon construction worker and construction site, above UNDER CONSTRUCTION text"/>
        </div>
    </Layout>
    </>
    )
}

export default DeadLinks