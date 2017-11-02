const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      
    },
    
    set appetizers (appetizer) {
      this._appetizers.push(appetizer);
    },
    
    get mains() {
      
    },
    
    set mains(main) {
      this._mains.push(main);
    },
    
    get desserts() {
      
    },
    
    set desserts(dessert) {
      this._desserts.push(dessert);
    },
    
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      }
    },
    
    addDishToCourse: function(courseName, dishName, dishPrice){
    let dish = {
      name: dishName,
      price: dishPrice,
    }
    return this._course[courseName].push(dish);
  },
  getRandomDishFromCourse: function(courseName){
    let dishes = this._course[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
  },
  generateRandomMeal: function() {
  let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + mains.price + desserts.price;
    return `Your meal is ${appetizer.name},${main.name},${dessert.name}. The price is ${totalPrice}.`;
 },
}
let meal = menu.generateRandomMeal();
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Tomato Salad', 5);
menu.addDishToCourse('appetizers', 'Cheese and Bread', 3);
