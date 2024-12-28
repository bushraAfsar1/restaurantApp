const  resturantsArray = JSON.parse(localStorage.getItem("resturantsArray")) ;
const lForm = document.getElementById("lForm");

const validation = document.getElementById("validation");
lForm.addEventListener("submit", function (e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const findUser = resturantsArray?.filter(ele => ele.email === email);
    console.log(findUser);
    if(findUser && findUser[0]?.password != password){
        alert("incorrect password");
    }else {
        localStorage.setItem("currentResturant", JSON.stringify(findUser))
        alert("Logged In")
        location.href = "./dashboardResturant.html";
    }

    // let loginAccount = JSON.parse(localStorage.getItem("usersArray"));

})