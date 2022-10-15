import * as React from "react";

export interface ISlug1Props {}

export default function Slug1(props: ISlug1Props) {
  return <div></div>;
}

// import axios from "axios";
// import Topbar from "../../components/topbar";

// import styles from "../../Style/css-modules/blog-slug.module.scss";

// export default function Blog({ post: { title, content } }) {
//   return (
//     <div className="appear-animate">
//       <Topbar />
//       <div className={styles.banner}>
//         <div>
//           <h1 className={styles.banner - title}>{title}</h1>
//         </div>
//         <div className={styles.post}>
//           <div dangerouslySetInnerHTML={{ __html: content }}></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function getServerSideProps({ params: { slug } }) {
//   try {
//     const res = await axios.get(`http://localhost:5000/blog/${slug}`);
//     console.log(res.data);

//     const post = res.data;
//     return {
//       props: { post },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
