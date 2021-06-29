import axios from "axios";

const loadPosts = async () => {
     // data ro ke az axios migirim esmesho be posts taghiir midim
     const { data: posts } = await axios.get("http://localhost:5000/posts");

     return posts;
};

export default loadPosts;
