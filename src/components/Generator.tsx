import { FC, useContext, useEffect, useState } from "react";
import { GeneratorContext } from "../context/generator";
import Selector from "./ui/Selector";
import Copy from "../assets/copy.svg";
import { Wheel } from "@uiw/react-color";
const Generator: FC<IGeneratorProps> = ({}) => {
  const [provider, setProvider] = useState<any>({});
//   const [visible, setVisible] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    try {
      fetch(
        "https://api.edenai.run/v2/info/provider_subfeatures?feature__name=text&subfeature__name=chat"
      )
        .then((val) => val.json())
        .then((v) => {
          let result: any = {};
          v.map((e: any) => {
            const providers: string = e["provider"]["name"];
            const model: Array<string> = e["constraints"]["models"];
            result[providers] = model;
          });
          setProvider(result);
          console.log(result);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  const context = useContext(GeneratorContext);
  const snippet = `<script src="https://cdn.jsdelivr.net/gh/edenai/yodabot@0dc64f2/embed.js?project=${context?.public_id}&provider=${context?.provider}&model=${context?.model}&k=1&title=${context?.title}&message=${context?.message}&color=${context?.color}"></script>`;
  const inputClass="form-input block w-full px-3 py-1.5 text-base font-normal text-gray-700 rounded-md transition ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-[#E9E9E9] dark:bg-[#E9E9E9]"
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000); // Hide message after 1 second
    } catch (error) {
      console.error("Error copying text:", error); // Handle errors (optional)
    }
  };

  return (
    <>
      <div className="shadow-md bg-white text-bluetext rounded-xl">
        {/* <Selector label={"Choose a provider"}list={provider}/>
        {
            context?.provider &&<Selector label={"Choose a model"}list={provider[context?.provider]}/>
        } */}
        {/* {!visible && (
          <button
            type="button"
            className="rounded"
            onClick={() => setVisible(true)}
          >
            Generator
          </button>
        )} */}

        {/* Conditionally render the Component */}
        {/* {visible && ( */}
          <div className="w-fit rounded flex font-lato" style={{ height: 400 }}>
            {/* <button onClick={(e) => (e.preventDefault, setVisible(false))}>
              X
            </button> */}
            <div className="flex-col flex m-3">
              <div className="flex-col text-justify flex h-3/5 overflow-y-scroll p-2 font-bold">
                <div className="flex flex-col mb-4">
                  Provider:
                  <Selector label={"Choose a provider"} list={provider} />
                </div>
                <div>
                  {context?.provider && (
                    <div className="mb-4">
                      Model:
                      <Selector
                        label={"Choose a model"}
                        list={provider[context?.provider]}
                      />
                    </div>
                  )}
                </div>
                <div className="mb-4 font-bold">
                  Project ID :
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Your Project ID"
                    onChange={(e) => context?.setPublic_id(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  Message :
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="The first message"
                    value={context?.message}
                    onChange={(e) => context?.setMessage(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  Color :
                  <div className="justify-center flex">
                  <Wheel
                    height={100}
                    width={100}
                    color={context?.color}
                    onChange={(color) => {
                      context?.setColor(color.hex);
                    }}
                  />
                  <div className="w-1/2 justify-center ml-2 content-center">
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="The first message"
                    value={context?.color}
                    onChange={(e) => context?.setColor(e.target.value)}
                  />
                  </div>
                  </div>
                </div>
                <div className="mb-4">
                  Title :
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Red"
                    value={context?.title}
                    onChange={(e) => context?.setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className=" h-1/2 flex flex-col text-left box-content place-content-end">
                <div className="w-80 break-all bg-code rounded relative p-3">
                  <button
                    className="p-0 absolute right-1 top-1 bg-transparent "
                    onClick={handleCopyClick}
                  >
                    <img src={Copy} alt="copy" className="size-3.5 " />
                  </button>
                  <code className="text-xs text-textcode">{snippet}</code>
                  <div
                    id="copy-success-message"
                    className={`absolute right-0 rounded px-2 bottom-0 w-30 h-10 bg-green-100 text-green-900 text-center font-bold py-2 transition ease-in-out duration-200 ${
                      isCopied ? "visible opacity-100" : "opacity-0"
                    }`}
                  >
                    Copied!
                  </div>
                </div>
              </div>
            </div>
            <script
              src={`https://cdn.jsdelivr.net/gh/edenai/yodabot@0dc64f2/embed.js?project=${context?.public_id}&provider=${context?.provider}&model=${context?.model}&k=1&title=${context}&message=${context?.message}&color=${context?.color}`}
            ></script>
          </div>
        
      </div>
    </>
  );
};

export default Generator;
