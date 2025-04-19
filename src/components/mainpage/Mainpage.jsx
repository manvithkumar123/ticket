import React, { useState, useRef } from 'react';
import './mainpage.css';
import { Link, useNavigate } from 'react-router-dom';
import { assests } from '../../assets/images/assests';

const Mainpage = () => {
  const [preview, setPreview] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    navigate("/success", { state: { name, email, icon: preview } });
  };

  return (
    <div>
      <div className="mainbg" style={{ backgroundImage: `url(${assests.bgmain})` }}>
        <div className="logo">
          <img src={assests.logo} alt="" />
        </div>
        <div className="text_container">
          <h1 style={{ textAlign: "center", fontSize: "40px" }}>Your Journey to Coding Conf<br />2025 Starts Here!</h1>
          <p style={{ textAlign: "center", opacity: "70%", marginTop: "10px" }}>Secure your spot at next year's biggest coding conference.</p>
        </div>

        <div className="container">
          <h4>Upload Avatar</h4>

          <div className="input-bg" onDrop={handleDrop} onDragOver={handleDragOver} onClick={() => fileInputRef.current.click()}>
            <input
              type="file"
              hidden
              className="file-input"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            {!preview && (
              <>
                <h3>Drag and Drop</h3>
                <img src={assests.upload} alt="" />
              </>
            )}
            {preview && <img src={preview} alt="Preview" className="preview-image" />}
          </div>

          <div className="upload-info">
            <i className="fa-solid fa-circle-info"></i>
            <h5>Upload your photo (JPG or PNG, max size: 500KB).</h5>
          </div>

          <div className="details">
            <h4>Full Name</h4>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h4>Email Address</h4>
            <input type="text" placeholder='example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            <h4>GitHub Username</h4>
            <input type="text" placeholder='@yourusername' />
          </div>

          <div className="submit">
            <button onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;