import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import SignIn from "../layouts/Auth/SignIn";
import SignUp from "../layouts/Auth/SignUp";
import { useNavigate, useLocation } from "react-router-dom";
import UploadFile from "../layouts/Auth/UploadFile";

export default function Dialog() {
  let [searchParams] = useSearchParams();
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const showDialog = searchParams.get("showDialog");
  const type = searchParams.get("type");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeDialog = () => {
    dialogRef.current?.close();
    navigate(`${location.pathname}`);
  };

  const handleBackdropClick = (event) => {
    // Check if the click is outside the dialog
    if (event.target === dialogRef.current) {
      closeDialog();
    }
  };

  const dialog =
    showDialog === "y" ? (
      <>
        <div className="fixed inset-0 bg-black opacity-50 z-[10000]" />
        <dialog
          ref={dialogRef}
          className="flex rounded-xl z-[1000]"
          onClick={handleBackdropClick}
        >
          <div className="p-8 rounded-xl">
            {(() => {
              switch (type) {
                case "signin":
                  return <SignIn closeDialog={closeDialog} />;
                case "signup":
                  return <SignUp closeDialog={closeDialog} />;
                case "upload":
                  return <UploadFile closeDialog={closeDialog} />;
                default:
                  return null;
              }
            })()}
          </div>
        </dialog>
      </>
    ) : null;

  return dialog;
}
