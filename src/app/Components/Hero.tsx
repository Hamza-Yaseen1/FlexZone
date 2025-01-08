import { Button } from "@/components/ui/button";
// import Slider from "./slider";

type HeroProps = {
  heroData: {
    backgroundImage: {
      asset: {
        url: string;
      };
    };
    heading: string;
    paragraph: string;
    buttonText: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
  };
};

const Hero: React.FC<HeroProps> = ({ heroData }) => {
  const {
    backgroundImage,
    heading,
    paragraph,
    buttonText,
    textColor,
    buttonColor,
    buttonTextColor,
  } = heroData;

  return (
    <>
      <div
        className="hero h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage.asset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex flex-col items-center justify-center h-screen">
          <div className="text-center">
            <h1 className={`text-5xl font-bold text-${textColor}`}>
              {heading}
            </h1>
            <p className={`mt-4 text-${textColor}`}>{paragraph}</p>
            <div className="mt-8">
              <Button
                variant="outline"
                className={`bg-${buttonColor} text-${buttonTextColor}`}
              >
                {buttonText}
              </Button>
              {/* <Slider/> */}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 text-xl text-gray-700 sm:w-96 md:w-auto md:pl-16 md:pr-16 leading-10">
        
        We do not believe that one style suits everyone. That is why we choose
        three design directions for the new season. Get inspired by new trends
        and create an atmosphere of coziness and comfort in your own home. On
        the site you will find all the wonderful decor items from photo frames
        to tablecloths for the dining table.
      </div>
    </>
  );
};

export default Hero;
