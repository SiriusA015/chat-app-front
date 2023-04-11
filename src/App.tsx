/* eslint-disable react/jsx-no-duplicate-props */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ViewAccount from "./pages/ProfileEdit/ProfileEdit";
import CreateAccount from "./pages/Account/CreateAccount/CreateAccount";
import EditAccount from "./pages/Account/EditAccount/EditAccount";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProfileUnlocked from "./pages/ProfileUnlocked/ProfileUnlocked";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import { useState, createContext } from "react";

interface AppContextInterface {
  currentTab: string;
  setTab: any
}
export const AppCtx = createContext<AppContextInterface | null>(null);

const App = () => {
  const [aa, setAA] = useState('activity')
  const sampleAppContext: AppContextInterface = {
    currentTab: aa,
    setTab: setAA
  };
  return (
    <AppCtx.Provider value={sampleAppContext}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Homepage />} />
            <Route path="/account" element={<ViewAccount />} />
            <Route path="/account/create" element={<CreateAccount />} />
            <Route path="/account/edit" element={<EditAccount />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile_unlocked" element={<ProfileUnlocked />} />
            <Route path="/profile_edit" element={<ProfileEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppCtx.Provider>
  );
};

export default App;
