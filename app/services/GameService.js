import Dino from "../models/Game.js"
import Upgrade from "../models/Upgrades.js"

let _foodCounts = new Dino () 

let _leafConfigObj = {
    name: "leaf",
     price: 1,
     level: 0,
     modifier: 1,
}

let _treeConfigObj = {
     name: "tree",
     price: 2,
     level: 0,
     modifier: 2
  }

let _cavemanConfigObj = {
     name: "human",
     price: 250,
     level: 0,
     modifier: 20,
    }

let _herbivoreConfigObj = {
      name: "herbivore",
      price: 500,
      level: 0,
      modifier: 20,
    }

let _leaf = new Upgrade (_leafConfigObj)
let _tree = new Upgrade (_treeConfigObj)
let _caveman = new Upgrade (_cavemanConfigObj)
let _herbivore = new Upgrade (_herbivoreConfigObj)

export default class GameService {
//   singleFood(singFoodName){
//      _dino.singlefood += _dino.singlefood[singFoodName]
//    }

//   autoFood(autoFoodName) {
//     _dino.autofood += _dino.autofood[autoFoodName]
//   }
   
  feedMe() {
    _foodCounts.foodCount++

    this.calcSingUpgrade()
    }
  
  purchaseLeaf(){
    if (_foodCounts.foodCount >= _leaf.price) {
      _leaf.level ++
      _foodCounts.foodCount -= _leaf.price
      _leaf.price += 50
      console.log(_leaf.level);

    }
  }

  purchaseTree(){
    if (_foodCounts.foodCount >= _tree.price) {
      _tree.level ++
      _foodCounts.foodCount -= _tree.price
      _tree.price += 70
      console.log(_tree.level);
    }
  }

  purchaseCaveman(){
    if (_foodCounts.foodCount >= _caveman.price) {
      _caveman.level ++
      _foodCounts.foodCount -= _caveman.price
      _caveman.price += 150
      console.log(_caveman.level);
    }
  }

  purchaseHerbivore(){
    if (_foodCounts.foodCount >= _herbivore.price) {
      _herbivore.level ++
      _foodCounts.foodCount -= _herbivore.price
      _herbivore.price += 350
      console.log(_herbivore.level);
    }
  }

  calcSingUpgrade() {
    _foodCounts.foodPerClick = (_leaf.level * _leaf.modifier) + (_tree.level * _tree.modifier)
    _foodCounts.foodCount += (_leaf.level * _leaf.modifier) + (_tree.level * _tree.modifier)
  }



  get FoodCount() {
  return _foodCounts.foodCount.toString()
  }

  get FoodPerClick() {
    return _foodCounts.foodPerClick.toString()
  }

  get FoodPerSecond() {
    return _foodCounts.foodPerSecond.toString()
  }

  get LeafLevel() {
    return _leaf.level.toString()
  }

  get LeafPrice() {
    return _leaf.price.toString()
  }

  get TreeLevel() {
    return _tree.level.toString()
  }

  get TreePrice() {
    return _tree.price.toString()
  }

  get CavemanLevel() {
    return _caveman.level.toString()
  }

  get CavemanPrice() {
    return _caveman.price.toString()
  }

  get HerbivoreLevel() {
    return _herbivore.level.toString()
  }

  get HerbivorePrice() {
    return _herbivore.price.toString()
  }

  get MessageCenter() {
    return _foodCounts.message
  }

  constructor() {
    console.log("hello from gameService")
  }
}