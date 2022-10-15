import * as React from "react";

export interface ITestingtempalteProps {}

export default function Testingtempalte(props: ITestingtempalteProps) {
  return <div></div>;
}

// import axios from "axios";
// import Link from "next/link";
// import Navbar2 from "../../components/Navbar2";
// import Topbar from "../../components/topbar";
// import Footer2 from "../../components/Footer2";
// import Post from "../../components/Posts/Post";

// import styles from "../../Style/css-modules/blog.module.scss";

// export default function Blog({ posts }) {
//   console.log(posts);
//   return (
//     <div className="appear-animate">
//       <Navbar2 />
//       <Topbar />
//       <div className={styles.banner}>
//         <div>
//           <h1 className={styles.banner - title - h1}>Blog</h1>
//         </div>
//         <div className={styles.add - post}>
//           <div className={styles.add - post}>
//             <Link href="/add_post">
//               <button className={styles.add - post - button}>Add Post</button>
//             </Link>
//           </div>
//         </div>
//         <div className={styles.posts}>
//           {posts.map((post, index) => (
//             <Post key={index} post={post} />
//           ))}
//         </div>
//       </div>
//       <Footer2 />
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   try {
//     const res = await axios.get("http://localhost:5000/blog");
//     console.log(res.data);

//     // Get slug and frontmatter from posts
//     const posts = res.data.map(post => {
//       console.log(post);
//       const { title, id: slug, updated_at: date, content } = post;

//       return {
//         slug,
//         title,
//         date,
//         excerpt: "test",
//         content,
//       };
//     });

//     return {
//       props: { posts },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
