/**
 * 全局声明
 */

declare module 'flo-utils' {
  export const getNodeByKeyValues: (
    collection: any[],
    values: string[],
    key: string,
    childrenKey?: string,
  ) => any[];
}

declare module '*.svg' {
  // const content: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  const content: any;
  export default content;
}
