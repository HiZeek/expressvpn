export interface Service {
    _id: string;
    title: string;
    description: string;
    mainImage: {
        asset: {
            _ref: string;
        };
    };
    slug: {
        current: string;
    };
}