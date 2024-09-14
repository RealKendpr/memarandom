import { type ReactNode } from "react";
import { StateStore } from "../utils/stateContainer";

export default function MemeFrame({ children }: { children: ReactNode }) {
  const [state, actions] = StateStore();

  return (
    <div className="img grid place-items-center min-h-dvh relative">
      {children}
      {state.firstLoad && !state.loading ? (
        <div className="text-zinc-300">
          <strong>Be Informed</strong> <br />
          <p className="mt-4">
            Some of the memes are offensive and can be sensitive for others, So
            be warned. Please press the button on the right to start generating
            memes.
          </p>
        </div>
      ) : (
        state.memeUrl != "" && (
          <img
            className="select-none"
            src={`${state.memeUrl}&sz=w1000`}
            alt="a meme"
            onLoad={() => actions.loadStart(false)}
          />
        )
      )}
      {state.loadStart && (
        <div className="absolute w-full min-h-dvh grid place-items-center bg-zinc-500">
          <svg
            className="size-20 text-gray-200 animate-pulse"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}
    </div>
  );
}
