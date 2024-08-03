import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
// import { FetchAPI } from '../utils/FetchAPI';
// import { useEffect } from 'react';
import { PlayerContext } from "../context/PlayerContext";
import Top from "./Top";

const Sidebar = () => {
  const { list, setList, topTrack, setTopTrack } = useContext(PlayerContext);

  return (
    list && (
      <div className="w-[35%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div className="flex font-bold text-2xl flex-row justify-between font-style:inter w-[75%]">
          <div
            className="cursor-pointer"
            onClick={() => {
              setTopTrack(!topTrack);
            }}
          >
            For You
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setTopTrack(!topTrack);
            }}
          >
            Top Tracks
          </div>
        </div>
        <SearchBar />
        <div className="flex  flex-col overflow-auto ">
          {list.map((data, index) =>
            topTrack ? (
              <Top key={index} list={data} />
            ) : (
              <List key={index} list={data} />
            )
          )}
        </div>
      </div>
    )
  );
};

export default Sidebar;
