import Accordion from "./components/Accordion/Accordion";
import GithubProfile from "./components/GithubProfile/GithubProfile";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMoreData from "./components/loadMore/LoadMoreData";
import MenuUi from "./components/MenuUi/MenuUi";
import MultiTabs from "./components/MultiTabs/MultiTabs";
import PopupBox from "./components/Popup/PopupBox";
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import RandomColor from "./components/randomColor/RandomColor";
import ScrollBar from "./components/scroll-bar/ScrollBar";
import StarRating from "./components/starRating/StarRating";
import TicTacToe from "./components/tictactoe/TicTacToe";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import "./index.css";

function App() {
  return (
    <>
      {/* Accordion */}
      {/* <Accordion /> */} 
      {/* Random Color Generator */}
      {/* <RandomColor /> */}
      {/* Star Rating */}
      {/* <StarRating starCount={10}/> */}
      {/* Image Slider */}
      {/* <ImageSlider /> */}
      {/* Load More Data */}
      {/* <LoadMoreData /> */}
      {/* Tree-View Side Menu Bar (Dynamic) */}
      {/* <MenuUi /> */}
      {/* QR-Code Generator */}
      {/* <QrCodeGenerator /> */}
      {/* Color Theme Changer */}
      {/* <ToggleTheme /> */}
      {/* scroll bar */}
      {/* <ScrollBar /> */}
      {/* Popup Content */}
      {/* <PopupBox /> */}
      {/* Tic Tac Toe Game */}
      {/* <TicTacToe /> */}
      {/* Multi Tabs */}
      {/* <MultiTabs /> */}
      {/* Github user Details fetch */}
      <GithubProfile url={"https://api.github.com/users"}/>
    </>
  );
}
export default App;
