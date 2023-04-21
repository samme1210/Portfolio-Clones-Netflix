import { Movie } from "@/typescript";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import Thumbnail from "../components/Thumbnail";

interface Props {
  title: string;
  //for firebase
  //movie: Movie | DocumentData[]
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  console.log(movies)
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2
        className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition 
      duration-200 hover:text-white md:text-2xl"
      >
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`row__scroll--btn left-2 ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => 
            movie.backdrop_path ? (
            <Thumbnail key={movie.id} movie={movie} />
          ) : movie.poster_path
          )}
        </div>

        <ChevronRightIcon
          className={`row__scroll--btn right-2`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
