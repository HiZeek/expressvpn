export interface Post {
    _id: string;
    title: string;
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
}