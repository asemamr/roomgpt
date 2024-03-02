"use server";
import Replicate from "replicate";
import { FormInputs } from "@/components/types";

// generate image from the uploaded image by using replicate
export default async function generateImage(formData: FormInputs | null) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
  });

  const output = await replicate.run(
    // "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
    // "catio-apps/interioraidesigns-generate:9e0b15ac47a5a6502175cfab3853d88413f4fd4bee8da0509deb0895db96d0a7",
    "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
    {
      input: {
        // seed: 0,
        // steps: 10,
        width: 768,
        image: formData?.imageUrl,
        prompt: `a ${formData?.theme} ${formData?.roomType}`,
        a_prompt: "best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning",
        n_prompt: "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
      },
    }
  );

  console.log("the output ", output)

  return output;
}
