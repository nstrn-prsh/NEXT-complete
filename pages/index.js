import loadPosts from './lib/fetch';

const Index = ({ posts }) => {
     const postTitles = posts.map((post) => <p key={post.id}>{post.title}</p>);

     return <div>{postTitles}</div>;
};

// in tabe tavasote node.js samte server ejra mishe
// new: in code ha samte client ersal nemishan va faghat samte server ejra mishan
export const getStaticProps = async () => {
    const posts = await loadPosts()
     //  const posts = [
     //       { id: 1, title: "post 1" },
     //       { id: 2, title: "post 2" },
     //  ];

     return {
          props: { posts },
     };
};

export default Index;
