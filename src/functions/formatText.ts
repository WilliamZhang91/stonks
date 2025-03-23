export const formatText = (text: string): string => {

    if (text.toLocaleLowerCase().endsWith("ttm")) {
        text = text.slice(0, -3);
    }

    const addSpace = text.replace(/([A-Z])/g, ' $1');
    const capitaliseFirstWord = addSpace.charAt(0).toUpperCase() + addSpace.slice(1);
    return capitaliseFirstWord;
}