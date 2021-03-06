export const BotMsgs = {
  hello: {
    content: [
      "Hi, I’m Maya! Today you’re going to help me to ace my game",
      "Let’s start by telling me your name",
    ],
  },
  letsCalc: {
    content: [
      "Alright, this is how it’s going to work",
      "List any mathematical expression you can think of - I’ll crunch it in no time",
    ],
  },
  result: {
    content: ["This was easy, give me something harder"],
  },
  noname: {
    content: ["Let’s start by telling me your name"],
  },
  noCalc: {
    content: ["I don't know how to calculate that..."],
  },
};

export const niceToMeet = (name: string) => [`Nice to meet you ${name}!`];

export const getHasNameContent = (name: string) => [
  `Nice to see you again ${name}. Let’s pick this up from
where we left off`,
  "List any mathematical expression you can think of - I’ll crunch it in no time",
];
