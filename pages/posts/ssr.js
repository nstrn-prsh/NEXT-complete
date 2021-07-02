// g13
export async function getServerStaticProps({ params }) {
    console.log("params", params);
    const post = await getPost(params.slug);

    if (!post[0]) {
         return { notFound: true };
    }

    return {
         props: {
              post: post[0],
         },
    };
}