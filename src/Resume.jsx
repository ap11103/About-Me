import { Card, CardContent } from "./components/card";
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
          <li><strong>Currently Learning:</strong> AWS Cloud Security (Coursera), Terraform Projects</li>
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
