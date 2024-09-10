import { createHook, createStore } from "react-sweet-state";

const Store = createStore({
  initialState: { firstLoad: true, memeUrl: "", loading: false },
  actions: {
    firstLoad:
      () =>
      ({ setState }) => {
        setState({ firstLoad: false });
      },
    memeUrl:
      (memeUrl) =>
      ({ setState }) => {
        setState({
          memeUrl: memeUrl,
        });
      },
    loading:
      (loading: boolean) =>
      ({ setState }) => {
        setState({ loading: loading });
      },
  },
});

export const FirstLoad = createHook(Store);

//I realized that I could have just used purely React, without Astro
