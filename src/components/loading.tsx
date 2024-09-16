import { StateStore } from "../utils/stateContainer";

export default function Loading() {
  const [state] = StateStore();

  return (
    state.loading && (
      <div className="text-zinc-200 absolute w-full min-h-dvh grid place-content-center">
        <img
          src="/loading.gif"
          alt="Bouncing troll face"
          className="select-none mb-4"
          aria-hidden="true"
        />
        <p className="text-xl font-medium">Picking a meme for you...</p>
        {state.firstLoad && (
          <p>
            <i>First time loading might take a while.</i>
          </p>
        )}
      </div>
    )
  );
}
