import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import Track from "./Track";

const Player = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="w-full h-full flex items-center justify-center px-20 py-20">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold pb-1">{track.name}</h1>
        <div className="text-sm font-extralight">{track.artist}</div>
        <img
          className="mt-7 w-[380px] h-[330px] rounded-lg object-cover"
          src={`https://cms.samespace.com/assets/${track.cover}`}
          alt="cover"
        />
        <div className="mt-5">
          <Track />
        </div>
        <audio ref={audioRef} src={track.url} preload="auto"></audio>
      </div>
    </div>
  );
};

export default Player;
