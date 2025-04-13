import FormWrapper from "@/components/custom/form-wrapper";
import FormProgressBar from "./components/custom/form-progress-bar";
import FormActions from "./components/custom/form-actions";

const App = () => {
  return (
    <section className="min-h-screen grid place-items-center">
      <div className="w-full max-w-[95%] mx-auto xl:max-w-5xl full border rounded-lg">
        <FormProgressBar />
        <FormWrapper />
        <FormActions />
      </div>
    </section>
  );
};

export default App;
