# 
class AncestralStories:
    
    def __init__(self,Strorylen,moralLesson,ageGroup):
        self.Storylen=Strorylen
        self.moralLesson=moralLesson
        self.ageGroup=ageGroup

    def getLanguageTheStoryIsToldIn():
        print (f'{self.__class.____.name__}{self.language}')


class Story (AncestralStories):
    
     language="Story is told in Swahili"
 
class StoryTeller (AncestralStories):
    
     language="Depends on origin of the story teller"

class  Translator  (AncestralStories):
     language="the language translator has been assigned"
 

class Recipe:
    def __init__(self,ingridients,preparationTime,cookingMethod,nutritionalInformation):
       self.ingridients=ingridients
       self.preparationTime=preparationTime
       self.cookingMethod=cookingMethod
       self.nutritionalInformation=nutritionalInformation

  
    def getgetCookingTime():
        print(f'{self.__class.____.name}{self.language}')


class MoroccanRecipe (Recipe):
     time="1hour and 40 minutes"


class EthiopianRecipe  (Recipe):
     time="2 hours 40 minutes"


class  NigerianRecipe (Recipe):
     time="4hours 50 minutes"


moroccanRecipe= MoroccanRecipe("garlic,pepper,cheese,fry,smooth skin")
moroccanRecipe.getCookingTime()


ethiopianRecipe=EthiopianRecipe("Sugar,spice,lemons ,steam,strong teeth")
ethiopianRecipe.getCookingTime()

nigerianRecipe=NigerianRecipe("water,lemons,salad,stir-fry,great eye-sight")
nigerianRecipe.getCookingTime()



class Species:
    def __init__(self,diet,typicalLifespan,migrationPatterns):
        self.diet=diet
        self.typicalLifespan=typicalLifespan
        self.migrationPatterns=migrationPatterns

    def getSpecificSpecie():
        print(f'{self.__class.____.name__},{self.language}')


database=[]
listOfSpecies=Species("lion","cheetah","tiger","panther","leopard")
listOfSpecies2=Species("gazelle","zebra","rhino","hippo","monkey")
database.extend(listOfSpecies,listOfSpecies2)


class Predator (Species):
     specificSpecies=["lion","cheetah","panther","tiger","leopard"]

class Prey (Species):
     specificSpecies=["gazelle","zebra","rhino","hippo","monkey"]

species=Species("food","lives up to 5years ","migrates twice a year")

predator =Predator("Eats flesh","lives upto a maximum of 10 years ","migates once a year")
predator.getSpecificSpecies()

prey=Prey(" Eats herbs and grass","lives uto a maximum of 5 years","migrates thrice a year")
prey.getSpecificSpecies()


class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_value(self):
        return self.price * self.quantity


product1 = Product('book', 400, 7)
product2 = Product('pen', 200, 4)
product3 = Product('ruler', 100, 2)


value1 = product1.total_value()
value2 = product2.total_value()
value3 = product3.total_value()

total_value_all = value1 + value2 + value3

print(f'The total value of {product1.name}: {value1}')
print(f'The total value of {product2.name}: {value2}')
print(f'The total value of {product3.name}: {value3}')



class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def calculate_average_grade(self):
        if len(self.grades) == 0:
            return 0
        return sum(self.grades) / len(self.grades)

    def display_info(self):
        print(f'Name: {self.name}')
        print(f'Age: {self.age}')
        print(f'Grades: {", ".join(str(grade) for grade in self.grades)}')
        print(f'Average grade: {self.calculate_average_grade()}')
        print(f'Passing grade: {self.has_passed()}')

    def has_passed(self):
        return self.calculate_average_grade() >= 50

student1 = Student('Wanjiku Kihonge', 70, [90, 35, 60])
student2 = Student('Ann Katey', 49, [40, 15, 65])



  







    
  

       
    


        
   