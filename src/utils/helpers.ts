import { HANDS, ResultWhoWin } from './contants'

export function selectAnOption(): HANDS {
  const options = [HANDS.ROCK, HANDS.PAPER, HANDS.SCISSORS]
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}

export function whoWin(option: HandOption, playerTwo: HandOption): ResultWhoWin {
  if (option === playerTwo) return ResultWhoWin.DRAW

  if (
    (option === HANDS.ROCK && playerTwo === HANDS.SCISSORS) ||
    (option === HANDS.PAPER && playerTwo === HANDS.ROCK) ||
    (option === HANDS.SCISSORS && playerTwo === HANDS.PAPER)
  ) {
    return ResultWhoWin.WIN
  }

  return ResultWhoWin.LOSE
}
