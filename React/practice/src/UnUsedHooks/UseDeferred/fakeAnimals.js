import { faker } from '@faker-js/faker';

const THRESHOLD = 10000;

export const animals = Array.from(Array(THRESHOLD), () => {
  return {
    id: faker.string.alphanumeric(5),
    name: faker.animal.bear(),
    avatar: faker.image.urlLoremFlickr({ category: 'animals' })
  };
});