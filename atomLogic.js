

const possibleElectronsInSubshell = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6]

 
function Atom(protons) {
  this.atomicNumber = protons;
  this.name =  ELEMENT_NAMES[this.atomicNumber - 1]
  this.elementalSymbol = ELEMENTAL_SYMBOLS[this.atomicNumber - 1]

  // Pauli exclusionary magic go brrrr
  let e = this.atomicNumber
  
  this.subshells = []
  this.totalShells = 0
  let totalSubshells = 0

  // get valence and subshell info
  do {
   let prevE = e
   e = e - possibleElectronsInSubshell[totalSubshells]
  
   // track number of s subshells -- and therefore shells -- for period calcs
   if (possibleElectronsInSubshell[totalSubshells] == 2) this.totalShells++
   // populate array of subshell contents
   if (e > 0) this.subshells.push(possibleElectronsInSubshell[totalSubshells])
   else this.subshells.push(prevE) 
    
    totalSubshells++
    
  } while (e > 0)
  if (e == 0) this.valence = 0
  else this.valence = -e

  this.totalSubshells = totalSubshells
  
  this.valenceShellCapacity = possibleElectronsInSubshell[this.totalSubshells - 1]
  this.valenceShellType = determineValenceShellType(this)
  this.group = determineGroup(this) 
  this.period = determinePeriod(this)
}

function determineValenceShellType(a) {
  if(a.valenceShellCapacity == 2) return 's'
  else if(a.valenceShellCapacity == 6) return 'p'
  else if(a.valenceShellCapacity == 10) return 'd'
  else if(a.valenceShellCapacity == 14) return 'f'
}

function determineGroup(a) {
  
  if (a.valence == 1 && a.valenceShellType == 's') return 1
  else if(a.valence == 0 && a.valenceShellType == 's' && a.totalSubshells > 1)  return 2
  else if(a.valenceShellType == 'd' || a.valenceShellType == 'f') return (a.valenceShellCapacity - a.valence) + 2
  else if(a.valenceShellType == 'p') return (a.valenceShellCapacity - a.valence + 12)
  else if(a.atomicNumber == 2) return 18 // Helium 
}

function determinePeriod(a) {
  if (a.valenceShellType == 'f') return a.totalShells + 3
  else return a.totalShells
}
