import React, { useContext, useEffect, useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { PiPlus } from "react-icons/pi";
import { myContext } from "../../context/Contextprovider";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loadByCatogery, SetSearch } from "../../store/reducer/VideoSlice";
import { asyncGetVideoData } from "../../store/actions/vidoeAction";
import axios from "axios";

const Top = ({ toggle }) => {
  const [input, setinput] = useState("");
  const [showSuggestion, setshowSuggestion] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true);
  const dispatch = useDispatch();
  const { ToggelHandler } = useContext(myContext);
  const Suggestion = useSelector((state) => state.video.Suggestion);
  // const search = [...Suggestion];
  // search.push(Suggestion)
  // console.log(search);

  const SearchBySuggestion = async () => {
    setShouldFetch(!shouldFetch);
    try {
      const res = await axios.get(
        `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${input}`
      );
      console.log(res.data[1]);
      dispatch(SetSearch(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(!input.trim()){
      dispatch(SetSearch([]))
      return
    }

    const timer = setTimeout(() => {
      SearchBySuggestion()
    }, 700)
     
    return () => clearTimeout(timer)
  }, [input])

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loadByCatogery(input))
    // console.log(input);
    setinput("");
  };

  const SuggestionHandler = (elem) => {
    dispatch(loadByCatogery(elem));
    dispatch(SetSearch([]));
    setinput(elem);
    setshowSuggestion(false);
  };

  const openSuggestion = () => {
    setshowSuggestion(true);
  };

  return (
    <div className="w-full fixed top-0 z-9">
      <div className="w-full p-3 flex justify-between items-center bg-white h-[4rem] gap-3 lg:gap-0">

        <div className="flex items-center gap-8 lg:pl-5">
          <CiMenuBurger
            className="text-2xl font-bold duration-1000 hidden md:block lg:block"
            onClick={() => {
              ToggelHandler();
            }}
          />
          <img
            src="public/Youtube-Logo-500x281-removebg-preview.png"
            alt=""
            className="lg:w-32 w-20 lg:h-9"
          />
        </div>

        <div className="relative lg:w-[35vw] w-[37vh]">
          <form
            onSubmit={SubmitHandler}
            className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white"
          >
            <input
              type="text"
              value={input}
              placeholder="Search"
              className="outline-0 w-full p-2"
              onFocus={openSuggestion}
              onChange={(e) => setinput(e.target.value)}
            />
            <button className="px-2 py-2 bg-gray-100 border-l border-gray-200">
              <BiSearch className="text-2xl" />
            </button>
          </form>

          {search.length !== 0 && showSuggestion ? (
            <div className="w-full lg:w-[32.5vw] bg-white absolute top-11 rounded-2xl border-gray-300 border">
              {search.map((elem, idx) => {
                return (
                  <ul className="" key={idx}>
                    <li
                      className="p-1 pl-2 cursor-pointer flex gap-1.5 items-center"
                      onClick={() => SuggestionHandler(elem)}
                    >
                      <BiSearch className="text-[1.4rem]" />
                      {elem}
                    </li>
                  </ul>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="flex items-center gap-3 ">
          <div className="items-center gap-2 bg-gray-200 px-2 py-2 rounded-full border hidden lg:flex border-gray-400">
            <PiPlus />
            <h1>Create</h1>
          </div>

          <div className="p-2 border rounded-full">
            <BiUser className="text-2xl" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Top;
