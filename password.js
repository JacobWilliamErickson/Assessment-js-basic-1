password = "jacoberickson1234"
//Additional Checks - Check for maximum length (i.e. no more than 30 characters) && Check for forbidden words (“password”)
// \d stands for all numbers between 0-9, /regular expressions/
var numbers = /\d/
// if statement to check password for forbidden words
if (password.includes("password")||password.includes("1234")||password.includes("letmein")){
    console.log("This password contains a hidden phrase! '1234', 'password' or 'letmein' cannot be included in your password ")
    console.log(`d88PPPo ,8b.     88PPP. 
888ooo8 88'8o    88   8 
888   8 88PPY8.  88   8 
888PPPP 8b   Y'  88oop'`)
}
//Nan is not a number, so if it is true it means the string contains some letter)
//else if after the forbidden word check to make sure A:password length isn't too short, B password length isnt too long, C its contains atleast one number and D it contains atleast on Letter
else if (password.length>=10&& password.length<=30 && password.match(numbers)!==null && isNaN(password) === true){
    console.log(`Password is long enough (${password.length} characters) and contains both letters and numbers`)
    console.log(`888PPP8b 88888888 88888888   88PPP. 
d88      888  888 888  888   88   8 
d8b PPY8 888  888 888  888   88   8 
Y8PPPPPP 888oo888 888oo888   88oop' `)
} //else if to give a password to short message 
else if (password.length<10){
    console.log(`Password is either not long enough ${password.length}/10 required or does not contain both numbers and letters`)
    console.log(`d88PPPo ,8b.     88PPP. 
888ooo8 88'8o    88   8 
888   8 88PPY8.  88   8 
888PPPP 8b   Y'  88oop'`)
} 
//else statement to give the password is too long message
else{
    console.log(`Password is either too long ${password.length}/30 maximum or does not contain both numbers and letters`)
    console.log(`d88PPPo ,8b.     88PPP. 
888ooo8 88'8o    88   8 
888   8 88PPY8.  88   8 
888PPPP 8b   Y'  88oop'`)
}

// ASCII Art 'GOOD' and 'BAD'
/* d88PPPo ,8b.       88PPP. 
   888ooo8 88'8o      88   8 
   888   8 88PPY8.    88   8 
   888PPPP 8b   `Y'   88oop' */
/*888PPP8b 88888888 88888888   88PPP. 
  d88      888  888 888  888   88   8 
  d8b PPY8 888  888 888  888   88   8 
  Y8PPPPPP 888oo888 888oo888   88oop' */
                                 
                         