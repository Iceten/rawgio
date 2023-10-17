import APIClient from "./api-client";
import { Platform } from "../hooks/usePlatforms";

export default new APIClient<Platform>('/platforms/lists/parents')
