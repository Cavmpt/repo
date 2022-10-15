import Navbar from "./Navbar/Navbar";

function LayoutWrap(props: any) {
  const { children } = props;
  return (
    <div className="wrapper">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default LayoutWrap;
