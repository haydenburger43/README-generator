// node packages
const inquirer = require('inquirer');
const fs = require('fs')

//generate questions
inquirer.prompt(
    [
        {
            type:'input',
            message:"Whats the project title?",
            name:'title',
            validate: (value) => {if(value){return true} else{return"i need an answer to continue"}},
        },
        {
            type:'input',
            message:"Whats the project description?",
            name:'description',
            validate: (value) => {if(value){return true} else{return"i need an answer to continue"}},
        },      
        {
            type:'input',
            message:"how do I install the project?",
            name:'installation',
            validate: (value) => {if(value){return true} else{return"i need an answer to continue"}},
        },
        {
            type:'input',
            message:"Whats the projects usage?",
            name:'usage',
            validate: (value) => {if(value){return true} else{return"i need an answer to continue"}},
        },
        {
            type:'input',
            message:"is there a license for the project?",
            name:'license',
            validate: (value) => {if(value){return true} else{return"i need an answer to continue"}},
        },
        {
            type:'input',
            message:"Whats the project contributions?",
            name:'contribution',
            validate: (value) => {if(value){return true} else{return"i need an answer to continue"}},
        },
        {
            type:'input',
            message:"Whats the projects test?",
            name:'test',
            validate: (value) => {if(value){return true} else{return"i need an answer to continue"}},
        },        
        {
            type:'input',
            message:"Whats the projects questions?",
            name:'question',
            validate: (value) => {if(value){return true} else{return"i need an answer to continue"}},
        },
    ]
).then(({
    title,
    decription,  
    instillation,
    usage,
    license,
    contribution,
    test,
    question
})=>{
const template = ` ${title}

[description](#description)
[instillation](#instillation)
[usage](#usage)
[license](#license)
[contributions](#contribution)
[test](#test)
[questions](#question)`;
//creating README with fs
createNewFile(title,template);
}
);
function createNewFile(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('your README has been generated');
    })
}

