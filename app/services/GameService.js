import Dino from "../models/Target.js"

let _dinoConfigObj = {
  food: 0,
  singlefood: {
    leaf: {
    name: "leaf",
     price: 1,
     quantity: 0,
     multiplier: 1,
    },
    tree: {
      name: "tree",
     price: 2,
     quantity: 0,
     multiplier: 2,
    }
  },
  autofood: {
    human: {
     name: "human",
     price: 250,
     quantity: 0,
     multiplier: 20,
    },
    herbivore: {
      name: "herbivore",
      price: 500,
      quantity: 0,
      multiplier: 20,
    }
}
}

// let _bigDingCongObj = {
//   food: 100
// }


let _dino = new Dino(_dinoConfigObj)

export default class GameService {
  singleFood(singFoodName){
     _dino.singlefood += _dino.singlefood[singFoodName]
   }

  autoFood(autoFoodName) {
    _dino.autofood += _dino.autofood[autoFoodName]
  }
   
  clickFood() {
    _dino.food ++
  }
  get DinoFeed() {
    return _dino.food.toString()
  }

  constructor() {
    console.log("hello from gameService")
  }
}