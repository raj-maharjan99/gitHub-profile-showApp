import React, { useState } from "react";
import GitHub from "./GitHub";

export default function Header() {
  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("");

  const searchBtn = () => {
    setUserName(search);
    setSearch("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="bg-[#3e3e48] max-sm:bg-slate-700 text-[20px] flex 
      max-sm:w-[400px] max-sm:flex max-sm:flex-col max-sm:gap-[40px] 
       items-center justify-evenly gap-5 font_family text-white py-5 text-center nav_shadow"
      >
        <div className="logo max-sm:border w-[50%] ">
          {" "}
          <a target="_blank" href={`https://github.com/${userName}`}>
            <img
              className="w-100 "
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              alt=""
            />
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex max-sm:w-[350px] max-sm:flex-col items-center justify-center gap-6"
          action=""
        >
          <div>
            <input
              placeholder="write here...."
              className="px-3  max-sm:w-[300px] h-[60px] w-[450px] border rounded-xl  text-center text-slate-600"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="border px-3">
            <button className="search-btn" onClick={searchBtn}>
              Search
            </button>
          </div>
        </form>
      </div>
      {userName && <GitHub userName={userName} />}
    </>
  );
}
