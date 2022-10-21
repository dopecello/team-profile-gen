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
// const { engineerCard } = require("./src/cards");

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
    app.promptTeamBuild();
  },

  promptTeamBuild: async () => {
    await inquirer.prompt(teamBuild).then((data) => {
      switch (data.addMember) {
        case "Engineer":
          app.addEngineer();
          break;
        case "Intern":
          app.addIntern();
          break;
        case "Done":
          app.parseHtml();
      }
    });
  },

  addEngineer: async () => {
    await inquirer.prompt(engineerQuestions).then((data) => {
      let engineer = new Engineer(data.name, data.id, data.email, data.github);
      teamArray.push(engineer);
    });
    app.promptTeamBuild();
  },

  addIntern: async () => {
    await inquirer.prompt(internQuestions).then((data) => {
      let intern = new Intern(data.name, data.id, data.email, data.school);
      teamArray.push(intern);
    });
    app.promptTeamBuild();
  },

  parseHtml: () => {
    
  },
};

app.init();
