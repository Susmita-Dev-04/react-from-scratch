import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-1 rounded-2xl border-4 border-black">
          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("Orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("Olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("Cyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "cyan" }}
          >
            cyan
          </button>
          <button
            onClick={() => setColor("Magenta")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "magenta" }}
          >
            magenta
          </button>
          <button
            onClick={() => setColor("Lime")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "lime" }}
          >
            lime
          </button>
          <button
            onClick={() => setColor("Teal")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "teal" }}
          >
            teal
          </button>
          <button
            onClick={() => setColor("Indigo")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "indigo" }}
          >
            indigo
          </button>
          <button
            onClick={() => setColor("Brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "brown" }}
          >
            brown
          </button>
          <button
            onClick={() => setColor("Gold")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "gold" }}
          >
            gold
          </button>
          <button
            onClick={() => setColor("Silver")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "silver" }}
          >
            silver
          </button>
          <button
            onClick={() => setColor("LimeGreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "limegreen" }}
          >
            limegreen
          </button>
          <button
            onClick={() => setColor("Coral")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "coral" }}
          >
            coral
          </button>
          <button
            onClick={() => setColor("Crimson")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "crimson" }}
          >
            crimson
          </button>
          <button
            onClick={() => setColor("Orchid")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "orchid" }}
          >
            orchid
          </button>
          <button
            onClick={() => setColor("Navy")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "navy" }}
          >
            navy
          </button>
          <button
            onClick={() => setColor("Salmon")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "salmon" }}
          >
            salmon
          </button>
          <button
            onClick={() => setColor("Tan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "tan" }}
          >
            tan
          </button>
          <button
            onClick={() => setColor("Thistle")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "thistle" }}
          >
            thistle
          </button>
          <button
            onClick={() => setColor("Tomato")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "tomato" }}
          >
            tomato
          </button>
          <button
            onClick={() => setColor("Turquoise")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "turquoise" }}
          >
            turquoise
          </button>
          <button
            onClick={() => setColor("SaddleBrown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "saddlebrown" }}
          >
            saddlebrown
          </button>
          <button
            onClick={() => setColor("SpringGreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "springgreen" }}
          >
            springgreen
          </button>
          <button
            onClick={() => setColor("DarkOrchid")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "darkorchid" }}
          >
            darkorchid
          </button>
          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("PaleGreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "palegreen" }}
          >
            palegreen
          </button>
          <button
            onClick={() => setColor("DarkMagenta")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "darkmagenta" }}
          >
            darkmagenta
          </button>
          <button
            onClick={() => setColor("DarkRed")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black"
            style={{ background: "darkred" }}
          >
            darkred
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
