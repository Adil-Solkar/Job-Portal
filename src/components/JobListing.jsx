import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router";

function Joblisting({ job }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  // when showFullDescription is false then shorten the string
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  // handling showFullDescription button click
  function handleDesriptionClick() {
    setShowFullDescription((prevState) => !prevState)
  }

  return (
    <>
      {/* sort out the card spacing issue in large screen size bottom border should match */}
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <h4 className="text-gray-600 my-2">{job.type}</h4>
          </div>

          <p className="mb-5">{description}</p>

          <button
            className="cursor-pointer text-indigo-500 mb-5 hover:text-indigo-950 border-0"
            onClick={handleDesriptionClick}
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>

          <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <p className="text-orange-700 mb-3">
              <FaMapMarker className="inline mb-1 mr-2 text-lg"/>
              {job.location}
            </p>
            <Link
              to="/jobs"
              className="h-9 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joblisting;
