const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter your name: ",
  },
  {
    name: "id",
    type: "input",
    message: "Give yourself an id: ",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email: ",
  },
  {
    name: "office_number",
    type: "input",
    message: "Enter your office number: ",
  },
];

const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter engineer name: ",
  },
  {
    name: "id",
    type: "input",
    message: "Enter engineer id: ",
  },
  {
    name: "email",
    type: "input",
    message: "Enter engineer email: ",
  },
  {
    name: "github",
    type: "input",
    message: "Enter engineer github: ",
  },
];

const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter intern name: ",
  },
  {
    name: "id",
    type: "input",
    message: "Enter intern id: ",
  },
  {
    name: "email",
    type: "input",
    message: "Enter intern email: ",
  },
  {
    name: "school",
    type: "input",
    message: "Enter intern school: ",
  },
];

const teamQuestions = [
  {
    name: "addMember",
    type: "list",
    message: "Which employee type would you like to add?",
    choices: ["Engineer", "Intern", "Finished"],
    default: "Finished",
  },
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  teamQuestions,
};
