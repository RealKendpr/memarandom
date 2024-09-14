import { createHook, createStore } from "react-sweet-state";

const Store = createStore({
  initialState: {
    firstLoad: true,
    loadStart: false,
    memeUrl: "",
    loading: false,
  },
  actions: {
    firstLoad:
      () =>
      ({ setState }) => {
        setState({ firstLoad: false });
      },
    loadStart:
      (loadStart) =>
      ({ setState }) => {
        setState({ loadStart: loadStart });
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

export const StateStore = createHook(Store);

//I realized that I could have just used purely React, without Astro
