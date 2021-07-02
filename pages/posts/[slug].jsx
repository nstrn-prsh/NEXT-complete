import { useRouter } from "next/dist/client/router";
import { getPost, loadPosts } from "./../lib/fetch";
import { getStaticPaths, getStaticProps } from "./ssg.js";
import { getServerStaticProps } from "./ssr";
import Head from "next/head";

const Any = ({ post }) => {
     const router = useRouter();
     const { slug } = router.query;

     console.log("slug", slug);

     return (
          <div>
               <Head>
                    <title>run server - build - start</title>
               </Head>
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

// note: in tabe ha bayad jaygozin beshan vali be khatere inke ghati nashe  injori neveshtam

// SSG
// getStaticPaths();
// getStaticProps();

// SSR
getServerStaticProps();
