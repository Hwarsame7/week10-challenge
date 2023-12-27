const inquirer = require("inquirer");
const fs = require("fs");
const Logo = require("./lib/logo");
const { Triangle, Circle, Square } = require("./lib/shapes");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "shapeForm",
        message: "What type of shape would you like for your Logo?",
        choices: ["Triangle", "Circle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for your Shape",
      },
      {
        type: "input",
        name: "logoText",
        message: "Enter text for Logo -MUST NOT EXCEED 3 CHARACTERS",
        validate: (LogoText) =>
          LogoText.length <= 3 || "Text must not be more than 3 characters",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter color for your Text",
      },
    ])
    .then(({ shapeForm, shapeColor, logoText, textColor }) => {
      let shape;
      switch (shapeForm) {
        case "Triangle":
          shape = new Triangle();
          break;
        case "Circle":
          shape = new Circle();
          break;

        default:
            shape= new Square()
          break;
      }

      shape.setColor(shapeColor)

      const logo =new Logo()
      logo.setText(logoText, textColor)
      logo.setShape(shape)
      return fs.writeFileSync("./example/logo.svg", logo.render())
    }).then(()=>{
        console.log("Your Logo was Generated!");
    }).catch((err)=>{
        console.error(err)
        console.log("Sorry! Something went Wrong!");
    })
}

init();