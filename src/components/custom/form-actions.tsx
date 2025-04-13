import { Button } from "@/components/ui/button";

const FormActions = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <Button variant="outline">Back</Button>
      <Button>Next</Button>
    </div>
  );
};

export default FormActions;
