import GameService from "../services/GameService.js"

let _gameService = new GameService

function _draw(){
  document.getElementById("food").innerText = _gameService.DinoFeed
  document.getElementById("food-per-click").innerText = _gameService.FoodPerClick
  document.getElementById("food-per-second").innerText = _gameService.FoodPerSecond
  document.getElementById("leaf-level").innerText = _gameService.LeafLevel
  document.getElementById("leaf-price").innerText = _gameService.LeafPrice
  document.getElementById("tree-level").innerText = _gameService.TreeLevel
  document.getElementById("tree-price").innerText = _gameService.TreePrice
  document.getElementById("caveman-level").innerText = _gameService.CavemanLevel
  document.getElementById("caveman-price").innerText = _gameService.CavemanPrice
  document.getElementById("herbivore-level").innerText = _gameService.HerbivoreLevel
  document.getElementById("herbivore-price").innerText = _gameService.HerbivorePrice
  document.getElementById("message-center").innerText = _gameService.MessageCenter
}



export default class GameController {
  constructor() {
    // console.log("hello from gameController")
    _draw()
  }

  feedMe() {
    _gameService.feedMe()
    // console.log("works?");
    _draw()
    
  }
purchaseLeaf() {
  _gameService.purchaseLeaf()
}

purchaseTree() {
  _gameService.purchaseTree()
}

purchaseCaveman() {
  _gameService.purchaseCaveman()
}

purchaseHerbivore() {
  _gameService.purchaseHerbivore()
}

}
