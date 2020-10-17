export enum ActionTypes {
  SetName = "set_name",
  SetMessage = "set_message",
}

export enum Steps {
  hello = "hello",
  letsCalc = "letsCalc",
  result = "result",
  noname = "noname",
  noCalc = "noCalc",
}

export interface ChatState {
  name: string;
  messages: Array<{
    content: string[];
    isUser?: boolean;
  }>;
}

type Action =
  | { type: ActionTypes.SetName; name: string }
  | { type: ActionTypes.SetMessage; message: string[]; isUser?: boolean };

export const chatReducer = (state: ChatState, action: Action): ChatState => {
  switch (action.type) {
    case ActionTypes.SetName:
      return { ...state, name: action.name };
    case ActionTypes.SetMessage:
      return {
        ...state,
        messages: [
          ...state.messages,
          { content: action.message, isUser: action.isUser },
        ],
      };
  }
};
