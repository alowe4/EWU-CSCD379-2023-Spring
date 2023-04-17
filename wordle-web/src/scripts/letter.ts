// Class that represents a letter in the wordle word and status
// of the letter in the wordle word
export enum LetterStatus {
<<<<<<< HEAD
    NotGuessed = 0,
    Correct,
    Misplaced,
    Wrong
}


export class Letter {
    letter: string;
    status: LetterStatus = LetterStatus.NotGuessed;

    constructor(letter: string) {
        this.letter = letter;
    }

    get color() {
        switch (this.status) {
            case LetterStatus.Correct:
                return 'green';
            case LetterStatus.Misplaced:
                return 'orange';
            case LetterStatus.Wrong:
                return 'red';
            default:
                return 'grey';
        }
    }
}
=======
  NotGuessed = 0,
  Correct,
  Misplaced,
  Wrong
}

export class Letter {
  char: string
  status: LetterStatus = LetterStatus.NotGuessed

  constructor(char: string) {
    this.char = char
  }

  get color() {
    switch (this.status) {
      case LetterStatus.Correct:
        return 'green'
      case LetterStatus.Misplaced:
        return 'orange'
      case LetterStatus.Wrong:
        return 'red'
      default:
        return 'grey'
    }
  }
}
>>>>>>> c3a9412d1e079be3cc642aa32553c8233fc1e0e7
