import React, { useState } from "react";
import "./UploadPage.css";

const UploadPage = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    if (!image) {
      alert("Please upload an image before submitting.");
      return;
    }
    alert("Image submitted! Backend integration coming soon!");
  };

  return (
    <div className="upload-container full-page">
      <div className="upload-card centered">
        <h2 className="upload-title">Upload Fruit Image 🍌🥭</h2>
        <label className="file-upload-label">
          <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
          <span className="upload-text">Click here to upload </span>
        </label>
        {fileName && <p className="file-name">{fileName}</p>}
        {image && <img src={image} alt="Preview" className="image-preview" />}
        <button onClick={handleSubmit} className="submit-button">Submit Image</button>
      </div>
    </div>
  );
};

export default UploadPage;
