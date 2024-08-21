// eslint-disable-next-line react/prop-types
const Edu = ({ title }) => {
  return (
    <>
      <div className="edubg">
        <h1 className="text-[#231f40] text-4xl font-extrabold flex items-center justify-center pt-[5rem]">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Edu;
