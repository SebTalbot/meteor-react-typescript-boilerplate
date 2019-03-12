export function incrementNumber (value:number, increment?:number):number {
  if (!increment) {
    increment = 1
  }

  return value += increment
}
