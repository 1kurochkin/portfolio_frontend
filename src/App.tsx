import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen bg-gray-800 text-white flex justify-center flex-col">
      <header className="pl-2 pr-2 pt-5 flex flex-col fixed top-0 left-0 right-0">
        <div className="flex self-end items-center">
          <nav className="hover:underline">#about</nav>
          <nav className="ml-10 hover:underline">#skills</nav>
          <nav className="ml-10 hover:underline">#work_expirience</nav>
          <nav className="ml-10 hover:underline">#projects</nav>
          <button className="ml-10 mr-5 p-2 pl-5 pr-5 border-2 border-dashed hover:border-solid">
            RESUME
          </button>
        </div>
        <p className="mt-3 overflow-hidden max-w-full">
          ========================================================================================================================================================================================================================================================================================================================================================================================================================================================================
        </p>
      </header>
      <div className="container w-9/12 self-center">
        <section className="min-h-screen flex items-center">
          <div className="self-center w-6/12">
            <h1 className="text-xl font-bold">Hello World! I'm Ivan Kurochkin</h1>
            <p className="">
              And in this second my code is helping people solve their problems,
              and the owners of that are making money.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
