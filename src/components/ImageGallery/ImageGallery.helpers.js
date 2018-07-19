export const imageGaleryStyles = (imagesLength, imageWidth, index) => ({
    width: imagesLength * imageWidth,
    transform: navigateImages(index, imageWidth)
});

export const translateStyleStyle = (translateAmount) => `translate(${translateAmount}px)`

export const navigateImages = (index, imageWidth) => {
    if (index === 0) {
        return translateStyleStyle(0);
    }

    return translateStyleStyle(index * imageWidth * -1);
}
