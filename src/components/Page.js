import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Page.css";
import {cuisines} from "../helpers/foods";

function Page({ children }) {
  const history = useHistory();
  const { cuisine } = children?.props?.match?.params;
  if (cuisine && !cuisines.includes(cuisine)) {
    history.push("/");
    return <section>Error</section>;
  }
  return <section className="Page">{children}</section>;
}

export default Page;
