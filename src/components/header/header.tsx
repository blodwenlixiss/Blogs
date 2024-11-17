export const Header = () => {
  return (
    <header>
      <div className=" mx-auto flex justify-between text-white px-5 py-5 items-center">
        <a href="/" className="text-2xl font-bold">
          Blog
        </a>
        <nav>
          <ul className=" text-gray-400 flex list-none gap-3 text-lg">
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
        <div className="flex gap-3 items-center">
          <a href="">Sign In</a>
          <button>Change Lang</button>
          <button>theme</button>
        </div>
      </div>
    </header>
  );
};
