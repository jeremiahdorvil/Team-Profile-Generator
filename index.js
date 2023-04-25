// We are requiring all of the potential employees to be used.
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// We are requiring all of the tools to build our app.
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// We are creating empty arrays to store our answers.
const teamMembers = [];
const idMembers = [];
// we are establishing our paths to create our apps.
const Directory = path.resolve(__dirname, 'dist');
const distPathway = path.join(Directory, 'index.html');
// we are a making a variable to create the application template.
const render = require('./src/application-template.js');

// we are creating the interface the user will see in the terminal using inquirer

console.log(
  '\n Welcome to the Team Generator! \n Use `npm run reset` to reset the dist/ folder \n ------------'
);

console.log("Let's build your team!");

function teamApp() {

  // here are the questions the user will answer using inquirer 
  function createManager() {
    
    inquirer 
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is your manager's name?",
          validate: (answer) => { 
            if (answer !== '') {
              return true;
            }
            return 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'managerID',
          message: "What is your manager's ID number?",
          validate: (answer) => {
            
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            } 
            return 'Please enter a number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is your manager's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email.';
          },
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is your manager's office number?",
          validate: (answer) => {
            
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a number greater than zero.';
          },
        },
      ])
    
      // here we input our users answers to create a new Manager class that we already built in lib
    
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNumber
          );
          
          teamMembers.push(manager);
          idMembers.push(answers.managerID);
          
          // user will select the next team member they would like to add
          nextMember();
      })
    }

    // this function will allow the user to select the next member they would like to add
    function nextMember() {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'memberChoice',
            message: 'Which team member would you like to add next?',
            choices: [
              'Engineer',
              'Intern',
              "I have no more team members to add.",
            ],
          },
        ])
        .then((userChoice) => {

          // we are using a switch statement here instead of an if else statement

          switch (userChoice.memberChoice) {
            case 'Engineer':
              addEngineer();
              break;
            case 'Intern':
              addIntern();
              break;
            default:
              createTeam();
          }
        });
    }

    function addEngineer() {
      inquirer 
        .prompt([
          {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Please provide a name.';
            },
          },
          {
            type: 'input',
            name: 'engineerID',
            message: "What is your engineer's ID?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {

                // this will check to make sure that no 2 employee has the same id

                if (idMembers.includes(answer)) {
                  return 'This ID is already taken. Please enter a different ID number.';
                } else {
                  return true;
                }
              }
                return 'Please enter a number greater than zero.';
            },
          },
          {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?",
            validate: (answer) => {
              const pass = answer.match(/\S+@\S+\.\S+/);
              if (pass) {
                return true;
              }
                return 'Please enter a valid email.';
            },
          },
          {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineer's GitHub username?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
                return 'Please enter a valid Github username.';
              },
          },
        ])

      // here we input our users answers to create a new Engineer class that we already built in lib
        .then((answers) => {
          const engineer = new Engineer (
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub
          );

        teamMembers.push(engineer);
        idMembers.push(answers.engineerID);
        nextMember();

        });
    }

    function addIntern() {
      inquirer 
        .prompt([
          {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Please enter a name.';
            },
          },
          {
            type: 'input',
            name: 'internID',
            message: "What is your intern's ID?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                if (idMembers.includes(answer)) {
                  return 'This ID is already taken. Please enter a different number.';
                } else {
                  return true;
                }
              }
              return 'Please enter a number greater than zero.';
            },
          },
          {
            type: 'input',
            name: 'internEmail',
            message: "What is your intern's email?",
            validate: (answer) => {
              const pass = answer.match(/\S+@\S+\.\S+/);
              if (pass) {
                return true;
              }
              return 'Please enter a valid email address.';
            },
          },
          {
            type: 'input',
            name: 'internSchool',
            message: "What is your intern's school?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Please enter a school.';
            },
          },
        ])

        // here we input our users answers to create a new Intern class that we already built in lib

        .then((answers) => {
          const intern = new Intern (
            answers.internName,
            answers.internID,
            answers.internEmail,
            answers.internSchool
          );

          teamMembers.push(intern);
          idMembers.push(answers.internID);
          nextMember();
        });
      }

    function createTeam() {

      // let's use fs exists sync to check it a file already exists in the given path
        // in this case our if check will see if our Directory variable is not already created and if it isn't then it will create it

      if (!fs.existsSync(Directory)) {
        fs.mkdirSync(Directory);
      }

      // write file sync will create a new file 
        // the first parameter is our file 
        // the second parameter is our data 

      fs.writeFileSync(distPathway, render(teamMembers),'utf-8');
    }

    // this will put us back at the top of the function in the case that multiple managers are needed

    createManager();
  }
  
  teamApp();
