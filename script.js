window.addEventListener("load", () => {
  const showStuffElement = document.querySelector(".show-stuff");
  // Define the custom method
  Array.prototype.logError = function () {
    console.error("Error: " + this.join(", "));
  };

  function showNewStuff() {
   
    
    // Use the custom method on an array

    const myArray = [1, 2, 3, 4, 5];
    console.log(myArray);
    myArray.logError(); // Output: Error: 1, 2, 3, 4, 5
    const newStuff = document.createElement("div");
    newStuff.innerHTML = myArray
    showStuffElement.appendChild(newStuff);
  }
  showNewStuff();
});
