function checkAge() {
    
    let age = document.getElementById("ageInput").value;

    
    age = parseInt(age);

   
    if (age >= 18) {
        document.getElementById("result").innerText = "You are an adult.";
    
    }
}


function checkNumber(){

    let number = document.getElementById("numberInput").value;

    number = parseInt(number);

    if (number % 2 === 0) {

        document.getElementById("output").innerText = "The number is even.";
    } else {
        document.getElementById("output").innerText = "The number is odd.";
    }

}


function checkGrade(){
    let grade = document.getElementById("gradeInput").value;

    grade = parseInt(grade);

    if (grade >= 90) {
        document.getElementById("resulttt").innerText = "Excellent";
    } else if (grade >= 80) {
            document.getElementById("resulttt").innerText = "Good";
        } else  if (grade >= 70) {
                document.getElementById("resulttt").innerText = "Fair";
            } else {
                document.getElementById("resulttt").innerText = "Failed";
            }
        }
     
        
    










