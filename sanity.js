import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient
} from 'next-sanity';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "Production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production"
}

export const sanityClient =createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
