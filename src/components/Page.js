import React from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "../styles/Page.css";
import {cuisines} from "../helpers/foods";

function Page({ children }) {
  const history = useHistory();
  const { cuisine } = children?.props?.match?.params;
  if (cuisine && !cuisines.includes(cuisine.toLowerCase())) {
    toast.error(`Can't Fetch ${cuisine} Data !`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "custom",
      onClose: () => history.push("/")
    });
    return <section><ToastContainer /></section>;
  }
  return <section className="Page">{children}</section>;
}

export default Page;
