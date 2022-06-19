function boardMember(name, homestate, training) {
    this.name = Jacque; 
    this.homestate = Canon;
    this.training = Software ;
    boardMember.prototype.veto = function (){
      return "No, I must disagree";
    }
    boardMember.prototype.approve = function (){
      return "You can do that!";
    } 
    boardMember.prototype.doCharity = function (){
      return "I like to help people.";
    }
    boardMember.prototype.releasePressStatement = function (){
      return "You will see great things from Scuber.";
    }
    boardMember.prototype.sayHi= function (){
      return "Hi, my name is Jacque. I am from Canon, and I was trained in Software.";
    }
    
  };