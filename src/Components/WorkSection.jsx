import React, { useEffect, useState } from "react";
import styles from "./WorkSection.module.css";
import TimerApp from "../Images/timer+stopwatch.PNG";
import AptechWeb from "../Images/aptechweb.PNG";
import SignupLogin from "../Images/signin&upPNG.PNG";
import FbPost from "../Images/react-fb-post.PNG";
import PslWeb from "../Images/psl.PNG";
import Simplerouting from "../Images/simplerouting.PNG";
import WeatherApp from "../Images/weatherapp.PNG";
import PrivateRoute from "../Images/privateroute.PNG";
import GitSearch from "../Images/gitsearch.PNG";
import ReactTodo from "../Images/reactTodo.PNG";
import MernApp from "../Images/mernapp.PNG";
import CricketDash from "../Images/dashboard.PNG";

import AOS from "aos";

const WorkSection = () => {
  const projectObj = [
    {
      projectName: "PSl Website",
      url: "https://www.google.com",
      projectImg: PslWeb,
      category: "React",
    },
    {
      projectName: "Aptech Cpism Project",
      url: "https://www.google.com",
      projectImg: AptechWeb,
      category: "Html",
    },
    {
      projectName: "Signup & Login Page",
      url: "https://www.google.com",
      projectImg: SignupLogin,
      category: "Html",
    },
    {
      projectName: "TIMER",
      url: "https://www.google.com",
      projectImg: TimerApp,
      category: "Html",
    },
    {
      projectName: "Fb post React",
      url: "https://reactfbpost.web.app/",
      projectImg: FbPost,
      category: "React",
    },
    {
      projectName: "Simple Routing",
      url: "https://reactjsrouter.web.app/",
      projectImg: Simplerouting,
      category: "React",
    },
    {
      projectName: "Weather App",
      url: "https://reactjsweatherapp.web.app/",
      projectImg: WeatherApp,
      category: "React",
    },
    {
      projectName: "Private Routing",
      url: "https://protectrouter.web.app/",
      projectImg: PrivateRoute,
      category: "React",
    },
    {
      projectName: "Github Search",
      url: "https://githubsearch-2b2e2.web.app/",
      projectImg: GitSearch,
      category: "React",
    },
    {
      projectName: "React Todo with firebase",
      url: "https://protectrouter.web.app/",
      projectImg: ReactTodo,
      category: "React",
    },
    {
      projectName: "Complete MERN App ",
      url: "https://reactapp-nodejsserver-deploy.herokuapp.com/",
      projectImg: MernApp,
      category: "React",
    },
    {
      projectName: "Cricket Dashboard with Socket",
      url: "https://cricketdashboardapp.herokuapp.com/",
      projectImg: CricketDash,
      category: "React",
    },
  ];
  const [workFilter, setworkFilter] = useState("");
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.workMainBox}>
      <section className={styles.headingBox} data-aos="fade-up">
        <h5>Portfolio</h5>
        <h1>Check My Recent Work</h1>
      </section>
      <section className={styles.workOption}>
        <button
          onClick={(e) => {
            setworkFilter("");
            setIsFilter(false);
          }}
        >
          all
        </button>
        <button
          onClick={(e) => {
            setworkFilter("React");
            setIsFilter(true);
          }}
        >
          React
        </button>
        <button
          onClick={(e) => {
            setworkFilter("Html");
            setIsFilter(true);
          }}
        >
          Html
        </button>
      </section>

      <section
        className={`${styles.workBox} px-5 row m-0`}

        // data-aos-duration="3000"
      >
        {projectObj.map((val, ind) => {
          return isFilter ? (
            val.category === workFilter ? (
              <div
                // style={{ border: "1px solid red" }}
                className={`col-lg-3 col-md-6 col-sm-12 p-0 p-1 ${styles.colProd} `}
                key={ind}
              >
                <div className={`${styles.cardBox} `}>
                  <div className={styles.hideBox}>
                    <h5>{val.projectName}</h5>
                    <a href={val.url} target="_blank">
                      VISIT
                    </a>
                  </div>
                  <img src={val.projectImg} width="100%" alt="" />
                </div>
              </div>
            ) : null
          ) : (
            <div
              className={`col-lg-3 col-md-6 col-sm-12 p-0 p-1 ${styles.colProd} `}
              key={ind}
            >
              <div className={`${styles.cardBox} `}>
                <div className={styles.hideBox}>
                  <h5>{val.projectName}</h5>

                  <a href={val.url} target="_blank">
                    VISIT
                  </a>
                </div>
                <img src={val.projectImg} width="100%" alt="" />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default WorkSection;
