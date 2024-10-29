import { useContext } from "react";
import { FeatureFlagContext } from "./Context/Context";
import Accordion from "../Accordion/Accordion";
import GithubProfile from "../GithubProfile/GithubProfile";
import ImageSlider from "../imageSlider/ImageSlider";
import QrCodeGenerator from "../QrCodeGenerator/QrCodeGenerator";
import TicTacToe from "../tictactoe/TicTacToe";

const FeatureFlag = () => {
  const enabledFeatures = useContext(FeatureFlagContext);
  console.log(enabledFeatures);
  const featureFlagList = [
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showGithubProfile",
      component: <GithubProfile />,
    },
    {
      key: "showImageSlider",
      component: <ImageSlider />,
    },
    {
      key: "showQRCodeGenerator",
      component: <QrCodeGenerator />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
  ];

  return (
    <>
      {featureFlagList.map((feature, index) => (
        <div key={index}>{enabledFeatures[feature.key] ? feature.component : null}</div>
      ))}
    </>
  );
};

export default FeatureFlag;
