import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ImageWithCaption } from '../types/imageWithCaption';

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

    const content = data.content?.rendered;

    if (!content) {
      throw new Error('No content found');
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const imgTags = doc.querySelectorAll('img');
    const figCaptions = doc.querySelectorAll('figcaption');

    const imageWithCaptions: ImageWithCaption[] = Array.from(imgTags).map(
      (img, index) => ({
        src: img.src,
        alt: figCaptions[index]?.textContent || '',
      })
    );

    if (location === '/') {
      return imageWithCaptions.slice(0, 3);
    } else if (location === '/artwork') {
      return imageWithCaptions.slice(0, 4);
    } else if (location === '/about') {
      return imageWithCaptions.slice(0, 2);
    } else if (location === '/contact') {
      return imageWithCaptions.slice(0, 1);
    } else if (location === 'attributes') {
      return imageWithCaptions.slice(0, 2);
    } else if (location === 'logo') {
      return imageWithCaptions.slice(0, 1);
    } else {
      return imageWithCaptions;
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['GetImages', location],
    queryFn: getImages,
    enabled: !!location,
  });

  return { data, isLoading, error };
};
