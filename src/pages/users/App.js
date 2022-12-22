import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomChat from "../admin/chat/RoomChat.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/roomchat" element={<RoomChat />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
