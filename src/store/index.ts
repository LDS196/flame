import { createStore } from "vuex";
import { RootState } from "@/store/types";
import { peoplesModule } from "@/store/modules/peoplesModule";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export const store = createStore<RootState>({
  plugins: [vuexLocal.plugin],
  modules: {
    peoples: peoplesModule,
  },
});
