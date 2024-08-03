import React, { useState } from "react";

const List = ({ list: { cover, name, artist, url } }) => {
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

  return (
    <div className="flex w-[432px] h-[80px] pt-[16px] gap-0 rounded-tl-[8px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] justify-between">
      <div className="flex items-center w-[147px] h-[48px] gap-[16px]">
        <img
          src={"https://cms.samespace.com/assets/" + cover}
          alt="Cover"
          className="w-[48px] h-[48px] rounded-full"
        />
      </div>
      <div className="flex flex-col justify-between px-5 h-full w-full">
        <div>
          <div className="font-normal text-lg">{name}</div>
          <div className="font-extralight text-sm text-opacity-30">
            {artist}
          </div>
        </div>
      </div>
      <div className="flex items-center text-lg font-light justify-center">
        <div>{duration.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default List;
