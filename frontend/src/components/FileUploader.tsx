import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const FileUploader = () => {
  const fileDrop = (files: File[]) => {
    const formData = new FormData();

    const file: File = files[0];
    formData.append("file", file);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    }).then((res) => {
      console.log(res.text);
    });
  };

  return (
    <div>
      <DropzoneArea
        onDrop={fileDrop}
        acceptedFiles={["audio/wav", "audio/x-wav"]}
      />
    </div>
  );
};

export default FileUploader;
