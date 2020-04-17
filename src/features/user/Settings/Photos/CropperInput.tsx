import React, { FC, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css"; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

const CropperInput: FC<any> = (props: any) => {
  const cropper = useRef<any>(null);
  const { imagePreview, setImage } = props;
  const cropImage = (event: any) => {
  //  console.log(cropper.current.getCroppedCanvas());
    cropper.current.getCroppedCanvas().toBlob((blob: any) => {
      setImage(blob);
    }, "image/jpeg");
   // console.log(cropper.current.getCroppedCanvas().toDataURL());
  };
  return (
    <Cropper
      ref={cropper}
      src={imagePreview}
      style={{ height: 200, width: "100%" }}
      preview=".img-preview"
      // Cropper.js options
      aspectRatio={1}
      viewMode={1}
      dragMode="move"
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      guides={false}
      crop={e => cropImage(e)}
    />
  );
};

export default CropperInput;
