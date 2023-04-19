import { Movie } from "@/typescript";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  title: string;
  movies: Movie[];
}

function row({ title, movies }: Props) {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="">{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className="row__scroll--btn" />
        <ChevronRightIcon className="row__scroll--btn" />
      </div>
    </div>
  );
}

export default row;
