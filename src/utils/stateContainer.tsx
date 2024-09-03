import { createHook, createStore } from "react-sweet-state";

const Store = createStore({
  initialState: { firstLoad: true },
  actions: {
    firstLoad:
      () =>
      ({ setState }) => {
        // const currentCount = getState().count;
        setState({ firstLoad: false });
      },
  },
});

export const FirstLoad = createHook(Store);

//I realized that I could have just used purely React, without Astro
