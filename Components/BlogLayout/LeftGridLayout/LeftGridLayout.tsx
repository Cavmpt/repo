import * as React from "react";

export interface ILeftGridLayoutProps {
  blogs: { backgroundImage: string; buttonText: string }[];
}

interface ILeftLargeImage {
  backgroundImage: string;
  buttonText: string;
}

interface ISmallRightImage {
  backgroundImage: string;
  buttonText: string;
}

export default function LeftGridLayout(props: ILeftGridLayoutProps) {
  const { blogs } = props;
  const LeftLargeImage = (LeftLargeImageProps: ILeftLargeImage) => {
    const { backgroundImage, buttonText } = LeftLargeImageProps;
    return (
      <div
        className="left-large-blog-frame"
        style={{ backgroundImage: backgroundImage }}
      >
        <button>{buttonText}</button>
      </div>
    );
  };

  const RightSmallImages = (RightSmallImageProps: ISmallRightImage) => {
    const { backgroundImage, buttonText } = RightSmallImageProps;
    return (
      <div
        style={{ backgroundImage: backgroundImage }}
        className="right-small-image"
      >
        <button>{buttonText}</button>
      </div>
    );
  };

  return (
    <div className="left-grid-layout">
      <LeftLargeImage
        backgroundImage={blogs[0].backgroundImage}
        buttonText={blogs[0].buttonText}
      />
      <div className="right-grid-layout">
        <RightSmallImages
          backgroundImage={blogs[1].backgroundImage}
          buttonText={blogs[1].buttonText}
        />
        <RightSmallImages
          backgroundImage={blogs[2].backgroundImage}
          buttonText={blogs[2].buttonText}
        />
      </div>
    </div>
  );
}
