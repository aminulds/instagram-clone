import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-3 md:max-w-3xl
     xl:grid-cols-3 xl:max-w-6xl mx-auto"
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
