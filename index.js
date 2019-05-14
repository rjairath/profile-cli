#!/usr/bin/env node

const AboutMe = require("./commands/AboutMe");
const ContactMe = require("./commands/ContactMe");
const inquirer = require("inquirer");

const Index = () => {
	console.log("welcome to my profile");
	// AboutMe();
	// ContactMe();

	inquirer.prompt([
		{
			type: "list",
			choices: ['aboutme', 'contactme'],
			name: "answer"	
		}
	]).then((response) => {
		console.log(response);

		if(response.answer == "aboutme"){
			AboutMe();
		}
		if(response.answer == "contactme"){
			ContactMe();
		}
	})
};

Index();

module.exports = Index;