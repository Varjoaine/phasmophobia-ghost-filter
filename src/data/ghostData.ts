export type Evidence = {
  emf: boolean
  freezingTemp: boolean
  spiritBox: boolean
  ghostWriting: boolean
  ghostOrbs: boolean
  fingerPrints: boolean
  DOTS: boolean
}

export type EvidenceKeys = (keyof Evidence)[]

export type GhostData = {
  name: string
  evidence: Evidence
  description?: string
}

export const evidenceKeys: EvidenceKeys = ['emf', 'spiritBox', 'fingerPrints', 'ghostOrbs', 'ghostWriting', 'freezingTemp', 'DOTS']

export const ghostData: GhostData[] = [
  {
    name: 'Phantom',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true
    }
  },
  {
    name: 'Banshee',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true
    }
  },
  {
    name: 'Jinn',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false
    }
  },
  {
    name: 'Revenant',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false
    }
  },
  {
    name: 'Shade',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false
    }
  },
  {
    name: 'Oni',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: true
    }
  },
  {
    name: 'Wraith',
    evidence: {
      emf: true,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true
    }
  },
  {
    name: 'Mare',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false
    }
  },
  {
    name: 'Demon',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false
    }
  },
  {
    name: 'Yurei',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: true
    }
  },
  {
    name: 'Poltergeist',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false
    }
  },
  {
    name: 'Spirit',
    evidence: {
      emf: true,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false
    }
  },
  {
    name: 'Hantu',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false
    }
  },
  {
    name: 'Yokai',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true
    }
  },
  {
    name: 'Goryo',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true
    }
  },
  {
    name: 'Myling',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false
    }
  }
].sort(({ name }, { name: nameB }) => {
  if (name < nameB) return -1
  if (name > nameB) return 1
  return 0
})
