import APIClient,{ FetchResponse } from "./api-client";
import {Game} from '../hooks/useGames'

export default new APIClient<Game>('/games')