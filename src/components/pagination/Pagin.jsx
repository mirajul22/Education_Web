const Pagin = () => {
  return (
    <>
      <section>
        <div className="flex flex-row items-center justify-center gap-4 py-[4rem]">
          <button className="h-[40px] w-[40px] rounded-full bg-[#525fe1] cursor-pointer text-white text-base font-medium">
            1
          </button>
          <button className="h-[40px] w-[40px] rounded-full bg-[#F4F4F4] cursor-pointer text-[#6f6b80] text-base font-medium hover:bg-[#525fe1] hover:text-white duration-300">
            2
          </button>
          <button className="h-[40px] w-[40px] rounded-full bg-[#F4F4F4] cursor-pointer text-[#6f6b80] text-base font-medium hover:bg-[#525fe1] hover:text-white duration-300">
            3
          </button>
        </div>
      </section>
    </>
  );
};

export default Pagin;
