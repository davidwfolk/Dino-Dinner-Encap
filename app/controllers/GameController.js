import GameService from "../services/GameService.js"

let _gameService = new GameService

function _draw(){
  document.getElementById("food").innerText = _gameService.DinoFeed
  document.getElementById("food-per-click").innerText = _gameService.FoodPerClick
  document.getElementById("food-per-second").innerText = _gameService.FPerSecond
  document.getElementById("leaf-level").innerText = _gameService.LeafLevel
  document.getElementById("leaf-price").innerText = _gameService.LeafPrice
  document.getElementById("tree-level").innerText = _gameService.TreeLevel
  document.getElementById("tree-price").innerText = _gameService.TreePrice
  document.getElementById("caveman-level").innerText = _gameService.HumanLevel
  document.getElementById("caveman-price").innerText = _gameService.HumanPrice
  document.getElementById("herbivore-level").innerText = _gameService.HerbivoreLevel
  document.getElementById("herbivore-price").innerText = _gameService.HerbivorePrice
  document.getElementById("message-center").innerText = _gameService.MessageCenter
}

function _singleFoodDraw () {
  // @ts-ignore
  document.getElementById("leaf").innerText = _gameService.singleFood("autoFoodName")
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


