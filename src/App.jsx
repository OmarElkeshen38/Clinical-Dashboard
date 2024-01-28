import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import './App.css';
import Welcome from "./pages/Welcome/Welcome";
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import Analytics from "./pages/Analytics/Analytics.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import AddnewmedicinePage from "./pages/AddnewmedicinePage/AddnewmedicinePage";
import CustomersPage from "./pages/CustomersPage/CustomersPage";
import React from "react";
import Chat from "./pages/Chat/Chat.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
      <React.Fragment>
      <Route index element={<Welcome />} />
      <Route path="/" element={<Root />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/chat' element={<Chat />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/add-new-medicine" element={<AddnewmedicinePage />} />
      </Route>
      </React.Fragment>
  )
);


function App() {

  return (
    <div className="App w-100">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
