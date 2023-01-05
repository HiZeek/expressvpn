import createImageUrlBuilder from '@sanity/image-url';

import sanityClient from '@sanity/client';

export const client = sanityClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "Production",
   apiVersion: '2021-08-31',
   useCdn: process.env.NODE_ENV === "production"
  });


export const urlFor = (source) => createImageUrlBuilder(client).image(source);