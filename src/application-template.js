
// in the index.js file we did fs.writefile with the array teamMembers 
// the array teammembers is within the required application template file we are in now


// let's create the team
  // this will create the html that corresponds to the users input
// here we will use a variable to store an arrow functions that stores other variables with arrows functions
    // our arrow function have one parameter and no parethesis as the structure

    const generateTeam = team => {

    
        // for our html structure here with bootstrap as our framework
        // we create a card for the employer
        // we create a header to give the name and role
        // we create a card body 
        // we create a list
        // our list items are our information about the employees
        
        // let's create the manager html
    
      const generateManager = manager => {
        return `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
            `;
      };
    
      // let's create the html for engineers
    
      const generateEngineer = engineer => {
        return `
            <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
            `;
      };
    
      // let's create the html for interns
    
      const generateIntern = intern => {
        return `
            <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
            `;
      };
    
    
    // let's create a variable with stores an empty array
    
      const html = [];
    
    // for these next steps
        // for these we are going to push the team and add a filter to it
            // if it doesn't pass the filter then it won't be pushed
            // if it passes the filter then will map the engineer's in the array so each get's it owns employee card
                // the same will go for the intern and manager
    
      html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
      );
      html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
      );
      html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
      );
    
      return html.join("");
    
    }
    
    // export function to generate entire page via the index.js user input
    // we are giving the base html and adding the team as the body of our html page which we append accordingly above
    
    module.exports = team => {
    
      return `
        <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
    };