interface PercentBarProps {
  name: string;
  percent: string;
}

const PercentBar = ({ name, percent}: PercentBarProps) => {
  const percentValue = parseFloat(percent);
  const bar = `${percentValue}%`;

  return (
    <div className="space-y-[4px]">
      <div className="flex justify-between text-text-secondary">
        <h4>{name}</h4>
        <h4>{percent}%</h4>
      </div>
      <div className="border border-orange-500 rounded-full h-[6px] p-[1px]">
        <div
          className="bg-orange-500 h-[2px] rounded-full"
          style={{ width: bar }}
        ></div>
      </div>
    </div>
  );
};

export { PercentBar };