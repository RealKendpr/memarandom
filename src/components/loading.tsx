import { FirstLoad } from "../utils/stateContainer";

export default function Loading() {
  const [state] = FirstLoad();

  return (
    state.loading && (
      <div className="text-zinc-200 absolute w-full min-h-dvh grid place-content-center">
        <img
          src="/meme-face.png"
          alt="Bouncing troll face"
          className="animate-bounce size-16 select-none"
          aria-hidden="true"
        />
        <p className="text-lg font-medium">Picking a meme for you...</p>
        {state.firstLoad && (
          <p>
            <i>First time loading might take a while.</i>
          </p>
        )}
      </div>
    )
  );
}
