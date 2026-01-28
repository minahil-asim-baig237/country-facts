import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import AppLayout 
import { AppLayout } from "./components/Layout/AppLayout"; 


//import css of App.jsx page
import "./App.css"; 
//  import Pages 
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
// Define routes
const router = createBrowserRouter([
    //Make a Parent layout for Routes 
    {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // default route for "/"
      { path: "about", element: <About /> },
      { path: "country", element: <Country /> },
      {path : "country/:id" , element: "CountryDetail"},
       { path: "contact", element: <Contact /> },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
