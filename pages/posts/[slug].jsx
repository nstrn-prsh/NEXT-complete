import { useRouter } from "next/dist/client/router";
import { getPost, loadPosts } from "./../lib/fetch";

const Any = ({ post }) => {
     const router = useRouter();
     const { slug } = router.query;

     console.log("slug", slug);

     return (
          <div>
               <p>
                    {/*note: ba estefade az getStaticProps() mitonim "content" post ro daryaft bokonim */}
                    post slug: {slug}
               </p>
               <p>
                    {/*note: ba estefade az getStaticPaths() mitonim "route" post ro daryaft bokonim */}
                    content: {post.content}
               </p>
          </div>
     );
};

export default Any;

export async function getStaticPaths() {
     const posts = await loadPosts();

     const paths = posts.map((post) => ({
          params: { slug: post.slug },
     }));

     // g10
     // if (router.isFallback) {
     //      return <div>Loading...</div>;
     // }

     return {
          /*paths: [
               { params: { slug: 1 } },
               { params: { slug: 2 } },
          ],*/
          paths,
          // fallback: true,
          // g10
          // fallback: true,
          // g11
          fallback: "blocking",
     };
}

// be ezaye har masiiri ke match beshe ma yekseri parametr mitonim daryaft konim(params, slug masiri ke match shode ro neshon mide)
export async function getStaticProps({ params }) {
     console.log("params", params);
     const post = await getPost(params.slug);

     // g10
     // notFound vaghti return mishe ke vaghean ye posti mojod nabashe (yani bade build ham ezafe nashode bashe)
     if (!post[0]) {
          return { notFound: true };
     }

     // age post mojod bood in ghesmat ejra mishe
     return {
          props: {
               post: post[0],
          },
          revalidate: 1,
     };
}
