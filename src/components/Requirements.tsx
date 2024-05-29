import { FC } from "react";

interface IRequirementsProps {
    // Add your props here
}

const Requirements: FC<IRequirementsProps> = (
    {
        // Add your props destructuring here
    }
) => {
    return (
        <div className="flex-col mt-40">
            <div className="flex font-medium">Before starting here is some Requirements</div>
            <div className="flex justify-start ml-3 text-start pl-20">
                <ul className="list-disc">
                    <li> 👉 Don’t have an account yet? Sign up on Eden AI and get your free credits: <a href="https://app.edenai.run/user/register?...">https://app.edenai.run/user/register?...</a></li>
                    <li>That's it you have validated all the Requirements</li>
                </ul>
            </div>
            <div className="text-start mt-20 text-3xl">
                <h2 className="">You can follow this tutorial in two different ways</h2>
                </div>
        </div>
    );
};

export default Requirements;
