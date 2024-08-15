export interface SeoType {
    pageTitle: string;
    desc: string;
}

const Seo = ({ pageTitle, desc }: SeoType) => {
    const metadata = {
        title: `${pageTitle}`,
        description: `${desc}`,
    };
    return (
        <>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </>
    );
};

export default Seo