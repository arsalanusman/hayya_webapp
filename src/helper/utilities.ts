export const getTranslation = (t: any, namespace: string, key: string) => {
  return t(`${namespace}:${key}`);
};
