import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import EditJob from "./pages/EditJob";

function App() {
  // Add job
  async function addJob(newJob) {
    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  //Delete job
  async function deleteJob(id) {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  }

  //Update Job listing

  async function updateJob(editedJob) {
    await fetch(`/api/jobs/${editedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedJob),
    });
    return;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "jobs", Component: JobsPage },
        {
          path: "jobs/:id",
          Component: () => <JobPage deleteJob={deleteJob} />,
        },
        {
          path: "add-job",
          Component: () => <AddJobPage addJobSubmit={addJob} />,
        },
        { path: "edit-job/:id", Component: () => <EditJob updateJob={updateJob}/> },
        { path: "*", Component: NotFoundPage },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
