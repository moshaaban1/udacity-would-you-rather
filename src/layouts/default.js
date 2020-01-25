import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "../components/navbar/navbar.component";

const DefaultLayout = ({ children }) => (
   <div>
      <Navbar />
      <main style={{ padding: "50px 0" }}>
         <Container>{children}</Container>
      </main>
   </div>
);

export default DefaultLayout;
