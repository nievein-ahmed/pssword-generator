

/*const lib = document.querySelector("#pw");
function myFunction() {

    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = [];
    

    for (let i = 0; i < 7; i++) {
       // let generate = letters[Math.floor(Math.random() * 64)];
        //password += generate;
        password.push(letters[Math.floor(Math.random() * letters.length)]);

    }


    //document.getElementById("#pw").innerHTML = password;

}
lib.innerHTML = myFunction();*/

const pass = document.querySelector("#click")
function generatePassword(length = 8) {
    let password = '';
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); // Random index values corresponding to the character set are pushed to array
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; // No division-remainder operator now necessary (values already correspond to indexes of chars)
    }
   
    const msg = `Your new password is: "${password}"`
    console.log(msg);
    pass.innerHTML = password
    return password;
  }
  
  
  
  
  
