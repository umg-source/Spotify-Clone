import React, { useContext } from "react";
import { assests } from "../assests/assests";
import { PlayerContext } from "../context/PlayerContext";
const Track = () => {
  const { play, pause, playStatus,playNext,playPrev,seekBar,seekSong, seekBg ,audioMute} =
    useContext(PlayerContext);
  return (
    <div className="text-white ">
      <div className="flex items-center gap-5 ">
        <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[380px] mt-5 bg-gray-900 rounded-full cursor-pointer">
          <hr ref={seekBar}className="h-1 border-none w-[1%] bg-white rounded-full" />
        </div>
      </div>

      <div className="flex items-center justify-between py-8 w-[65%] px-10">
        <img src={assests.setting} alt="setting" />
        <div className="flex items-center justify-around gap-7">
          <img className="cursor-pointer" onClick={playPrev} src={assests.prev} alt="prev" />
          {playStatus ? (
            <img className="cursor-pointer"onClick={pause} src={assests.pause} alt="pause" />
          ) : (
            <img className="cursor-pointer"onClick={play} src={assests.play} alt="play" />
          )}
          <img className="cursor-pointer"onClick={playNext} src={assests.next} alt="next" />
        </div>
        <img className='cursor-pointer'onClick={audioMute}src={assests.sound} alt="sound" />
      </div>
    </div>
  );
};

export default Track;
