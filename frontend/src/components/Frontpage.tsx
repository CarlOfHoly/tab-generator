import React from "react";
import { Container } from "@material-ui/core";
import FileUploader from "./FileUploader";
import Header from "./Header";

const Frontpage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <FileUploader />
      </Container>
    </>
  );
};

export default Frontpage;
