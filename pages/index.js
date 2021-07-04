import loadPosts from "lib/fetch";
import Link from "next/link";
import Child from './effect';

const Index = ({ posts }) => {
     const postTitles = posts ? (
          posts.map((post) => (
               <Link
                    // href string hast
                    // href={`posts/${post.slug}`}
                    // href object hast
                    href={{
                         pathname: "posts/[slug]",
                         query: {
                              slug: post.slug,
                              foo: 11,
                         },
                    }}
                    // ghabl az inke karbar roye linki click kone ta ye hadi mavarede morede niaz ro fetch mikone
                    prefetch={true}
                    key={post}
               >
                    <a>
                         <p key={post.id}>{post.title}</p>
                    </a>
               </Link>
          ))
     ) : (
          <p>no posts</p>
     );

     return <div>{postTitles}</div>;
};

// in tabe tavasote node.js samte server ejra mishe
// new: in code ha samte client ersal nemishan va faghat samte server ejra mishan
export const getStaticProps = async () => {
     const posts = await loadPosts();
     //  const posts = [
     //       { id: 1, title: "post 1" },
     //       { id: 2, title: "post 2" },
     //  ];

     return {
          props: { posts },
     };
};

export default Index;

/*
const Home = () => {
     // g20
     const now = new Date()
     
     // g21
     const [showChild, setShowChild] = useState(false)
     useEffect(() => {
         setShowChild(true)
     }, [])
     useLayoutEffect(() => {
          console.log('object');
     }, [])

     return ( 
          <div suppressContentEditableWarning={true}>
//           {typeof window !== "undefined"  ? "Browser" : "Server"} 
               {now.getMilliseconds()}

{showChild && <Child />}
          </div>
      );
}
 
export default Home;
*/