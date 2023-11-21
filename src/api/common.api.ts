import { ApiEndpoints } from "@/api/ApiEndpoints";
import axios from "axios";

export const instance = axios.create({
  baseURL: ApiEndpoints.BaseUrl,
});
