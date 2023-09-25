import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "../services/useData";
import { Genre } from "./useGenres";
import { parent_platform } from "./usePlatforms";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery.genre?.id, gameQuery.platform?.id]
  );

export default useGames;
