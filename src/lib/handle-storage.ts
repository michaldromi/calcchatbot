export const setValueOnSessionStorage = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

export const getValueFromSessionStorage = ({ key }: { key: string }) => {
  if (typeof window !== "undefined" && sessionStorage[key]) {
    return JSON.parse(sessionStorage.getItem(key) || "");
  }
  return "";
};
