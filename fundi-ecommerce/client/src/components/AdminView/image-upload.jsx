import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import Input from "../UI/input.jsx";
import Label from "../UI/label.jsx";
import { useEffect, useRef } from "react";
import Button from "../UI/button.jsx";
import axios from "axios";
import Skeleton from "../UI/skeleton.jsx";

import React from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes

const ImageUpload = ({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling,
}) => {
  // Function to handle image upload
  const uploadImageToCloudinary = () => {
    // Your upload logic here
  };

  return (
    <div>
      {/* Your component JSX here */}
    </div>
  );
};

// Define prop types for ImageUpload
ImageUpload.propTypes = {
  imageFile: PropTypes.object.isRequired, // Validating imageFile as a required object
  setImageFile: PropTypes.func.isRequired, // Validating setImageFile as a required function
  imageLoadingState: PropTypes.string.isRequired, // Validating imageLoadingState as a required string
  uploadedImageUrl: PropTypes.string, // Validating uploadedImageUrl as a string
  setUploadedImageUrl: PropTypes.func.isRequired, // Validating setUploadedImageUrl as a required function
  setImageLoadingState: PropTypes.func.isRequired, // Validating setImageLoadingState as a required function
  isEditMode: PropTypes.bool.isRequired, // Validating isEditMode as a required boolean
  isCustomStyling: PropTypes.bool.isRequired, // Validating isCustomStyling as a required boolean
};



function ProductImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  console.log(isEditMode, "isEditMode");

  function handleImageFileChange(event) {
    console.log(event.target.files, "event.target.files");
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/upload-image",
      data
    );
    console.log(response, "response");

    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div
      className={`w-full  mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}
    >
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`${
          isEditMode ? "opacity-60" : ""
        } border-2 border-dashed rounded-lg p-4`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={`${
              isEditMode ? "cursor-not-allowed" : ""
            } flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <UploadCloudIcon className="w-10 h-10 mb-2" />
            <span>Drag & drop or click to upload</span>
          </Label>
        ) : (
          <div className="flex items-center justify-between">
            <FileIcon className="w-10 h-10" />
            <span>{imageFile.name}</span>
            <Button onClick={handleRemoveImage}>
              <XIcon className="w-5 h-5" />
            </Button>
          </div>
        )}
        {imageLoadingState && <Skeleton />}
      </div>
    </div>
  );
}

// Define prop types for ProductImageUpload
ProductImageUpload.propTypes = {
  imageFile: PropTypes.object.isRequired, // Validating imageFile as a required object
  setImageFile: PropTypes.func.isRequired, // Validating setImageFile as a required function
  imageLoadingState: PropTypes.bool.isRequired, // Validating imageLoadingState as a required boolean
  uploadedImageUrl: PropTypes.string, // Validating uploadedImageUrl as a string
  setUploadedImageUrl: PropTypes.func.isRequired, // Validating setUploadedImageUrl as a required function
  setImageLoadingState: PropTypes.func.isRequired, // Validating setImageLoadingState as a required function
  isEditMode: PropTypes.bool.isRequired, // Validating isEditMode as a required boolean
  isCustomStyling: PropTypes.bool, // Validating isCustomStyling as a boolean
};

// Exporting ProductImageUpload component as default
export default ProductImageUpload;


