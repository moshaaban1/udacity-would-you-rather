import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "../components/navbar/navbar.component";
import { Main } from "./default.styles";

const DefaultLayout = ({ children }) => (
   <>
      <Navbar />
      <Main>{children}</Main>
   </>
);

export default DefaultLayout;
