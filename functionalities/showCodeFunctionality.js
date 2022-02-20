function showCodeFunctionality(id) {

    const selectedComponent = document.getElementById(id)

    return selectedComponent.style.display === "none" ? selectedComponent.style.display = "block" : selectedComponent.style.display = "none";


}