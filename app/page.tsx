"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Experience {
  id: string
  jobTitle: string
  company: string
  dates: string
  responsibilities: string
}

interface Education {
  id: string
  degree: string
  school: string
  dates: string
}

interface Project {
  id: string
  name: string
  link: string
  description: string
}

export default function ResumeBuilder() {
  // Personal Info
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [portfolio, setPortfolio] = useState("")

  // Professional Summary
  const [summary, setSummary] = useState("")

  // Skills
  const [skills, setSkills] = useState("")

  // Experience
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [expJobTitle, setExpJobTitle] = useState("")
  const [expCompany, setExpCompany] = useState("")
  const [expDates, setExpDates] = useState("")
  const [expResponsibilities, setExpResponsibilities] = useState("")

  // Education
  const [education, setEducation] = useState<Education[]>([])
  const [eduDegree, setEduDegree] = useState("")
  const [eduSchool, setEduSchool] = useState("")
  const [eduDates, setEduDates] = useState("")

  // Projects
  const [projects, setProjects] = useState<Project[]>([])
  const [projName, setProjName] = useState("")
  const [projLink, setProjLink] = useState("")
  const [projDescription, setProjDescription] = useState("")

  const addExperience = () => {
    if (expJobTitle && expCompany) {
      setExperiences([
        ...experiences,
        {
          id: Date.now().toString(),
          jobTitle: expJobTitle,
          company: expCompany,
          dates: expDates,
          responsibilities: expResponsibilities,
        },
      ])
      setExpJobTitle("")
      setExpCompany("")
      setExpDates("")
      setExpResponsibilities("")
    }
  }

  const addEducation = () => {
    if (eduDegree && eduSchool) {
      setEducation([
        ...education,
        {
          id: Date.now().toString(),
          degree: eduDegree,
          school: eduSchool,
          dates: eduDates,
        },
      ])
      setEduDegree("")
      setEduSchool("")
      setEduDates("")
    }
  }

  const addProject = () => {
    if (projName) {
      setProjects([
        ...projects,
        {
          id: Date.now().toString(),
          name: projName,
          link: projLink,
          description: projDescription,
        },
      ])
      setProjName("")
      setProjLink("")
      setProjDescription("")
    }
  }

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const removeEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  const removeProject = (id: string) => {
    setProjects(projects.filter((proj) => proj.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card shadow-sm print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">ATS Resume Builder</h1>
          <Button onClick={() => window.print()} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Download / Print as PDF
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Form */}
          <div className="space-y-6 print:hidden">
            {/* Personal Information */}
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Personal Information</h2>
              <div className="space-y-3">
                <Input
                  placeholder="Full Name"
                  value={name}
                  onInput={(e) => setName(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="Phone"
                  value={phone}
                  onInput={(e) => setPhone(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="LinkedIn URL"
                  value={linkedin}
                  onInput={(e) => setLinkedin(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="Portfolio URL"
                  value={portfolio}
                  onInput={(e) => setPortfolio(e.currentTarget.value)}
                  className="border-input"
                />
              </div>
            </Card>

            {/* Professional Summary */}
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Professional Summary</h2>
              <textarea
                placeholder="Write a brief professional summary..."
                value={summary}
                onInput={(e) => setSummary(e.currentTarget.value)}
                className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Skills</h2>
              <textarea
                placeholder="Enter skills separated by commas (e.g., JavaScript, React, Node.js)"
                value={skills}
                onInput={(e) => setSkills(e.currentTarget.value)}
                className="min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </Card>

            {/* Work Experience */}
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Work Experience</h2>
              <div className="space-y-3">
                <Input
                  placeholder="Job Title"
                  value={expJobTitle}
                  onInput={(e) => setExpJobTitle(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="Company"
                  value={expCompany}
                  onInput={(e) => setExpCompany(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="Dates (e.g., Jan 2020 - Dec 2021)"
                  value={expDates}
                  onInput={(e) => setExpDates(e.currentTarget.value)}
                  className="border-input"
                />
                <textarea
                  placeholder="Responsibilities and achievements..."
                  value={expResponsibilities}
                  onInput={(e) => setExpResponsibilities(e.currentTarget.value)}
                  className="min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button
                  onClick={addExperience}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Add Experience
                </Button>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Education</h2>
              <div className="space-y-3">
                <Input
                  placeholder="Degree"
                  value={eduDegree}
                  onInput={(e) => setEduDegree(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="School/University"
                  value={eduSchool}
                  onInput={(e) => setEduSchool(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="Dates (e.g., 2016 - 2020)"
                  value={eduDates}
                  onInput={(e) => setEduDates(e.currentTarget.value)}
                  className="border-input"
                />
                <Button
                  onClick={addEducation}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Add Education
                </Button>
              </div>
            </Card>

            {/* Projects */}
            <Card className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Projects</h2>
              <div className="space-y-3">
                <Input
                  placeholder="Project Name"
                  value={projName}
                  onInput={(e) => setProjName(e.currentTarget.value)}
                  className="border-input"
                />
                <Input
                  placeholder="Project Link"
                  value={projLink}
                  onInput={(e) => setProjLink(e.currentTarget.value)}
                  className="border-input"
                />
                <textarea
                  placeholder="Project description..."
                  value={projDescription}
                  onInput={(e) => setProjDescription(e.currentTarget.value)}
                  className="min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button
                  onClick={addProject}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Add Project
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Live Preview */}
          <div className="print:col-span-2 print:max-w-4xl">
            <Card className="h-fit bg-card p-12 shadow-lg" style={{ aspectRatio: "8.5/11" }}>
              <div className="space-y-4 text-sm text-foreground">
                {/* Header */}
                {name && (
                  <div className="border-b border-foreground pb-3">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <div className="mt-1 flex flex-wrap gap-2 text-xs">
                      {email && <span>{email}</span>}
                      {phone && <span>•</span>}
                      {phone && <span>{phone}</span>}
                      {linkedin && <span>•</span>}
                      {linkedin && <span>{linkedin}</span>}
                      {portfolio && <span>•</span>}
                      {portfolio && <span>{portfolio}</span>}
                    </div>
                  </div>
                )}

                {/* Professional Summary */}
                {summary && (
                  <div>
                    <h2 className="border-b border-foreground pb-1 font-semibold">Professional Summary</h2>
                    <p className="mt-2 whitespace-pre-wrap text-xs leading-relaxed">{summary}</p>
                  </div>
                )}

                {/* Skills */}
                {skills && (
                  <div>
                    <h2 className="border-b border-foreground pb-1 font-semibold">Skills</h2>
                    <p className="mt-2 text-xs">
                      {skills
                        .split(",")
                        .map((skill) => skill.trim())
                        .join(" • ")}
                    </p>
                  </div>
                )}

                {/* Work Experience */}
                {experiences.length > 0 && (
                  <div>
                    <h2 className="border-b border-foreground pb-1 font-semibold">Work Experience</h2>
                    <div className="mt-2 space-y-2">
                      {experiences.map((exp) => (
                        <div key={exp.id} className="text-xs">
                          <div className="flex justify-between">
                            <span className="font-semibold">{exp.jobTitle}</span>
                            <span>{exp.dates}</span>
                          </div>
                          <div className="text-muted-foreground">{exp.company}</div>
                          <p className="mt-1 whitespace-pre-wrap leading-relaxed">{exp.responsibilities}</p>
                          <button
                            onClick={() => removeExperience(exp.id)}
                            className="mt-1 text-xs text-destructive hover:underline print:hidden"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education */}
                {education.length > 0 && (
                  <div>
                    <h2 className="border-b border-foreground pb-1 font-semibold">Education</h2>
                    <div className="mt-2 space-y-2">
                      {education.map((edu) => (
                        <div key={edu.id} className="text-xs">
                          <div className="flex justify-between">
                            <span className="font-semibold">{edu.degree}</span>
                            <span>{edu.dates}</span>
                          </div>
                          <div className="text-muted-foreground">{edu.school}</div>
                          <button
                            onClick={() => removeEducation(edu.id)}
                            className="mt-1 text-xs text-destructive hover:underline print:hidden"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {projects.length > 0 && (
                  <div>
                    <h2 className="border-b border-foreground pb-1 font-semibold">Projects</h2>
                    <div className="mt-2 space-y-2">
                      {projects.map((proj) => (
                        <div key={proj.id} className="text-xs">
                          <div className="font-semibold">
                            {proj.link ? (
                              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="underline">
                                {proj.name}
                              </a>
                            ) : (
                              proj.name
                            )}
                          </div>
                          <p className="mt-1 whitespace-pre-wrap leading-relaxed">{proj.description}</p>
                          <button
                            onClick={() => removeProject(proj.id)}
                            className="mt-1 text-xs text-destructive hover:underline print:hidden"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white;
          }
          header {
            display: none;
          }
          main {
            padding: 0;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:col-span-2 {
            grid-column: span 2;
          }
          .print\\:max-w-4xl {
            max-width: 56rem;
          }
        }
      `}</style>
    </div>
  )
}
