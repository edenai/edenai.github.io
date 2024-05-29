import  { FC } from 'react';

interface IheaderProps {
  // Add your props here
}

const Header: FC<IheaderProps> = ({
  // Add your props destructuring here
}) => {
  return (
    <div>
      Welcome to this tutorial to create your own ChatBot and to add it to your Webflow Website
    </div>
  );
};

export default Header;