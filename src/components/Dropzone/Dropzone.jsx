import {useCallback, useMemo, useState} from "react";
import {useDropzone} from "react-dropzone";
import {Box, Typography} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {doneNotification} from "../../notifications/notification";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ImageIcon from "@mui/icons-material/Image";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.6)",
  lightPink: "rgba(255, 99, 132, 0.6)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  blueOpacity: "rgba(22, 41, 56, 0.7)",
  skyBlue: "rgba(208, 228, 233)",
  green: "#49726B",
};

const baseStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: chartColorsPalette.lightPink,
  borderStyle: "inset",
  color: chartColorsPalette.skyBlue,
  outline: "none",
  transition: "border .24s ease-in-out",
};

const acceptStyle = {
  borderColor: chartColorsPalette.tealBlue2,
};

const rejectStyle = {
  borderColor: chartColorsPalette.orange,
};

export default function DropZone({onImagenSeleccionada}) {
  const [isUploading, setIsUploading] = useState(null);
  const [isPhotoRemoved, setIsPhotoRemoved] = useState(false);

  const handleCancelUpload = () => {
    setIsUploading(false);
    setIsPhotoRemoved(!isPhotoRemoved);
    doneNotification("Done! Photo Removed");
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = () => console.log(onabort);
        reader.onerror = () => console.log(onerror);
        reader.onload = () => {
          if (file) {
            onImagenSeleccionada(file);
            setIsUploading(true);
            setIsPhotoRemoved(!isPhotoRemoved);
          }
        };
        reader.readAsDataURL(file);
      });
    },
    [onImagenSeleccionada, isPhotoRemoved]
  );

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/png": [],
    },
    onDrop,
    maxFiles: 1,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject]
  );

  return (
    <>
      <Box
        mt={2}
        display={"flex"}
        justifyContent={"center"}
        sx={{cursor: "cell"}}
      >
        <Box {...getRootProps({style})}>
          <input {...getInputProps()} />
          {acceptedFiles.length > 0 && isUploading === true ? (
            <Typography
              display={"flex"}
              alignItems={"center"}
              gap={1}
              variant="body2"
              color={chartColorsPalette.skyBlue}
              padding={0.5}
            >
              <ImageIcon
                className="icon-added"
                sx={{
                  marginTop: -0.5,
                  color: chartColorsPalette.lightPink,
                }}
              />
              Added!
            </Typography>
          ) : (
            <Typography
              display={"flex"}
              alignItems={"center"}
              gap={1}
              variant="body2"
              color={chartColorsPalette.skyBlue}
              padding={0.5}
            >
              <AddAPhotoIcon
                sx={{
                  marginTop: -0.5,
                }}
              />
              Ready to Drop
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        mt={2}
        display={"flex"}
        justifyContent={"center"}
        className={isPhotoRemoved !== true ? "dropzone" : null}
      >
        {isUploading && (
          <Typography
            display={"flex"}
            alignItems={"center"}
            gap={1}
            variant="body2"
            padding={0.8}
            component={"button"}
            onClick={handleCancelUpload}
            outline={"none"}
            border={"none"}
            borderRadius={1}
            bgcolor={chartColorsPalette.blue}
            color={chartColorsPalette.skyBlue}
            sx={{cursor: "pointer"}}
            mt={-1}
          >
            Remove
            <DeleteOutlineIcon
              fontSize="small"
              sx={{color: chartColorsPalette.skyBlue}}
            />
          </Typography>
        )}
        {isPhotoRemoved !== true ? (
          <Typography variant="body2" color={chartColorsPalette.skyBlue}>
            You can upload the photo later.
          </Typography>
        ) : null}
      </Box>
    </>
  );
}
