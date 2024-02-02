import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
const PressReleaseCard = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 bg-orange-500 rounded-lg shadow-lg w-64 h-64 m-2">
      <p className="text-white font-semibold text-center">{text}</p>
      <button className="text-white bg-white-700 hover:bg-orange-600 rounded-full p-2">
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

const Press = () => {
  const pressReleases = [
    "रोटेशन प्रूफिंग की कार्यवाही, एक शक्ति कार्यान्वित को किया गिरफ्तार।",
    "रोटेशन प्रूफिंग की कार्यवाही, एक शक्ति कार्यान्वित को किया गिरफ्तार।",
    "रोटेशन प्रूफिंग की कार्यवाही, एक शक्ति कार्यान्वित को किया गिरफ्तार।",
    "रोटेशन प्रूफिंग की कार्यवाही, एक शक्ति कार्यान्वित को किया गिरफ्तार।",
    "रोटेशन प्रूफिंग की कार्यवाही, एक शक्ति कार्यान्वित को किया गिरफ्तार।",
  ];

  return (
    <div className="bg-black pt-16 pb-10 ">
      <h1 className="text-white text-4xl md:text-6xl font-bold md:ml-20">
        Press Release
      </h1>
      <div className="flex flex-wrap md:flex-nowrap mt-[5rem] pb-8 justify-center">
        {pressReleases.map((text, index) => (
          <PressReleaseCard key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Press;
