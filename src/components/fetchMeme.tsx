import { StateStore } from "../utils/stateContainer";

export default function FetchMeme() {
  const [state, actions] = StateStore();

  const handleFetch = async () => {
    actions.loading(true);
    if (state.memeUrl != "") {
      actions.memeUrl("");
    }
    try {
      const res = await fetch("https://memarandom.onrender.com/api-get");
      if (res.ok) {
        const memeObj = await res.json();
        actions.memeUrl(memeObj.meme_url);
        actions.loading(false);
        actions.loadStart(true);
        actions.firstLoad();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      disabled={state.loading}
      className="button disabled:cursor-not-allowed"
      onClick={handleFetch}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36px"
        height="36px"
        viewBox="0 0 20 20"
        className="hover:text-zinc-300 transition-colors"
        fill="currentColor"
      >
        <path d="M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z"></path>
      </svg>
    </button>
  );
}
