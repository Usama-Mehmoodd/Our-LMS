  import React from "react";
  import "./home.css";

  import { useNavigate,Link } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faLayerGroup,
    faPeopleArrows,
    faProjectDiagram,
    faSlash,
    faTasks,
  } from "@fortawesome/free-solid-svg-icons";

  import AppContext, { useApp } from "../context/AppContext";

  export default function Home() {
    let cardsArray = [
      {
        heading: "Shares",
        icon: faProjectDiagram,
        count: 18,
        completed: 2,
      },
      {
        heading: "Activity",
        icon: faTasks,
        count: 132,
        completed: 5,
      },
      {
        heading: "Communication",
        icon: faPeopleArrows,
        count: 12,
        completed: 10,
      },
      {
        heading: "Projects",
        icon: faLayerGroup,
        count: "76%",
        completed: 8,
      },
    ];

    const {showCanva,toggleCanva} = useApp();

    // console.log(Context);

    const navigate = useNavigate();
    const [playList, setPlayList] = React.useState([]);

    React.useEffect(() => {
      extractData();
    }, []);

    function extractData() {
      fetch(
        "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCuT0rj__qEq_ZO3kYwun4Qg&maxResults=50&key=AIzaSyAjDMJv0A_TjAaO3A1vtettwmL_BdncsWA"
      )
        .then((response) => response.json())
        .then((playListData) => {
          // console.log('all playlists data: ', playListData);

          // let res = playListData.items.slice(19, 23);
          // let elemsArr = res.reverse();

          // let js1 = playListData.items.slice(16, 17);
          // let js2 = playListData.items.slice(2, 3);


          setPlayList([...playListData.items]);

          setTimeout(() => {
            // setLoader(false);
          }, 1000);
        });
    }

    return (
      <div className="home-inner">
        <div className="banner" style={{paddingRight: showCanva ? '20px' : '259px'  }}>
          <div className="name" style={{ margin: "10px 0px", color: "white" }}>
            Bin Muhammad
            <div style={{ margin: "-1px 0px", color: "white" }}>
              Learning Management System
            </div>
          </div>
          <div style={{ margin: "20px 0px"}}>
            <button className="pro-btn">Create New Project</button>
          </div>
        </div>

        <div
          className="cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            margin: "-100px 0px",
          }}
        >
          {cardsArray?.map((v, i) => (
            <div className="grid project" key={v.count + i}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>{v.heading}</div>
                <div className="icon">
                  <FontAwesomeIcon icon={v.icon} />
                </div>
              </div>

              <div className="projectnum">
                <div className="counting">{v.count}</div>
                <div className="completed">completed {v.completed}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="responsive-home"
        >
          {playList?.map((elem, i) => (
            <div key={i + 1} style={{ backgroundColor: "#fff" }}>
              <div
                className="course"
                
                onClick={() => navigate(`/playListItem/${elem.id}`)}
                // onClick={()=>handleId(elem.id)}
              >
                <img src={elem.snippet.thumbnails.medium.url} />

                <div style={{ display: "flex" }}>
                  <h4 style={{ padding: "0", margin: "0" }}>
                    {elem.snippet.localized.title}
                  </h4>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p style={{ padding: "0", margin: "0" }}>
                    {elem.contentDetails.itemCount}
                  </p>
                </div>

                <div style={{ marginTop: "-15px" }}>
                  <Link
                    style={{ color: "#000", textDecoration: "none" }}
                    to={"/playListItem"}
                  >
                    view more Details
                  </Link>
                  {/* <h4>here the id: {elem.id}</h4> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
