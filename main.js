var Cat = function(){

}
var viewModel = function() {
  // Model
  this.currentCat = ko.observable(0);
  this.name = ko.observable("Tabby");
  this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
  this.nickNames=["aaa,bbb,ccc"]
​
  // Title: based on number of clicks
  this.title = ko.computed(function() {
    if (this.clickCount() < 10) {
      return "New Born";
    } else if (this.clickCount() < 20) {
      return "Infant";
    } else {
      return "Teen";
    }
  }, this);
​
  // Add one to click count
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.clickCount() + 1);
  };
};
​
// Bind viewModel with DOM
ko.applyBindings(new viewModel())