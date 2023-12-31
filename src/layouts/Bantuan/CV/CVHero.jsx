import React from "react";
import Button from "../../../components/Button";
import { useState, useEffect } from "react";

const CVHero = () => {
  const [file, setFile] = useState(null);
  const [isCVSubmitted, setIsCVSubmitted] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      setIsCVSubmitted(true);
    } else {
      console.log("No file selected");
    }
  };
  useEffect(() => {
    if (isCVSubmitted) {
      alert("CV telah dikumpulkan");

      setIsCVSubmitted(false);

      window.location.reload();
    }
  }, [isCVSubmitted]);

  return (
    <section className="container pt-10 pb-20">
      <div
        style={{
          backgroundImage: "url(/assets/images/bantuan-bg/cv-hero.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[400px] py-0 flex flex-col justify-center rounded-3xl"
      >
        <div className="text-white max-w-[500px] ml-20 flex flex-col gap-10 items-start">
          <div className="flex flex-col gap-6">
            <h1>Dapatkan review CV dan surat lamaran</h1>
            <p>
              Kami menyediakan review CV untuk memastikan potensi terbaik agar
              peluang mendapatkan pekerjaan anda meningkat
            </p>
          </div>
          <div className="bg-white flex items-center p-2 pl-6 rounded-xl justify-center gap-20">
            <div>
              {file ? (
                <p className="text-secGray">{file.name}</p>
              ) : (
                <p className="text-secGray">Dapatkan Review CV gratis</p>
              )}
            </div>
            <div>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              {file ? (
                <Button
                  onClick={handleUpload}
                  variant="default"
                  className="border-none p-4"
                >
                  Kirim
                </Button>
              ) : (
                <Button
                  onClick={() => document.getElementById("fileInput").click()}
                  className="p-4 border-none"
                  variant="default"
                >
                  Upload CV
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVHero;
