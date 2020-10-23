import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";

const DropzoneAreaExample = () => {
  const [files, setFiles] = useState([]);

  const headers = {
    "content-type": "text/plain",
  };

  const handleChange = (file: any) => {
    axios
      .post("http://localhost:5000/analyze", { file: file }, { headers })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <DropzoneArea onChange={handleChange} />
    </div>
  );
};

export default DropzoneAreaExample;
