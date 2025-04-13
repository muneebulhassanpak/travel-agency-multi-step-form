import { Badge } from "@/components/ui/badge";
import PersonalDetails from "@/components/custom/forms/PersonalDetails";
import TravelPreferencesForm from "./forms/TravelPerference";
import DestinationAndActivities from "./forms/DestinationAndActivities";

const FormWrapper = () => {
  return (
    <div className="space-y-8 border-t border-b p-5">
      <Badge className="bg-gray-200 text-black">Badge</Badge>
      {/* <PersonalDetails /> */}
      {/* <TravelPreferencesForm /> */}
      <DestinationAndActivities />
    </div>
  );
};

export default FormWrapper;
