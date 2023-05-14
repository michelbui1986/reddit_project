import "./style.css";
import Header from "./Header";
import BoardHeader from "./BoardHeader";
import PostFrom from "./PostForm";
import AuthModal from "./AuthModal";

function App() {
  return (
    <div>
      <Header />
      <AuthModal />
      <BoardHeader />
      <PostFrom />

      <div className="px-6 bg-reddit_dark text-reddit_text">
        <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
          <h5 className="text-reddit_text-darker text-sm mb-1">
            {" "}
            Posted by u/test123 5 hours ago
          </h5>
          <h2 className="text-xl mb-3">WordPress</h2>
          <div className="text-sm leading-6">
            <p>I am a freelance dev</p>
            Hello world
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
