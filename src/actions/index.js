export const incNum = (number) => {
    return {
        type: "increment",
        payload: number
    }
}
export const decNum = (number) => {
    return {
        type: "decrement",
        payload: number
    }
}