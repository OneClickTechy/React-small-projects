const featuresToShow = {
  showAccordion: true,
  showGithubProfile: false,
  showImageSlider: true,
  showQRCodeGenerator: true,
  showTicTacToe: true,
};

const getFeaturesToShow = () => {
  return new Promise((resolve, reject) => {
    if (featuresToShow) {
      setTimeout(resolve(featuresToShow), 500);
    } else {
      reject("SomeThing Went Wrong, Please Try Again");
    }
  });
};

export default getFeaturesToShow;
