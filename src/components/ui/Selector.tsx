import { FC, useContext } from "react";
import { GeneratorContext } from "../../context/generator";

const Selector: FC<ISelectorProps> = ({
  list,
  label,
  // Add your props destructuring here
}) => {
  const context = useContext(GeneratorContext);
  return (
    <>
        {list && (
          <>
            {Array.isArray(list) ? (
              <select
                defaultValue={"default"}
                className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 rounded-md transition ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-[#E9E9E9] dark:bg-[#E9E9E9]"
                onChange={(e) => {
                  context?.setModel(e.target.value);
                }}
              >
                <option value={"default"} disabled>
                  {label}
                </option>

                {list.map((item: string) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            ) : (
              <select
                defaultValue={"default"}
                className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 rounded-md transition ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-[#E9E9E9] dark:bg-[#E9E9E9]
                "
                onChange={(e) => {
                  context?.setProvider(e.target.value);
                }}
              >
                <option value={"default"} disabled>
                  {label}
                </option>
                {Object.entries(list).map(([key]) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            )}
          </>
        )}
    </>
  );
};

export default Selector;
