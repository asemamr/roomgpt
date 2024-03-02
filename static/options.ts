export const themes = [
  { id: "0", value: "Modern" },
  { id: "1", value: "Minimalist" },
  { id: "2", value: "Professional" },
  { id: "3", value: "Tropical" },
  { id: "4", value: "Vintage" },
];
export const roomTypes = [
  { id: "0", value: "Living Room" },
  { id: "1", value: "Dining Room" },
  { id: "2", value: "Office" },
  { id: "3", value: "Bedroom" },
  { id: "4", value: "Bathroom" },
  { id: "5", value: "Gaming Room" },
];

export const dropzoneOptions = {
  apiKey: process.env.REPLICATE_API_KEY
    ? process.env.REPLICATE_API_KEY
    : "free",
  maxFileCount: 1,
  showFinishButton: false,
  editor: {
    images: {
      crop: false,
    },
  },
  styles: {
    colors: {
      primary: "#2563EB", // Primary buttons & links
      error: "#d23f4d", // Error messages
      shade100: "#fff", // Standard text
      shade200: "#fffe", // Secondary button text
      shade300: "#fffd", // Secondary button text (hover)
      shade400: "#fffc", // Welcome text
      shade500: "#fff9", // Modal close button
      shade600: "#fff7", // Border
      shade700: "#fff2", // Progress indicator background
      shade800: "#fff1", // File item background
      shade900: "#ffff", // Various (draggable crop buttons, etc.)
    },
  },
};