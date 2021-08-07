
const LARGEST_POSSIBLE_NUMBER_OF_SHELLS = 5

let possibleElectronsInOutermostSubshell = []

for (i = 0; i <= LARGEST_POSSIBLE_NUMBER_OF_SHELLS; i++) {
   possibleElectronsInOutermostSubshell.push(4 * i + 2) 
}

  function Atom(protons) {
    this.atomicNumber = protons;
    this.name =  ELEMENT_NAMES[this.atomicNumber - 1]
   
    this.calculateValence = () =>  {

      let e = this.atomicNumber
      let outerCount = 0
      do {
        let innerCount = 0
        do {
          e = e - possibleElectronsInOutermostSubshell[innerCount]
          innerCount++
        } while (innerCount <= outerCount && e > 0)
        outerCount++
      } while (e > 0)
      if (e == 0) return 0
      else return -e
    } 

    this.valence = this.calculateValence()
    this.bonds = 0

  }
