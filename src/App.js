import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Problems from "./Components/Problems/Problems";
import CodeEditor from "./Components/CodeEditor/CodeEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-primary  w-full overflow-hidden">
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header />
                </div>
              </div>
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Home />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/problems"
          element={
            <div className="bg-primary  w-full overflow-hidden">
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header />
                  <Problems />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/code-editor"
          element={
            <div className="bg-primary  w-full overflow-hidden">
              <div className="px-6 flex justify-center items-center">
                <div className="max-w-[1480px] w-full">
                  <Header />
                  <CodeEditor/>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
