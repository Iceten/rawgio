import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import platformService from "../services/platformService";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => 
useQuery({
  queryKey:['platforms'],
  queryFn: platformService.getAll,
  staleTime:ms('24h'),
  initialData:platforms,
})

export default usePlatforms;
