import { createBrowserRouter,RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true ,
        Component: HomePage,
      },
    ]
  },
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
 