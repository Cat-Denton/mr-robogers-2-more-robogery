export default function roboRoger(number) {

  if (number > 100) {
    return "Mr. roboRogers doesn't have all day! Input a smaller number so they don't get angry!"
  } else {

    const numArray = [];

    for (let index = 0; index <= number; index++) {
      if(index.toString().includes(3)) {
        numArray[index] = "Won't you be my neighbor?";
      } else if (index.toString().includes(2)) {
        numArray[index] = "Boop!";
      } else if (index.toString().includes(1)) {
        numArray[index] = "Beep!";
      } else {
        numArray[index] = index.toString();
      }
    }

    let numString = "";

    if (number === 69) {
      numArray.forEach(function(element) {
        numString = numString + element + " ";
      });
      numString += "...nice ";
    } else {
      numArray.forEach(function(element) {
        numString = numString + element + " ";
      });
    }
    return numString.slice(0,numString.length - 1);
  }
}
