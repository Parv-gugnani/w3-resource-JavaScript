function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Invalid number. Please input an integer.");
  }
  console.log("Number is valid:", number);
}

// Example usage:
try {
  validateInteger(12); // Valid integer
  validateInteger(2.12); // Throws an error
} catch (error) {
  console.log("Error:", error.message);
}
