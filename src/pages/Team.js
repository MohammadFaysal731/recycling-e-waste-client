import React, { useEffect, useState } from "react";

const Team = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("teamData.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
        Meet Our Team Members
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {members?.map(({ name, image, professions }, index) => (
          <div key={index}>
            <div className="avatar">
              <div className=" mask mask-hexagon">
                <img src={image} alt="team-members-images" className="w-full" />
              </div>
            </div>
            <div className="text-xl text-primary text-center font-bold">
              <p>{name}</p>
              <span>{professions}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
