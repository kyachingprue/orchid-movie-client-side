import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import AuthProvider from './components/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "signin",
    element: <SignIn></SignIn>
  },
  {
    path: "signup",
    element: <SignUp></SignUp>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
