import {
    imageGaleryStyles,
    translateStyleStyle,
    navigateImages
} from './ImageGallery.helpers'


describe('ImageGallery', () => {
    it('Should return a valid translate style with the given width', () => {
        const styleOne = translateStyleStyle(20);
        const styleTwo = translateStyleStyle(300);

        expect(styleOne).toBe('translate(20px)');
        expect(styleTwo).toBe('translate(300px)');
    });

    it('Should return a object representing the image gallery style', () => {
        const styleOne = imageGaleryStyles(20, 200, 2);
        const styleTwo = imageGaleryStyles(0, 100, 0);

        expect(styleOne.transform).toBe('translate(-400px)');
        expect(styleOne.width).toBe(4000);
        expect(styleTwo.transform).toBe('translate(0px)');
        expect(styleTwo.width).toBe(0);
    });

    it('It should not translate when the index is 0', () => {
        const style = navigateImages(0, 300);

        expect(style).toBe('translate(0px)');
    });

    it('Should move twice the image size if given index 2', () => {
        const style = navigateImages(2, 300);

        expect(style).toBe('translate(-600px)');
    });
});
