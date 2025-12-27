import React from "react";
import CardTeams from "../components/CardTeams";
import Button from "../components/Button";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "person_1.svg",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "person_2.svg",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "person_3.svg",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "person_4.svg",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: "person_5.svg",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: "person_6.svg",
  },
];

const Teams = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-primary p-2 rounded-lg mx-auto md:mx-0">
          <h3>Teams</h3>
        </div>
        <p className="max-w-2xl text-center md:text-left">
          Meet the skilled and experienced team behind our{" "}
          <br className="hidden md:block" /> successful digital marketing
          strategies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <CardTeams
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
      <Button
        variant="secondary"
        text="See All Teams"
        className="self-end-safe"
      />
    </section>
  );
};

export default Teams;
