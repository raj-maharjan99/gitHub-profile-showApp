import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Header from "./Header";

function GitHub({ userName }) {
  const [data, setData] = useState({});
  const [repo, setRepo] = useState([]);
  console.log(repo);
  console.log(data);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));

    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((response) => setRepo(response.data))
      .catch((error) => console.log("error"));
  }, [userName]);
  const createdFormatDate = moment(data.created_at).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  const updatedFormatDate = moment(data.updated).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <>
      <div className=" min-h-[200px] w-[1280px] px-5 mt-[100px]  m-auto   flex  justify-center ">
        <div className="w-[500px]  flex flex-col gap-3">
          <div className="">
            <img className="w-100 rounded-3xl" src={data.avatar_url} alt="" />
          </div>
          <div className="flex flex-col justify-start">
            <b className="text-[25px] font_family">{data.name}</b>
            <p>
              <b className="text-[]">Username</b> :- {data.login}
            </p>
            <p>
              <b>Followers</b> :- {data.followers}
            </p>
            <span>
              <b>Created At :- </b>
              {createdFormatDate}
            </span>
            <span>
              <b>Updated At :- </b>
              {updatedFormatDate}
            </span>
          </div>
        </div>
        {/* .......... */}
        <div className="w-[500px] flex flex-col gap-2 text-center">
          <u className="text-[40px] font_style pb-5">REPOSITORIES</u>
          <div className="flex flex-wrap justify-center gap-4 ">
            {repo.slice(0, 9).map((item) => (
              <a href={item.html_url} target="_blank">
                <div className="size ">{item.name} </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GitHub;
