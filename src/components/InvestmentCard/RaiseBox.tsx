interface RaiseBoxProps {
    raisedAmount: number;
    targetAmount: number;
    backers: number;
    type: string;
  }
  
  const RaiseBox: React.FC<RaiseBoxProps> = ({ raisedAmount, targetAmount, backers, type }) => {
    const percentageRaised = Math.round((raisedAmount / targetAmount) * 100);
  
    return (
      <div className="bg-blue-500 text-white p-4 rounded-lg mt-4">
        <div className="flex justify-between items-center mb-2">
          <span>Raised: ${raisedAmount}</span>
          <span>{percentageRaised}%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: `${percentageRaised}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span>Target: ${targetAmount}</span>
          <span>{backers} Backers</span>
        </div>
      </div>
    );
  };
  
  export default RaiseBox;
  