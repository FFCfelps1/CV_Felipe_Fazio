\documentclass[10pt,a4paper]{article}

% ------------------------------------------------------------
% Packages
% ------------------------------------------------------------
\usepackage[
    top=1.25cm,
    bottom=1.25cm,
    left=1.35cm,
    right=1.35cm
]{geometry}

\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage[english]{babel}
\usepackage{lmodern}
\usepackage{microtype}
\usepackage{xcolor}
\usepackage{enumitem}
\usepackage{tabularx}
\usepackage{array}
\usepackage{titlesec}
\usepackage{hyperref}
\usepackage{fontawesome5}
\usepackage{graphicx}

% ------------------------------------------------------------
% Colors / links
% ------------------------------------------------------------
\definecolor{primary}{HTML}{1F2937}
\definecolor{secondary}{HTML}{4B5563}
\definecolor{accent}{HTML}{2563EB}

\hypersetup{
    colorlinks=true,
    urlcolor=accent,
    linkcolor=accent
}

% ------------------------------------------------------------
% General formatting
% ------------------------------------------------------------
\pagestyle{empty}
\setlength{\parindent}{10pt}
\setlength{\parskip}{3pt}

\setlist[itemize]{
    leftmargin=1.25em,
    itemsep=1pt,
    topsep=2pt,
    parsep=0pt
}

\titleformat{\section}
    {\large\bfseries\color{primary}}
    {}
    {0pt}
    {}
    [\vspace{-1pt}\color{primary}\titlerule]

\titlespacing{\section}{0pt}{8pt}{5pt}

% ------------------------------------------------------------
% Custom commands
% ------------------------------------------------------------
\newcommand{\cvheader}[1]{
    {\Huge\bfseries\color{primary} #1}
}

\newcommand{\cvsubtitle}[1]{
    \vspace{2pt}
    {\large\color{secondary} #1}
}

\newcommand{\cventry}[4]{
    \textbf{\color{primary}#1}
    \hfill
    {\small\color{secondary}#2}\\
    {\itshape\color{secondary}#3}
    \hfill
    {\small\color{secondary}#4}
    \vspace{2pt}
}

\newcommand{\cvproject}[3]{
    \textbf{\color{primary}#1}
    \hfill
    {\small\color{secondary}#2}\\
    #3
    \vspace{3pt}
}

% ------------------------------------------------------------
% Header
% ------------------------------------------------------------
\begin{document}

\begin{center}

    \cvheader{Felipe Fazio da Costa}

    \cvsubtitle{Computer Engineering Student \textbar{} High and low level programs \textbar{} Software \& Hardware}

    \vspace{5pt}

    \small
    \faMapMarker*~Metz, France
    \quad
    \faEnvelope~\href{mailto:felipefazio.costa@gmail.com}{felipefazio.costa@gmail.com}
    \quad
    \faGithub~\href{https://github.com/ffcfelps1}{GitHub}
    \quad
    \faLinkedin~\href{https://www.linkedin.com/in/felipefaziodacosta/}{LinkedIn}
    \quad
    \includegraphics[width=0.03\textwidth]{Brasil_flag_CV.jpg} % Ocupa 25% da largura da página
    

\end{center}

% ------------------------------------------------------------
% Profile
% ------------------------------------------------------------
\section{Profile}

Computer Engineering student at Instituto Mauá de Tecnologia and CentraleSupélec, currently pursuing a double-degree engineering program in Computer Science. Academic and research experience spanning embedded systems, software development, computer architecture, virtualization, and aerospace applications. Interested in hardware and software systems, with practical experience in virtual platforms, telemetry, data visualization, research-oriented engineering projects, pratical web sites projects.

% ------------------------------------------------------------
% Education
% ------------------------------------------------------------
\section{Education}

\cventry
    {CentraleSupélec}
    {2026--2028}
    {Engineering Degree -- Computer Science, Double-Degree Program}
    {Metz, France}

\cventry
    {Instituto Mauá de Tecnologia (IMT)}
    {2023--2028}
    {Computer Engineering}
    {São Caetano do Sul, Brazil}

\cventry
    {Cellep}
    {2014--2021}
    {English Language Studies}
    {}

% ------------------------------------------------------------
% Research & Professional Experience
% ------------------------------------------------------------
\section{Research \& Professional Experience}

\cventry
    {Embedded Electronic Systems Center (NSEE) -- IMT}
    {2024--2026}
    {Undergraduate Researcher / Intern}
    {}

\begin{itemize}
    \item Developed a virtual environment for spectrograph instrument emulation using QEMU, targeting aerospace applications and space missions including VERITAS and EnVision.
    \item Worked on software-based hardware emulation and validation in collaboration with the German Aerospace Center (DLR).
    \item Investigated virtual platforms to support hardware testing, validation, and development while reducing dependence on physical prototypes.
    \item Worked on software-based hardware emulation with the Paris Observatory for developing a emulation of 3 different processors.
\end{itemize}

\cventry
    {Eco Mauá -- Instituto Mauá de Tecnologia}
    {2023--2026}
    {Electrical Engineering Member -- Junior Enterprise}
    {}

\begin{itemize}
    \item Contributed to the electrical system development of a high-efficiency vehicle for the Shell Eco-marathon.
    \item Developed and integrated telemetry and real-time monitoring solutions using Grafana and InfluxDB.
    \item Worked collaboratively on embedded electronics, instrumentation, data acquisition, and system integration.
\end{itemize}

% ------------------------------------------------------------
% Selected Projects
% ------------------------------------------------------------
\section{Selected Projects}

\cvproject
    {VANESSA -- CubeSat Instrument Emulator}
    {QEMU / ARM / Embedded Systems}
    {Development of a virtual CubeSat instrument environment using multiple ARM-based virtual platforms, with a focus on camera acquisition, image correction, telemetry, and validation for future hardware implementation.}

\cvproject
    {QEMULA -- LEON3 Virtual Instrument}
    {QEMU / Embedded Systems / Aerospace}
    {Development of a QEMU-based LEON3 emulator for virtualizing and testing a spectrograph instrument, supporting research associated with aerospace missions and scientific instrumentation.}

\cvproject
    {SGPPF -- Research Project Management Platform}
    {Web Development}
    {Development of a web platform for managing research projects, funding, documentation, and institutional information, with a focus on usability and integration with existing workflows.}

\cvproject
    {NSEE Research Infrastructure}
    {Python / Data / AI}
    {Contributed to research-oriented software and data projects, including survival-analysis and AI-based prediction workflows, dashboards, and technical infrastructure.}

% ------------------------------------------------------------
% Technical Skills
% ------------------------------------------------------------
\section{Technical Skills}

\begin{tabularx}{\textwidth}{@{}>{\bfseries}p{3.0cm}X@{}}
Programming &
Python, C, C++, Java, JavaScript, SQL, MATLAB \\[2pt]

Web Development &
React, Node.js, Vite, Supabase, Vercel \\[2pt]

Embedded Systems &
Microcontrollers, ARM, SPI, telemetry, data acquisition, hardware/software integration \\[2pt]

Virtualization &
QEMU, virtual platforms, embedded-system emulation \\[2pt]

Data \& Monitoring &
Grafana, InfluxDB, data visualization, survival analysis \\[2pt]

Cloud \& DevOps &
AWS, Google Cloud, Docker, Podman, Git/GitHub \\[2pt]

Engineering Tools &
EasyEDA, Microsoft Office, Linux, Git \\[2pt]

Soft Skills &
Problem solving, teamwork, communication, proactivity, decision-making
\end{tabularx}

% ------------------------------------------------------------
% Languages
% ------------------------------------------------------------
\section{Languages}

\begin{tabularx}{\textwidth}{@{}>{\bfseries}p{3.0cm}X@{}}
Portuguese & Native \\
English & Advanced \\
French & Intermediate \\
Spanish & Beginner
\end{tabularx}

% ------------------------------------------------------------
% Volunteer Experience
% ------------------------------------------------------------
\section{Volunteer Experience}

\cventry
    {Instituto de Educação Beatíssima Virgem Maria}
    {2017--2022}
    {Community and Social Initiatives}
    {}

\begin{itemize}
    \item Supported NGOs and social organizations, including initiatives assisting people experiencing homelessness.
    \item Participated in campaigns and donation drives supporting underserved communities.
    \item Contributed to activities in daycares and nursing homes.
\end{itemize}

\vfill

\begin{center}
    {\footnotesize\color{secondary}
    \href{https://ffcfelps1.github.io/CV_Felipe_Fazio/}{Personal CV}
    \quad | \quad
    \href{https://github.com/ffcfelps1}{github.com/ffcfelps1}
    \quad | \quad
    \href{https://www.linkedin.com/in/felipefaziodacosta/}{linkedin.com/in/felipefaziodacosta}
    }
\end{center}

\end{document}