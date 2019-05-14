#!/usr/bin/env node

const AboutMe = require("./commands/AboutMe");
const ContactMe = require("./commands/ContactMe");
const TechStack = require("./commands/TechStack");
const inquirer = require("inquirer");

const Index = () => {
	console.log("welcome to my profile");
	// AboutMe();
	// ContactMe();

	inquirer.prompt([
		{
			type: "list",
			choices: ['aboutme', 'contactme', 'techstack'],
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
		if(response.answer == "techstack"){
			TechStack();
		}
	})
};

Index();

module.exports = Index;