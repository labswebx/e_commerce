// src/utils/copyToClipboard.js

export const copyToClipboard = (text) => {
  if (!text) return;
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Copied to clipboard:", text);
    },
    (err) => {
      console.error("Failed to copy:", err);
    }
  );
};
