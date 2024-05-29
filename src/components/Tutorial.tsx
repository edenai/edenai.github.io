import { FC} from "react";
import tutorial from "../assets/tutorial.md";
import Markdown from "react-markdown";
import  "./styles/tutorial.css"
interface ITutorialProps {
  // Add your props here
}

const Turotial: FC<ITutorialProps> = (
  {
    // Add your props destructuring here
  }
) => {
  return (
    <div className="text-start flex-col ">
      <Markdown>{tutorial}</Markdown>
    </div>
  );
};

export default Turotial;
