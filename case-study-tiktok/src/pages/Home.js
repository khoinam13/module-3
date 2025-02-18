import React from 'react';
import VideoCard from './VideoCard';

const Home = () => {
    const video = [
        {id: 1, url: "video1.mp4", like: 120, comments: 45},
        {id: 2, url: "video2.mp4", like: 120, comments: 45},
    ]
    return (
    <div className="flex flex-col  items-center gap-4 p-4">
        {video.map((video)=>(
            <VideoCard key={video.id} video={video}/>
        ))}
    </div>
    );
};

export default Home;