import React from "react";
import { Container } from "@material-ui/core";
import FileUploader from "./FileUploader";
import Introduction from "./Introduction";

const TabPage = () => {
  return (
    <>
      <Introduction />
      <Container maxWidth="sm">
        <FileUploader />
      </Container>
    </>
  );
};

export default TabPage;
