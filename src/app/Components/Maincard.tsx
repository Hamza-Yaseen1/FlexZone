interface IProps {
  PageName: string;
  headingLine1: string;
  headingLine2: string;
  para: string;
  bottomLinks: string[];
  footerLink: string;
}

const MainCard = (props: IProps) => {
  return (
    <div className="card max-w-screen-lg mx-auto p-8 bg-black text-white shadow-lg">
      {/* Breadcrumb */}
      <div className="breadcrumb text-center font-semibold text-sm sm:text-base mb-6">
        <a href="./" className="text-blue-500 hover:underline">Home</a>
        <span className="text-gray-400"> / {props.PageName}</span>
      </div>

      {/* Heading */}
      <div className="content text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {props.headingLine1}
          <span className="block pt-4 text-lg sm:text-xl">{props.headingLine2}</span>
        </h1>
      </div>

      {/* Paragraph */}
      <p className="text-center text-gray-300 text-sm sm:text-base mb-8 px-4 sm:px-8">
        {props.para}
      </p>

      {/* Bottom Links */}
      <div className="bottom-links grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center text-sm sm:text-base">
        {props.bottomLinks.map((link, index) => (
          <p key={index} className="hover:text-blue-500 transition-colors">
            {link}
          </p>
        ))}
      </div>

      {/* Footer */}
      <p className="footer text-center text-gray-400 text-xs sm:text-sm mt-8">
        {props.footerLink}
      </p>
    </div>
  );
};

export default MainCard;
