import React from "react";

const Education = () => {
  const educationData = [
    {
      university: "University Name 1",
      course: "Course Name 1",
      year: "Year of Graduation 1",
    },
    {
      university: "University Name 2",
      course: "Course Name 2",
      year: "Year of Graduation 2",
    },
    // Add more education details as needed
  ];

  return (
    <div>
      <h2>Education</h2>
      <ul>
        {educationData.map((item, index) => (
          <li key={index}>
            <h3>{item.university}</h3>
            <p>{item.course}</p>
            <p>{item.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
