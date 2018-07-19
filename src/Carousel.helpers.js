export const imagesFromFlickrAPI = flickrAPIResponse => {
    if (!flickrAPIResponse || !flickrAPIResponse.data || !flickrAPIResponse.data.items.length) {
        return;
    }

    return flickrAPIResponse.data.items.map(item => ({
        title: item.title,
        url: item.media.m
    }));
};
