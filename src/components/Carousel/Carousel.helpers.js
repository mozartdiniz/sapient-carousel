export const imagesFromFlickrAPI = flickrAPIResponse => {
    if (!flickrAPIResponse || !flickrAPIResponse.data || !flickrAPIResponse.data.items.length) {
        return;
    }

    return flickrAPIResponse.data.items.map(item => ({
        // Generate fake id so React will not complain about repeated keys
        id: Math.random().toString(36).substring(7),
        title: item.title,
        url: item.media.m,
    }));
};
