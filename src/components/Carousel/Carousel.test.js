import {
    imagesFromFlickrAPI
} from './Carousel.helpers';

const fakeAPIResponse = {
    data: {
        "title": "Recent Uploads tagged kitten",
        "link": "https://www.flickr.com/photos/tags/kitten/",
        "description": "",
        "modified": "2018-07-19T16:36:13Z",
        "generator": "https://www.flickr.com",
        "items": [{
                "title": "Littlefangs - Tricolor Kitty Beige",
                "media": {
                    "m": "https://farm1.staticflickr.com/920/28624381517_d837898765_m.jpg"
                }
            },
            {
                "title": "Littlefangs - Tricolor Kitty Natural",
                "media": {
                    "m": "https://farm1.staticflickr.com/922/28624380817_07b474e993_m.jpg"
                }
            },
            {
                "title": "Littlefangs - Tricolor Kitty Fatpack",
                "media": {
                    "m": "https://farm1.staticflickr.com/926/43463436632_f15da102b0_m.jpg"
                }
            }
        ]
    }
}

describe('imagesFromFlickrAPI', () => {
    it('Should map the Flickr API to the Carousel component format', () => {
        const carouselData = imagesFromFlickrAPI(fakeAPIResponse);

        expect(carouselData.length).toBe(3);
        expect(carouselData[0].title).toBe('Littlefangs - Tricolor Kitty Beige');
        expect(carouselData[1].title).toBe('Littlefangs - Tricolor Kitty Natural');
        expect(carouselData[2].url).toBe('https://farm1.staticflickr.com/926/43463436632_f15da102b0_m.jpg');
    });

    it('Should return undefined if no data is provided', () => {
        const carouselData = imagesFromFlickrAPI();

        expect(carouselData).toBe(undefined);
    });

    it('Should return undefined if no items is provided', () => {
        const carouselData = imagesFromFlickrAPI({
            data: {
                items: []
            }
        });

        expect(carouselData).toBe(undefined);
    });
});
