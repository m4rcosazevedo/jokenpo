export enum HANDS {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors'
}

export enum HANDS_COLORS {
  ROCK = 'blue',
  PAPER = 'yellow',
  SCISSORS = 'red'
}

export function selectColor(option: HandOption) {
  switch (option) {
    case HANDS.ROCK:
      return HANDS_COLORS.ROCK
    case HANDS.PAPER:
      return HANDS_COLORS.PAPER
    case HANDS.SCISSORS:
      return HANDS_COLORS.SCISSORS
  }
}
