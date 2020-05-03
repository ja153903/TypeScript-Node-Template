const world = "world";

export function hello(something: string = world): string {
  return `Hello ${something}!`;
}
