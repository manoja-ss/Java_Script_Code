const accountId = 12345;
let accountEmail = "manoj@google.com";
var accountPassword = "123456";
accountCity = "Bengaluru";
let accountStatus;

// accountId = 54321; error -> "TypeError: Assignment to constant variable."
accountEmail = "manojass@google.com";
accountPassword = "654321";
accountCity = "Tumakur";

/*
we Should not use var
because of issue block scop and functional scop
*/
console.table([accountId,accountEmail, accountPassword, accountCity, accountStatus]);