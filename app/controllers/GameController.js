import GameService from "../services/GameService.js"

let _gameService = new GameService

function _draw(){
  document.getElementById("food").innerText = _gameService.DinoFeed
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

  clickFood() {
    _gameService.clickFood()
    // console.log("works?");
    _draw()
    
  }

  singleFood() {
    _gameService.singleFood()
  }

  autoFood() {
    _gameService.autoFood()
  }
}


