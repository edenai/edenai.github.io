import { FC, createContext, useState } from "react";

export const GeneratorContext = createContext<IGeneratorContextProps | null>(
  null
);

const GeneratorProvider: FC<IGeneratorProviderProps> = ({ children }) => {
  const [public_id, setPublic_id] = useState<string >(""); // Use undefined as initial value
  const [model, setModel] = useState<string>(""); // Use undefined as initial value
  const [provider, setProvider] = useState<string >(""); // Use undefined as initial value
  const [color, setColor] = useState<string >("#FFFFFF");
  const [message, setMessage] = useState<string >("hello i’m customized bot");
  const [title, setTitle] = useState<string >("AI ChatBot");


  const context: IGeneratorContextProps = {
    public_id,
    setPublic_id,
    model,
    setModel,
    provider,
    setProvider,
    color,
    setColor,
    message,
    setMessage,
    title,
    setTitle,
  };

  return (
    <GeneratorContext.Provider value={context}>
      {children}
    </GeneratorContext.Provider>
  );
};

export default GeneratorProvider;
