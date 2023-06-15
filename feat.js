class AncestralStories{
    // attributes are Strorylen,moralLesson,ageGroup
    // output should b 
    constructor(Strorylen,moralLesson,ageGroup){
        this.moralLesson=moralLesson
        this.Strorylen=Storylen
        this.ageGroup=ageGroup
    }
    getLanguageTheStoryIsToldIn(){
        console.log(`${this.constructor.name},${this.language}`)
    }
    

}
class Story extends AncestralStories{
    
    language="Story is told in Swahili"
}
class StoryTeller extends Ancestralstories{
    
    language="Depends on origin of the story teller"
}
class  Translator extends Ancestralstories{
    language=""
}


// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.


// input i sthe 
class Recipe{
    constructor(ingridients,preparationTime,cookingMethod,nutritionalInformation){
        this.ingridients=ingridients
        this.preparationTime=preparationTime
        this.cookingMethod=cookingMethod
        this.nutritionalInformation=nutritionalInformation
    }
    getCookingTime(){
        console.log(`${this.constructor.name},${this.time}`)
    }

}
class MoroccanRecipe extends Recipe{
    time="1hour and 40 minutes"
}
class EthiopianRecipe  extends Recipe{
    time="2 hours 40 minutes"
}
class  NigerianRecipe extends Recipe{
    time="4hours 50 minutes"

}

let recipe=new Recipe("Spice","tomatoes ,onions  ,steam,strong bones")

let moroccanRecipe=new MoroccanRecipe("garlic,pepper,cheese,fry,smooth skin")
morrocanRecipe.getCookingTime()

let ethiopianRecipe=new EthiopianRecipe("Sugar,spice,lemons ,steam,strong teeth")
ethiopianRecipe.getCookingTime()

let nigerianRecipe=new NigerianRecipe("water,lemons,salad,stir-fry,great eye-sight")
nigerianRecipe.getCookingTime()

// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.


class Species{
    constructor(diet,typicalLifespan,migrationPatterns){
        this.diet=diet
        this.typicalLifespan=typicalLifespan
        this.migrationPatterns=migrationPatterns
    }
    getSpecificSpecie(){
        console.log(`${this.constructor.name},${this.specificSpecies}`)
    }
   
}
let database=[]
let listOfSpecies=Species("lion","cheetah","tiger","panther","leopard")
let listOfSpecies2=Species("gazelle","zebra","rhino","hippo","monkey")
database.push(listOfSpecies,listOfSpecies2)

class Predator extends Species{
    specificSpecies=["lion","cheetah","panther","tiger","leopard"]
}
class Prey extends Species{
    specificSpecies=["gazelle","zebra","rhino","hippo","monkey"]
}
let species=Species("food","lives up to 5years ","migrates twice a year")

let predator = new Predator("Eats flesh","lives upto a maximum of 10 years ","migates once a year")
predator.getSpecificSpecie()

let prey= new Prey(" Eats herbs and grass","lives uto a maximum of 5 years","migrates thrice a year")
prey.getSpecificSpecie()



// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.

class Festival{

}

// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalValue() {
      return this.price * this.quantity;
    }
  }
  
 
  const product1 = new Product('book', 400, 7)
  const product2 = new Product('pen', 200, 4)
  const product3 = new Product('ruler', 100, 2)
  

  const Value1 = product1.getTotalValue();
  const Value2 = product2.getTotalValue();
  const Value3 = product3.getTotalValue();
  

  const totalValueAll = Value1 + Value2 + Value3;
  
  console.log(`The total value of ${product1.name}: ${Value1}`);
  console.log(`The total value of ${product2.name}: ${Value2}`);
  console.log(`The total value of ${product3.name}: ${Value3}`);
  console.log(`The total value of all products: ${totalValueAll}`);


// Implement a class called Student with attributes for name, age, and grades (a
//     list of integers). Include methods to calculate the average grade, display the
//     student information, and determine if the student has passed (average grade >=
//     60). Create objects for the Student class and demonstrate the usage of these
//     methods.

class Student {
    constructor(name, grades,age) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((acc, curr) => acc + curr);
      return sum / this.grades.length;
    }
  
    giveInformation() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Grades: ${this.grades.join(', ')}`);
      console.log(`Average grade: ${this.getAverageGrade()}`);
      console.log(`Passing grade: ${this.DoneWell()}`);
    }
  
    DoneWell() {
      return this.getAverageGrade() >= 50;
    }
  }
  
 
  const student1 = new Student('Wanjiku Kihonge', 70, [90, 35, 60])
  const student2 = new Student('Ann Katey', 49, [40, 15, 65]);
  
  
  student1.giveInformation(); Grades:  [90, 35, 60]



//   Create a FlightBooking class that represents a flight booking system. Implement
//   methods to search for available flights based on destination and date, reserve
//   seats for customers, manage passenger information, and generate booking
//   confirmations. 


  class BookFlights {
    constructor(flights) {
      this.flights = flights;
      this.bookings = [];
    }
  
    FindFlight(destination, date) {
      const availableFlights = this.flights.filter(flight => {
        return flight.destination === destination && flight.date === date && flight.availableSeats > 0;
      });
  
      return availableFlights;
    }
  
    reserveSeat(flight, passenger) {
      if (flight.availableSeats === 0) {
        throw new Error('Sorry, this flight is fully booked.');
      }
  
      const booking = {
        flightNumber: flight.flightNumber,
        passengerName: passenger.name,
        passengerAge: passenger.age,
        passengerEmail: passenger.email,
        
      };
  
      flight.availableSeats--;
      this.bookings.push(booking);
  
      return booking;
    }
  
    getBooking(bookingNumber) {
      const booking = this.bookings.find(booking => booking.bookingNumber === bookingNumber);
  
      if (!booking) {
        throw new Error('Booking not found.');
      }
  
      return booking;
    }
  
    generateBookingConfirmation(bookingNumber) {
      const booking = this.getBooking(bookingNumber);
  
      return `Booking confirmation for flight ${booking.flightNumber}:\nPassenger name: ${booking.passengerName}\nPassenger age: ${booking.passengerAge}\nPassenger email: ${booking.passengerEmail}`;
    }
  }
  
  
  const flightsInfo = [
    { flightNumber: 'TYUI8', destination: 'Nairobi', date: '2023-06-15', availableSeats: 9 },
    { flightNumber: 'PIUY9', destination: 'Kisumuu', date: '2023-06-16', availableSeats: 4},
    { flightNumber: 'IGHTJ0', destination: 'Kilifi', date: '2023-06-17', availableSeats: 1 },
  ];
  
  const flightBooking = new getBooking(flights);
  
  const availableFlight = flightBooking.FindFlights('Nairobi', '2023-06-15');
  console.log(availableFlight); 
  const flightbooked = flightBooking.reserveSeat(availableFlight[0], { name: 'John Doe', age: 30, email: 'john.doe@example.com' });
  console.log(flightbooked)

  const confirmedBooking = flightBooking.generateBookingConfirmation(booking.bookingNumber);
  console.log(confirmedBooking); 
  

// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.                  


