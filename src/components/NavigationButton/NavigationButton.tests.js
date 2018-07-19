import {
    getClassNames
} from './NavigationButton.helpers'

describe('NavigationButton', () => {
    it('', () => {
        const stylesObjectclass = {
            backward: 'backwardClassName',
            forward: 'forwardClassName',
            navigationButton: 'navigationButtonClassName'
        }

        const forward = getClassNames('forward', stylesObjectclass);
        const backward = getClassNames('backward', stylesObjectclass);

        expect(forward).toBe('forwardClassName');
        expect(backward).toBe('backwardClassName');
    });
});
