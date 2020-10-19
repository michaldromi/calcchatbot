interface DelayParams {
  func: () => void;
  ms?: number;
}

export const delay = async ({ func, ms = 1200 }: DelayParams) => {
  setTimeout(() => {
    func();
  }, ms);
};
