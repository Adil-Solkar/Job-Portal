import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // Add job
  async function addJob(newJob)  {
      await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "jobs", Component: JobsPage },
        { path: "jobs/:id", Component: JobPage },
        { path: "add-job", Component: () => <AddJobPage addJobSubmit={addJob}/> },
        { path: "*", Component: NotFoundPage },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
