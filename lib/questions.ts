export interface Question {
  question: string
  options: string[]
  correct: string
  prize: string
  audiencePoll?: { [key: string]: number }
  phoneAdvice?: string
}

export const questions: Question[] = [
  {
    question: "What is Fairblock's primary mission?",
    options: [
      "Build gaming platforms",
      "Build trustworthy rails for open finance using confidential computing",
      "Create NFT marketplaces",
      "Develop social media apps",
    ],
    correct: "Build trustworthy rails for open finance using confidential computing",
    prize: "$100",
    audiencePoll: {
      "Build gaming platforms": 5,
      "Build trustworthy rails for open finance using confidential computing": 85,
      "Create NFT marketplaces": 7,
      "Develop social media apps": 3,
    },
    phoneAdvice:
      "I'm pretty sure it's about building trustworthy rails for open finance. That's what they're known for!",
  },
  {
    question: "What does IBE stand for in Fairblock technology?",
    options: [
      "Identity-Based Encryption",
      "Internet Based Encryption",
      "Integrated Blockchain Engine",
      "Instant Block Execution",
    ],
    correct: "Identity-Based Encryption",
    prize: "$200",
    audiencePoll: {
      "Identity-Based Encryption": 70,
      "Internet Based Encryption": 15,
      "Integrated Blockchain Engine": 10,
      "Instant Block Execution": 5,
    },
    phoneAdvice: "It's Identity-Based Encryption. I remember reading about it in their docs.",
  },
  {
    question: "How much funding did Fairblock raise in their recent round?",
    options: ["$1.5M", "$5M", "$10M", "$2.5M"],
    correct: "$2.5M",
    prize: "$300",
    audiencePoll: {
      "$1.5M": 10,
      $5M: 12,
      $10M: 3,
      "$2.5M": 75,
    },
    phoneAdvice: "I think it was $2.5M. That was announced for conditional decryption work.",
  },
  {
    question: "What is the name of Fairblock's blockchain infrastructure?",
    options: ["Fairchain", "Blockfair", "Fairyring", "Fairnet"],
    correct: "Fairyring",
    prize: "$500",
    audiencePoll: {
      Fairchain: 8,
      Blockfair: 7,
      Fairyring: 80,
      Fairnet: 5,
    },
    phoneAdvice: "It's definitely Fairyring. That's their core architecture.",
  },
  {
    question: "What problem does Fairblock primarily solve in DeFi?",
    options: ["MEV and frontrunning", "High gas fees", "Slow transaction speeds", "Wallet compatibility"],
    correct: "MEV and frontrunning",
    prize: "$1,000",
    audiencePoll: {
      "MEV and frontrunning": 75,
      "High gas fees": 12,
      "Slow transaction speeds": 8,
      "Wallet compatibility": 5,
    },
    phoneAdvice: "MEV and frontrunning for sure. That's the whole point of their privacy tech.",
  },
  {
    question: "What is FairyCow?",
    options: ["A DeFi lending protocol", "An NFT collection", "A staking platform", "Encrypted orders for CoW Swap"],
    correct: "Encrypted orders for CoW Swap",
    prize: "$2,000",
    audiencePoll: {
      "A DeFi lending protocol": 10,
      "An NFT collection": 8,
      "A staking platform": 10,
      "Encrypted orders for CoW Swap": 72,
    },
    phoneAdvice: "It's their integration with CoW Swap for encrypted orders. Pretty innovative!",
  },
  {
    question: "Which blockchain has Fairblock integrated with for confidential payments?",
    options: ["Ethereum", "Polygon", "Arbitrum", "Solana"],
    correct: "Arbitrum",
    prize: "$4,000",
    audiencePoll: {
      Ethereum: 15,
      Polygon: 12,
      Arbitrum: 68,
      Solana: 5,
    },
    phoneAdvice: "Arbitrum! They announced confidential payments and auctions on it.",
  },
  {
    question: "What does DeBid enable?",
    options: ["Decentralized lending", "Leaderless sealed-bid auctions", "Token swaps", "NFT minting"],
    correct: "Leaderless sealed-bid auctions",
    prize: "$8,000",
    audiencePoll: {
      "Decentralized lending": 12,
      "Leaderless sealed-bid auctions": 70,
      "Token swaps": 10,
      "NFT minting": 8,
    },
    phoneAdvice: "DeBid is for leaderless sealed-bid auctions. It's one of their key applications.",
  },
  {
    question: "What technology does Fairblock use alongside IBE for threshold decryption?",
    options: ["Zero-knowledge proofs", "Homomorphic hashing", "Ring signatures", "Multi-Party Computation (MPC)"],
    correct: "Multi-Party Computation (MPC)",
    prize: "$16,000",
    audiencePoll: {
      "Zero-knowledge proofs": 20,
      "Homomorphic hashing": 10,
      "Ring signatures": 5,
      "Multi-Party Computation (MPC)": 65,
    },
    phoneAdvice: "I believe it's MPC - Multi-Party Computation. They use it with IBE for decryption.",
  },
  {
    question: "What is the main benefit of pre-execution privacy?",
    options: ["Protection from MEV and frontrunning", "Faster transactions", "Lower fees", "Better user interface"],
    correct: "Protection from MEV and frontrunning",
    prize: "$32,000",
    audiencePoll: {
      "Protection from MEV and frontrunning": 75,
      "Faster transactions": 8,
      "Lower fees": 12,
      "Better user interface": 5,
    },
    phoneAdvice: "Pre-execution privacy protects from MEV and frontrunning. That's the core value prop.",
  },
  {
    question: "What does Fairblock use for programmable privacy?",
    options: ["Smart contracts only", "Private keys", "Conditional decryption", "Hardware wallets"],
    correct: "Conditional decryption",
    prize: "$64,000",
    audiencePoll: {
      "Smart contracts only": 15,
      "Private keys": 10,
      "Conditional decryption": 68,
      "Hardware wallets": 7,
    },
    phoneAdvice: "Conditional decryption is the key. It allows programmable privacy conditions.",
  },
  {
    question: "Which cryptographic scheme does Fairblock primarily use?",
    options: ["RSA encryption", "Identity-Based Encryption (IBE)", "Elliptic curve only", "Symmetric encryption"],
    correct: "Identity-Based Encryption (IBE)",
    prize: "$125,000",
    audiencePoll: {
      "RSA encryption": 12,
      "Identity-Based Encryption (IBE)": 70,
      "Elliptic curve only": 13,
      "Symmetric encryption": 5,
    },
    phoneAdvice: "IBE - Identity-Based Encryption. It's fundamental to their architecture.",
  },
  {
    question: "What is Fairates?",
    options: [
      "A token standard",
      "A consensus mechanism",
      "A wallet provider",
      "A DeFi application for private interest rates",
    ],
    correct: "A DeFi application for private interest rates",
    prize: "$250,000",
    audiencePoll: {
      "A token standard": 10,
      "A consensus mechanism": 12,
      "A wallet provider": 10,
      "A DeFi application for private interest rates": 68,
    },
    phoneAdvice: "Fairates is their DeFi app for private interest rates. It's pretty innovative.",
  },
  {
    question: "What technology enables Fairblock to provide encryption for Ethereum rollups?",
    options: ["Arbitrum Stylus integration", "Layer 2 scaling only", "Plasma chains", "State channels"],
    correct: "Arbitrum Stylus integration",
    prize: "$500,000",
    audiencePoll: {
      "Arbitrum Stylus integration": 65,
      "Layer 2 scaling only": 15,
      "Plasma chains": 12,
      "State channels": 8,
    },
    phoneAdvice: "It's the Arbitrum Stylus integration. That's how they bring encryption to rollups.",
  },
  {
    question: 'What is the key advantage of Fairblock\'s "leaderless" auction design?',
    options: ["Faster execution", "Lower gas costs", "No trusted third party needed", "Better UI/UX"],
    correct: "No trusted third party needed",
    prize: "$1,000,000",
    audiencePoll: {
      "Faster execution": 18,
      "Lower gas costs": 15,
      "No trusted third party needed": 62,
      "Better UI/UX": 5,
    },
    phoneAdvice: "The leaderless design means no trusted third party is needed. That's the breakthrough!",
  },
]
