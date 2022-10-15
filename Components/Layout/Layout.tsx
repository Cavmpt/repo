import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

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
