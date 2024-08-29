import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type useGetHomeDataProps = {
  category: string | undefined;
};

export const useGetHomeData = ({ category }: useGetHomeDataProps) => {
  const getHomeData = async () => {
    const siteID = 'happy8517.wordpress.com';

    let slug1: string | undefined;
    let slug2: string | undefined;

    if (category === 'clothes') {
      slug1 = '14';
      slug2 = '54';
    } else if (category === 'designes') {
      slug1 = '65';
      slug2 = '85';
    } else if (category === 'tattoos') {
      slug1 = '108';
      slug2 = '121';
    } else if (category === 'other') {
      slug1 = '133';
      slug2 = '139';
    }

    if (!slug1 || !slug2) {
      throw new Error('Invalid category or missing slugs.');
    }

    try {
      const response1 = await axios.get(
        `https://public-api.wordpress.com/wp/v2/sites/${siteID}/posts/${slug1}`
      );
      const postData1 = response1.data;
      const content1 = postData1.content?.rendered;

      const firstArray: string[] = [];
      if (content1) {
        const parser1 = new DOMParser();
        const doc1 = parser1.parseFromString(content1, 'text/html');
        const imgTags1 = doc1.querySelectorAll('img');
        firstArray.push(...Array.from(imgTags1).map((img) => img.src));
      } else {
        throw new Error('No content found in the first post.');
      }

      const response2 = await axios.get(
        `https://public-api.wordpress.com/wp/v2/sites/${siteID}/posts/${slug2}`
      );
      const postData2 = response2.data;
      const content2 = postData2.content?.rendered;

      const secondArray: string[] = [];
      if (content2) {
        const parser2 = new DOMParser();
        const doc2 = parser2.parseFromString(content2, 'text/html');
        const imgTags2 = doc2.querySelectorAll('img');
        secondArray.push(...Array.from(imgTags2).map((img) => img.src));
      } else {
        throw new Error('No content found in the second post.');
      }

      return { firstArray, secondArray };
    } catch (error) {
      console.error('Error fetching the posts:', error);
      throw new Error('Failed to fetch data from WordPress API.');
    }
  };

  const {
    data = { firstArray: [], secondArray: [] },
    isLoading,
    error,
  } = useQuery({
    queryKey: ['getHomeData', category],
    queryFn: getHomeData,
  });

  return { ...data, isLoading, error };
};
