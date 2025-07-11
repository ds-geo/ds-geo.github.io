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
                gpa: 3.74
                <br />
                <span className="italic">relevant courses:</span> intro to machine learning, analysis of algorithms, data structures & oop, discrete math, statistics, calc iii
              </p>
            ),
          },
          {
            title: "technical skills",
            content: (
              <p>
                <strong>languages:</strong> python, java, ocaml, javascript, html/css, cypher (query language)
                <br />
                <strong>technologies:</strong> react, next, tailwind css, fastapi, chatgpt, prompt engineering, neo4j
                <br />
                <strong>developer tools:</strong> git, github, gitlab, pulsar, vscode, intellij, jupyter, unix/linux shell, eagle
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
                    <li>developed front-end with react.js and typescript </li>
                    <li>used plotly to generate heatmaps and trace-based graphs; added image-supported graphs to visualization suite</li>
                    <li>built backend communication using python for data retrieval and processing</li>
                    <li>collaborated in agile team to implement and test user requirements</li>
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
                <p>
                  <strong>cornell mars rover</strong>, ithaca, ny —{" "}
                  <em>electrical engineer</em>, oct 2023–present
                </p>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>designed pcbs for rover systems using eagle</li>
                  <li>developed battery monitoring board & brushed motor (bdc) board</li>
                  <li>used github for version control of schematics and firmware</li>
                </ul>
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
                    <strong>society of women engineers</strong>, ithaca, ny — <em>co-outreach coordinator</em>, may 2025–present
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>built upon involvement since 2021 in SWENext and the SWE Outreach at Cornell University</li>
                    <li>organized postcard writing events for prospective students</li>
                    <li>currently oversee 9 outreach committees, events, and required documentation</li>
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
                  <strong>emprise lab</strong>, ithaca, ny — <em>student researcher</em>, nov 2024–present
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
          updated july 2025 · contact: damitasg@gmail.com · (510) 342-4000 ·{" "}
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
