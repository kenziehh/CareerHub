import React from "react";
import { useDropzone } from "react-dropzone";
import Button from "../../components/Button";
import { RxCross2 } from "react-icons/rx";

export default function UploadFile({ closeDialog }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone();

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path} className="py-2 flex items-center justify-between">
      <p>
        {file.path} - {Math.ceil(file.size / 1000)} KB
      </p>
      <button className="flex items-center justify-center bg-primaryBlue rounded-full aspect-square w-6 text-white">
        <RxCross2 />
      </button>
    </li>
  ));
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lamaran anda telah terkirim!!");
    closeDialog();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Lamaran anda telah terkirim!!");
        closeDialog();
      }}
    >
      <div className="flex flex-col gap-4 w-fit ">
        <h4 className="font-semibold">Upload CV & Surat Lamaran</h4>
        <div
          {...getRootProps()}
          className="rounded-xl border-2 border-dashed py-4 px-8 text-black/40"
        >
          <input {...getInputProps()} required />
          {isDragActive ? (
            <div className="flex items-center gap-4">
              <p>Lepas di sini</p>

              {/* <Button variant="disabled">Pilih File</Button> */}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <p>Pilih file atau seret dan lepas di sini</p>

              <Button variant="disabled">Pilih File</Button>
            </div>
          )}
        </div>

        <h5 className="font-semibold">Unggahan</h5>
        <div>
          <ul>{acceptedFileItems}</ul>
        </div>

        <label htmlFor="" className="h5 font-semibold">
          Portofolio &#40; Optional &#41;
        </label>
        <input
          type="text"
          placeholder="www.ya.com"
          className="border rounded-xl border-black/40 py-2 px-4"
        />
        <Button onClick={handleSubmit} variant="default" className="self-end px-8">
          Kirim
        </Button>
      </div>
    </form>
  );
}
