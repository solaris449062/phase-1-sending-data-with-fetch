const destinationURL = "http://localhost:3000/users";
function submitData(inputName, inputEmail) {
    const formData = {
        name: inputName,
        email: inputEmail
    };
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return fetch(destinationURL, configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        let nameh2 = document.createElement("h2");
        let emailh2 = document.createElement("h2");
        let idh2 = document.createElement("h2");
        nameh2.innerText = "Name: " + jsonObject.name;
        emailh2.innerText = "Email: " + jsonObject.email;
        idh2.innerText = "ID: " + jsonObject.id
        idh2.setAttribute("id", jsonObject.id)
        let bodyElement = document.querySelector("body");
        bodyElement.append(nameh2, emailh2, idh2);
        
    })
    .catch(function(errorObject) {
        let errorh2 = document.createElement("h2");
        let errorComment = document.createComment(errorObject.message);
        errorh2.innerText = "Error: " + errorObject.message;
        let bodyElement = document.querySelector("body");
        bodyElement.append(errorh2, errorComment);
    }) 
}





// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//     };
    
//     // method: "POST" is missing from the object below
// const configurationObject = {
// headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
// },
// body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(function(response) {
//     return response.json();
// })
// .then(function(object) {
//     console.log(object);
// })
// .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
// }); 