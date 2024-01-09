import React from "react";
import "./playListItem.css";

import { Link, useParams, useNavigate } from "react-router-dom";

export default function PlayListItem() {
  const { playListId } = useParams();
  const navigate = useNavigate();

  const [playListItems, setPlayListItems] = React.useState([]);
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    getPlaylistItems();
  }, []);

  function getPlaylistItems() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playListId}&key=AIzaSyAjDMJv0A_TjAaO3A1vtettwmL_BdncsWA`
    )
      .then((response) => response.json())
      .then((elems1) => {
        console.log(elems1);
        setPlayListItems(elems1.items);
        setToken(elems1.nextPageToken);
        // setIndex(50);

        // setTimeout(() => {
        //   setLoader(false);
        // }, 1000);
      });
  }
  function getMoreVideos() {
    console.log(token);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playListId}&key=AIzaSyAjDMJv0A_TjAaO3A1vtettwmL_BdncsWA&pageToken=${token}`
    )
      .then((response) => response.json())
      .then((elems2) => {
        console.log(elems2.items);
        setPlayListItems([...playListItems, ...elems2.items]);
      });
  }

  function handleLoadMore() {
    getMoreVideos();
    console.log("arrived");
  }

  return (
    <div className="play-list-items">
      {playListItems?.map((elem, i) => (
        <div key={i + 1} style={{ backgroundColor: "#fff" }}>
          <div
            className="course"
            onClick={() =>
              navigate(`/videoplay/${elem.contentDetails.videoId}`)
            }
            // onClick={()=>handleId(elem.id)}
          >
            <img src={elem.snippet.thumbnails.medium.url} />

            <div style={{ display: "flex" }}>
              <h4 style={{ padding: "0", margin: "0" }}>
                {elem.snippet.title}
              </h4>
            </div>

            <div style={{ textAlign: "right" }}>
              <h2 style={{ padding: "0", margin: "0" }}>
                {elem.contentDetails.itemCount}
              </h2>
            </div>

            <div style={{ marginTop: "10px" }}>
              <Link
                style={{ color: "#000", textDecoration: "none" }}
                to={"/playListItem"}
              >
                view video
              </Link>
              {/* <h4>here the id: {elem.id}</h4> */}
            </div>
          </div>
        </div>
      ))}

      <div style={{}}>
      <button
        className="loadMore"
        onClick={() => handleLoadMore()}
      >
        Load More
      </button>
      </div>
    </div>
  );
}
