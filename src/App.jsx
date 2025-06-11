import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Card from "./Card";
import Image from "./assets/image.jpg";
import Abhishek from "./assets/abhishek.jpg";
import Sachin from "./assets/Sachin.jpg";
import Himanshu from "./assets/himanshu.jpg";
import Mayank from "./assets/himanshu.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div className="container flex bg-white rounded-lg h-150 items-center ">
        <div className="container-in flex flex-wrap gap-x-7  h-100">
          <Card
            name="Suraj Jha"
            src={Image}
            bio="Passionate about crafting clean, responsive UIs with HTML, CSS, and JavaScript.
Focused on pixel-perfect designs and user experience.
."
          />
          <Card
            name="Abhishek"
            src={Abhishek}
            bio="Front-end enthusiast with a flair for animations and interactivity.
Loves turning complex wireframes into seamless web pages.
"
          />
          <Card
            name="Sachin"
            src={Sachin}
            bio="Experienced in modern CSS frameworks and responsive layouts.
Writes maintainable, scalable front-end code.
"
          />
          <Card
            name="Himanshu"
            src={Himanshu}
            bio="Specialized in building mobile-first interfaces with speed in mind.
Good eye for design systems and UI consistency.
"
          />
          <Card
            name="Mayank"
            src={Mayank}
            bio="React developer with hands-on experience in hooks, context, and state management.

"
          />
        </div>
      </div>
    </>
  );
}

export default App;
