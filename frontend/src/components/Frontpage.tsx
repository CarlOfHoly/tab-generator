import React from "react";
import { Container } from "@material-ui/core";
import FileUploader from "./FileUploader";
import Header from "./Header";
import Introduction from "./Introduction";

const Frontpage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Container maxWidth="sm">
        <FileUploader />
      </Container>
    </>
  );
};

export default Frontpage;
