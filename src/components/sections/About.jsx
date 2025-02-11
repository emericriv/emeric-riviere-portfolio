import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwindcss",
    "Bootstrap",
  ];

  const backendSkills = ["Django (Python)", "Node.js", "PostgreSQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with a strong interest in web development.
              Working with technologies such as React, Django, tailwindcss in
              constant learning. I am always looking for new challenges and
              opportunities to improve my skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y2">
                <li>
                  <strong>Engineering School </strong> - ENSEEIHT Toulouse
                  (2022-2025)
                </li>
                <li>
                  <strong>DUT Mesures Physiques </strong> - Limoges University
                  (2020-2022)
                </li>
                <li>
                  <strong>Scientific Baccalaureate </strong> - Lycée d'Arsonval
                  (2017-2020)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Apprentice Electronic Engineer and software developer at
                    Continental - Toulouse (2022-2025)
                  </h4>
                  <p className="ml-4">
                    Working in a radiofrequency laboratory for embedded
                    technologies in vehicles (pressure sensors in tires).
                    Programming in Python with the objective of optimizing
                    already existing test bench programs or creating them if
                    needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Apprentice Test Technician at Centre Scientifique et
                    Technique du Bâtiment (CSTB) - Nantes (2021-2022)
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y2 ml-4">
                    <li>
                      Worked on a complete measurement chain / 3-point bending
                      test according to NF EN ISO 11296-4
                    </li>
                    <li>
                      Statistical study based on data from 2021 aiming to
                      highlight (or not) criteria responsible for non-conformity
                    </li>
                    <li>
                      Implementation of research aimed at evaluating the impact
                      of the quality of the samples taken for this test.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
