/*import { Card, CardContent } from "./components/card";
import { Button } from "./components/button";
import { Github, Mail, Download, Linkedin } from "lucide-react";
import resumePDF from "./assets/AlishaPatel_Resume2.pdf";


export default function Resume() {

  const handlePDFDownload = () => {
    const a = document.createElement("a");
  a.href = "AlishaPatel_Resume2.pdf";
  a.download = "AlishaPatel_Resume2.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
    };
  
  return (
    <div className="resume-container mx-auto">
      <header className="resume-header text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Alisha Patel</h1>
        <p className="text-base text-gray-600 italic mt-2 mb-4">
          Cybersecurity Graduate • AI Projects • Fuzzing • Full Stack Developer
        </p>
        <div className="flex justify-center mt-2 mb-4 gap-4 flex-wrap">
          <a href="mailto:patelalisha1003@gmail.com">
            <Button variant="outline"><Mail className="mr-2" /> Email</Button>
          </a>
          <a href="https://github.com/ap11103" target="_blank">
            <Button variant="outline"><Github className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://linkedin.com/in/alisha-patel11" target="_blank">
            <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a>
          <a href={resumePDF} download>
            <Button variant="outline">
              <Download className="mr-2" /> PDF Resume
            </Button>
          </a>
        </div>
        <div className="resume-links text-xs text-gray-700">
          patelalisha1003@gmail.com | (973) 855-1614<br />
          <a className="text-blue-600 underline" href="https://github.com/ap11103" target="_blank">github.com/ap11103</a> |{" "}
          <a className="text-blue-600 underline" href="https://linkedin.com/in/alisha-patel11" target="_blank">linkedin.com/in/alisha-patel11</a>
        </div>
      </header>

      <section className="resume-section">
        <h2 className="text-base font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Technical Skills</h2>
        <ul className="list-disc list-inside text-sm leading-6 text-gray-800">
          <li><strong>Languages:</strong> Python, C/C++, Java, JavaScript, SQL, Assembly</li>
          <li><strong>Frameworks & Tools:</strong> React, Flask, Node.js, Git, Docker, Postman, LibFuzzer, Clang, Wireshark</li>
          <li><strong>Databases:</strong> MongoDB, SQL, Azure Blob Storage</li>
          <li><strong>Cloud & DevOps:</strong> Azure, Docker, GitHub Actions, Linux VM, SSH, Bash</li>
          <li><strong>Security & Analysis:</strong> Fuzzing, Crash Clustering, Static Analysis, Vulnerability Research, Coverage Instrumentation</li>
          <li><strong>Currently Learning:</strong> Terraform Projects, SOC Analysis & Incident Response</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Highlighted Projects</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800">BankEase Financial Assistant <span className="text-sm font-normal text-gray-500 ml-2">(Jan 2025 – Apr 2025)</span></h3>
          <p className="text-sm text-gray-700 leading-relaxed ml-4">BankEase is a financial dashboard web app designed using React and styled with MUI for a professional user interface. I integrated MongoDB to store financial data such as account balances, expenses, and upcoming bills. I developed features like low-balance alerts, dynamic data visualization, and heuristic-evaluated usability improvements, ensuring the platform remained user-friendly and accessible.</p>
          <a href="https://github.com/ap11103/BankEase" className="text-purple-600 underline ml-4" target="_blank">View Project</a>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800">AI Image Classifier (TLCEngine) <span className="text-sm font-normal text-gray-500 ml-2">(Sep 2024 – May 2025)</span></h3>
          <p className="text-sm text-gray-700 leading-relaxed ml-4">This project involved building an AI-powered image classification web platform using React and Flask. I integrated advanced models like LLaVA and Ollama for intelligent tag generation and used MongoDB and Excel to store output tags. With Postman-tested APIs and RAG (Retrieval-Augmented Generation) model integration, the platform also supported dynamic furniture staging. Deployment was managed through SSH on a VM, enabling real-time backend interaction.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800">LibFuzzer Enhancement and Crash Visualization <span className="text-sm font-normal text-gray-500 ml-2">(Mar 2025 – May 2025)</span></h3>
          <p className="text-sm text-gray-700 leading-relaxed ml-4">I enhanced the LLVM LibFuzzer by developing new tools for crash clustering, mutation analysis, and visualizing code coverage using Python, and produced heatmaps to show fuzzing effectiveness.</p>
          <a href="https://github.com/ap11103/libfuzzer-analysis" className="text-purple-600 underline ml-4" target="_blank">View Project</a>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Education</h2>
        <p className="font-semibold text-gray-800">Stevens Institute of Technology</p>
        <p className="italic text-sm text-gray-600">B.S. in Cybersecurity, May 2025 • Graduated with Honors</p>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          <strong>Courses:</strong> Data Structures, Algorithms, Software Development, Operating System, System Programming, Introduction to Web Development, System Security, Database Management, Human-Computer Interaction (HCI), TCP/IP Networking, Special Topics in Cybersecurity, Wireless Systems Security, Financial Management in Cybersecurity, Information Security and Law</p>
      </section>

      <section className="resume-section">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Certifications</h2>
        <div className="mb-2">
          <p className="font-semibold text-gray-800">Cloud Security on AWS</p>
          <p className="text-sm text-gray-700 italic">
            Issued by Coursera & Edureka — June 2025
          </p>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Professional Experience</h2>
        <p className="font-semibold text-gray-800">Barista - QSR Livingston LLC <span className="float-right text-sm font-normal text-gray-600">Apr 2020 – Present</span></p>
        <p className="text-sm text-gray-700 leading-relaxed mt-1">
          I have delivered high-quality customer service and maintained a clean and organized workspace, ensuring consistent productivity and adherence to food safety standards. Through strong interpersonal skills, I built rapport with patrons, contributing to increased customer satisfaction and encouraging repeat business.
        </p>
      </section>
    </div>
  );
}
*/

import { Button } from "./components/button";
import { Github, Mail, Download, Linkedin } from "lucide-react";
import resumePDF from "./assets/AlishaPatel_Resume2.pdf";

export default function Resume() {
  return (
    <div className="resume-container mx-auto">
      {/* ==== Header ==== */}
      <header className="resume-header text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Alisha Patel</h1>
        <p className="text-base text-gray-600 italic mt-2 mb-4">
          Cybersecurity Graduate • AI Projects • Full Stack Developer
        </p>

        <div className="flex justify-center mt-2 mb-4 gap-4 flex-wrap no-print">
          <a href="mailto:patelalisha1003@gmail.com">
            <Button variant="outline"><Mail className="mr-2" /> Email</Button>
          </a>
          <a href="https://github.com/ap11103" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Github className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://linkedin.com/in/alisha-patel11" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a>
          <a href={resumePDF} download>
            <Button variant="outline"><Download className="mr-2" /> PDF Resume</Button>
          </a>
        </div>

        <div className="resume-links text-xs text-gray-700">
          patelalisha1003@gmail.com | (973) 855-1614<br />
          <a className="text-blue-600 underline" href="https://github.com/ap11103" target="_blank" rel="noopener noreferrer">github.com/ap11103</a> |{" "}
          <a className="text-blue-600 underline" href="https://linkedin.com/in/alisha-patel11" target="_blank" rel="noopener noreferrer">linkedin.com/in/alisha-patel11</a>
        </div>
      </header>

      {/* ==== Technical Skills ==== */}
      <section className="resume-section">
        <h2 className="text-base font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Technical Skills</h2>
        <ul className="list-disc list-inside text-sm leading-6 text-gray-800">
          <li><strong>Languages:</strong> Python, C/C++, Java, JavaScript, SQL, Assembly</li>
          <li><strong>Frameworks & Tools:</strong> React, Flask, Node.js, Git, Docker, Postman, LibFuzzer, Clang, Wireshark</li>
          <li><strong>Data & Storage:</strong> MongoDB, SQL, Azure Blob Storage</li>
          <li><strong>Cloud & DevOps:</strong> Azure, GitHub Actions, Linux VM, SSH, Bash</li>
          <li><strong>Security & Analysis:</strong> Fuzzing, Crash Clustering, Static Analysis, Vulnerability Research, Coverage Instrumentation</li>
          <li><strong>Currently Learning:</strong> Terraform, SOC Analysis & Incident Response</li>
        </ul>
      </section>

      {/* ==== Projects ==== */}
      <section className="resume-section mt-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Highlighted Projects</h2>

        <div className="mb-5">
          <h3 className="text-lg font-bold text-gray-800">
            BankEase Financial Assistant <span className="text-sm font-normal text-gray-500 ml-2">(Jan 2025 – Apr 2025)</span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed ml-4">
            Built a responsive financial dashboard using React and MUI with MongoDB storage. Developed expense visualization, low-balance alerts, and heuristic-tested UI improvements for accessibility and intuitive interaction.
          </p>
          <a href="https://github.com/ap11103/BankEase" className="text-purple-600 underline ml-4" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

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

      {/* ==== Experience ==== */}
      <section className="resume-section mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Professional Experience</h2>

        <div className="mb-5">
          <p className="text-gray-800">
            <strong>Contract Engineer – AI Vendor Assessment (Full-Stack/Backend)</strong> · <strong>CuratedCyber</strong>
          </p>
          <p className="text-sm text-gray-600 mt-0.5">Sep 2025 – Nov 2025 · Remote</p>
          <p className="list-disc ml-5 mt-2 text-sm text-gray-700 leading-relaxed">
            Developed a Python/Flask-based RAG pipeline to automate vendor due-diligence reviews from Azure Blob Storage. Implemented modular scripts for ingestion, retrieval, projection, and export with <code>.env</code>-based config and Azure RBAC.
            Authored concise permissions guide (e.g., <em>Storage Blob Data Contributor</em>) to streamline access setup. Mapped extracted data to structured JSON aligned with the firm’s review outline and standardized repo for reproducibility.
          </p>
        </div>

        <div className="mb-2">
          <p className="font-semibold text-gray-800"><strong>Barista — QSR Livingston LLC</strong></p>
          <p className="text-sm text-gray-600 mt-0.5">Apr 2020 – Present · Livingston, NJ</p>
          <p className="text-sm text-gray-700 leading-relaxed mt-1">
            Delivered high-quality customer service and maintained a clean, organized workspace while adhering to safety standards. Built rapport with patrons and supported team efficiency.
          </p>
        </div>
      </section>

      {/* ==== Education ==== */}
      <section className="resume-section mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Education</h2>
        <p className="font-semibold text-gray-800">Stevens Institute of Technology</p>
        <p className="italic text-sm text-gray-600">B.S. in Cybersecurity, May 2025 • Graduated with Honors</p>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          <strong>Relevant Courses:</strong> Data Structures, Algorithms, Software Development, System Security, Database Management, HCI, TCP/IP Networking, Wireless Systems Security, Information Security & Law
        </p>
      </section>

      {/* ==== Certifications ==== */}
      <section className="resume-section mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2 border-b border-gray-300 pb-1 uppercase">Certifications</h2>
        <p className="font-semibold text-gray-800">Cloud Security on AWS</p>
        <p className="text-sm text-gray-700 italic">Issued by Coursera &amp; Edureka — June 2025</p>
      </section>
    </div>
  );
}
