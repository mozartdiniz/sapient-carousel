export const getClassNames = (direction, styleObject) =>
    `${styleObject.navigationButton} ${(direction === 'forward') ? styleObject.forward : styleObject.backward}`;
