import React from "react";
import Slider from "../../Components/Slider/Slider";
import LatestBooks from "../../Components/LatestBooks";
import AboutSection from "../../Components/AboutSection.jsx";
import Users_review from "../../Components/Users_review/Users_review.jsx";
import Cover from "../../Components/Cover/COver.jsx";
import UsersReviewForm from "../../Components/UsersReview/UsersReviewForm.jsx";

const Home = () => {
  return (
    <div>
      <Slider />
      <LatestBooks></LatestBooks>
      <AboutSection></AboutSection>
      <Cover></Cover>
      <Users_review></Users_review>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center my-10 px-4 sm:px-6 md:px-10 gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <UsersReviewForm className="w-full max-w-md" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 md:px-8 rounded-lg shadow-lg">
            <div className="max-w-3xl mx-auto text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
                Our Vision & Mission
              </h2>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  To create a platform that inspires and empowers readers around
                  the world, making knowledge and imagination accessible to
                  everyone.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  To deliver high-quality content, foster a community of readers
                  and learners, and continually innovate to provide an engaging
                  and memorable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
