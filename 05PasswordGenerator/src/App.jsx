import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPasssword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+={}[]~`";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPasssword(pass);
  }, [length, numberAllowed, charAllowed, setPasssword]);

  return (
    <>
    <div className="w-full text-2xl max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
    <div className="w-full text-2xl max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
    <input type="text"
    value={password}
    className="outline-none w-full py-1 px-3"
    placeholder="password"
    readOnly
    />
    </div>
    </div>
    </>
  );
}

export default App;
