import { useEffect, useReducer } from "react";

export enum ActionTypes {
  SetName = "set_name",
  SetStep = "set_step",
}

export enum Steps {
  hello = "hello",
  letsCalc = "letsCalc",
  result = "result",
  noname = "noname",
}

export interface ChatState {
  name: string;
  step: Steps;
}

type Action =
  | { type: ActionTypes.SetName; name: string }
  | { type: ActionTypes.SetStep; step: Steps };

export const chatReducer = (state: ChatState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SetName:
      return { ...state, name: action.name };
    case ActionTypes.SetStep:
      return { ...state, step: action.step };
  }
};


