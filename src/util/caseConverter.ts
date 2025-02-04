export const toTitleCase = (text: string): string => {
    return text
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space before uppercase letters
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Handle consecutive uppercase letters
      .replace(/_/g, " ") // Replace underscores with spaces (if any)
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };