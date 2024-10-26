import axios from "axios";
import { useEffect, useState } from "react";
import {
  BiCircle,
  BiLeftArrowCircle,
  BiRightArrowCircle,
} from "react-icons/bi";
import { BsCircleFill, BsFill9CircleFill } from "react-icons/bs";

const ImageSlider = () => {
  //States
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  // https://picsum.photos/v2/list?page=1&limit=10
  const API_URL = "https://picsum.photos/v2/list";
  const page = "1";
  const limit = "10";

  useEffect(() => {
    //Fetch photos initially
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_URL}?page=${page}&limit=${limit}`
        );
        if (response) {
          setLoading(false);
          setImages(response.data);
          console.log(response.data);
        }
      } catch (error) {
        setLoading(false);
        console.log(`ERROR: ${error.message}`);
        setError(error.message);
      }
    };
    fetchData();
  }, [API_URL, page, limit]);

  const handleNextSlide = () => {
    currentSlide === images.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };
  const handlePreviousSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(images.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };
  const handleChangeSlide = (index) => {
    setCurrentSlide(index);
  };
  if (loading) return <div>Loading....</div>;
  if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <div className="relative w-[600px] h-[450px] flex">
      <BiLeftArrowCircle
        className="arrow arrow-left"
        onClick={() => handlePreviousSlide()}
      />
      <div className="flex">
        {images &&
          images.length &&
          images.map((image, index) => {
            return (
              <img
                src={image.download_url}
                alt={image.download_url}
                className={currentSlide === index ? null : `hidden`}
                
              />
            );
          })}
      </div>
      <BiRightArrowCircle
        className="arrow arrow-right"
        onClick={() => handleNextSlide()}
      />

      <div className="flex gap-2 absolute bottom-8 left-1/2 -translate-x-1/2  justify-center items-center">
        {images &&
          images.length > 0 &&
          images.map((_, index) => (
            <BsCircleFill
              key={index}
              className={
                currentSlide === index
                  ? `circle fill-white`
                  : `circle fill-gray-500`
              }
              onClick={() => handleChangeSlide(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;
