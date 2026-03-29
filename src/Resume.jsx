import { Button } from "./components/button";
import { Github, Mail, Download, Linkedin } from "lucide-react";
import resumePDF from "./assets/AlishaPatel_Resume2.pdf";

export default function Resume() {
  const handlePrintToPdf = () => {    
    window.print();
  };
  return (   
    <div className="resume-container mx-auto">
      {/* ==== Header ==== */}
      <header className="resume-header text-center mb-6 mt-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Alisha Patel</h1>
        <p className="text-base text-gray-600 italic mt-2 mb-4">
          Cybersecurity Graduate • Security Operations & GRC Focus • AI Projects • Full Stack Developer
        </p>
        {/* <p className="text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Cybersecurity graduate with hands-on experience in backend systems, secure data handling, and production issue investigation. 
          Skilled in log analysis, anomaly detection, and supporting incident response workflows. Currently expanding expertise in SIEM tools, 
          vulnerability management, and security operations.
        </p> */}

        <div className="flex justify-center mt-2 mb-4 gap-4 flex-wrap no-print">
          <a href="mailto:patelalisha1003@gmail.com">
            <Button variant="outline"><Mail className="mr-2" /> Email</Button>
          </a>
          <a href="https://github.com/ap11103" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Github className="mr-2" /> GitHub</Button>
          </a>
          {/* <a href="https://linkedin.com/in/alisha-patel11" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a> */}
          <Button variant="outline" type="button" onClick={handlePrintToPdf}>
            <Download className="mr-2" />
              Download PDF
          </Button>
        </div>

        <div className="resume-links text-xs text-gray-700">
          patelalisha1003@gmail.com | (973) 855-1614<br />
          <a className="text-blue-600 underline" href="https://github.com/ap11103" target="_blank" rel="noopener noreferrer">github.com/ap11103</a> |{" "}
          <a className="text-blue-600 underline" href="https://linkedin.com/in/alisha-patel11" target="_blank" rel="noopener noreferrer">linkedin.com/in/alisha-patel11</a>
        </div>
      </header>

      {/*Technical Skills */}
      <section className="resume-section">
        <h2 className="text-base font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Technical Skills</h2>
        <ul className="list-disc list-inside text-sm leading-6 text-gray-800">
          <li><strong>Languages:</strong> Python, C/C++, Java, JavaScript, Assembly, SQL</li>
          <li><strong>Frameworks & Tools:</strong> React, Flask, Node.js, Git, Docker, Postman, LibFuzzer, Clang, Wireshark</li>
          <li><strong>Data & Storage:</strong> MongoDB, SQL, Azure Blob Storage</li>
          <li><strong>Cloud & DevOps:</strong> Azure, GitHub Actions, Linux VM, SSH, Bash</li>
          {/* <li><strong>Security & Analysis:</strong> Fuzzing, Crash Clustering, Vulnerability Research, Coverage Instrumentation</li>
          <li><strong>Security & Governance:</strong> Risk assessment, control evaluation/testing, third-party risk concepts, compliance awareness (NIST CSF, ISO 27001, SOC 2)</li> */}
          <li><strong>Security & Operations:</strong> Incident Analysis, Log Analysis, System Monitoring, Secure API Development, Input Validation</li>
          <li><strong>Security & Risk:</strong> Vulnerability Identification, Risk Assessment, Compliance (NIST CSF, ISO 27001, SOC 2)</li>
          {/* <li><strong>Security Tools (Exposure):</strong> Wireshark, LibFuzzer, learning basics of Splunk (SIEM) and log-based alerting</li> */}
          <li><strong>Currently Learning:</strong> SOC Analysis & Incident Response and SIEM tools (e.g., Splunk)</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="resume-section mt-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2 tracking-wide uppercase">
          Professional Experience
        </h2>

        {/* GTBM */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Junior Developer · <span className="text-blue-600">GTBM (InfoCop Inc.)</span>
            </h3>
            <span className="text-sm text-gray-500 mt-1 sm:mt-0">
              Nov 2025 – Present · East Rutherford, NJ
            </span>
          </div>

          {/* <ul className="mt-3 list-disc list-inside text-sm text-gray-700 leading-relaxed">
            <li>Supported secure data handling workflows within law-enforcement systems, ensuring feature implementations aligned with operational access controls.</li>
            <li>Collaborated with cross-functional teams to validate backend logic and API integrations against authorization, data integrity, and traceability standards.</li>
            <li>Assisted in reviewing and updating SQL Server queries and stored procedures to maintain accurate record management and compliance-aligned reporting workflows.</li>
            <li>Contributed to production issue investigation and remediation by analyzing system behavior and strengthening request validation and response handling.</li>
            <li>Worked within Jira-driven SDLC processes, documenting progress, testing changes, and supporting secure feature delivery.</li>
          </ul> */}
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 leading-relaxed">
            {/* <li>Investigated production issues by analyzing application logs, API responses, and system behavior to identify anomalies and support incident resolution.</li>
            <li>Implemented input validation and secure request handling to reduce risk of injection and malformed data vulnerabilities.</li>
            <li>Supported secure data handling workflows within law enforcement systems, ensuring alignment with access control and data protection requirements.</li>
            <li>Collaborated with cross-functional teams to validate backend logic against authorization and data integrity standards.</li>
            <li>Reviewed and optimized SQL queries and stored procedures to maintain accurate, audit-ready reporting workflows.</li>
            <li>Documented debugging findings, system behavior, and remediation steps to support traceability and compliance.</li> */}
          </ul>
          <p>
              Investigated production issues by analyzing application logs, API responses, and system behavior to identify anomalies and support incident resolution. Implemented input validation and secure request handling to reduce risk of injection and malformed data vulnerabilities.
              Supported secure data handling workflows within law enforcement systems, ensuring alignment with access control and data protection requirements. Collaborated with cross-functional teams to validate backend logic against authorization and data integrity standards. 
              Reviewed and optimized SQL queries and stored procedures to maintain accurate, audit-ready reporting workflows. Documented debugging findings, system behavior, and remediation steps to support traceability and compliance.
          </p>
        </div>


        {/* CuratedCyber */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Contract Engineer – AI Vendor Assessment{" "}
              <span className="text-gray-600">(Full-Stack / Backend)</span> ·{" "}
              <span className="text-blue-600">CuratedCyber</span>
            </h3>
            <span className="text-sm text-gray-500 mt-1 sm:mt-0">
              Sep 2025 – Nov 2025 · Remote
            </span>
          </div>

          {/* <ul className="mt-3 list-disc list-inside text-sm text-gray-700 leading-relaxed">
            <li>Built an automated vendor due-diligence pipeline to support structured third-party risk evaluation using Azure Blob Storage and role-based access control (Azure RBAC).</li>
            <li>Implemented ingestion and projection workflows that standardized documentation into compliance-aligned JSON outputs for consistent review and traceability.</li>
            <li>Applied least-privilege access principles by documenting and aligning required permissions (e.g., Storage Blob Data Contributor) for secure onboarding.</li>
            <li>Improved reproducibility and auditability through modular scripts, environment-based configuration, and a standardized repository structure.</li>
          </ul> */}
          {/* <ul className="mt-3 list-disc list-inside text-sm text-gray-700 leading-relaxed">
            <li>Built a vendor risk assessment pipeline supporting third-party security evaluations using Azure Blob Storage and RBAC.</li>
            <li>Implemented secure data ingestion workflows to standardize compliance-related documentation into structured outputs.</li>
            <li>Applied least-privilege access principles by documenting role-based permissions for secure system onboarding.</li>
            <li>Improved auditability and traceability through structured logging, modular scripts, and environment-based configurations.</li>
        </ul> */}
        <p>
            Built a vendor risk assessment pipeline supporting third-party security evaluations using Azure Blob Storage and RBAC. 
            Implemented secure data ingestion workflows to standardize compliance-related documentation into structured outputs. 
            Applied least-privilege access principles by documenting role-based permissions for secure system onboarding. 
            Improved auditability and traceability through structured logging, modular scripts, and environment-based configurations.
        </p>
        </div>

        {/* QSR */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Barista · <span className="text-blue-600">QSR Livingston LLC</span>
            </h3>
            <span className="text-sm text-gray-500 mt-1 sm:mt-0">
              Apr 2020 – Nov 2025 · Livingston, NJ
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Customer Service: Delivered high-quality service in a
            fast-paced environment while maintaining a clean, organized workspace
            and adhering to safety standards. Team Support: Built rapport with patrons and
            contributed to team efficiency and daily operations.
          </p>
        </div>
      </section>


      {/* Projects */}
      <section className="resume-section mt-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Highlighted Projects</h2>

        {/* <div className="mb-5">
          <h3 className="text-lg font-bold text-gray-800">
            BankEase Financial Assistant <span className="text-sm font-normal text-gray-500 ml-2">(Jan 2025 – Apr 2025)</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed ml-4">
            Built a responsive financial dashboard using React and MUI with MongoDB storage. Developed expense visualization, low-balance alerts, and heuristic-tested UI improvements for accessibility and intuitive interaction.
          </p>
          <a href="https://github.com/ap11103/BankEase" className="text-purple-600 underline ml-4" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div> */}

        <div className="mb-5">
          <h3 className="text-lg font-bold text-gray-800">
            AI Image Classifier (TLCEngine) <span className="text-sm font-normal text-gray-500 ml-2">(Sep 2024 – May 2025)</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed ml-4">
            Developed a full-stack AI image-tagging platform integrating LLaVA and Ollama models for intelligent tag generation. Built Flask APIs, React frontend, and managed MongoDB/Excel outputs. Deployed on VM with RAG-based tagging pipelines.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800">
            LibFuzzer Enhancement & Crash Visualization <span className="text-sm font-normal text-gray-500 ml-2">(Mar 2025 – May 2025)</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed ml-4">
            Extended LLVM LibFuzzer with crash clustering and mutation analysis. Created Python heatmaps to visualize coverage and improve fuzzing efficiency.
          </p>
          <a href="https://github.com/ap11103/libfuzzer-analysis" className="text-purple-600 underline ml-4" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </section>


      {/* Education */}
      <section className="resume-section mt-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Education</h2>
        <p className="font-semibold text-gray-800">Stevens Institute of Technology</p>
        <p className="italic text-sm text-gray-600">B.S. in Cybersecurity, May 2025 • Graduated with Honors</p>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Relevant Courses: Data Structures, Algorithms, Software Development, System Security, Database Management, HCI, TCP/IP Networking, Wireless Systems Security, Information Security & Law
        </p>
      </section>

      {/* Certifications */}
      <section className="resume-section mt-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Certifications</h2>
        <p className="font-semibold text-gray-700">Cloud Security on AWS - Issued by Coursera &amp; Edureka — June 2025</p>
        {/* <p className="text-sm text-gray-700 italic">Issued by Coursera &amp; Edureka — June 2025</p> */}
        <p className="font-semibold text-gray-700">CompTIA Security+ (In Progress) - Expected 2026</p>
        {/* <p className="text-sm text-gray-700 italic">Expected 2026</p> */}
      </section>
    </div>
  );
}
