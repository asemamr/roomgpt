"use client";
import Image from "next/image";
import { useState } from "react";
import ListBox from "./ListBox";
import { UrlBuilder } from "@bytescale/sdk";
import { UploadDropzone } from "@bytescale/upload-widget-react";
import generateImage from "@/actions/actions";
import { useFormState } from "react-dom";
import { themes, roomTypes, dropzoneOptions } from "@/static/options";
import { UploadWidgetOnUpdateEvent } from "@bytescale/upload-widget";
import Step from "./Step";
import { FormInputs } from "./types";
import LoadingIcon from "./LoadingIcon";

export default function Form() {
  const [theme, setTheme] = useState(themes[0]);
  const [roomType, setRoomType] = useState(roomTypes[0]);
  const [imageName, setImageName] = useState<null | string>("");
  const [formInputs, setFormInputs] = useState<null | FormInputs>(null);
  const [clicked, setClicked] = useState<boolean>(false)

  type Output = {
    output: string[];
  };
  // bind all the inputs into the server action (generateImage)
  const allActions = generateImage.bind(null, formInputs);

  // get the return value from the server action (generateImage) by using useFromState
  const [state, formAction] = useFormState<Promise<string[]>>(allActions, null);

  function handleUpdateDropzone({ uploadedFiles }: UploadWidgetOnUpdateEvent) {
    if (uploadedFiles.length !== 0) {
      const originalFile = uploadedFiles[0].originalFile;
      const fileName = originalFile.originalFileName;
      const imageUrl = UrlBuilder.url({
        accountId: originalFile.accountId,
        filePath: originalFile.filePath,
        options: {
          transformation: "preset",
          transformationPreset: "thumbnail",
        },
      });
      setImageName(originalFile.originalFileName);
      setFormInputs({
        imageUrl: imageUrl.toString(),
        theme: theme.value.toLowerCase(),
        roomType: roomType.value.toLowerCase(),
      });
    }
  }
  return (
    <form action={formAction}>
      <h1 className="text-6xl font-bold text-center my-6">
        Generate your <span className="text-blue-600">dream</span> room
      </h1>
      <div className="w-[380px] mx-auto mt-11 relative">
        <Step
          imageUrl="/number-1-white.svg"
          alt="number-1"
          title="Choose your room theme."
        />
        <ListBox options={themes} setState={setTheme} state={theme} />
      </div>
      <div className="w-[380px] mx-auto mt-11 relative">
        <Step
          imageUrl="/number-2-white.svg"
          alt="number-2"
          title="Choose your room type"
        />
        <ListBox options={roomTypes} setState={setRoomType} state={roomType} />
      </div>
      <div className="w-[380px] mx-auto mt-11 relative">
        <Step
          imageUrl="/number-3-white.svg"
          alt="number-3"
          title="Upload a picture of your room."
        />
      </div>
      {!formInputs?.imageUrl ? (
        <UploadDropzone
          options={dropzoneOptions}
          onUpdate={handleUpdateDropzone}
          className="mx-auto"
          width="670px"
          height="250px"
        />
      ) : (
        <Image
          src={formInputs?.imageUrl}
          width={500}
          height={500}
          alt="the original image"
          className="mx-auto rounded-2xl my-2 w-auto h-auto"
        />
      )}
      {state && (
        <Image
          src={state[1]}
          width={500}
          height={500}
          alt="the original image"
          className="mx-auto rounded-2xl my-2 w-auto h-auto"
        />
      )}
      <button
        type="submit"
        className="block w-fit mx-auto bg-blue-600 px-4 py-3 rounded-xl hover:bg-blue-500 transition-colors duration-200 font-medium mt-10 mb-5"
        disabled={!formInputs?.imageUrl}
        onClick={() => setClicked(true)}
      >
        {formInputs?.imageUrl && clicked &&  !state ? <LoadingIcon/>: "Generate Image" }
      </button>
    </form>
  );
}
