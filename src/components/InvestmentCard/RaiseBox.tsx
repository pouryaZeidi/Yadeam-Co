interface RaiseBoxProps {
  raisedAmount: number;
  targetAmount: number;
  backers: number;
}

const RaiseBox: React.FC<RaiseBoxProps> = ({ raisedAmount, targetAmount, backers }) => {
const percentageRaised = Math.round((raisedAmount / targetAmount) * 100);

  return (
    <div className="bg-primary1 p-3 rounded-lg mt-2 shadow-md w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[19px] text-white font-bold">£{raisedAmount} Raised</span>
        <span className="text-sm text-white">
          {backers} Backers | {percentageRaised}% of Target Raised
        </span>
      </div>
      <div className="w-full bg-primary1 flex items-center  h-[25px] rounded-full border-2 border-white">
        <div className="bg-white  border-2  h-[24px] rounded-full"
          style={{ width: `${percentageRaised}%` }}>
        </div>
      </div>
    </div>
  );
};

export default RaiseBox;
