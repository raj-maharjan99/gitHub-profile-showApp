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
      <div className="w-full px-5 pb-[30px] mt-20 max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0"
            src={data.avatar_url}
            alt=""
          />
          <div className="text-center md:text-left">
            <b className="text-2xl md:text-3xl font-semibold">{data.name}</b>
            <p>
              <b className="font-semibold">Username:</b> {data.login}
            </p>
            <p>
              <b>Followers:</b> {data.followers}
            </p>
            <span>
              <b>Created At:</b> {createdFormatDate}
            </span>
            <span>
              <b>Updated At:</b> {updatedFormatDate}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <u className="text-4xl max-sm:text-[20px] font-semibold pb-5">
            REPOSITORIES
          </u>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {repo.slice(0, 9).map((item) => (
              <a
                key={item.id}
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline-none"
              >
                <div className="bg-gray-200 p-4   text-center hover:bg-orange-400 hover:text-white  rounded-lg">
                  {item.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GitHub;
