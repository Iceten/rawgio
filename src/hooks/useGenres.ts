import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import genreService from "../services/genreService";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => 
useQuery({
  queryKey: ['genres'],
  queryFn: genreService.getAll,
  staleTime: ms('24h'), //24h
  initialData: genres,
})

export default useGenres;
