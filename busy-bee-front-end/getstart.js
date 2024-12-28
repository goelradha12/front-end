const colorChoice = document.querySelector("#color-choice");
const cssColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "yellow",
    "green",
    "red",
    "pink"
  ];

const arr = []


for(let i=0;i<24;i++)
{
    arr[i] = `<p class="color" style="background-color: ${cssColors[i]};"></p>`
}

// we will add 15 color shades to arr

// we will strigify arr and add it to innerHTML



colorChoice.innerHTML += `${arr.join(" ")}`
document.querySelector("#color-choice-2").innerHTML += `${arr.join(" ")}`

console.log(colorChoice);