import { createContext, useRef, useState } from "react";
import { FetchAPI } from "../utils/FetchAPI";
import { useEffect } from "react";
import { assests } from "../assests/assests";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const seekBar = useRef();
  const seekBg = useRef();

  const audioRef = useRef();

  console.log("data", assests.songsData);
  const [playStatus, setPlayStatus] = useState(false);

  const [topTrack, setTopTrack] = useState(false);
  const [list, setList] = useState(null);
  const [track, setTrack] = useState(assests.songsData[0]);
  const [mute, setMute] = useState(true);
  console.log("track", track);
  const [cover, setCover] = useState(track.accent);
  useEffect(() => {
    setList(null);

    FetchAPI().then((items) => setList(items.data));
  }, []);

  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
      };
      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60),
          minute: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
    }, 1000);
  }, [audioRef]);

  // console.log(list && list[0])
  const data = list && json2array(list);
  function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
      result.push(json[key]);
    });
    return result;
  }

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    // console.log ("console" ,list[id].cover);
    await setTrack(data[id - 1]);
    setCover(data[id - 1].accent);
    await audioRef.current.play();
    setPlayStatus(true);
  };
  const playPrev = async () => {
    // console.log ("console" ,list[id].cover);
    if (track.id >= 0) {
      await setTrack(data[track.id - 1]);
      setCover(data[track.id - 1].accent);

      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const playNext = async () => {
    // console.log ("console" ,list[id].cover);
    if (track.id < 5) {
      await setTrack(data[track.id + 1]);
      setCover(data[track.id + 1].accent);

      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const audioMute = () => {
    mute ? (audioRef.current.muted = false) : (audioRef.current.muted = true);
    setMute(!mute);
  };
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    play,
    cover,
    setCover,
    pause,
    list,
    setList,
    playWithId,
    playNext,
    playPrev,
    time,
    seekSong,
    audioMute,
    topTrack,
    setTopTrack,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
