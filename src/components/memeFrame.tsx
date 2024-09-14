import type { ReactNode } from "react";
import { FirstLoad } from "../utils/stateContainer";

export default function MemeFrame({ children }: { children: ReactNode }) {
  const [state, actions] = FirstLoad();

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
            onLoad={() => actions.loading(false)}
          />
        )
      )}
    </div>
  );
}
