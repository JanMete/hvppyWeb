import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type useGetImagesProps = {
  location: string;
};

export const useGetImages = ({ location }: useGetImagesProps) => {
  const siteID = 'happy8517.wordpress.com';

  const getImages = async () => {
    let slug;

    if (location === '/') {
      slug = 157;
    } else if (location === '/artwork') {
      slug = 167;
    } else if (location === '/about') {
      slug = 175;
    } else if (location === '/contact') {
      slug = 186;
    } else if (location === 'attributes') {
      slug = 190;
    } else if (location === 'logo') {
      slug = 197;
    } else {
      throw new Error('Invalid location');
    }

    const { data } = await axios.get(
      `https://public-api.wordpress.com/wp/v2/sites/${siteID}/posts/${slug}`
    );

    const res = data.content.rendered;
    const parser = new DOMParser();
    const html = parser.parseFromString(res, 'text/html');
    const img = html.querySelectorAll('img');
    const imgArray = Array.from(img).map((image) => ({
      src: image.src,
      alt: image.alt,
    }));

    if (location === '/') {
      return imgArray.slice(0, 3);
    } else if (location === '/artwork') {
      return imgArray.slice(0, 4);
    } else if (location === '/about') {
      return imgArray.slice(0, 2);
    } else if (location === '/contact') {
      return imgArray.slice(0, 1);
    } else if (location === 'attributes') {
      return imgArray.slice(0, 2);
    } else if (location === 'logo') {
      return imgArray.slice(0, 1);
    } else {
      return imgArray;
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['GetImages', location],
    queryFn: getImages,
    enabled: !!location,
  });

  return { data, isLoading, error };
};
