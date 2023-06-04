
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";
import  Home from "./pages/home/Home";
import  Tweets  from "./pages/tweets/Tweets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;








