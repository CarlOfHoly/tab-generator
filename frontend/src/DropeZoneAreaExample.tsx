import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";

const DropzoneAreaExample = () => {
  const headers = {
    "content-type": "multipart/form-data",
  };

  const fileDrop = (files: File[]) => {
    const formData = new FormData();

    const file: File = files[0];
    formData.append("file", file);

    axios
      .post("http://localhost:5000/analyze", { formData }, { headers })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <DropzoneArea onDrop={fileDrop} />
    </div>
  );
};

export default DropzoneAreaExample;
