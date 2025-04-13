import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  DestinationAndActivitiesType,
  destinationAndActivities,
} from "@/schemas/multi-step-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FancyMultiSelect from "../multi-select";
import { activities } from "@/utils/constants";

const DestinationAndActivities = () => {
  const form = useForm<DestinationAndActivitiesType>({
    resolver: zodResolver(destinationAndActivities),
    defaultValues: {
      destinationCountry: "Pakistan",
      otherCountry: "",
      activities: [],
      specialRequests: "",
    },
  });

  const { watch } = form;

  const travelCountry = watch("destinationCountry");

  function onSubmit(data: DestinationAndActivitiesType) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between gap-2">
          <FormField
            control={form.control}
            name="destinationCountry"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Destination Country</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Turkey">Turkey</SelectItem>
                      <SelectItem value="Thailand">Thailand</SelectItem>
                      <SelectItem value="Maldives">Maldives</SelectItem>
                      <SelectItem value="Pakistan">Pakistan</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {travelCountry === "Other" && (
            <FormField
              control={form.control}
              name="otherCountry"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Other Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Other Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div>
          <FormField
            control={form.control}
            name="activities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activities</FormLabel>
                <FormControl>
                  <FancyMultiSelect
                    countries={activities}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default DestinationAndActivities;
