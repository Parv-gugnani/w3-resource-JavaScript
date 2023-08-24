try {
  const undefinedObject = undefined;
  console.log(undefinedObject.property); // Accessing property of undefined object
} catch (error) {
  if (error instanceof TypeError) 
  {
    console.log('Error: Property access to undefined object');
  } 
  else 
  {
    throw error; // Rethrow the error if it's not a TypeError
  }
}