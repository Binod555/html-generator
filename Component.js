class Component {

    open( tagName) {
      return ("<" + tagName + ">");
  }

    close( tagName) {
      return ("</" + tagName + ">");
  }

  inputTag(name, type) {
    return `<input name="${name}" type="${type}" />`;
  }
}



class HtmlTag extends Component {

     html() {
        let tagName = "html";
        let htmlElements = this.head() + this.body() + "\n";
        return this.openAndCloseTag(tagName, htmlElements);
    }
     openAndCloseTag(tagName, mid) {
        return "\n"+this.open(tagName)+mid+this.close(tagName);
    }
     head() {
        let tagName ="head";
        return this.openAndCloseTag(tagName, this.title()+"\n");
    }
     title() {
        let tagName = "title";
        let text = "HTML Generator";
        return this.openAndCloseTag(tagName, text);
    }
     body() {
        let tagName = "body";
        let bodyElements = 
        this.h1() +  
        this.label("First Name")+
        this.input("firstname","text") +
        this.label("Last Name")+
        this.input("lastname","text")+ 
        this.label("Gender:") +
        this.select("Male" ,"Female","Others") +
        this.label("Are you Single?")+
        this.input("yes","radio")+
        this.label("Yes")+
        this.input("no","radio")+
        this.label("No")+
          
        this.button() + "\n";
        return  this.openAndCloseTag(tagName, bodyElements);
    }
     h1() {
        let tagName = "h1";
        let text = "Contact Form";
        return  this.openAndCloseTag(tagName, text);
    }
     label(labelName) {
        return  this.openAndCloseTag("label",labelName) + "<br>";
    }
    input(inputName,inputType){
        return this.inputTag(inputName,inputType) + "<br>";
    }
     
    select(option1,option2,option3) {
        return(
            "\n" +
            this.open("select") +
            this.open("option") +
            option1 + 
            this.close("option") +
            "\n" +
            this.open("option") +
            option2 + 
            this.close("option") +
            "\n" +
            this.open("option") +
            option3 + 
            this.close("option") +
            "\n" +
            this.close("select") +
            "<br>"
        )
    }
     button() {
        let tagName = "button";
        let text = "Submit";
        return "\n"+this.open(tagName+" type = 'Submit'")+text+this.close(tagName);
    }
}


let file=new HtmlTag();

let fs = require('fs');

let content=file.html();

fs.writeFile('./index.html', content, function () {

    console.log('Html file generated successfully');
  

});