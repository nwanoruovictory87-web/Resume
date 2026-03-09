import User from "./about-user";
import Content from "./about-content";

function Resume() {
  const creatFontLink = () => {
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./src/fonts/css/all.css";
    head.appendChild(link);
  };
  creatFontLink();
  return (
    <div className="content-body">
      <div className="body-content-box">
        <Content />
        <User />
      </div>
    </div>
  );
}
export default Resume;
