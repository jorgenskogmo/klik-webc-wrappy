export function loadImage(url: string): Promise<String> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    console.log('new image');
    image.addEventListener('load', () => {
      resolve('loaded');
    });

    image.addEventListener('error', () => {
      reject('failed');
    });

    image.src = url;
    console.log('image src: ' + image.src);
  });
}
