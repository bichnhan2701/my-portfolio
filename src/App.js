// import logo from './logo.svg';
import './App.css';
import React from "react";
import AboutMe  from "./components/AboutMe";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
      </header>

      <main>
        <AboutMe />

        <section id="projects">
          <h2>Projects</h2>
          <p>Here are some projects I'v work on: </p>
        </section>

        <section id="contact">
          <h2>contact me</h2>
          <p>Email: </p>
        </section>
      </main>

      <footer>
        <p> Bich Nhan 2025 </p>
      </footer>

    </div>
  );
}

export default App;
