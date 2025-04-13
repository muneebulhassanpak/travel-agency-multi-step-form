import { multistepFormStepsMap } from "@/utils/constants";

type ActiveStepProps = {
  step: {
    name: string;
    componentName: string;
  };
};

const ActiveStep: React.FC<ActiveStepProps> = ({ step }) => {
  return (
    <div className="space-y-2">
      <div className="h-2 w-full rounded-full bg-blue-400"></div>
      <p className="text-gray-500 text-sm">{step.name}</p>
    </div>
  );
};

const FormProgressBar = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-5">
      {multistepFormStepsMap.map((step, index) => (
        <ActiveStep key={index} step={step} />
      ))}
    </div>
  );
};

export default FormProgressBar;
