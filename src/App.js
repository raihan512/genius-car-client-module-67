import { RouterProvider } from "react-router-dom";
import { Routess } from "./Router/Routes/Routes";

function App() {
  return (
    <div data-theme="light" className="max-w-6xl mx-auto">
      <RouterProvider router={Routess}></RouterProvider>
    </div>
  );
}

export default App;
