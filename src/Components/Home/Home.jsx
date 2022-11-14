import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

// import { Loader } from "../Loader/Loader";

const Home = () => {
  const commonStyle =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
  const connectWallet = () => {};

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto
            <br />
            Across the world
          </h1>
          <p className="text-left mt-5 text-white font-ligt md:w-9/12 w-11/12 text-base">
            Explore the Crypto World. Buy & sell
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semi-bold">
              Connect Wallet
            </p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyle}`}>Reliability</div>
            <div className={commonStyle}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyle}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyle}`}>Web 3.0</div>
            <div className={commonStyle}>Security</div>
            <div className={`rounded-br-2xl ${commonStyle}`}>BlockChain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-10 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff"></SiEthereum>
                </div>
                <BsInfoCircle fontSize={17} color="#fff"></BsInfoCircle>
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg mt-1">
                  0xfsnflsnd...fdfsdfsgsg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
