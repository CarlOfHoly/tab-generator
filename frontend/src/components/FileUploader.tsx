import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Button } from "@material-ui/core";

const FileUploader = () => {
  const [files, setFiles] = useState<File[] | null>(null);

  const sendFiles = () => {
    const formData = new FormData();

    if (files) {
      const file: File = files[0];
      formData.append("file", file);

      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      }).then((res: any) => {
        res.json()
      }).then((data) => {
        console.log(data);
      })
      
    } else {
      console.log("Please upload files");
    }
  };


  const fileDrop = (files: File[]) => {
    setFiles(files);
  };

  return (
    <div className="file-uploader">
      <DropzoneArea
        onDrop={fileDrop}
        acceptedFiles={["audio/wav", "audio/x-wav"]}
      />
      <Button
        className="file-button"
        variant="contained"
        color="primary"
        component="span"
        onClick={sendFiles}
      >
        Upload
      </Button>
    </div>
  );
};

export default FileUploader;
