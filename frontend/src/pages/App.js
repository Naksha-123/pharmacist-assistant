import { useState } from "react";
import axios from "axios";

export default function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    const response = await axios.post("http://localhost:8000/upload/", formData);
    setText(response.data.extracted_text);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={uploadImage}>
        Upload
      </button>
      <p className="mt-4">{text}</p>
    </div>
  );
}
