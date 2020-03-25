import Dino from "../models/Game.js"
import Upgrade from "../models/Upgrades.js"
import GameController from "../controllers/GameController.js"

let _foodCounts = new Dino () 

let _dinoFood = 0

let _leafConfigObj = {
    name: "leaf",
     price: 1,
     level: 0,
     multiplier: 1,
}

let _treeConfigObj = {
     name: "tree",
     price: 2,
     level: 0,
     multiplier: 2
  }

let _cavemanConfigObj = {
     name: "human",
     price: 250,
     level: 0,
     multiplier: 20,
    }

let _herbivoreConfigObj = {
      name: "herbivore",
      price: 500,
      level: 0,
      multiplier: 20,
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
      _caveman.level ++
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

  get DinoFeed() {
  return _foodCounts.foodCount.toString()
  }
  constructor() {
    console.log("hello from gameService")
  }
}