import {
    calculateImageStyles
} from './Image.helpers'

describe('Image', () => {
    it('Should return a object with the given width as value', () => {
        const style = calculateImageStyles(30);

        expect(style.width).toBe(30);
    });
});
