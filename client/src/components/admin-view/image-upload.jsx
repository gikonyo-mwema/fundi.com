import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

/**
 * Component for uploading product images with drag-and-drop support.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {File|null} props.imageFile - The currently selected image file.
 * @param {Function} props.setImageFile - Function to set the selected image file.
 * @param {boolean} props.imageLoadingState - State indicating if the image is being uploaded.
 * @param {string} props.uploadedImageUrl - URL of the uploaded image.
 * @param {Function} props.setUploadedImageUrl - Function to set the uploaded image URL.
 * @param {Function} props.setImageLoadingState - Function to set the image loading state.
 * @param {boolean} props.isEditMode - Flag indicating if the component is in edit mode.
 * @param {boolean} [props.isCustomStyling=false] - Flag indicating if custom styling should be applied.
 * @returns {JSX.Element} The rendered component.
 */
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

  /**
   * Handles the change event when an image file is selected.
   *
   * @param {Event} event - The change event.
   */
  function handleImageFileChange(event) {
    console.log(event.target.files, "event.target.files");
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
  }

  /**
   * Handles the drag over event to allow dropping.
   *
   * @param {Event} event - The drag over event.
   */
  function handleDragOver(event) {
    event.preventDefault();
  }

  /**
   * Handles the drop event when a file is dropped.
   *
   * @param {Event} event - The drop event.
   */
  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  /**
   * Handles the removal of the selected image file.
   */
  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  /**
   * Uploads the selected image file to Cloudinary.
   */
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

  /**
   * Effect hook to upload the image file when it changes.
   */
  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div
      className={`image-upload-container ${isCustomStyling ? "custom-styling" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Label htmlFor="image-upload" className="image-upload-label">
        {isEditMode ? "Edit Image" : "Upload Image"}
      </Label>
      <Input
        type="file"
        id="image-upload"
        ref={inputRef}
        onChange={handleImageFileChange}
        className="image-upload-input"
      />
      {imageFile && (
        <div className="image-preview">
          <FileIcon />
          <span>{imageFile.name}</span>
          <Button onClick={handleRemoveImage}>
            <XIcon />
          </Button>
        </div>
      )}
      {imageLoadingState && <Skeleton />}
      {uploadedImageUrl && (
        <div className="uploaded-image">
          <img src={uploadedImageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}
