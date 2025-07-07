import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
 import JAVASCRIPT from "../assets/javascript.png";
 import REACT from "../assets/react.png";
 import NODE from "../assets/nodeJS.png";
import WORDPRESS from "../assets/wordpress.png";
 import MONGO from "../assets/mongodb.png";
 import PG from "../assets/Postgre.png";
 import SUPABASE from "../assets/supabase.png";

const skill_logos = [
  { name: "HTML", img: HTML },
 { name: "CSS", img: CSS },
 { name: "JAVASCRIPT", img: JAVASCRIPT },
 { name: "REACT", img: REACT },
 { name: "WORDPRESS", img: WORDPRESS },
 { name: "MONGO DB", img: MONGO },
 { name: "POSTGRES", img: PG },
{ name: "SUPABASE", img: SUPABASE },

 
];

const Skills = () => {
  return (
    <div
      id="skills"
      className=" w-full md:h-screen max-[768px]:pt-20 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300 ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#19A7CE] ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        {/* Icons */}
        <div className="w-full grid grid-cols-3 max-[425px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8">
          {skill_logos.map(({ name, img }, index) => {
            return (
              <div
                key={index}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <img className="w-10 mx-auto " src={img} />
                <p className="my-4 max-[425px]:text-sm">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;