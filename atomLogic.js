

const possibleElectronsInSubshell = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10]

 
function Atom(protons) {
  this.atomicNumber = protons;
  this.name =  ELEMENT_NAMES[this.atomicNumber - 1]
  this.elementalSymbol = ELEMENTAL_SYMBOLS[this.atomicNumber - 1]

  // Pauli exclusionary magic go brrrr
  let e = this.atomicNumber

  let totalSubshells = 0

  // get valence and number of subshells
  do {
    e = e - possibleElectronsInSubshell[totalSubshells]
    totalSubshells++ 
  } while (e > 0)
  if (e == 0) this.valence = 0
  else this.valence = -e
  
  this.totalSubshells = totalSubshells
  
  this.valenceShellCapacity = possibleElectronsInSubshell[this.totalSubshells - 1]
  this.group = determineGroup(this) 
}

function determineGroup(a) {
  
  const hasTypeSValenceShell = a.valenceShellCapacity == 2 
  const hasTypePValenceShell =  a.valenceShellCapacity == 6 
  const isTransitionMetal =  a.valenceShellCapacity == 10
  const hasTypeDValenceShell = a.valenceShellCapacity == 14

  if (a.valence == 1 && hasTypeSValenceShell) return 1
  else if(a.valence == 0 && hasTypeSValenceShell && a.totalSubshells > 1)  return 2
  else if(isTransitionMetal || hasTypeDValenceShell) return (a.valenceShellCapacity - a.valence) + 2
  else if(hasTypePValenceShell) return (a.valenceShellCapacity - a.valence + 12)
  else if(a.atomicNumber == 2) return 18 // Helium 
}

