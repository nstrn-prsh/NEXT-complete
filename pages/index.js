const Index = ({ posts }) => {
     const postTitles = posts.map((post) => <p key={post.id}>{post.title}</p>);

     return <div>{postTitles}</div>;
};

export const getStaticProps = async () => {
     const posts = [
          { id: 1, title: "post 1" },
          { id: 2, title: "post 2" },
     ];

     return {
          props: { posts },
     };
};

export default Index;
