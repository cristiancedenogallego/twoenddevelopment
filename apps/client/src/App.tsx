import {ApolloProvider} from "@apollo/client";
import {createApolloClient} from "./apollo"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Root} from "./routes/Root";
import {BoardDetail} from "./routes/BoardDetail";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/:boardId",
    element: <BoardDetail />,
  },
]);

function App() {
  const apolloClient = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
       <RouterProvider router={router} />
       <ToastContainer />
    </ApolloProvider>
  )
}

export default App
