//Create an application with following roles:
//admin - gets full access
//subadmin -gets access to create/delete courses
//testprep - gets access to create/delete tests 
//user  - gets access to consume content

var user = "testprep";

switch (user) {
    case "admin":
        console.log("you got full access")
        break;
    case "subadmin":
        console.log(" get access to create/delete courses");
        break;
        case "testprep":
        console.log(" get access to create/delete courses");
        //break;
        

        case "user":
            console.log("you got access to consume content");
           //break;

           default:
            console.log("Trial user"):

            break;


}