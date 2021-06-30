import axios from "axios";

export const loadPosts = async () => {
     // data ro ke az axios migirim esmesho be posts taghiir midim
     const { data: posts } = await axios.get("http://localhost:5000/posts");

     return posts;
};

export const getPost = async (slug) => {
     // data ro ke az axios migirim esmesho be posts taghiir midim
     const { data: posts } = await axios.get("http://localhost:5000/posts", {
          params: { slug },
     });

     return posts;
};
