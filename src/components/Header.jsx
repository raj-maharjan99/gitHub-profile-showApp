import React, { useState } from "react";
import GitHub from "./GitHub";
export default function Header() {
  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("");
  const profileLink = "https://github.com/&{userName}";
  const searchBtn = () => {
    setUserName(search);
    setSearch("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-[#0f0a2a] text-[30px] flex  items-center justify-evenly gap-5 font_family text-white py-5 text-center nav_shadow">
        <a href={`https://github.com/&{userName}`}>
          <div className="logo">GIT HUB PROFILE</div>
        </a>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-6"
          action=""
        >
          <div>
            <input
              placeholder="write your username here"
              className="px-3  h-[60px] w-[450px]  text-center text-slate-600"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="border px-3">
            <button className="" onClick={searchBtn}>
              Search
            </button>
          </div>
        </form>
      </div>
      {userName && <GitHub userName={userName} />}
    </>
  );
}

// export default Header;
