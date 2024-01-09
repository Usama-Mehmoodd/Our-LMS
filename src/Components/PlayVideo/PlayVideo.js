import React from "react";
import "./playVideo.css";

import { useParams, useNavigate, Link } from "react-router-dom";

export default function PlayVideo() {
  
    const { videoId } = useParams();
    const navigate = useNavigate();


  React.useEffect(() => {
    playVideo();
  }, []);

  function playVideo() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyAjDMJv0A_TjAaO3A1vtettwmL_BdncsWA`
    )
      .then((response) => response.json())
      .then((video) => {
        console.log(video);
      });
  }

  return (
    <div>
        <button onClick={()=>navigate(-1)}>Go Back</button>
      <div style={{ border: "1px solid #fff", backgroundColor: "#000" }}>
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}
