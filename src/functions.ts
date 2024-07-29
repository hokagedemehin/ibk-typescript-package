import { SayHelloProps } from "./types";

export function SayIbkHello({ firstName, lastName, age }: SayHelloProps) {
  if (!lastName) {
    return `Hello ${firstName}, you are ${age} years old!`;
  }

  if (!age) {
    return `Hello ${firstName} ${lastName}!`;
  }

  if (!age && !lastName) {
    return `Hello ${firstName}!`;
  }

  return `Hello ${firstName} ${lastName}, you are ${age} years old!`;
}
