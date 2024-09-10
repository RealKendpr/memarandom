import { FirstLoad } from "../utils/stateContainer";

export default function MemeFrame() {
  const [state, actions] = FirstLoad();

  return (
    <div className="img grid place-items-center min-h-dvh relative">
      {state.firstLoad ? (
        <div className="text-zinc-300">
          <strong>Lorem ipsum dolor sit amet.</strong> <br />
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            assumenda sint, cum facere adipisci explicabo neque ut totam quas id
            nisi aliquid repellat unde voluptas dolorem magnam commodi nostrum.
          </p>
        </div>
      ) : (
        <>
          {state.loading && (
            <div className="absolute w-full h-1/2 grid place-items-center bg-gray-400 animate-pulse">
              <svg
                className="size-16 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          )}
          {state.memeUrl != "" && (
            <img
              className="select-none"
              src={state.memeUrl}
              alt="a meme"
              onLoad={() => actions.loading(false)}
            />
          )}
        </>
      )}
    </div>
  );
}
