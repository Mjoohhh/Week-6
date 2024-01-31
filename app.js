const userInputFeild = document.querySelector("#textInput")
const addBtn = document.querySelector("#addBtn")
const characterDisplay = document.querySelector("#outputList")
let characters = []

addBtn.addEventListener("click", (event) => {
    const userCharacter  = userInputFeild.value

    if(userCharacter !== "") {
        characters.push(userCharacter)

        userInputFeild.value = ""
        characterDisplay.innerHTML = ""

        characters.forEach(character => {
            const characterListElement = document.createElement("li")
            characterListElement.innerText = character
            characterDisplay.appendChild(characterListElement)
        })
    
    } else{
        console.log("Error, Blank input.")
    }
    


    console.log(characters)
    event.preventDefault()
})