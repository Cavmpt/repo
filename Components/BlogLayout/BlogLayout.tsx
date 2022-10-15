import * as React from "react";
import NormalLayout from "./NormalLayout/NormalLayout";
import LeftGridLayout from "./LeftGridLayout/LeftGridLayout";

export interface IBlogLayoutProps {
  blogData: {
    blogType: string;
    blogs: { backgroundImage: string; buttonText: string }[];
  };
}

export default function BlogLayout(props: IBlogLayoutProps) {
  const { blogData } = props;
  const { blogs, blogType } = blogData;

  switch (blogType) {
    case "normal":
      return (
        <NormalLayout
          backgroundImage={"background image"}
          buttonText={"Check out this blog"}
          blogs={blogs}
        />
      );
    case "leftgrid":
      return <LeftGridLayout blogs={blogs} />;
    default:
      return <></>;
  }
}
