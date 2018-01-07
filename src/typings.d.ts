/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

declare module "*.json" {
  const value: any;
  export default value;
}

interface Todo {
  title: string;
  isCompleted?: boolean;
}

interface Daily {
  title: string;
  lastCompleted?: boolean;
}
