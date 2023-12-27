class Logo{
    constructor(){
        this.textEl=""
        this.shapeEl=""
    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }

    setText(letters, color){
        if(letters.length>3){
            throw new Error("Text must not be more than 3 characters")
        }
        this.textEl=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${letters}</text>`
    }

    setShape(shape){
        this.shapeEl=shape.render()
    }
}

module.exports=Logo;