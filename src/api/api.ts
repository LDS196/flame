import { instance } from "@/api/common.api";
import { ApiEndpoints } from "@/api/ApiEndpoints";
import { IResponse, IUser } from "@/store/types";

export const api = {
  getPeople() {
    return instance.get<IResponse>(ApiEndpoints.GetPeople);
  },
  getPeopleById(id: string) {
    return instance.get<IUser>(ApiEndpoints.GetPeople + `/${id}/`);
  },
  search(name: string) {
    return instance.get<IResponse>(ApiEndpoints.Search + `${name}`);
  },
};
