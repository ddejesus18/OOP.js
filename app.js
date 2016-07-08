function User(theName, theEmail) {
  this.name = theName;
  this.email = theEmail;
}

User.prototype = {
  construct:User,
  changeEmail:function(newEmail) {
    this.email = newEmail;
    return "New Email Saved: " +this.email;
  }
}

var diana = new User ("Diana", "diana@abc.com");
var peter = new User ("Peter", "peter@abc.com");
var beth = new User ("Beth", "beth@abc.com");
