"use client";
import Select from "react-select";
import useSWR from "swr";

const fetchModel = () => fetch("/api/getEngines").then((res) => res.json());

function ModalSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModel);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654] ",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModalSelection;
