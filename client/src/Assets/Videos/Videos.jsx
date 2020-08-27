import React from 'react'

import Purple from "../../Assets/Videos/Purple.mp4"
import Blue from "../../Assets/Videos/Blue.mp4"
import Green from "../../Assets/Videos/Green.mp4"
import Red from "../../Assets/Videos/Red.mp4"
import Yellow from "../../Assets/Videos/Yellow.mp4"

const Videos = () => {
    
    const allVideos = [
        { id: Purple, location: "../../Assets/Videos/Purple.mp4"}, 
        { id: Blue, location: "../../Assets/Videos/Blue.mp4"}, 
        { id: Green, location: "../../Assets/Videos/Green.mp4"}, 
        { id: Red, location: "../../Assets/Videos/Red.mp4"}, 
        { id: Yellow, location: "../../Assets/Videos/Yellow.mp4"}
    ]

    return(
        <div className="users">
            {allVideos.map((video) =>(
                video.location
            ))}
        </div>
    )
}

export default Videos