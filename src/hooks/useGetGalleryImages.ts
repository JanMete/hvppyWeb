import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type ImageWithCaption = {
  src: string;
  alt: string;
};

type useGetGalleryImagesProps = {
  category: string | undefined;
};

export const useGetGalleryImages = ({ category }: useGetGalleryImagesProps) => {
  const siteID = 'happy8517.wordpress.com';
  const categorySlugs: Record<string, [string, string]> = {
    clothes: ['14', '54'],
    designs: ['65', '85'],
    tattoos: ['108', '121'],
    other: ['133', '139'],
  };

  const GetGalleryImages = async () => {
    const slugs = categorySlugs[category || ''] || [];

    if (!slugs) {
      throw new Error('Invalid category or missing slugs.');
    }

    const fetchPostContent = async (slug: string) => {
      const { data } = await axios.get(
        `https://public-api.wordpress.com/wp/v2/sites/${siteID}/posts/${slug}`
      );
      const content = data.content?.rendered;

      if (!content) {
        throw new Error(`No content found in post ${slug}.`);
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      const imgTags = doc.querySelectorAll('img');
      const figCaptions = doc.querySelectorAll('figcaption');

      return Array.from(imgTags).map(
        (img, index): ImageWithCaption => ({
          src: img.src,
          alt: figCaptions[index]?.textContent || '',
        })
      );
    };

    const [firstArray, secondArray] = await Promise.all([
      fetchPostContent(slugs[0]),
      fetchPostContent(slugs[1]),
    ]);

    return { firstArray, secondArray };
  };

  const {
    data = { firstArray: [], secondArray: [] },
    isLoading,
    error,
  } = useQuery({
    queryKey: ['GetGalleryImages', category],
    queryFn: GetGalleryImages,
  });

  return { ...data, isLoading, error };
};
