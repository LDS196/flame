import { IUser } from "@/store/types";
import { Commit, Dispatch } from "vuex";
import { api } from "@/api/api";

export interface PeoplesState {
  favorites: IUser[];
}

export const peoplesModule = {
  state(): PeoplesState {
    return {
      favorites: [],
    };
  },
  mutations: {
    setFavorite(state: PeoplesState, user: IUser) {
      state.favorites.push(user);
    },
    removeFavorite(state: PeoplesState, url: string) {
      state.favorites = state.favorites.filter((user) => user.url !== url);
    },
  },
  actions: {
    async getPeoples({ commit }: { commit: Commit; dispatch: Dispatch }) {
      try {
        const res = await api.getPeople();
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getPeopleById({ commit }: { commit: Commit; dispatch: Dispatch }, id: string) {
      try {
        const res = await api.getPeopleById(id);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
    async search({ commit }: { commit: Commit; dispatch: Dispatch }, name: string) {
      try {
        const res = await api.search(name);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
