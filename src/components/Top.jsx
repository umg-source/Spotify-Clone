import React, { useContext, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Top = ({ list: { cover, name, artist, url, id, top_track } }) => {
  const [duration, setDuration] = useState(1);
  var au = document.createElement("audio");
  au.src = url;
  au.addEventListener(
    "loadedmetadata",
    function () {
      setDuration(au.duration / 60);
    },
    false
  );
  // console.log(id)
  const { playWithId } = useContext(PlayerContext);

  return (
    top_track && (
      <div
        onClick={() => playWithId(id)}
        className=" p-4 h-full flex align-middle justify-center cursor-pointer"
      >
        <div className="w-[48px] h-[48px]">
          <img
            className="rounded-full"
            src={`https://cms.samespace.com/assets/${cover}`}
            alt="img"
          />
        </div>
        <div className="flex align-bottom justify-between px-5 h-full w-full">
          <div>
            <div className="font-normal text-lg">{name}</div>
            <div className="font-extralight text-sm text-opacity-30">
              {artist}
            </div>
          </div>

          <div className="text-lg flex items-center font-light justify-center">
            <div>{duration.toFixed(2)}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Top;
