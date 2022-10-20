const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  teamBuild,
} = require("./src/questions");

let teamArray = [];

const app = {
  init: async () => {
    await inquirer.prompt(managerQuestions).then((data) => {
      let manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamArray.push(manager);
    });
    app.promptTeamBuild(teamArray);
  },

  promptTeamBuild: async () => {
    await inquirer.prompt(teamBuild).then((data) => {
      switch (data.addMember) {
        case "Engineer":
          console.log("great");
          break;
        case "Intern":
          console.log("sweet");
          break;
        case "Done":
          console.log(teamArray);
      }
    });
  },
};

app.init();
