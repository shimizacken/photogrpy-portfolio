import { Photo } from "../types/photos.types";

const image1 = new URL(
  "../assets/images/DSC_0587_LR4_LP.jpeg",
  import.meta.url
);

const image2 = new URL(
  "../assets/images/DSC_0391_LR4_LP-3.jpeg",
  import.meta.url
);

const image3 = new URL(
  "../assets/images/DSC_0247_LR4_LP-4.jpeg",
  import.meta.url
);

export const Photos: Photo[] = [
  {
    id: "1",
    name: "",
    description: "Jaipur",
    yearTaken: 2012,
    alt: "",
    originalFileName: "DSC_0391_LR4_LP-3.jpeg",
    path: "./DSC_0391_LR4_LP-3.jpeg",
    url: image1,
  },
  {
    id: "2",
    name: "",
    description: "Jaipur",
    yearTaken: 2012,
    alt: "",
    originalFileName: "DSC_0247_LR4_LP-4.jpeg",
    path: "./DSC_0247_LR4_LP-4.jpeg",
    url: image2,
  },
  {
    id: "3",
    name: "",
    description: "Jaipur",
    yearTaken: 2012,
    alt: "",
    originalFileName: "DSC_0587_LR4_LP.jpeg",
    path: "./DSC_0587_LR4_LP.jpeg",
    url: image3,
  },
];
