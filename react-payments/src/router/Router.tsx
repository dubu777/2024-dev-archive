import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { path } from "../constants/path"
import Root from "./Root"
import EnrollCard from "@/pages/EnrollCard"
import Completed from "@/pages/Completed"

const Router = () => {
  const paymenteRouter = createBrowserRouter([
    {
      path: path.ENROLL_CARD,
      element: <Root/>,
      children: [
        {
          path: path.ENROLL_CARD,
          element: <EnrollCard />
        },
        {
          path: path.COMPLETED,
          element: <Completed />
        }
      ]
    }
  ])

  return <RouterProvider router={paymenteRouter} />
}

export default Router;