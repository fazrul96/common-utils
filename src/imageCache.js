export const loadImageFromCache = (imageUrl) => {
    const cachedImage = localStorage.getItem(imageUrl);
    if (cachedImage) {
        return cachedImage;
    } else {
        return null;
    }
};

export const cacheImage = (imageUrl, imageData) => {
    localStorage.setItem(imageUrl, imageData);
};
