export default function Resume() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-12 text-neutral-800">
        <h1 className="text-6xl font-londrina mb-6 lowercase text-purple-950 text-center">
          more about me!
        </h1>
        <div className="flex justify-center mb-10">
          <a
            href="/resume/damita-resume.pdf"
            download
            className="px-5 py-2 rounded-xl bg-purple-950 border-2 border-white text-white lowercase shadow-lg transition-transform duration-200 hover:scale-105"
          >
            download 1-page resume here
          </a>
        </div>
        {[
          {
            title: "education",
            content: (
              <p>
                <strong>cornell university</strong>, college of engineering —{" "}
                <em>expected may 2027</em>
                <br />
                bachelor of science, computer science; minors: ai & philosophy
                <br />
                gpa: 3.743
                <br />
                <span className="italic">relevant courses:</span> intro to machine learning, analysis of algorithms, data structures & oop, discrete math, statistics, calc iii
                <br />
                <span className="italic">fall 2025:</span> ai reasoning & decision making, principles of large scale ml systems, robotics
              </p>
            ),
          },
          {
            title: "technical skills",
            content: (
              <p>
                <strong>languages:</strong> python, java, ocaml, c, javascript, typescript, html/css, cypher (query language), sql, bash scripting
                <br />
                <strong>technologies:</strong> react, next, tailwind css, fastapi, cypress, chatgpt, prompt engineering, neo4j, jira, oracle sql developer
                <br />
                <strong>developer tools:</strong> git, github, gitlab, pulsar, vscode, intellij, jupyter, unix/linux shell, eagle, agile/scrum, unit/e2e testing
                <br />
                <strong>other:</strong> nvidia omniverse isaac sim, unity, rest apis
              </p>
            ),
          },
          {
            title: "work experience",
            content: (
              <>
                <div className="mb-4">
                  <p>
                    <strong>lawrence livermore national laboratory</strong>, livermore, ca —{" "}
                    <em>software engineer intern</em>, may–aug 2025
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>designed interactive visualization frameworks for laser system experiment data</li>
                    <li>developed front-end with react.js and typescript</li>
                    <li>used plotly to generate heatmaps and trace-based graphs; added image-supported graphs to visualization suite</li>
                    <li>built backend communication using python (fastapi) for data retrieval and processing</li>
                    <li>used sql to query relational databases and extract valid experimental data for testing purposes</li>
                    <li>wrote end-to-end tests using cypress to ensure ui reliability and functionality</li>
                    <li>collaborated in agile team to implement and test user requirements</li>
                    <li>recognized as a top 6 presenter (out of ~40 computing interns) for a technical poster presentation highlighting project design, implementation, and results</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p>
                    <strong>hipaas inc.</strong>, pleasanton, ca —{" "}
                    <em>software engineer intern</em>, jun–aug 2024
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>developed machine learning models for predictive analysis of health insurance claims</li>
                    <li>queried and analyzed neo4j graph data using cypher</li>
                    <li>conducted data cleaning, normalization, and preprocessing</li>
                    <li>built claims embedding and multi-task learning networks with biobert, tensorflow, and pytorch</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p>
                    <strong>genesis</strong>, oakland, ca — <em>community engagement & advocacy intern</em>, jun–jul 2022
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>advanced campaigns on youth access, transit, and disability justice</li>
                    <li>collaborated with local leaders and spoke at DA candidate forum</li>
                    <li>led discussions on community organizing and civic engagement</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <strong>blueberry technology</strong>, san jose, ca —{" "}
                    <em>ai & robotics software intern</em>, jun–aug 2022
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>tested autonomous wheelchairs and created sops for airport trials</li>
                    <li>annotated images and trained ai models with ros, yolo, and depth estimation</li>
                  </ul>
                </div>
              </>
            ),
          },
          {
            title: "technical projects",
            content: (
              <>
                <div className="mb-4">
                  <p>
                    <strong>cornell mars rover</strong>, ithaca, ny —{" "}
                    <em>electrical engineer</em>, oct 2023–dec 2024
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>designed pcbs for rover systems using eagle</li>
                    <li>developed battery monitoring board & brushed motor (bdc) board</li>
                    <li>used github for version control of schematics and firmware</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <strong>emprise lab</strong>, ithaca, ny —{" "}
                    <em>robotics student researcher</em>, sep 2025–present
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>explored migration of unity-based robotic caregiving simulations to nvidia isaac sim (omniverse), including asset conversion (fbx → usd)</li>
                    <li>set up and tested isaac sim, documenting workflows for robot import (urdf), environment recreation (usd), and replacing unity c# control scripts with python/ros 2</li>
                  </ul>
                </div>
              </>
            ),
          },
          {
            title: "leadership",
            content: (
              <>
                <div className="mb-4">
                  <p>
                    <strong>cyberpatriot (civil air patrol)</strong>, livermore, ca — <em>team captain</em>, aug 2022–jun 2023
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>trained team to secure systems during 6-hour competition rounds</li>
                    <li>led team to top 3.9% nationwide; qualified for national semi-finals</li>
                    <li>used scripting, policy config, and CLI for Linux/Windows security</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <strong>society of women engineers</strong>, ithaca, ny — <em>co-outreach coordinator</em>, apr 2025–present
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>oversee 9 outreach committees with 50+ student members, supporting initiatives for girl scouts, local schools, community organizations, prospective students, and undergraduates</li>
                    <li>coordinate outreach events to increase student engagement in engineering and broaden participation in stem</li>
                    <li>act as liaison between community partners and swe members to strengthen relationships</li>
                    <li>provide logistical oversight, mentorship, and event planning support for large-scale outreach programs</li>
                  </ul>
                </div>
              </>
            ),
          },
          {
            title: "additional experience",
            content: (
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  <strong>civil air patrol tri-valley squadron 156</strong>, livermore, ca — <em>cadet leader</em>, jan 2021–jul 2023
                </li>
              </ul>
            ),
          },
        ].map(({ title, content }, i) => (
          <section
            key={i}
            className="mb-8 p-6 rounded-xl bg-[rgba(233,213,255,0.6)] border-2 border-purple-950 shadow-[0_4px_10px_rgba(76,29,149,0.7)] text-purple-950"
          >
            <h2 className="text-3xl font-londrina lowercase mb-2">{title}</h2>
            {content}
          </section>
        ))}
        <p className="mt-12 text-sm text-gray-500 lowercase">
          updated sep 2025 · contact: damitasg@gmail.com · (510) 342-4000 ·{" "}
          <a
            href="https://www.linkedin.com/in/damita-sara-george/"
            className="underline text-purple-950"
          >
            linkedin
          </a>
        </p>
      </main>
    </>
  );
}
