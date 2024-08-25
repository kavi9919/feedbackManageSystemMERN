const { BadRequestError, NotFoundError } = require('../errors/httpError');

const validateFieldState = (field, fieldName, notFoundMsg = "not found", requireMsg = "required") =>{

    if(field === undefined)
        throw new NotFoundError({field: fieldName, error: `${fieldName} ${notFoundMsg}`});
     if(field.trim() === "")
        throw new BadRequestError({field: fieldName, error: `${fieldName} ${requireMsg}`});

     return field.trim();
}

const validateUserType = (userType) => {
    if(userType !== "candidate" && userType !== "employer" && userType !== "admin")
        throw new BadRequestError({field: "userType", error: `userType is not valid`});
}

const validateUserName = (userName) => {

    userName = userName.trim();

    // Length Validation pattern
    let usernamePattern = /^.{3,20}$/;

    if(!usernamePattern.test(userName))
       throw new BadRequestError({field: "userName", error: `userName length between 3 - 20`});

    // Allowed Characters pattern
    usernamePattern = /^[a-zA-Z0-9_\- ]+$/;
    let unallowedChars = [];
    for (let char of userName)
        if (!usernamePattern.test(char)) unallowedChars.push(char);

    if(!usernamePattern.test(userName))
        throw new BadRequestError({field: "userName", error: `Invalid special characters [${unallowedChars}]. Use only [_,-].`});

    // Disallow Numeric-Only Usernames
    usernamePattern = /^(?!\d+$).+$/;

    if(!usernamePattern.test(userName))
        throw new BadRequestError({field: "userName", error: `userName cannot be a number`});

    // Disallow Usernames without any letter
    usernamePattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9_\- ]+$/;

    if(!usernamePattern.test(userName))
        throw new BadRequestError({field: "userName", error: `userName include atleast one letter`});

}

const validateUserEmail = (userEmail) => {

    userEmail = userEmail.trim();

    // Email Validation pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailPattern.test(userEmail))
        throw new BadRequestError({field: "email", error: `Invalid email`});

}


module.exports = {
    validateFieldState,
    validateUserType,
    validateUserName,
    validateUserEmail
}