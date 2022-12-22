import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomChat from "./chat/RoomChat.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/roomchat" element={<RoomChat />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
