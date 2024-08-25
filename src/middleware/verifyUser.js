const { validateFieldState, validateUserType, validateUserName, validateUserEmail } = require("../errors/errorUtil");


function verifyUser(req, res, next)
{
    const {userType, userName, email, password} = req.body;
    const route = req.route.path.split("/")[1]

    
    try{

        if(route == "register")
            {
                //validate all fields existance
                req.body["userType"] = validateFieldState(userType, "userType");
                req.body["userName"] = validateFieldState(userName, "userName");
                req.body["email"]    = validateFieldState(email, "email");
                req.body["password"] = validateFieldState(password, "password");
        
                //validate userType
                validateUserType(userType);

                //validate userName
                validateUserName(userName);

                //validate userEmail
                validateUserEmail(email);


            }
            else
            {
                //validate all fields existance
                req.body["email"]    = validateFieldState(email, "email");
                req.body["password"] = validateFieldState(password, "password");

                //validate userEmail
                validateUserEmail(email);

                
            }

            next();

    }
    catch(err)
    {
        res.error(err.message, err, err.status);
    }
    
    
   
}

module.exports = verifyUser;
