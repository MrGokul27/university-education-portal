(function () {
  "use strict";

  const ROLE_CONFIG = {
    Student: {
      roleKey: "Student",
      roleBadge: "Undergraduate / Postgraduate Student",
      menuHeader: "Student Academic Menu",
      avatarIcon: "fa-user-graduate",
      department: "Trinity College • School of Computer Science & AI",
      termStatus: "Hilary Term 2026/27 • Matriculated Honours Scholar",
      helpTitle: "Bodleian & Tutor Desk",
      helpText:
        "Book a 1-on-1 tutorial review with Dr. Eleanor Vance at Wellington Square.",
      tabs: [
        {
          id: "stu-overview",
          label: "Academic Overview",
          icon: "fa-gauge-high",
          badge: "Live",
          eyebrow: "Hilary Term 2026/27 • Student Command Center",
          title: "Personalised Academic & Collegiate Overview",
          subtitle:
            "Track your Oxford honours modules, tutorial attendance, Bodleian loans, and upcoming Hilary Term assessments.",
          primaryBtn: "Download Term Transcript",
          secondaryBtn: "Book Tutor Supervision",
          kpis: [
            {
              label: "Cumulative Classification",
              value: "First-Class (76.4%)",
              trend: "+2.8% vs Michaelmas",
              foot: "Rank: Top 5% Cohort",
              icon: "fa-award",
              color: "kpi_primary",
            },
            {
              label: "Enrolled CATS Credits",
              value: "120 Credits",
              trend: "4 Core Modules",
              foot: "Hilary Term Verified",
              icon: "fa-book-open-reader",
              color: "kpi_teal",
            },
            {
              label: "Tutorial & Lecture Attendance",
              value: "97.2%",
              trend: "35 / 36 Attended",
              foot: "CAS / Registry Compliant",
              icon: "fa-calendar-check",
              color: "kpi_amber",
            },
            {
              label: "Bodleian Active Loans",
              value: "06 Volumes",
              trend: "2 E-Reserves",
              foot: "Next Return: 14 Nov 2026",
              icon: "fa-landmark",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle: "Active Honours Modules & Tutorial Groups",
          cards: [
            {
              tag: "Core Honours",
              tagColor: "tag_primary",
              code: "OXF-CS401",
              title: "Quantum Algorithms & Cryptography",
              desc: "Advanced study of Shor's factoring algorithm, post-quantum lattice cryptography, and fault-tolerant qubit gates.",
              meta: [
                {
                  icon: "fa-chalkboard-user",
                  label: "Lead Tutor",
                  val: "Prof. Alistair Sterling",
                },
                {
                  icon: "fa-location-dot",
                  label: "Lecture Hall",
                  val: "Wolfson Wing, Rm 204",
                },
                {
                  icon: "fa-clock",
                  label: "Weekly Slot",
                  val: "Mon & Wed • 10:00 AM",
                },
              ],
              progressLabel: "Syllabus Completion",
              progressVal: 78,
              btnLeft: "Launch Canvas 4K",
              btnRight: "Reading List",
            },
            {
              tag: "Lab Seminar",
              tagColor: "tag_teal",
              code: "OXF-AI408",
              title: "Deep Reinforcement Learning Systems",
              desc: "Multi-agent Markov decision processes, transformer policy networks, and autonomous robotics simulation labs.",
              meta: [
                {
                  icon: "fa-chalkboard-user",
                  label: "Lead Tutor",
                  val: "Dr. Eleanor Vance",
                },
                {
                  icon: "fa-location-dot",
                  label: "Lecture Hall",
                  val: "Radcliffe Science Lab 3",
                },
                {
                  icon: "fa-clock",
                  label: "Weekly Slot",
                  val: "Tue & Thu • 02:00 PM",
                },
              ],
              progressLabel: "Syllabus Completion",
              progressVal: 65,
              btnLeft: "Open Lab Notebook",
              btnRight: "Submit Code",
            },
            {
              tag: "Collegiate Tutorial",
              tagColor: "tag_amber",
              code: "OXF-ETH302",
              title: "AI Governance & Global Policy Ethics",
              desc: "Oxford tutorial essays examining sovereign AI safety frameworks, algorithmic bias, and European regulatory law.",
              meta: [
                {
                  icon: "fa-chalkboard-user",
                  label: "Lead Tutor",
                  val: "Prof. Clara Beaumont",
                },
                {
                  icon: "fa-location-dot",
                  label: "Lecture Hall",
                  val: "Sheldonian Annex B",
                },
                {
                  icon: "fa-clock",
                  label: "Weekly Slot",
                  val: "Fridays • 11:00 AM",
                },
              ],
              progressLabel: "Syllabus Completion",
              progressVal: 84,
              btnLeft: "Upload Tutorial Essay",
              btnRight: "Tutor Feedback",
            },
          ],
          tableTitle: "Hilary Term Coursework & Assessment Submissions",
          tableHeaders: [
            "Module Code",
            "Assessment Title",
            "Supervising Tutor",
            "Due Date",
            "Weighting",
            "Status",
            "Portal Action",
          ],
          tableRows: [
            [
              "OXF-CS401",
              "Problem Sheet 4: Surface Code Error Correction",
              "Prof. Alistair Sterling",
              "04 Nov 2026",
              "15% CATS",
              { text: "Submitted", cls: "pill_teal" },
              "View Graded Script",
            ],
            [
              "OXF-AI408",
              "PyTorch Multi-Agent Robotics Checkpoint",
              "Dr. Eleanor Vance",
              "11 Nov 2026",
              "25% CATS",
              { text: "In Progress", cls: "pill_amber" },
              "Upload Repository",
            ],
            [
              "OXF-ETH302",
              "Hilary Essay: Sovereign Frontier Model Audits",
              "Prof. Clara Beaumont",
              "18 Nov 2026",
              "20% CATS",
              { text: "Draft Ready", cls: "pill_primary" },
              "Submit Turnitin",
            ],
            [
              "OXF-MTH412",
              "Stochastic Calculus & Martingale Proofs",
              "Dr. Marcus Thorne",
              "25 Nov 2026",
              "20% CATS",
              { text: "Scheduled", cls: "pill_navy" },
              "Download Brief",
            ],
            [
              "OXF-DIS499",
              "Final Year Honours Dissertation Synopsis",
              "Prof. Alistair Sterling",
              "03 Dec 2026",
              "20% CATS",
              { text: "Approved", cls: "pill_teal" },
              "Open Dossier",
            ],
          ],
        },
        {
          id: "stu-courses",
          label: "Courses & Syllabi",
          icon: "fa-book-open",
          badge: "6 Modules",
          eyebrow: "Curriculum & Timetable • Oxford Canvas Cloud",
          title: "Enrolled Degree Modules & Weekly Lecture Timetable",
          subtitle:
            "Access 4K recorded lectures, seminar reading lists, tutorial room allocations, and laboratory prep sheets.",
          primaryBtn: "Export iCal Timetable",
          secondaryBtn: "Browse Elective Modules",
          kpis: [
            {
              label: "Recorded 4K Lectures",
              value: "142 Videos",
              trend: "100% Captioned",
              foot: "Oxford Panopto Cloud",
              icon: "fa-circle-play",
              color: "kpi_primary",
            },
            {
              label: "Weekly Contact Hours",
              value: "18 Hours",
              trend: "12h Lec • 6h Tut",
              foot: "Small-Group Teaching",
              icon: "fa-clock",
              color: "kpi_teal",
            },
            {
              label: "Mandatory Reading Packs",
              value: "24 Dossiers",
              trend: "Bodleian Linked",
              foot: "Instant PDF Access",
              icon: "fa-file-pdf",
              color: "kpi_amber",
            },
            {
              label: "Lab Practicals Cleared",
              value: "14 / 16",
              trend: "92% Mean Score",
              foot: "Distinction Track",
              icon: "fa-flask-vial",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle: "Hilary Term Syllabus Modules & Reading Lists",
          cards: [
            {
              tag: "Michaelmas + Hilary",
              tagColor: "tag_primary",
              code: "OXF-MTH412",
              title: "Stochastic Differential Equations",
              desc: "Brownian motion, Ito's lemma, PDE connections, and quantitative financial modelling in continuous time.",
              meta: [
                {
                  icon: "fa-user-tie",
                  label: "Convenor",
                  val: "Dr. Marcus Thorne",
                },
                {
                  icon: "fa-building-columns",
                  label: "Department",
                  val: "Mathematical Institute",
                },
                {
                  icon: "fa-file-lines",
                  label: "Core Texts",
                  val: "8 Digitised Volumes",
                },
              ],
              progressLabel: "Lecture Series Progress",
              progressVal: 72,
              btnLeft: "Download Syllabus",
              btnRight: "Watch Lectures",
            },
            {
              tag: "Honours Core",
              tagColor: "tag_teal",
              code: "OXF-SYS405",
              title: "Distributed Cloud & Kernel Architecture",
              desc: "Consensus protocols (Raft/Paxos), zero-copy networking, eBPF observability, and fault-tolerant storage engines.",
              meta: [
                {
                  icon: "fa-user-tie",
                  label: "Convenor",
                  val: "Prof. Rohit Kulkarni",
                },
                {
                  icon: "fa-building-columns",
                  label: "Department",
                  val: "Computer Science",
                },
                {
                  icon: "fa-file-lines",
                  label: "Core Texts",
                  val: "11 Research Papers",
                },
              ],
              progressLabel: "Lecture Series Progress",
              progressVal: 80,
              btnLeft: "Download Syllabus",
              btnRight: "Lab Cluster SSH",
            },
            {
              tag: "Research Project",
              tagColor: "tag_amber",
              code: "OXF-DIS499",
              title: "Senior Honours Thesis & Viva Prep",
              desc: "Independent research investigation supervised by an Oxford faculty fellow, culminating in a 15,000-word thesis.",
              meta: [
                {
                  icon: "fa-user-tie",
                  label: "Supervisor",
                  val: "Prof. Alistair Sterling",
                },
                {
                  icon: "fa-building-columns",
                  label: "College",
                  val: "Trinity College",
                },
                {
                  icon: "fa-file-lines",
                  label: "Milestone",
                  val: "Chapter 3 Literature",
                },
              ],
              progressLabel: "Thesis Milestone Progress",
              progressVal: 60,
              btnLeft: "Thesis Repository",
              btnRight: "Book Viva Mock",
            },
          ],
          tableTitle: "Master Weekly Lecture, Tutorial & Lab Timetable",
          tableHeaders: [
            "Day & Time",
            "Course Code",
            "Session Title & Format",
            "Academic Venue",
            "Instructor",
            "Attendance",
            "Action",
          ],
          tableRows: [
            [
              "Mon • 10:00 - 11:30",
              "OXF-CS401",
              "Quantum Phase Estimation (Lecture)",
              "Examination Schools, Room 6",
              "Prof. A. Sterling",
              { text: "Verified", cls: "pill_teal" },
              "Join Stream",
            ],
            [
              "Tue • 14:00 - 16:00",
              "OXF-AI408",
              "Policy Gradient Lab (Practical)",
              "Radcliffe Robotics Lab 3",
              "Dr. E. Vance",
              { text: "Verified", cls: "pill_teal" },
              "Lab Worksheet",
            ],
            [
              "Wed • 09:30 - 11:00",
              "OXF-MTH412",
              "Ito Integral Seminar (Tutorial)",
              "Andrew Wiles Bldg, S12",
              "Dr. M. Thorne",
              { text: "Upcoming", cls: "pill_amber" },
              "Problem Sheet",
            ],
            [
              "Thu • 15:00 - 16:30",
              "OXF-SYS405",
              "Byzantine Fault Tolerance (Lecture)",
              "Wolfson Theatre, Ground Fl",
              "Prof. R. Kulkarni",
              { text: "Upcoming", cls: "pill_primary" },
              "Slide Deck",
            ],
            [
              "Fri • 11:00 - 12:00",
              "OXF-ETH302",
              "Collegiate Tutorial Essay Defense",
              "Trinity Senior Common Rm",
              "Prof. C. Beaumont",
              { text: "Mandatory", cls: "pill_navy" },
              "View Essay",
            ],
          ],
        },
        {
          id: "stu-exams",
          label: "Exams & Transcripts",
          icon: "fa-file-signature",
          badge: "First Class",
          eyebrow: "Examination Schools • Official Registry Records",
          title: "Examination Schedules, Hall Seating & Official Transcripts",
          subtitle:
            "Review your Final Honours School (FHS) examination timetable, candidate number, sub-fusc dress rules, and certified grades.",
          primaryBtn: "Download Exam Admit Card",
          secondaryBtn: "Order Sealed Transcript",
          kpis: [
            {
              label: "Candidate Number",
              value: "CAND-88412",
              trend: "Anonymous Marking",
              foot: "Verified for 2026/27",
              icon: "fa-id-card-clip",
              color: "kpi_primary",
            },
            {
              label: "Honours Standing",
              value: "76.4% Mean",
              trend: "Distinction Tier",
              foot: "First-Class Trajectory",
              icon: "fa-ranking-star",
              color: "kpi_teal",
            },
            {
              label: "Registered Exam Papers",
              value: "05 Papers",
              trend: "Hilary + Trinity",
              foot: "Examination Schools",
              icon: "fa-scroll",
              color: "kpi_amber",
            },
            {
              label: "Official Transcripts",
              value: "e-Apostille",
              trend: "QR Authenticated",
              foot: "Instant Employer Verify",
              icon: "fa-stamp",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle: "Examination Preparation & Assessment Resources",
          cards: [
            {
              tag: "Past Papers Archive",
              tagColor: "tag_primary",
              code: "2018–2026",
              title: "Oxford Past Examination Papers & Examiners' Reports",
              desc: "Access eight years of official Final Honours School examination papers with worked solutions and chief examiner commentary.",
              meta: [
                {
                  icon: "fa-folder-open",
                  label: "Archive Size",
                  val: "180+ Exam Papers",
                },
                {
                  icon: "fa-check-double",
                  label: "Solutions",
                  val: "Tutor Verified",
                },
                {
                  icon: "fa-lock-open",
                  label: "Access",
                  val: "SSO Unrestricted",
                },
              ],
              progressLabel: "Practice Papers Completed",
              progressVal: 82,
              btnLeft: "Browse Past Papers",
              btnRight: "Examiner Notes",
            },
            {
              tag: "Collections Exam",
              tagColor: "tag_teal",
              code: "0th Week",
              title: "Collegiate Collections & Mock Viva Assessments",
              desc: "Termly college examinations held in Hall prior to full term to benchmark honours readiness and provide feedback.",
              meta: [
                {
                  icon: "fa-building-columns",
                  label: "Location",
                  val: "Trinity Dining Hall",
                },
                {
                  icon: "fa-medal",
                  label: "Last Result",
                  val: "78% (First Class)",
                },
                {
                  icon: "fa-user-check",
                  label: "Senior Tutor",
                  val: "Signed & Cleared",
                },
              ],
              progressLabel: "Revision Readiness",
              progressVal: 88,
              btnLeft: "Collections Feedback",
              btnRight: "Book Revision Slot",
            },
            {
              tag: "Official Certification",
              tagColor: "tag_amber",
              code: "DIGI-SEAL",
              title: "HEAR & Cryptographic Degree Transcripts",
              desc: "Generate Higher Education Achievement Reports (HEAR) and digitally signed academic transcripts for graduate employers.",
              meta: [
                {
                  icon: "fa-shield-halved",
                  label: "Signature",
                  val: "Oxford Registry PKI",
                },
                {
                  icon: "fa-globe",
                  label: "Recognition",
                  val: "WES & Global Universities",
                },
                {
                  icon: "fa-bolt",
                  label: "Delivery",
                  val: "Instant PDF / Share Link",
                },
              ],
              progressLabel: "Degree Credits Certified",
              progressVal: 75,
              btnLeft: "Generate Official PDF",
              btnRight: "Share Verify Link",
            },
          ],
          tableTitle: "Official Examination Timetable & Seat Allocations",
          tableHeaders: [
            "Paper Code",
            "Examination Paper Title",
            "Exam Date & Window",
            "Examination Hall",
            "Desk / Seat",
            "Grade / Status",
            "Action",
          ],
          tableRows: [
            [
              "FHS-CS401",
              "Quantum Computing & Fault-Tolerant Gates",
              "14 Jan 2027 • 09:30 AM",
              "Exam Schools • North Hall",
              "Row D • Desk 14",
              { text: "Seat Assigned", cls: "pill_teal" },
              "Admit Slip",
            ],
            [
              "FHS-AI408",
              "Deep Reinforcement Learning & Control",
              "18 Jan 2027 • 14:00 PM",
              "Exam Schools • South Hall",
              "Row B • Desk 08",
              { text: "Seat Assigned", cls: "pill_teal" },
              "Admit Slip",
            ],
            [
              "FHS-MTH412",
              "Stochastic Analysis & Martingales",
              "22 Jan 2027 • 09:30 AM",
              "Exam Schools • East Room",
              "Row F • Desk 21",
              { text: "Confirmed", cls: "pill_primary" },
              "Past Papers",
            ],
            [
              "PRE-CS301",
              "Algorithms & Complexity (Michaelmas)",
              "04 Dec 2026 • Completed",
              "Exam Schools • Main Hall",
              "Completed",
              { text: "79% (First Class)", cls: "pill_teal" },
              "Script Breakdown",
            ],
            [
              "PRE-AI304",
              "Statistical Machine Learning (Michaelmas)",
              "07 Dec 2026 • Completed",
              "Exam Schools • Main Hall",
              "Completed",
              { text: "75% (First Class)", cls: "pill_teal" },
              "Script Breakdown",
            ],
          ],
        },
        {
          id: "stu-library",
          label: "Bodleian Library",
          icon: "fa-book-bookmark",
          badge: "2.4M Vols",
          eyebrow: "Bodleian Libraries & Radcliffe Camera • Reader Services",
          title: "Bodleian Digital Repository, Book Loans & Reading Rooms",
          subtitle:
            "Manage your physical stack requests, renew borrowed treatises, reserve Radcliffe Camera study desks, and search SOLO.",
          primaryBtn: "Search SOLO Catalogue",
          secondaryBtn: "Reserve Reading Desk",
          kpis: [
            {
              label: "Active Bodleian Loans",
              value: "06 Books",
              trend: "0 Overdue Fines",
              foot: "Radcliffe Science Library",
              icon: "fa-book",
              color: "kpi_primary",
            },
            {
              label: "Closed Stack Requests",
              value: "02 Manuscripts",
              trend: "Duke Humfrey's Rm",
              foot: "Ready for Consultation",
              icon: "fa-scroll",
              color: "kpi_teal",
            },
            {
              label: "E-Journal Subscriptions",
              value: "84,000+",
              trend: "IEEE, Nature, ACM",
              foot: "Oxford Proxy Active",
              icon: "fa-newspaper",
              color: "kpi_amber",
            },
            {
              label: "Study Seat Bookings",
              value: "Desk RC-42",
              trend: "Upper Reading Rm",
              foot: "Reserved: Tomorrow 09:00",
              icon: "fa-chair",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Featured Bodleian Reading Rooms & Digital Collections",
          cards: [
            {
              tag: "Historic Rotunda",
              tagColor: "tag_primary",
              code: "RAD-CAM",
              title: "Radcliffe Camera Upper & Lower Reading Rooms",
              desc: "24/7 collegiate reading room access with high-speed eduroam fibre, reference collections, and quiet heritage study bays.",
              meta: [
                {
                  icon: "fa-clock",
                  label: "Opening Hours",
                  val: "08:00 AM – Midnight",
                },
                {
                  icon: "fa-wifi",
                  label: "Connectivity",
                  val: "10 Gbps Eduroam",
                },
                {
                  icon: "fa-couch",
                  label: "Live Occupancy",
                  val: "64% (Seats Available)",
                },
              ],
              progressLabel: "Weekly Study Quota Used",
              progressVal: 70,
              btnLeft: "Book Study Bay",
              btnRight: "Floor Plan",
            },
            {
              tag: "STEM Hub",
              tagColor: "tag_teal",
              code: "RSL-OXF",
              title: "Radcliffe Science Library & Makerspace",
              desc: "Dedicated scientific monographs, 3D prototyping workstations, group collaboration pods, and circulating textbook loans.",
              meta: [
                {
                  icon: "fa-book-atlas",
                  label: "STEM Holdings",
                  val: "420,000+ Volumes",
                },
                {
                  icon: "fa-users",
                  label: "Group Pods",
                  val: "12 Smart Rooms",
                },
                {
                  icon: "fa-print",
                  label: "Print Credit",
                  val: "£28.50 Remaining",
                },
              ],
              progressLabel: "Borrowing Allowance (6/15)",
              progressVal: 40,
              btnLeft: "Renew All Loans",
              btnRight: "Book Group Pod",
            },
            {
              tag: "Global Databases",
              tagColor: "tag_amber",
              code: "ORZ-CLOUD",
              title: "OxLIP+ Journal & Archival Research Cloud",
              desc: "Single sign-on institutional access to Nature, ScienceDirect, JSTOR, IEEE Xplore, arXiv mirrors, and Bloomberg terminals.",
              meta: [
                {
                  icon: "fa-database",
                  label: "Databases",
                  val: "1,450+ Indexed",
                },
                { icon: "fa-key", label: "Auth Mode", val: "Shibboleth SSO" },
                {
                  icon: "fa-cloud-arrow-down",
                  label: "Saved Citations",
                  val: "94 BibTeX Items",
                },
              ],
              progressLabel: "Research Folder Sync",
              progressVal: 92,
              btnLeft: "Launch OxLIP+",
              btnRight: "Export BibTeX",
            },
          ],
          tableTitle: "Current Borrowed Volumes & Closed-Stack Reservations",
          tableHeaders: [
            "Shelfmark / ID",
            "Title & Lead Author",
            "Library Branch",
            "Borrowed Date",
            "Due Date",
            "Loan Status",
            "Action",
          ],
          tableRows: [
            [
              "BOD-QC-104.2",
              "Quantum Computation & Quantum Information — Nielsen & Chuang",
              "Radcliffe Science Library",
              "12 Oct 2026",
              "14 Nov 2026",
              { text: "Active Loan", cls: "pill_teal" },
              "Renew Online",
            ],
            [
              "BOD-AI-882.1",
              "Reinforcement Learning: An Introduction — Sutton & Barto",
              "Radcliffe Science Library",
              "15 Oct 2026",
              "18 Nov 2026",
              { text: "Active Loan", cls: "pill_teal" },
              "Renew Online",
            ],
            [
              "BOD-MT-319.4",
              "Stochastic Differential Equations — Bernt Øksendal",
              "Mathematical Institute Lib",
              "19 Oct 2026",
              "22 Nov 2026",
              { text: "Active Loan", cls: "pill_teal" },
              "Renew Online",
            ],
            [
              "MSS-DH-0492",
              "17th-Century Newtonian Fluxions Treatise (Folio)",
              "Duke Humfrey's Library",
              "26 Oct 2026",
              "30 Oct 2026",
              { text: "Reading Room Desk", cls: "pill_amber" },
              "View Call Slip",
            ],
            [
              "ERES-CS-405",
              "Distributed Systems: Principles & Paradigms (E-Book)",
              "Bodleian Digital SOLO",
              "01 Oct 2026",
              "Unlimited Term",
              { text: "Digital License", cls: "pill_primary" },
              "Read Online",
            ],
          ],
        },
        {
          id: "stu-finance",
          label: "Tuition & Bursaries",
          icon: "fa-sterling-sign",
          badge: "Cleared",
          eyebrow: "University Chest & Collegiate Bursary • Student Finance",
          title: "Tuition Fee Statements, Scholarship Awards & College Battels",
          subtitle:
            "View your 2026/27 tuition fee ledger, Clarendon scholarship disbursements, college accommodation battels, and payment receipts.",
          primaryBtn: "Download Tax / Fee Certificate",
          secondaryBtn: "Apply for Research Travel Grant",
          kpis: [
            {
              label: "2026/27 Tuition Balance",
              value: "£0.00 Due",
              trend: "Paid in Full",
              foot: "Hilary Term Cleared",
              icon: "fa-circle-check",
              color: "kpi_teal",
            },
            {
              label: "Merit Scholarship Award",
              value: "£18,500 / yr",
              trend: "Clarendon Scholar",
              foot: "Stipend + Fee Grant",
              icon: "fa-hand-holding-dollar",
              color: "kpi_primary",
            },
            {
              label: "College Battels (Hall & Rent)",
              value: "£2,140.00",
              trend: "Hilary Quarter",
              foot: "Covered by Bursary",
              icon: "fa-building-user",
              color: "kpi_amber",
            },
            {
              label: "Next Stipend Tranche",
              value: "£4,625.00",
              trend: "15 Jan 2027",
              foot: "UK Barclays Direct",
              icon: "fa-vault",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Active Scholarships, Grants & Collegiate Financial Support",
          cards: [
            {
              tag: "Flagship Fellowship",
              tagColor: "tag_primary",
              code: "CLAR-2026",
              title: "Oxford Clarendon Merit Scholarship",
              desc: "Full academic tuition fee coverage plus a generous annual living stipend awarded for outstanding academic excellence.",
              meta: [
                {
                  icon: "fa-Coins",
                  label: "Annual Value",
                  val: "£18,500 Tax-Free",
                },
                {
                  icon: "fa-calendar-check",
                  label: "Duration",
                  val: "Full Degree Tenure",
                },
                {
                  icon: "fa-file-signature",
                  label: "Renewal Condition",
                  val: "Good Academic Standing",
                },
              ],
              progressLabel: "2026/27 Tranches Disbursed (2/3)",
              progressVal: 67,
              btnLeft: "Award Letter PDF",
              btnRight: "Stipend Schedule",
            },
            {
              tag: "Conference Support",
              tagColor: "tag_teal",
              code: "TRIN-TRV",
              title: "Trinity College Academic Travel & Symposium Grant",
              desc: "Reimbursement grant supporting undergraduate and postgraduate scholars presenting papers at international conferences.",
              meta: [
                {
                  icon: "fa-plane-departure",
                  label: "Max Allowance",
                  val: "£1,200 / Year",
                },
                {
                  icon: "fa-wallet",
                  label: "Remaining",
                  val: "£850 Available",
                },
                {
                  icon: "fa-clock",
                  label: "Approval SLA",
                  val: "5 Working Days",
                },
              ],
              progressLabel: "Allowance Utilised",
              progressVal: 29,
              btnLeft: "Submit Expense Claim",
              btnRight: "Grant Guidelines",
            },
            {
              tag: "Collegiate Battels",
              tagColor: "tag_amber",
              code: "BAT-HIL27",
              title: "Residential Staircase & Formal Hall Dining Account",
              desc: "Consolidated termly statement for en-suite college staircase accommodation, buttery meals, and Formal Hall guest tickets.",
              meta: [
                {
                  icon: "fa-bed",
                  label: "Room Allocation",
                  val: "Staircase IV, Room 12",
                },
                {
                  icon: "fa-utensils",
                  label: "Formal Hall Credits",
                  val: "14 Dinners Left",
                },
                {
                  icon: "fa-credit-card",
                  label: "Auto-Debit",
                  val: "Bursary Offset Active",
                },
              ],
              progressLabel: "Term Account Settled",
              progressVal: 100,
              btnLeft: "Itemised Battels",
              btnRight: "Top Up BodCard",
            },
          ],
          tableTitle:
            "Official Financial Ledger, Invoices & Bursary Disbursements",
          tableHeaders: [
            "Transaction Ref",
            "Statement Description",
            "Academic Term",
            "Date Processed",
            "Amount (£)",
            "Status",
            "Receipt",
          ],
          tableRows: [
            [
              "INV-OXF-90214",
              "Hilary Term 2026/27 Honours Tuition Fee",
              "Hilary 2027",
              "05 Jan 2027",
              "£9,250.00",
              { text: "Paid via Scholarship", cls: "pill_teal" },
              "PDF Receipt",
            ],
            [
              "STP-CLR-88310",
              "Clarendon Living Stipend — Tranche 2 Disbursement",
              "Hilary 2027",
              "10 Jan 2027",
              "+£4,625.00",
              { text: "Credited to Bank", cls: "pill_teal" },
              "Remittance",
            ],
            [
              "BAT-TRN-77412",
              "Trinity College Staircase Accommodation & Hall Battels",
              "Hilary 2027",
              "12 Jan 2027",
              "£2,140.00",
              { text: "Settled", cls: "pill_teal" },
              "PDF Receipt",
            ],
            [
              "GRT-TRV-66109",
              "NeurIPS Workshop Travel & Registration Grant",
              "Michaelmas 2026",
              "18 Nov 2026",
              "+£350.00",
              { text: "Reimbursed", cls: "pill_primary" },
              "Claim Voucher",
            ],
            [
              "INV-OXF-81004",
              "Michaelmas Term 2026/27 Honours Tuition Fee",
              "Michaelmas 2026",
              "08 Oct 2026",
              "£9,250.00",
              { text: "Paid via Scholarship", cls: "pill_teal" },
              "PDF Receipt",
            ],
          ],
        },
      ],
    },

    Faculty: {
      roleKey: "Faculty",
      roleBadge: "Faculty Professor / Academic Tutor",
      menuHeader: "Faculty & Tutor Menu",
      avatarIcon: "fa-chalkboard-user",
      department: "Department of Computer Science & Wellington Fellows",
      termStatus: "Hilary Term 2026/27 • Senior Academic Fellow",
      helpTitle: "Faculty Senate Registry",
      helpText:
        "Exam board moderation locks on 28 Nov. Submit marks via Examination Schools portal.",
      tabs: [
        {
          id: "fac-overview",
          label: "Faculty Command Center",
          icon: "fa-chalkboard-user",
          badge: "4 Courses",
          eyebrow: "Senior Academic Fellow • Departmental Command Center",
          title: "Faculty Teaching, Supervision & Departmental Overview",
          subtitle:
            "Manage your Hilary Term lecture cohorts, undergraduate tutorial pairings, script marking queues, and faculty research budgets.",
          primaryBtn: "Publish Lecture Materials",
          secondaryBtn: "Download Cohort Roster",
          kpis: [
            {
              label: "Active Lecture Modules",
              value: "04 Courses",
              trend: "184 Total Students",
              foot: "Michaelmas & Hilary",
              icon: "fa-person-chalkboard",
              color: "kpi_primary",
            },
            {
              label: "Pending Script Assessments",
              value: "18 Scripts",
              trend: "Due in 5 Days",
              foot: "Anonymous Candidate IDs",
              icon: "fa-pen-clip",
              color: "kpi_amber",
            },
            {
              label: "DPhil & MSc Supervisees",
              value: "09 Scholars",
              trend: "3 Viva Reviews",
              foot: "100% On-Track Milestones",
              icon: "fa-user-graduate",
              color: "kpi_teal",
            },
            {
              label: "Departmental Grant Allocation",
              value: "£245,000",
              trend: "EPSRC + Oxford",
              foot: "82% Budget Active",
              icon: "fa-sterling-sign",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Assigned Teaching Modules & Collegiate Tutorial Cohorts",
          cards: [
            {
              tag: "Honours Lecture",
              tagColor: "tag_primary",
              code: "OXF-CS401",
              title: "Quantum Algorithms & Fault-Tolerant Computing",
              desc: "Senior honours lecture series for 68 fourth-year MCompSci and MSc scholars with weekly problem classes.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Enrolled Cohort",
                  val: "68 Honours Students",
                },
                {
                  icon: "fa-location-dot",
                  label: "Venue",
                  val: "Wolfson Lecture Theatre",
                },
                {
                  icon: "fa-user-check",
                  label: "Mean Attendance",
                  val: "96.8% Verified",
                },
              ],
              progressLabel: "Term Syllabus Delivered",
              progressVal: 75,
              btnLeft: "Manage Canvas",
              btnRight: "Gradebook",
            },
            {
              tag: "Postgraduate Seminar",
              tagColor: "tag_teal",
              code: "OXF-GRAD512",
              title: "Frontier Foundation Models & Alignment Theory",
              desc: "Advanced seminar for MSc and DPhil candidates exploring mechanistic interpretability and scalable oversight.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Enrolled Cohort",
                  val: "34 Graduate Scholars",
                },
                {
                  icon: "fa-location-dot",
                  label: "Venue",
                  val: "Radcliffe Seminar Rm 4",
                },
                {
                  icon: "fa-file-Waveform",
                  label: "Presentations",
                  val: "12 Scheduled",
                },
              ],
              progressLabel: "Term Syllabus Delivered",
              progressVal: 68,
              btnLeft: "Seminar Schedule",
              btnRight: "Review Papers",
            },
            {
              tag: "College Tutorials",
              tagColor: "tag_amber",
              code: "TRIN-TUT",
              title: "Trinity College Tutorial Pairings (Years 1–3)",
              desc: "Weekly two-student Oxford tutorial sessions covering discrete mathematics, compilers, and algorithmic analysis.",
              meta: [
                {
                  icon: "fa-user-group",
                  label: "Tutorial Groups",
                  val: "6 Pairs (12 Tutees)",
                },
                {
                  icon: "fa-location-dot",
                  label: "Venue",
                  val: "Fellows' Study • Stair II",
                },
                {
                  icon: "fa-book",
                  label: "Reports Due",
                  val: "8th Week OxCORT",
                },
              ],
              progressLabel: "OxCORT Term Reports",
              progressVal: 85,
              btnLeft: "Open OxCORT",
              btnRight: "Message Tutees",
            },
          ],
          tableTitle: "Active Teaching Cohorts & Upcoming Lecture Sessions",
          tableHeaders: [
            "Course Code",
            "Module & Level",
            "Cohort Size",
            "Lecture Venue",
            "Next Scheduled Session",
            "AV Capture",
            "Action",
          ],
          tableRows: [
            [
              "OXF-CS401",
              "Quantum Algorithms (Year 4 Honours)",
              "68 Scholars",
              "Wolfson Theatre",
              "Mon • 10:00 AM",
              { text: "4K Auto-Record", cls: "pill_teal" },
              "Upload Slides",
            ],
            [
              "OXF-GRAD512",
              "Foundation Model Alignment (MSc/DPhil)",
              "34 Scholars",
              "Radcliffe Rm 4",
              "Tue • 14:00 PM",
              { text: "Live + Stream", cls: "pill_teal" },
              "Manage Roster",
            ],
            [
              "OXF-CS204",
              "Algorithms & Data Structures (Year 2)",
              "82 Scholars",
              "Exam Schools South",
              "Wed • 11:00 AM",
              { text: "4K Auto-Record", cls: "pill_teal" },
              "Problem Sheet",
            ],
            [
              "TRIN-TUT01",
              "Trinity College Tutorial Group A & B",
              "04 Tutees",
              "Fellows' Study II",
              "Thu • 16:00 PM",
              { text: "In-Person", cls: "pill_primary" },
              "Review Essays",
            ],
            [
              "DEPT-BRD09",
              "Faculty Board of Examiners Moderation",
              "14 Fellows",
              "Wellington Boardroom",
              "Fri • 13:30 PM",
              { text: "Chaired Session", cls: "pill_amber" },
              "Board Agenda",
            ],
          ],
        },
        {
          id: "fac-schedule",
          label: "Lecture & Tutorial Roster",
          icon: "fa-calendar-days",
          badge: "Hilary Term",
          eyebrow: "Academic Timetabling • Rooms & Tutorial Groups",
          title: "Faculty Teaching Timetable, Office Hours & Room Bookings",
          subtitle:
            "Coordinate lecture theatre AV configurations, teaching assistant lab allocations, and collegiate tutorial slots.",
          primaryBtn: "Book Seminar Theatre",
          secondaryBtn: "Update Office Hours",
          kpis: [
            {
              label: "Weekly Teaching Load",
              value: "11.5 Hours",
              trend: "6h Lec • 5.5h Tut",
              foot: "Hilary Statutory Load",
              icon: "fa-clock",
              color: "kpi_primary",
            },
            {
              label: "Assigned Teaching Assistants",
              value: "06 DPhil TAs",
              trend: "Lab Demonstrators",
              foot: "All Hours Approved",
              icon: "fa-users-gear",
              color: "kpi_teal",
            },
            {
              label: "Student Office Hours",
              value: "Thu 10–12",
              trend: "8 Slots Booked",
              foot: "Hybrid Zoom + Study",
              icon: "fa-door-open",
              color: "kpi_amber",
            },
            {
              label: "Panopto Lecture Views",
              value: "4,820 Plays",
              trend: "+19% Engagement",
              foot: "99.4% Audio Clarity",
              icon: "fa-video",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle: "Teaching Support Teams & Lab Supervision Groups",
          cards: [
            {
              tag: "Lab Demonstrators",
              tagColor: "tag_primary",
              code: "TA-TEAM-A",
              title: "Quantum Simulation Lab Demonstrator Roster",
              desc: "Three senior DPhil researchers assisting with Qiskit and Cirq practical sheets in the Radcliffe Computer Lab.",
              meta: [
                {
                  icon: "fa-user-Tie",
                  label: "Lead TA",
                  val: "heng.zhang@oxf",
                },
                {
                  icon: "fa-laptop-code",
                  label: "Workstations",
                  val: "40 GPU Terminals",
                },
                {
                  icon: "fa-check-circle",
                  label: "Marking SLA",
                  val: "48h Turnaround",
                },
              ],
              progressLabel: "Lab Sessions Completed",
              progressVal: 75,
              btnLeft: "Approve TA Timesheets",
              btnRight: "Lab Manual",
            },
            {
              tag: "OxCORT System",
              tagColor: "tag_teal",
              code: "OXCORT-27",
              title: "Oxford Undergraduate Tutorial Reporting",
              desc: "Submit termly academic progress reports and Collections marks for undergraduate tutees across 5 colleges.",
              meta: [
                {
                  icon: "fa-building-columns",
                  label: "Colleges",
                  val: "Trinity, Balliol, Magdalen",
                },
                {
                  icon: "fa-file-circle-check",
                  label: "Completed",
                  val: "19 / 22 Reports",
                },
                {
                  icon: "fa-calendar",
                  label: "Deadline",
                  val: "Friday of 8th Week",
                },
              ],
              progressLabel: "Reports Filed",
              progressVal: 86,
              btnLeft: "Launch OxCORT",
              btnRight: "Export Summary",
            },
            {
              tag: "Visiting Speaker",
              tagColor: "tag_amber",
              code: "COLLOQ-04",
              title: "Strachey Distinguished Computer Science Lecture",
              desc: "Host arrangements and Sheldonian Theatre booking for the Hilary Term Distinguished Visiting Professor seminar.",
              meta: [
                {
                  icon: "fa-microphone-lines",
                  label: "Guest Speaker",
                  val: "Prof. Demis Hassabis",
                },
                { icon: "fa-users", label: "RSVPs", val: "450 Confirmed" },
                {
                  icon: "fa-utensils",
                  label: "High Table",
                  val: "Trinity Hall 19:30",
                },
              ],
              progressLabel: "Event Logistics Ready",
              progressVal: 95,
              btnLeft: "Guest Itinerary",
              btnRight: "Seat Manifest",
            },
          ],
          tableTitle:
            "Detailed Weekly Teaching, Tutorial & Consultation Schedule",
          tableHeaders: [
            "Day & Slot",
            "Session Type",
            "Course / Cohort",
            "Room & Building",
            "Enrolled",
            "AV / Tech",
            "Action",
          ],
          tableRows: [
            [
              "Mon • 10:00 - 11:30",
              "Core Lecture",
              "OXF-CS401 Quantum Computing",
              "Wolfson Theatre",
              "68 Students",
              { text: "Panopto 4K", cls: "pill_teal" },
              "Launch AV",
            ],
            [
              "Tue • 14:00 - 16:00",
              "Graduate Seminar",
              "OXF-GRAD512 AI Alignment",
              "Radcliffe Seminar 4",
              "34 Students",
              { text: "Smartboard", cls: "pill_teal" },
              "Attendance",
            ],
            [
              "Wed • 11:00 - 12:30",
              "Core Lecture",
              "OXF-CS204 Algorithms II",
              "Exam Schools South",
              "82 Students",
              { text: "Panopto 4K", cls: "pill_teal" },
              "Launch AV",
            ],
            [
              "Thu • 10:00 - 12:00",
              "Office Hours",
              "1-on-1 Student Consultations",
              "Wellington Sq Rm 308",
              "08 Booked",
              { text: "In-Person/Zoom", cls: "pill_amber" },
              "View Bookings",
            ],
            [
              "Fri • 14:00 - 17:00",
              "Collegiate Tutorials",
              "Trinity & Balliol Honours Pairs",
              "Fellows' Study II",
              "06 Pairs",
              { text: "Tutorial", cls: "pill_primary" },
              "Essay Queue",
            ],
          ],
        },
        {
          id: "fac-grading",
          label: "Grading & Assessments",
          icon: "fa-Clipboard-check",
          badge: "18 Pending",
          eyebrow: "Examination Board • Anonymous Script Marking",
          title: "Student Coursework Grading, Dissertations & Exam Moderation",
          subtitle:
            "Enter double-blind candidate marks, review Turnitin originality reports, and sign off Examination Board class lists.",
          primaryBtn: "Batch Export Marks CSV",
          secondaryBtn: "Moderation Guidelines",
          kpis: [
            {
              label: "Scripts Graded This Term",
              value: "124 / 142",
              trend: "87.3% Complete",
              foot: "18 Remaining in Queue",
              icon: "fa-file-circle-check",
              color: "kpi_teal",
            },
            {
              label: "Cohort Mean Score",
              value: "71.8%",
              trend: "First/2:1 Border",
              foot: "Calibrated to Oxford Scale",
              icon: "fa-chart-line",
              color: "kpi_primary",
            },
            {
              label: "Second-Marker Reconciliation",
              value: "04 Scripts",
              trend: "Within ±2% Variance",
              foot: "Ready for Sign-Off",
              icon: "fa-scale-balanced",
              color: "kpi_amber",
            },
            {
              label: "Turnitin Integrity Check",
              value: "100% Clean",
              trend: "0 Plagiarism Flags",
              foot: "AI & Source Verified",
              icon: "fa-shield-check",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Active Assessment Queues & Examination Board Tasks",
          cards: [
            {
              tag: "Priority Marking",
              tagColor: "tag_primary",
              code: "FHS-CS401",
              title: "Quantum Cryptography Take-Home Practical Scripts",
              desc: "Anonymised fourth-year practical submissions requiring first-marker evaluation and rubric annotation.",
              meta: [
                {
                  icon: "fa-file-code",
                  label: "Submissions",
                  val: "68 Total (58 Graded)",
                },
                {
                  icon: "fa-hourglass-half",
                  label: "Deadline",
                  val: "14 Nov 2026 • 17:00",
                },
                {
                  icon: "fa-user-shield",
                  label: "Co-Assessor",
                  val: "Dr. M. Thorne",
                },
              ],
              progressLabel: "Marking Progress (58/68)",
              progressVal: 85,
              btnLeft: "Grade Next 10 Scripts",
              btnRight: "Rubric Matrix",
            },
            {
              tag: "MSc Dissertations",
              tagColor: "tag_teal",
              code: "MSC-THS27",
              title: "Postgraduate MSc Thesis Double-Blind Moderation",
              desc: "Independent second-marker assessment for six MSc Advanced Computer Science research dissertations.",
              meta: [
                {
                  icon: "fa-book-journal-whills",
                  label: "Dissertations",
                  val: "6 Assigned (4 Done)",
                },
                {
                  icon: "fa-scale-unbalanced",
                  label: "Moderation",
                  val: "Agreed Marks Filed",
                },
                { icon: "fa-award", label: "Distinctions", val: "3 Nominated" },
              ],
              progressLabel: "Moderation Progress (4/6)",
              progressVal: 67,
              btnLeft: "Open Thesis Dossiers",
              btnRight: "Submit Marks",
            },
            {
              tag: "External Examiner",
              tagColor: "tag_amber",
              code: "EXT-BRD27",
              title: "Hilary Term Examination Paper Setting & Scrutiny",
              desc: "Draft examination papers and model solutions uploaded for External Examiner scrutiny (Cambridge & Imperial).",
              meta: [
                {
                  icon: "fa-file-lock",
                  label: "Security Tier",
                  val: "Encrypted Vault",
                },
                {
                  icon: "fa-check-double",
                  label: "Status",
                  val: "Approved by Chair",
                },
                {
                  icon: "fa-print",
                  label: "Print Ready",
                  val: "Exam Schools Press",
                },
              ],
              progressLabel: "Scrutiny Workflow",
              progressVal: 100,
              btnLeft: "View Signed Proofs",
              btnRight: "Examiner Comments",
            },
          ],
          tableTitle: "Pending Candidate Script Submissions & Marking Ledger",
          tableHeaders: [
            "Candidate No.",
            "Module Code",
            "Submission Title",
            "Submitted Timestamp",
            "Turnitin Index",
            "Provisional Mark",
            "Action",
          ],
          tableRows: [
            [
              "CAND-88412",
              "OXF-CS401",
              "Lattice-Based Post-Quantum Key Exchange Proof",
              "02 Nov 2026 • 14:22",
              "4% Similarity",
              { text: "78% (First)", cls: "pill_teal" },
              "Edit Feedback",
            ],
            [
              "CAND-88419",
              "OXF-CS401",
              "Grover Search Oracle Circuit Optimization",
              "02 Nov 2026 • 16:05",
              "6% Similarity",
              { text: "Awaiting Mark", cls: "pill_amber" },
              "Grade Script",
            ],
            [
              "CAND-88435",
              "OXF-GRAD512",
              "Sparse Autoencoders in Transformer Layers",
              "03 Nov 2026 • 09:40",
              "3% Similarity",
              { text: "82% (Distinction)", cls: "pill_teal" },
              "Finalise Mark",
            ],
            [
              "CAND-88451",
              "OXF-CS401",
              "Surface Code Threshold Simulation in Stim",
              "03 Nov 2026 • 11:18",
              "5% Similarity",
              { text: "Awaiting Mark", cls: "pill_amber" },
              "Grade Script",
            ],
            [
              "CAND-88468",
              "MSC-THS27",
              "Zero-Knowledge Proofs for Federated Medical AI",
              "04 Nov 2026 • 15:50",
              "2% Similarity",
              { text: "Second Marking", cls: "pill_primary" },
              "Reconcile Score",
            ],
          ],
        },
        {
          id: "fac-supervision",
          label: "Doctoral Supervision",
          icon: "fa-user-astronaut",
          badge: "9 DPhil",
          eyebrow: "Graduate Supervision System (GSS) • Doctoral Training",
          title: "DPhil Doctoral Candidates & Research Supervision Roster",
          subtitle:
            "Monitor DPhil Transfer of Status, Confirmation of Status, viva voce examiner appointments, and GSR termly logs.",
          primaryBtn: "Submit GSS Supervisor Report",
          secondaryBtn: "Appoint Viva Examiners",
          kpis: [
            {
              label: "Primary DPhil Candidates",
              value: "06 Doctoral",
              trend: "3 Co-Supervised",
              foot: "EPSRC CDT Scholars",
              icon: "fa-user-graduate",
              color: "kpi_primary",
            },
            {
              label: "Transfer / Confirmation Vivas",
              value: "03 Scheduled",
              trend: "Hilary Term",
              foot: "Assessors Appointed",
              icon: "fa-comments",
              color: "kpi_teal",
            },
            {
              label: "Joint Lab Publications",
              value: "11 Papers",
              trend: "NeurIPS, ICML, IEEE",
              foot: "2026 Academic Cycle",
              icon: "fa-file-signature",
              color: "kpi_amber",
            },
            {
              label: "DPhil Completion Rate",
              value: "100%",
              trend: "14 Graduated",
              foot: "Zero Submission Delays",
              icon: "fa-medal",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle: "Doctoral Milestones & Research Group Supervision",
          cards: [
            {
              tag: "Transfer of Status",
              tagColor: "tag_primary",
              code: "DPHIL-YR2",
              title: "Probationary Research Student (PRS) Transfer Assessments",
              desc: "Evaluate 10,000-word transfer reports and research proposals for second-year doctoral candidates entering full DPhil status.",
              meta: [
                {
                  icon: "fa-user-pen",
                  label: "Candidates",
                  val: "2 PRS Scholars",
                },
                {
                  icon: "fa-users-viewfinder",
                  label: "Internal Assessors",
                  val: "Prof. Beaumont & Dr. Thorne",
                },
                {
                  icon: "fa-calendar-day",
                  label: "Viva Window",
                  val: "5th Week Hilary",
                },
              ],
              progressLabel: "Dossier Readiness",
              progressVal: 90,
              btnLeft: "Review Transfer Thesis",
              btnRight: "Sign GSR Form",
            },
            {
              tag: "Final Viva Voce",
              tagColor: "tag_teal",
              code: "DPHIL-YR4",
              title: "Final DPhil Thesis Defense & Examiner Nomination",
              desc: "Coordinate internal and external examiners for final doctoral thesis defenses and Bodleian ORA repository deposit.",
              meta: [
                {
                  icon: "fa-graduation-cap",
                  label: "Finalist",
                  val: "Dr. (cand.) Priya Nair",
                },
                {
                  icon: "fa-building-columns",
                  label: "External Examiner",
                  val: "Prof. S. Russell (ETH)",
                },
                {
                  icon: "fa-calendar-check",
                  label: "Defense Date",
                  val: "29 Nov 2026",
                },
              ],
              progressLabel: "Viva Examination Prep",
              progressVal: 96,
              btnLeft: "Examiner Pack",
              btnRight: "Viva Logistics",
            },
            {
              tag: "Weekly Lab Group",
              tagColor: "tag_amber",
              code: "QAI-LAB",
              title: "Oxford Autonomous & Quantum Systems Reading Group",
              desc: "Weekly doctoral group meeting reviewing frontier preprints, GPU cluster allocations, and conference rebuttal drafts.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Members",
                  val: "9 DPhil + 4 Postdocs",
                },
                {
                  icon: "fa-server",
                  label: "Cluster Quota",
                  val: "64x H100 GPUs Active",
                },
                {
                  icon: "fa-clock",
                  label: "Meeting Time",
                  val: "Fridays • 10:00 AM",
                },
              ],
              progressLabel: "Hilary Paper Targets",
              progressVal: 78,
              btnLeft: "Group Wiki",
              btnRight: "Allocate GPUs",
            },
          ],
          tableTitle: "Doctoral Supervision Roster & Milestone Tracking",
          tableHeaders: [
            "Scholar ID",
            "DPhil Candidate Name",
            "Thesis Research Topic",
            "Current Stage",
            "Funding Body",
            "Next Supervision",
            "Action",
          ],
          tableRows: [
            [
              "OXF-DP-401",
              "Priya Nair (Balliol)",
              "Fault-Tolerant Logical Qubits on Neutral Atom Arrays",
              "Year 4 • Final Viva",
              "Clarendon + EPSRC",
              { text: "Viva: 29 Nov", cls: "pill_teal" },
              "View Thesis",
            ],
            [
              "OXF-DP-418",
              "Lucas Meyer (Trinity)",
              "Causal Representation Learning in Embodied Agents",
              "Year 3 • Confirmation",
              "DeepMind Scholar",
              { text: "Confirmed", cls: "pill_teal" },
              "GSS Report",
            ],
            [
              "OXF-DP-432",
              "Heng Zhang (Magdalen)",
              "Post-Quantum Zero-Knowledge Rollups at Scale",
              "Year 2 • PRS Transfer",
              "UKRI CDT",
              { text: "Transfer Due", cls: "pill_amber" },
              "Approve Transfer",
            ],
            [
              "OXF-DP-449",
              "Amara Okafor (St John's)",
              "Mechanistic Interpretability of Multimodal Reasoning",
              "Year 2 • PRS Transfer",
              "Rhodes Trust",
              { text: "On Track", cls: "pill_teal" },
              "GSS Report",
            ],
            [
              "OXF-DP-465",
              "Oliver Bennett (New College)",
              "Certifiable Safety Shields for Surgical Robotics",
              "Year 1 • Probationary",
              "Wellcome Trust",
              { text: "Lit Review", cls: "pill_primary" },
              "Set Milestones",
            ],
          ],
        },
        {
          id: "fac-grants",
          label: "Grants & Sabbatical",
          icon: "fa-sack-dollar",
          badge: "£245k Active",
          eyebrow: "Research Services & Departmental Finance • PI Ledger",
          title:
            "Principal Investigator Grants, Equipment Budgets & Sabbatical Leave",
          subtitle:
            "Track UKRI/ERC research grant expenditure, postdoc hiring requisitions, conference travel approvals, and statutory sabbatical entitlement.",
          primaryBtn: "New Grant Costing (X5)",
          secondaryBtn: "Download Financial Statement",
          kpis: [
            {
              label: "Active PI Grant Portfolio",
              value: "£245,000",
              trend: "2 Active Awards",
              foot: "UKRI EPSRC & Royal Society",
              icon: "fa-vault",
              color: "kpi_primary",
            },
            {
              label: "Available Travel & Equip Pool",
              value: "£42,800",
              trend: "Uncommitted",
              foot: "FY 2026/27 Balance",
              icon: "fa-plane-up",
              color: "kpi_teal",
            },
            {
              label: "Sabbatical Entitlement",
              value: "1 Term Accrued",
              trend: "7 Terms Served",
              foot: "Eligible: Michaelmas 2027",
              icon: "fa-compass",
              color: "kpi_amber",
            },
            {
              label: "Postdoc & RA Positions",
              value: "03 Funded FTE",
              trend: "Grade 7 / 8",
              foot: "Contracts Active to 2028",
              icon: "fa-id-badge",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Active Faculty Research Grants & Institutional Allocations",
          cards: [
            {
              tag: "Lead PI Award",
              tagColor: "tag_primary",
              code: "EPSRC-EP/Y04",
              title: "UKRI EPSRC New Horizons: Verifiable Quantum Cloud",
              desc: "Three-year investigator grant funding two postdoctoral fellows, cryogenic control hardware, and international workshops.",
              meta: [
                {
                  icon: "fa-sterling-sign",
                  label: "Total Award",
                  val: "£180,000 (FEC 80%)",
                },
                {
                  icon: "fa-chart-pie",
                  label: "Utilised",
                  val: "£112,400 (62%)",
                },
                { icon: "fa-calendar", label: "End Date", val: "30 Sep 2028" },
              ],
              progressLabel: "Grant Budget Utilisation",
              progressVal: 62,
              btnLeft: "Expenditure Ledger",
              btnRight: "Requisition Equipment",
            },
            {
              tag: "Industry Fellowship",
              tagColor: "tag_teal",
              code: "RS-INF-2026",
              title: "Royal Society & Oxford Industrial Fellowship",
              desc: "Collaborative academic-industry research award supporting high-assurance AI verification and compute cluster credits.",
              meta: [
                {
                  icon: "fa-sterling-sign",
                  label: "Total Award",
                  val: "£65,000 Direct",
                },
                {
                  icon: "fa-microchip",
                  label: "Compute Grant",
                  val: "120k H100 GPU Hrs",
                },
                { icon: "fa-calendar", label: "End Date", val: "31 Mar 2028" },
              ],
              progressLabel: "Grant Budget Utilisation",
              progressVal: 48,
              btnLeft: "View Award Terms",
              btnRight: "Annual Report",
            },
            {
              tag: "Statutory Leave",
              tagColor: "tag_amber",
              code: "SAB-2027",
              title: "Collegiate & Departmental Sabbatical Leave Planner",
              desc: "Apply for dispensation from lecturing and tutorial duties to pursue visiting professorships or monograph completion.",
              meta: [
                {
                  icon: "fa-clock-rotate-left",
                  label: "Qualifying Service",
                  val: "7 Full Terms",
                },
                {
                  icon: "fa-building-columns",
                  label: "Host Institution",
                  val: "ETH Zürich (Planned)",
                },
                {
                  icon: "fa-check",
                  label: "College Approval",
                  val: "Governing Body Cleared",
                },
              ],
              progressLabel: "Sabbatical Accrual (7/7 Terms)",
              progressVal: 100,
              btnLeft: "Submit Leave Form",
              btnRight: "Buyout Calculator",
            },
          ],
          tableTitle: "Departmental Grant Accounts & Expenditure Breakdown",
          tableHeaders: [
            "Grant Code",
            "Funding Sponsor",
            "Cost Category",
            "Total Allocated",
            "Spent to Date",
            "Remaining Balance",
            "Action",
          ],
          tableRows: [
            [
              "EPSRC-EP/Y04-A",
              "UKRI EPSRC",
              "Postdoctoral RA Salaries (2 FTE)",
              "£120,000",
              "£78,000",
              { text: "£42,000 Left", cls: "pill_teal" },
              "Payroll Statement",
            ],
            [
              "EPSRC-EP/Y04-B",
              "UKRI EPSRC",
              "FPGA & Cryo-Controller Hardware",
              "£40,000",
              "£26,400",
              { text: "£13,600 Left", cls: "pill_teal" },
              "Raise PO",
            ],
            [
              "EPSRC-EP/Y04-C",
              "UKRI EPSRC",
              "International Conference & Symposia",
              "£20,000",
              "£8,000",
              { text: "£12,000 Left", cls: "pill_primary" },
              "Approve Travel",
            ],
            [
              "RS-INF-2026-A",
              "Royal Society",
              "High-Performance GPU Cluster Node",
              "£45,000",
              "£24,500",
              { text: "£20,500 Left", cls: "pill_teal" },
              "Invoice Audit",
            ],
            [
              "TRIN-FEL-ALL",
              "Trinity College",
              "Fellows' Research & Book Allowance",
              "£4,500",
              "£1,850",
              { text: "£2,650 Left", cls: "pill_amber" },
              "Submit Receipt",
            ],
          ],
        },
      ],
    },
    Researcher: {
      roleKey: "Researcher",
      roleBadge: "Doctoral Researcher / Fellow",
      menuHeader: "Researcher & Fellow Menu",
      avatarIcon: "fa-microscope",
      department: "Oxford Quantum & Biomedical AI Institute",
      termStatus: "Hilary Term 2026/27 • Postdoctoral / DPhil Research Fellow",
      helpTitle: "HPC & Cryo-Lab Desk",
      helpText:
        "ARC Supercomputer Node B maintenance scheduled Sunday 02:00–04:00 GMT.",
      tabs: [
        {
          id: "res-overview",
          label: "Research Hub Overview",
          icon: "fa-atom",
          badge: "3 Active Labs",
          eyebrow: "Oxford Research Division • Fellow Command Center",
          title:
            "Interdisciplinary Research Projects, Lab Telemetry & Milestones",
          subtitle:
            "Monitor your active grant workpackages, ARC supercomputing GPU jobs, peer-reviewed publication pipeline, and CUREC ethics clearances.",
          primaryBtn: "Submit Preprint to ORA",
          secondaryBtn: "Launch Jupyter HPC Cluster",
          kpis: [
            {
              label: "Active Research Funding",
              value: "£420,000",
              trend: "Wellcome + UKRI",
              foot: "3 Workpackages Live",
              icon: "fa-flask",
              color: "kpi_primary",
            },
            {
              label: "Indexed Publications",
              value: "14 Papers",
              trend: "310 Citations",
              foot: "h-Index: 9 (Google Scholar)",
              icon: "fa-book-journal-whills",
              color: "kpi_teal",
            },
            {
              label: "HPC GPU Cluster Quota",
              value: "84.2k Hrs",
              trend: "16x NVIDIA H100",
              foot: "99.9% Job Uptime",
              icon: "fa-microchip",
              color: "kpi_amber",
            },
            {
              label: "CUREC Ethics Protocols",
              value: "03 Cleared",
              trend: "Zero Non-Compliance",
              foot: "Valid Through 2028",
              icon: "fa-shield-halved",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Active Research Workpackages & Laboratory Streams",
          cards: [
            {
              tag: "Quantum Hardware",
              tagColor: "tag_primary",
              code: "WP1-CRYO",
              title: "Fault-Tolerant Superconducting Transmon Qubit Arrays",
              desc: "Characterising coherence times and cross-resonance gate fidelities in sub-15 millikelvin dilution refrigerators.",
              meta: [
                {
                  icon: "fa-temperature-low",
                  label: "Cryo Temp",
                  val: "11.4 mK Stable",
                },
                {
                  icon: "fa-bullseye",
                  label: "2Q Gate Fidelity",
                  val: "99.84% Verified",
                },
                {
                  icon: "fa-building",
                  label: "Facility",
                  val: "Beecroft Basement Lab 2",
                },
              ],
              progressLabel: "Workpackage Deliverable",
              progressVal: 81,
              btnLeft: "Live Cryo Telemetry",
              btnRight: "Lab Logbook",
            },
            {
              tag: "Biomedical AI",
              tagColor: "tag_teal",
              code: "WP2-PROT",
              title: "Generative Diffusion Models for De Novo Antibody Design",
              desc: "Training equivariant graph neural networks on cryo-EM structural datasets with wet-lab binding affinity validation.",
              meta: [
                {
                  icon: "fa-dna",
                  label: "Dataset",
                  val: "2.1M Protein Complexes",
                },
                {
                  icon: "fa-server",
                  label: "Compute Node",
                  val: "Oxford JADE-3 Cluster",
                },
                {
                  icon: "fa-vial-circle-check",
                  label: "Assays Tested",
                  val: "48 Candidates",
                },
              ],
              progressLabel: "Workpackage Deliverable",
              progressVal: 74,
              btnLeft: "Model Checkpoints",
              btnRight: "Assay Results",
            },
            {
              tag: "Autonomous Systems",
              tagColor: "tag_amber",
              code: "WP3-ROBO",
              title:
                "Formal Safety Verification for Dexterous Surgical Robotics",
              desc: "Control barrier functions and real-time force-feedback teleoperation under sub-millimetre tissue deformation.",
              meta: [
                {
                  icon: "fa-robot",
                  label: "Platform",
                  val: "DaVinci Research Kit",
                },
                {
                  icon: "fa-gauge-simple-high",
                  label: "Control Loop",
                  val: "1.0 kHz Deterministic",
                },
                {
                  icon: "fa-hospital",
                  label: "Clinical Partner",
                  val: "John Radcliffe Hospital",
                },
              ],
              progressLabel: "Workpackage Deliverable",
              progressVal: 66,
              btnLeft: "ROS2 Telemetry",
              btnRight: "Safety Proofs",
            },
          ],
          tableTitle:
            "Research Project Deliverables & Quarterly Grant Milestones",
          tableHeaders: [
            "Workpackage ID",
            "Milestone Deliverable",
            "Funding Body",
            "Lead Investigator",
            "Target Date",
            "Status",
            "Action",
          ],
          tableRows: [
            [
              "WP1-CRYO-M4",
              "64-Qubit Logical Memory Demonstration Report",
              "UKRI EPSRC",
              "Dr. Devendra Patel",
              "15 Nov 2026",
              { text: "On Schedule", cls: "pill_teal" },
              "Upload Data",
            ],
            [
              "WP2-PROT-M3",
              "Cryo-EM Binding Affinity Wet-Lab Validation",
              "Wellcome Trust",
              "Dr. Eleanor Vance",
              "28 Nov 2026",
              { text: "In Review", cls: "pill_amber" },
              "View Assays",
            ],
            [
              "WP3-ROBO-M2",
              "Lyapunov Barrier Certificate Hardware-in-Loop",
              "Horizon Europe",
              "Prof. Rohit Kulkarni",
              "10 Dec 2026",
              { text: "Verified", cls: "pill_teal" },
              "Open Repo",
            ],
            [
              "ORA-DATA-09",
              "Open-Access Zenodo & Bodleian Dataset Deposit",
              "UKRI Open Science",
              "Fellowship Team",
              "18 Dec 2026",
              { text: "Drafting DOI", cls: "pill_primary" },
              "Mint DOI",
            ],
            [
              "PAT-OXI-2026",
              "Oxford University Innovation (OUI) Patent Filing",
              "OUI Seed Fund",
              "Dr. Devendra Patel",
              "12 Jan 2027",
              { text: "Prior Art Cleared", cls: "pill_navy" },
              "IP Dossier",
            ],
          ],
        },
        {
          id: "res-grants",
          label: "Grants & Fellowships",
          icon: "fa-hand-holding-dollar",
          badge: "£420k Portfolio",
          eyebrow: "Research Services • External & Collegiate Fellowships",
          title:
            "Research Grant Portfolio, Costing Ledgers & Fellowship Applications",
          subtitle:
            "Track your active Wellcome Trust, UKRI, and Horizon Europe awards, consumable budgets, and Junior Research Fellowship (JRF) calls.",
          primaryBtn: "Launch X5 Costing Tool",
          secondaryBtn: "Download Funder Audit",
          kpis: [
            {
              label: "Total Awarded Portfolio",
              value: "£420,000",
              trend: "3-Year Tenure",
              foot: "100% Overhead Covered",
              icon: "fa-coins",
              color: "kpi_primary",
            },
            {
              label: "Lab Consumables Balance",
              value: "£38,450",
              trend: "Reagents & Cryogens",
              foot: "Liquid Helium Covered",
              icon: "fa-vials",
              color: "kpi_teal",
            },
            {
              label: "Pending Proposals",
              value: "02 Submitted",
              trend: "ERC Starting Grant",
              foot: "Stage 2 Interview",
              icon: "fa-file-invoice-dollar",
              color: "kpi_amber",
            },
            {
              label: "Equipment Depreciation",
              value: "Cleared",
              trend: "Asset Register Verified",
              foot: "Beecroft Inventory",
              icon: "fa-clipboard-check",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Active Fellowship Awards & Open Funding Opportunities",
          cards: [
            {
              tag: "Active Fellowship",
              tagColor: "tag_primary",
              code: "WT-224910",
              title: "Wellcome Trust Early-Career Biomedical AI Fellowship",
              desc: "Supports salary, wet-lab structural biology consumables, high-memory GPU nodes, and international symposium travel.",
              meta: [
                {
                  icon: "fa-sterling-sign",
                  label: "Award Value",
                  val: "£285,000 Total",
                },
                {
                  icon: "fa-calendar-check",
                  label: "Grant Period",
                  val: "2025 – 2028",
                },
                {
                  icon: "fa-file-Waveform",
                  label: "Next Report",
                  val: "Researchfish Mar 2027",
                },
              ],
              progressLabel: "Budget Utilised (£148k / £285k)",
              progressVal: 52,
              btnLeft: "Grant Ledger",
              btnRight: "Order Consumables",
            },
            {
              tag: "Active Co-I Award",
              tagColor: "tag_teal",
              code: "UKRI-QT99",
              title: "UKRI National Quantum Computing Centre (NQCC) Hub Grant",
              desc: "Hardware fabrication and benchmarking grant with Harwell Campus and Oxford Physics cleanroom access.",
              meta: [
                {
                  icon: "fa-sterling-sign",
                  label: "Award Value",
                  val: "£135,000 Direct",
                },
                {
                  icon: "fa-microchip",
                  label: "Foundry Runs",
                  val: "4 Wafer Tape-outs",
                },
                {
                  icon: "fa-building-shield",
                  label: "Partner",
                  val: "Harwell NQCC Lab",
                },
              ],
              progressLabel: "Budget Utilised (£81k / £135k)",
              progressVal: 60,
              btnLeft: "Foundry Schedule",
              btnRight: "Expense Claim",
            },
            {
              tag: "Stage 2 Shortlisted",
              tagColor: "tag_amber",
              code: "ERC-STG-27",
              title: "European Research Council (ERC) Starting Grant Proposal",
              desc: "€1.5M frontier research proposal on autonomous self-driving laboratories for materials discovery.",
              meta: [
                {
                  icon: "fa-euro-sign",
                  label: "Requested",
                  val: "€1,500,000 (5 Years)",
                },
                {
                  icon: "fa-comments",
                  label: "Panel Interview",
                  val: "Brussels • 08 Dec 2026",
                },
                {
                  icon: "fa-user-check",
                  label: "Mock Panel",
                  val: "Wellington Sq • 24 Nov",
                },
              ],
              progressLabel: "Interview Deck Prep",
              progressVal: 88,
              btnLeft: "Proposal Dossier",
              btnRight: "Mock Viva Feedback",
            },
          ],
          tableTitle: "Research Grant Expenditure & Requisition Ledger",
          tableHeaders: [
            "Requisition ID",
            "Grant Account",
            "Vendor / Description",
            "Category",
            "Date",
            "Amount (£)",
            "Action",
          ],
          tableRows: [
            [
              "PO-OXF-55102",
              "UKRI-QT99",
              "Oxford Instruments — Dilution Cryostat Mix Chamber",
              "Cryo Hardware",
              "14 Oct 2026",
              "£18,400.00",
              { text: "Delivered", cls: "pill_teal" },
              "Asset Tag",
            ],
            [
              "PO-OXF-55148",
              "WT-224910",
              "Illumina NextSeq High-Output Reagent Cartridges",
              "Wet-Lab Consumables",
              "21 Oct 2026",
              "£6,250.00",
              { text: "Cleared", cls: "pill_teal" },
              "Invoice PDF",
            ],
            [
              "PO-OXF-55190",
              "WT-224910",
              "NVIDIA H100 NVLink Dedicated Node Expansion",
              "Compute Infrastructure",
              "28 Oct 2026",
              "£24,800.00",
              { text: "Provisioned", cls: "pill_teal" },
              "Node Config",
            ],
            [
              "TRV-OXF-55211",
              "UKRI-QT99",
              "APS March Meeting Conference Travel & Poster",
              "Academic Travel",
              "02 Nov 2026",
              "£1,420.00",
              { text: "Approved", cls: "pill_primary" },
              "Travel Voucher",
            ],
            [
              "PUB-OXF-55239",
              "WT-224910",
              "Nature Methods Gold Open-Access APC Charge",
              "Publication Fee",
              "04 Nov 2026",
              "£3,150.00",
              { text: "Bodleian Paid", cls: "pill_amber" },
              "OA Receipt",
            ],
          ],
        },
        {
          id: "res-publications",
          label: "Publications & Peer Review",
          icon: "fa-newspaper",
          badge: "14 Indexed",
          eyebrow: "Oxford Research Archive (ORA) • Journal Pipeline",
          title: "Peer-Reviewed Publications, Preprints & Referee Assignments",
          subtitle:
            "Manage your Nature, IEEE, and NeurIPS manuscript submissions, REF 2028 open-access compliance, and journal peer-review duties.",
          primaryBtn: "Deposit Manuscript to ORA",
          secondaryBtn: "Sync ORCID Profile",
          kpis: [
            {
              label: "Total Peer-Reviewed Papers",
              value: "14 Published",
              trend: "+4 in 2026",
              foot: "100% REF Open-Access",
              icon: "fa-book-open",
              color: "kpi_primary",
            },
            {
              label: "Citation Impact",
              value: "310 Citations",
              trend: "Field-Weighted: 2.8x",
              foot: "Scopus & Web of Science",
              icon: "fa-arrow-trend-up",
              color: "kpi_teal",
            },
            {
              label: "Manuscripts Under Review",
              value: "03 Active",
              trend: "2 Minor Revisions",
              foot: "Nature Mach. Intell. & ICML",
              icon: "fa-hourglass-start",
              color: "kpi_amber",
            },
            {
              label: "Peer Reviews Completed",
              value: "19 Manuscripts",
              trend: "Top 10% Reviewer",
              foot: "NeurIPS & Nature Comms",
              icon: "fa-magnifying-glass-chart",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Featured Manuscripts & High-Impact Research Outputs",
          cards: [
            {
              tag: "Nature Portfolio",
              tagColor: "tag_primary",
              code: "NMI-2026-08",
              title: "Equivariant Diffusion for Sub-Angstrom Protein Docking",
              desc: "Accepted in principle at Nature Machine Intelligence with open-source PyTorch weights and Cryo-EM benchmark suite.",
              meta: [
                {
                  icon: "fa-star",
                  label: "Impact Factor",
                  val: "23.8 (Q1 Top 1%)",
                },
                {
                  icon: "fa-code-branch",
                  label: "GitHub Stars",
                  val: "1,420+ Forks",
                },
                {
                  icon: "fa-lock-open",
                  label: "License",
                  val: "CC-BY 4.0 Open Access",
                },
              ],
              progressLabel: "Camera-Ready Proofs",
              progressVal: 95,
              btnLeft: "Approve Galley Proofs",
              btnRight: "View Code Repo",
            },
            {
              tag: "Physical Review X",
              tagColor: "tag_teal",
              code: "PRX-2026-11",
              title: "Fault-Tolerant Lattice Surgery on 2D Neutral Atom Arrays",
              desc: "Demonstrates a 4x reduction in physical qubit overhead using dynamic Rydberg atom shuttling and erasure conversion.",
              meta: [
                {
                  icon: "fa-star",
                  label: "Impact Factor",
                  val: "12.5 (APS Flagship)",
                },
                {
                  icon: "fa-users",
                  label: "Co-Authors",
                  val: "Oxford & Harwell NQCC",
                },
                {
                  icon: "fa-file-pdf",
                  label: "arXiv ID",
                  val: "arXiv:2610.09412",
                },
              ],
              progressLabel: "Referee Rebuttal Cycle",
              progressVal: 80,
              btnLeft: "Submit Rebuttal Letter",
              btnRight: "Referee Reports",
            },
            {
              tag: "NeurIPS Spotlight",
              tagColor: "tag_amber",
              code: "NEURIPS-26",
              title:
                "Certifiable Control Barrier Shields for Autonomous Surgery",
              desc: "Selected for oral spotlight presentation (top 3% of submissions) with real-time phantom tissue demonstrations.",
              meta: [
                {
                  icon: "fa-trophy",
                  label: "Track",
                  val: "Oral Spotlight (Top 3%)",
                },
                {
                  icon: "fa-calendar",
                  label: "Presentation",
                  val: "10 Dec 2026 • Hall A",
                },
                {
                  icon: "fa-video",
                  label: "Demo Video",
                  val: "4K Supplementary Ready",
                },
              ],
              progressLabel: "Slide & Poster Finalisation",
              progressVal: 90,
              btnLeft: "Download Poster PDF",
              btnRight: "Conference Portal",
            },
          ],
          tableTitle: "Publication Pipeline & Journal Submission Tracker",
          tableHeaders: [
            "Manuscript ID",
            "Paper Title",
            "Target Journal / Venue",
            "Submission Date",
            "REF Compliance",
            "Stage",
            "Action",
          ],
          tableRows: [
            [
              "NMI-26-0841",
              "Equivariant Diffusion for Sub-Angstrom Protein Docking",
              "Nature Machine Intelligence",
              "14 Jul 2026",
              "ORA Deposited",
              { text: "Accepted / Proofs", cls: "pill_teal" },
              "View Galley",
            ],
            [
              "PRX-26-1192",
              "Fault-Tolerant Lattice Surgery on Neutral Atom Arrays",
              "Physical Review X (APS)",
              "02 Sep 2026",
              "arXiv + ORA",
              { text: "Minor Revision", cls: "pill_amber" },
              "Upload Response",
            ],
            [
              "NIPS-26-4410",
              "Certifiable Control Barrier Shields for Surgery",
              "NeurIPS 2026 Main Track",
              "22 May 2026",
              "ORA Verified",
              { text: "Spotlight Oral", cls: "pill_teal" },
              "Slide Deck",
            ],
            [
              "ICML-27-0194",
              "Scalable Mechanistic Interpretability in State-Space Models",
              "ICML 2027 Submission",
              "25 Oct 2026",
              "Preprint Ready",
              { text: "Double-Blind Review", cls: "pill_primary" },
              "Track Status",
            ],
            [
              "IEEE-TRO-882",
              "High-Bandwidth Haptic Teleoperation Over 5G Slicing",
              "IEEE Trans. on Robotics",
              "18 Jun 2026",
              "Gold OA Paid",
              { text: "Published", cls: "pill_teal" },
              "Read DOI",
            ],
          ],
        },
        {
          id: "res-labs",
          label: "Quantum & HPC Bookings",
          icon: "fa-server",
          badge: "16x H100 Live",
          eyebrow:
            "Beecroft Laboratories & ARC Supercomputing • Facility Scheduler",
          title: "Supercomputer GPU Clusters, Cryo-EM & Cleanroom Reservations",
          subtitle:
            "Schedule dedicated Slurm GPU compute nodes, Beecroft sub-kelvin cryostat bay time, and Class-100 nanofabrication cleanroom slots.",
          primaryBtn: "Reserve Lab / Cluster Slot",
          secondaryBtn: "View Slurm Queue Telemetry",
          kpis: [
            {
              label: "Active Slurm GPU Jobs",
              value: "04 Running",
              trend: "16x H100 SXM5",
              foot: "94% Tensor Core Util",
              icon: "fa-microchip",
              color: "kpi_primary",
            },
            {
              label: "Cryostat Bay Allocation",
              value: "Bay 02 Active",
              trend: "11.4 mK Base",
              foot: "Reserved Thru 18 Nov",
              icon: "fa-snowflake",
              color: "kpi_teal",
            },
            {
              label: "Cleanroom Access Tier",
              value: "Class-100",
              trend: "E-Beam Litho Cleared",
              foot: "Laser Safety Level 4",
              icon: "fa-user-Astronaut",
              color: "kpi_amber",
            },
            {
              label: "Ceph Research Storage",
              value: "42.8 / 50 TB",
              trend: " ZFS Snapshots On",
              foot: "Dual-Site Replicated",
              icon: "fa-hard-drive",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Core Research Facilities & Shared Instrumentation",
          cards: [
            {
              tag: "ARC HPC Cloud",
              tagColor: "tag_primary",
              code: "JADE-H100",
              title: "Oxford ARC JADE-3 GPU Supercomputing Cluster",
              desc: "High-density NVIDIA H100 80GB NVLink cluster with InfiniBand NDR fabric for large-scale foundation model training.",
              meta: [
                {
                  icon: "fa-bolt",
                  label: "Peak Compute",
                  val: "32 PFLOPS FP8",
                },
                {
                  icon: "fa-terminal",
                  label: "Scheduler",
                  val: "Slurm 23.11 Priority",
                },
                {
                  icon: "fa-clock",
                  label: "Max Walltime",
                  val: "72 Hours / Job",
                },
              ],
              progressLabel: "Term GPU Allocation Used",
              progressVal: 68,
              btnLeft: "SSH Web Terminal",
              btnRight: "Slurm Job Script",
            },
            {
              tag: "Sub-Kelvin Lab",
              tagColor: "tag_teal",
              code: "BEE-CRYO2",
              title: "Beecroft Building Ultralow-Vibration Cryogenic Bay",
              desc: "Keel-slab isolated basement laboratory housing Bluefors LD400 dilution refrigerators and microwave AWG racks.",
              meta: [
                {
                  icon: "fa-wave-square",
                  label: "Vibration Floor",
                  val: "< 0.5 nm/s RMS",
                },
                {
                  icon: "fa-temperature-arrow-down",
                  label: "Mixing Plate",
                  val: "11.4 mK Continuous",
                },
                { icon: "fa-shield", label: "O2 Sensor", val: "20.9% Normal" },
              ],
              progressLabel: "Current Run Completion",
              progressVal: 84,
              btnLeft: "Cryo Grafana Panel",
              btnRight: "Extend Booking",
            },
            {
              tag: "Nanofabrication",
              tagColor: "tag_amber",
              code: "FAB-CLEAN",
              title: "Wolfson Nanofabrication Cleanroom & E-Beam Suite",
              desc: "100 kV electron-beam lithography, atomic layer deposition (ALD), and scanning electron microscopy (SEM) metrology.",
              meta: [
                {
                  icon: "fa-Crosshairs",
                  label: "Resolution",
                  val: "< 4 nm Linewidth",
                },
                {
                  icon: "fa-wind",
                  label: "Air Quality",
                  val: "ISO 5 (Class 100)",
                },
                {
                  icon: "fa-calendar",
                  label: "Next Slot",
                  val: "Wed • 09:00–13:00",
                },
              ],
              progressLabel: "Wafer Batch Fabrication",
              progressVal: 75,
              btnLeft: "Book E-Beam Tool",
              btnRight: "SOP Checklist",
            },
          ],
          tableTitle: "Instrumentation, Cleanroom & HPC Reservation Schedule",
          tableHeaders: [
            "Booking Ref",
            "Facility / Instrument",
            "Building & Room",
            "Reserved Window",
            "Allocation",
            "Status",
            "Action",
          ],
          tableRows: [
            [
              "SLURM-99412",
              "JADE-3 Partition (2 Nodes • 16x H100 GPUs)",
              "ARC Data Centre • Begbroke",
              "27 Oct – 30 Oct 2026",
              "1,152 GPU Hrs",
              { text: "Running (88%)", cls: "pill_teal" },
              "Inspect Logs",
            ],
            [
              "CRYO-88204",
              "Bluefors LD400 Dilution Fridge + Zurich QCCS",
              "Beecroft Basement • Bay 2",
              "20 Oct – 18 Nov 2026",
              "Continuous Cooldown",
              { text: "Active @ 11.4mK", cls: "pill_teal" },
              "Telemetry",
            ],
            [
              "FAB-77319",
              "JEOL JBX-8100FS Electron-Beam Lithography",
              "Wolfson Cleanroom • Zone A",
              "30 Oct 2026 • 09:00",
              "4 Hour Slot",
              { text: "Confirmed", cls: "pill_primary" },
              "Wafer Recipe",
            ],
            [
              "BIOM-66401",
              "Titan Krios G4 300kV Cryo-TEM Microscope",
              "STRUBI Structural Bio Ctr",
              "05 Nov 2026 • 14:00",
              "8 Hour Session",
              { text: "Grid Approved", cls: "pill_amber" },
              "Sample Sheet",
            ],
            [
              "ROBO-55108",
              "Vicon Optical Motion Capture Arena + DaVinci",
              "Thom Building • Robotics Lab",
              "09 Nov 2026 • 10:00",
              "Full Day",
              { text: "Scheduled", cls: "pill_navy" },
              "Safety Sign-Off",
            ],
          ],
        },
        {
          id: "res-ethics",
          label: "Ethics & IP Registry",
          icon: "fa-scale-balanced",
          badge: "3 Patents",
          eyebrow: "CUREC Ethics & Oxford University Innovation (OUI)",
          title:
            "Research Ethics Clearances, Patent Filings & Material Transfers",
          subtitle:
            "Manage Central University Research Ethics Committee (CUREC) approvals, GDPR clinical data governance, and spinout IP disclosures.",
          primaryBtn: "New CUREC Ethics Form",
          secondaryBtn: "File Invention Disclosure",
          kpis: [
            {
              label: "Active CUREC Approvals",
              value: "03 Protocols",
              trend: "Tier 1 & Tier 2",
              foot: "Annual Audit Passed",
              icon: "fa-file-shield",
              color: "kpi_teal",
            },
            {
              label: "Patent Applications",
              value: "03 PCT Filings",
              trend: "UKIPO & EPO",
              foot: "Managed by OUI",
              icon: "fa-lightbulb",
              color: "kpi_primary",
            },
            {
              label: "Material / Data Agreements",
              value: "05 MTAs / NDAs",
              trend: "Legal Signed",
              foot: "NHS & Industry Partners",
              icon: "fa-handshake",
              color: "kpi_amber",
            },
            {
              label: "Data Management Plans",
              value: "100% Compliant",
              trend: "ISO 27001 Vault",
              foot: "Zero Security Incidents",
              icon: "fa-lock",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Intellectual Property Commercialisation & Governance",
          cards: [
            {
              tag: "Patent Filing",
              tagColor: "tag_primary",
              code: "OUI-PAT-419",
              title:
                "Cryogenic Multiplexed Qubit Readout Resonator Architecture",
              desc: "PCT international patent application filed via Oxford University Innovation covering low-power Josephson parametric amplifiers.",
              meta: [
                {
                  icon: "fa-globe",
                  label: "Jurisdictions",
                  val: "UK, EU, US, Japan",
                },
                {
                  icon: "fa-user-tie",
                  label: "OUI Case Manager",
                  val: "Dr. Simon Hargreaves",
                },
                {
                  icon: "fa-building",
                  label: "Licensee Interest",
                  val: "2 Quantum Spinouts",
                },
              ],
              progressLabel: "PCT Examination Stage",
              progressVal: 75,
              btnLeft: "Patent Claims PDF",
              btnRight: "OUI Portal",
            },
            {
              tag: "Clinical Ethics",
              tagColor: "tag_teal",
              code: "CUREC-R84912",
              title: "De-Identified Cryo-EM & Patient Proteomics Data Protocol",
              desc: "Medical Sciences Interdivisional Research Ethics Committee clearance for anonymised structural biology datasets.",
              meta: [
                {
                  icon: "fa-user-shield",
                  label: "Review Body",
                  val: "MS IDREC + NHS REC",
                },
                {
                  icon: "fa-database",
                  label: "Storage",
                  val: "Trusted Research Env",
                },
                {
                  icon: "fa-calendar-check",
                  label: "Valid Until",
                  val: "31 Dec 2028",
                },
              ],
              progressLabel: "Compliance Audit Score",
              progressVal: 100,
              btnLeft: "Approval Certificate",
              btnRight: "Data DPIA",
            },
            {
              tag: "Spinout Incubator",
              tagColor: "tag_amber",
              code: "OSE-SEED-27",
              title:
                "Oxford Science Enterprises (OSE) Translational Seed Track",
              desc: "Pre-seed commercialisation mentorship and £150k translational proof-of-concept funding for academic founders.",
              meta: [
                { icon: "fa-rocket", label: "Stage", val: "Proof-of-Concept" },
                {
                  icon: "fa-sterling-sign",
                  label: "Translational Fund",
                  val: "£150,000 Approved",
                },
                {
                  icon: "fa-users",
                  label: "Advisory Board",
                  val: "3 Venture Fellows",
                },
              ],
              progressLabel: "Spinout Readiness",
              progressVal: 64,
              btnLeft: "Pitch Deck Vault",
              btnRight: "Term Sheet",
            },
          ],
          tableTitle:
            "Ethics Clearances, Patent Disclosures & Legal Agreements",
          tableHeaders: [
            "Protocol / Ref",
            "Document Title",
            "Governing Body",
            "Classification",
            "Effective Date",
            "Status",
            "Action",
          ],
          tableRows: [
            [
              "CUREC-R84912",
              "Anonymised Structural Proteomics AI Training Protocol",
              "Medical Sciences IDREC",
              "CUREC Tier 2",
              "10 Jan 2026",
              { text: "Approved & Active", cls: "pill_teal" },
              "Certificate",
            ],
            [
              "CUREC-CS7104",
              "Human-in-the-Loop Surgical Teleoperation User Study",
              "Computer Science CUREC",
              "CUREC Tier 1B",
              "18 Mar 2026",
              { text: "Approved & Active", cls: "pill_teal" },
              "Consent Forms",
            ],
            [
              "OUI-IDF-2026-9",
              "Equivariant Antibody Affinity Scoring Engine (Software IP)",
              "Oxford Univ. Innovation",
              "Royalty License",
              "04 Sep 2026",
              { text: "Licensed", cls: "pill_primary" },
              "License Terms",
            ],
            [
              "PCT/GB2026/051",
              "Cryogenic Multiplexed Qubit Readout Resonator",
              "EPO / UK Patent Office",
              "PCT Patent",
              "22 Jul 2026",
              { text: "Patent Pending", cls: "pill_amber" },
              "Prior Art",
            ],
            [
              "MTA-JRH-2026",
              "John Radcliffe Hospital Tissue Phantom Material Transfer",
              "Oxford Research Services",
              "Clinical MTA",
              "12 Oct 2026",
              { text: "Executed", cls: "pill_teal" },
              "View Contract",
            ],
          ],
        },
      ],
    },

    Admissions: {
      roleKey: "Admissions",
      roleBadge: "Admissions & Registry Administrator",
      menuHeader: "Admissions & Registry Menu",
      avatarIcon: "fa-user-shield",
      department: "Wellington Square Central Admissions & UKVI Registry",
      termStatus: "2026/27 Global Intake Cycle • Senior Registry Officer",
      helpTitle: "UCAS & UKVI Sync Live",
      helpText:
        "October 15th Oxbridge UCAS feed synced: 18,420 complete dossiers indexed.",
      tabs: [
        {
          id: "adm-overview",
          label: "Registry Overview",
          icon: "fa-chart-pie",
          badge: "18.4k Apps",
          eyebrow: "Central Admissions Registry • 2026/27 Intake Command",
          title: "University Admissions Funnel, College Quotas & Offer Ledger",
          subtitle:
            "Oversee global UCAS and Postgraduate Direct applications, college shortlisting ratios, scholarship allocations, and UKVI CAS issuance.",
          primaryBtn: "Export Intake Report",
          secondaryBtn: "Batch Issue Offer Letters",
          kpis: [
            {
              label: "Total 2026/27 Applications",
              value: "18,420",
              trend: "+6.4% YoY Growth",
              foot: "142 Countries Represented",
              icon: "fa-file-Waveform",
              color: "kpi_primary",
            },
            {
              label: "Shortlisted for Interview",
              value: "6,280",
              trend: "34.1% Shortlist Rate",
              foot: "Panels Assigned Across 39 Colleges",
              icon: "fa-users-viewfinder",
              color: "kpi_teal",
            },
            {
              label: "Conditional / Unconditional Offers",
              value: "3,410",
              trend: "98.2% Target Met",
              foot: "UG + PG Combined",
              icon: "fa-envelope-open-text",
              color: "kpi_amber",
            },
            {
              label: "UKVI CAS & Visa Clearance",
              value: "96.4%",
              trend: "1,890 CAS Issued",
              foot: "Zero Sponsor Compliance Flags",
              icon: "fa-passport",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Division Intake Quotas & Application Stream Status",
          cards: [
            {
              tag: "Undergraduate UCAS",
              tagColor: "tag_primary",
              code: "UCAS-OXF27",
              title: "Undergraduate Honours Admissions (39 Colleges)",
              desc: "Centralised coordination of TSA, MAT, PAT, and LNAT entrance test scores, school references, and collegiate first/second interviews.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Applications",
                  val: "11,240 Dossiers",
                },
                {
                  icon: "fa-chair",
                  label: "Available Places",
                  val: "3,300 Matriculations",
                },
                {
                  icon: "fa-scale-balanced",
                  label: "State School Ratio",
                  val: "69.4% UK Intake",
                },
              ],
              progressLabel: "Shortlisting & Moderation",
              progressVal: 84,
              btnLeft: "Open UCAS Queue",
              btnRight: "Test Score Distribution",
            },
            {
              tag: "Postgraduate Direct",
              tagColor: "tag_teal",
              code: "GRAD-OXF27",
              title: "MSc, MPhil & DPhil Graduate Admissions Portal",
              desc: "Departmental faculty review workflow for taught master's degrees, doctoral research proposals, and Clarendon nominations.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Applications",
                  val: "7,180 Dossiers",
                },
                {
                  icon: "fa-award",
                  label: "Funded Places",
                  val: "1,150 Scholarships",
                },
                {
                  icon: "fa-clock",
                  label: "January Gather",
                  val: "91% Reviewed",
                },
              ],
              progressLabel: "Departmental Decisions Filed",
              progressVal: 79,
              btnLeft: "Graduate Dossiers",
              btnRight: "College Matching",
            },
            {
              tag: "Contextual Access",
              tagColor: "tag_amber",
              code: "OPP-OXFORD",
              title: "Opportunity Oxford & Astrophoria Foundation Year",
              desc: "Contextual admissions flagging and residential bridging programme for high-potential scholars from underrepresented backgrounds.",
              meta: [
                {
                  icon: "fa-hand-holding-heart",
                  label: "Contextual Offers",
                  val: "420 Scholars",
                },
                {
                  icon: "fa-sterling-sign",
                  label: "Full Bursary",
                  val: "100% Fee + Living",
                },
                {
                  icon: "fa-graduation-cap",
                  label: "Progression Rate",
                  val: "98.5% to Honours",
                },
              ],
              progressLabel: "Verification & Bridging",
              progressVal: 92,
              btnLeft: "Review Contextual List",
              btnRight: "Bursary Sync",
            },
          ],
          tableTitle: "Priority Application Review Queue & Offer Sign-Off",
          tableHeaders: [
            "App Reference",
            "Candidate Name",
            "Target Degree Programme",
            "College Preference",
            "Entrance / GPA",
            "Current Stage",
            "Action",
          ],
          tableRows: [
            [
              "UCAS-27-90412",
              "Sophie Ashworth (UK)",
              "BA Computer Science & Philosophy",
              "Trinity College",
              "MAT: 89/100 • A*A*A*",
              { text: "Shortlisted", cls: "pill_teal" },
              "Assign Panel",
            ],
            [
              "PGD-27-44819",
              "Arjun Mehta (India)",
              "MSc Advanced Computer Science",
              "Balliol College",
              "CGPA: 9.84/10 (IIT-B)",
              { text: "Offer Recommended", cls: "pill_teal" },
              "Issue Offer",
            ],
            [
              "DPH-27-33105",
              "Elena Rostova (Switzerland)",
              "DPhil Autonomous Systems",
              "Magdalen College",
              "MSc ETH: 5.85/6.00",
              { text: "Clarendon Nominee", cls: "pill_primary" },
              "Approve Award",
            ],
            [
              "UCAS-27-91208",
              "Liam O'Connor (Ireland)",
              "MEng Engineering Science",
              "St John's College",
              "PAT: 84/100 • H1x7",
              { text: "Interview Scheduled", cls: "pill_amber" },
              "Open Dossier",
            ],
            [
              "PGD-27-45902",
              "Chloé Laurent (France)",
              "BCL Bachelor of Civil Law",
              "New College",
              "Sorbonne: Mention TB",
              { text: "Unconditional Offer", cls: "pill_teal" },
              "View Letter",
            ],
          ],
        },
        {
          id: "adm-dossiers",
          label: "Applicant Dossiers",
          icon: "fa-folder-open",
          badge: "412 Pending",
          eyebrow: "Candidate Evaluation • Transcripts & Entrance Tests",
          title:
            "Complete Applicant Dossiers, Entrance Tests & Academic References",
          subtitle:
            "Inspect verified transcripts, MAT/PAT/TSA score percentiles, personal statements, and confidential referee letters.",
          primaryBtn: "Run Holistic Rank Engine",
          secondaryBtn: "Flag Missing Documents",
          kpis: [
            {
              label: "Awaiting Final Decision",
              value: "412 Files",
              trend: "Priority Gather",
              foot: "SLA: Within 72 Hours",
              icon: "fa-folder-tree",
              color: "kpi_amber",
            },
            {
              label: "Verified Transcripts",
              value: "17,980",
              trend: "97.6% Authenticated",
              foot: "Digitary & Parchment",
              icon: "fa-file-circle-check",
              color: "kpi_teal",
            },
            {
              label: "Entrance Test Centiles",
              value: "Calibrated",
              trend: "MAT / PAT / LNAT",
              foot: "Mean Shortlist: 78.4",
              icon: "fa-square-poll-vertical",
              color: "kpi_primary",
            },
            {
              label: "Open Allocation Pool",
              value: "640 Cands",
              trend: "College Re-Allocation",
              foot: "Equalising Offer Ratios",
              icon: "fa-shuffle",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Entrance Assessment Analytics & Document Verification",
          cards: [
            {
              tag: "STEM Admissions Test",
              tagColor: "tag_primary",
              code: "MAT-PAT-26",
              title:
                "Mathematics & Physics Aptitude Test (MAT / PAT) Moderation",
              desc: "Automated z-score standardisation and school contextual weighting across 8,400 STEM examination sittings.",
              meta: [
                {
                  icon: "fa-calculator",
                  label: "Shortlist Cutoff",
                  val: "68.5 Standardised",
                },
                {
                  icon: "fa-check-double",
                  label: "Scripts Marked",
                  val: "100% Double-Checked",
                },
                {
                  icon: "fa-file-export",
                  label: "Tutor Distribution",
                  val: "Synced to ADSS",
                },
              ],
              progressLabel: "Score Synchronisation",
              progressVal: 100,
              btnLeft: "Cohort Histogram",
              btnRight: "Export ADSS Data",
            },
            {
              tag: "Reference Portal",
              tagColor: "tag_teal",
              code: "REF-VERIFY",
              title: "Institutional Academic Referee Verification System",
              desc: "Cryptographic domain verification for university professors and headteachers submitting confidential letters of recommendation.",
              meta: [
                {
                  icon: "fa-envelope-circle-check",
                  label: "Letters Received",
                  val: "36,400 / 36,840",
                },
                {
                  icon: "fa-bell",
                  label: "Auto-Reminders",
                  val: "440 Sent Today",
                },
                {
                  icon: "fa-shield",
                  label: "Authenticity",
                  val: "Institutional DKIM",
                },
              ],
              progressLabel: "Reference Completion",
              progressVal: 98,
              btnLeft: "Send Referee Nudges",
              btnRight: "Audit Log",
            },
            {
              tag: "College Pooling",
              tagColor: "tag_amber",
              code: "POOL-ENGINE",
              title: "Inter-Collegiate Open Allocation & Re-Pooling Engine",
              desc: "Balances applicant-to-place ratios across all 39 Oxford colleges so strong candidates are interviewed regardless of initial college choice.",
              meta: [
                {
                  icon: "fa-arrows-split-up-and-left",
                  label: "Re-Allocated",
                  val: "640 Candidates",
                },
                {
                  icon: "fa-building-columns",
                  label: "Receiving Colleges",
                  val: "18 Colleges",
                },
                {
                  icon: "fa-clock",
                  label: "Pool Lock",
                  val: "29 Nov 2026 • 18:00",
                },
              ],
              progressLabel: "Pool Balancing Matrix",
              progressVal: 86,
              btnLeft: "Run Pool Simulation",
              btnRight: "Approve Transfers",
            },
          ],
          tableTitle: "Comprehensive Candidate Evaluation & Decision Matrix",
          tableHeaders: [
            "Dossier ID",
            "Candidate Name",
            "Course Code",
            "Domicile",
            "Test / Academic Score",
            "Interview Score",
            "Decision Action",
          ],
          tableRows: [
            [
              "DOS-27-1042",
              "Hannah Lindqvist",
              "BA PPE (Philosophy, Politics, Econ)",
              "Sweden",
              "TSA: 86.4 • IB: 44/45",
              "Panel Avg: 8.8 / 10",
              { text: "Offer Cleared", cls: "pill_teal" },
              "Generate Offer",
            ],
            [
              "DOS-27-1089",
              "Kwame Mensah",
              "MSc Financial Economics",
              "Ghana",
              "GRE: 336 • First Class",
              "Panel Avg: 9.1 / 10",
              { text: "Offer + Reach Scholarship", cls: "pill_teal" },
              "Generate Offer",
            ],
            [
              "DOS-27-1124",
              "Mei-Ling Zhou",
              "MCompSci Computer Science",
              "Singapore",
              "MAT: 92.0 • 4x H2 A",
              "Panel Avg: 9.0 / 10",
              { text: "Offer Cleared", cls: "pill_teal" },
              "Generate Offer",
            ],
            [
              "DOS-27-1168",
              "Thomas Wright",
              "BA History & Politics",
              "United Kingdom",
              "HAT: 74.5 • A*AA",
              "Panel Avg: 7.9 / 10",
              { text: "Open Pool Review", cls: "pill_amber" },
              "Transfer College",
            ],
            [
              "DOS-27-1205",
              "Mateo Silva",
              "DPhil Quantum Materials",
              "Brazil",
              "MSc USP: 9.6/10 • 2 Papers",
              "Panel Avg: 8.9 / 10",
              { text: "Supervisor Matched", cls: "pill_primary" },
              "Issue DPhil Offer",
            ],
          ],
        },
        {
          id: "adm-interviews",
          label: "Interviews & Open Days",
          icon: "fa-video",
          badge: "6.2k Slots",
          eyebrow: "Collegiate Interview Timetable • Virtual & Residential",
          title:
            "Academic Tutorial Interviews, Panel Rosters & Campus Open Days",
          subtitle:
            "Schedule Miro/Teams digital whiteboard interviews, manage faculty assessor panels, and oversee Wellington Square Open Day registrations.",
          primaryBtn: "Publish Interview Timetable",
          secondaryBtn: "Launch Virtual Waiting Room",
          kpis: [
            {
              label: "Scheduled Interviews",
              value: "12,560 Slots",
              trend: "2 Interviews / Cand",
              foot: "First & Second College",
              icon: "fa-comments",
              color: "kpi_primary",
            },
            {
              label: "Faculty Assessors Active",
              value: "840 Tutors",
              trend: "All Panels Staffed",
              foot: "Unconscious Bias Trained",
              icon: "fa-chalkboard-user",
              color: "kpi_teal",
            },
            {
              label: "Open Day Visitors",
              value: "24,500 RSVPs",
              trend: "Autumn + Summer",
              foot: "QR Check-In Enabled",
              icon: "fa-people-roof",
              color: "kpi_amber",
            },
            {
              label: "Tech Check Completion",
              value: "99.1%",
              trend: "Miro + Teams Verified",
              foot: "24/7 Candidate Helpdesk",
              icon: "fa-headset",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Interview Panel Coordination & Campus Open Day Tracks",
          cards: [
            {
              tag: "STEM Whiteboard",
              tagColor: "tag_primary",
              code: "PNL-STEM-A",
              title: "Interactive Digital Whiteboard Tutorial Interviews",
              desc: "Live collaborative stylus and LaTeX whiteboard environment for Mathematics, Physics, Engineering, and Computer Science panels.",
              meta: [
                {
                  icon: "fa-tablet-screen-button",
                  label: "Platform",
                  val: "Oxford Miro + Teams",
                },
                {
                  icon: "fa-clock",
                  label: "Slot Duration",
                  val: "30 Mins + 10m Debrief",
                },
                {
                  icon: "fa-life-ring",
                  label: "IT Support",
                  val: "Live Proctor on Call",
                },
              ],
              progressLabel: "Candidate Tech Checks",
              progressVal: 99,
              btnLeft: "Monitor Live Panels",
              btnRight: "Assessor Rubric",
            },
            {
              tag: "Humanities & Law",
              tagColor: "tag_teal",
              code: "PNL-HUM-B",
              title: "Pre-Interview Unseen Text & Case Reading Rooms",
              desc: "Secure timed release of unseen primary historical sources, literary passages, and legal statutes 30 minutes prior to interview.",
              meta: [
                {
                  icon: "fa-book-open-reader",
                  label: "Pre-Reading",
                  val: "Auto-Released T-30m",
                },
                {
                  icon: "fa-universal-access",
                  label: "Extra Time",
                  val: "+25% Inclusive Access",
                },
                {
                  icon: "fa-building-columns",
                  label: "Panels",
                  val: "190 Subject Rooms",
                },
              ],
              progressLabel: "Reading Pack Encryption",
              progressVal: 100,
              btnLeft: "Manage Reading Packs",
              btnRight: "Access Accommodations",
            },
            {
              tag: "Campus Showcase",
              tagColor: "tag_amber",
              code: "OPEN-DAY-27",
              title: "Oxford University & Collegiate Open Day Visitor Hub",
              desc: "Departmental lab tours, Sheldonian admissions talks, mock tutorial demonstrations, and overnight college room ballots.",
              meta: [
                {
                  icon: "fa-ticket",
                  label: "Passes Issued",
                  val: "24,500 QR Passes",
                },
                {
                  icon: "fa-people-group",
                  label: "Student Ambassadors",
                  val: "320 Trained",
                },
                {
                  icon: "fa-map-location-dot",
                  label: "Venues",
                  val: "39 Colleges + 28 Depts",
                },
              ],
              progressLabel: "Event Capacity Booked",
              progressVal: 94,
              btnLeft: "Visitor Manifest",
              btnRight: "Ambassador Roster",
            },
          ],
          tableTitle: "Collegiate Interview Panel Assignments & Live Schedule",
          tableHeaders: [
            "Panel ID",
            "Subject Division",
            "Host College",
            "Lead Panelists",
            "Date & Window",
            "Candidates",
            "Action",
          ],
          tableRows: [
            [
              "PNL-CS-01",
              "Computer Science & AI",
              "Trinity College",
              "Prof. A. Sterling & Dr. E. Vance",
              "07 Dec 2026 • 09:00–17:00",
              "24 Candidates",
              { text: "Links Dispatched", cls: "pill_teal" },
              "Open Panel Room",
            ],
            [
              "PNL-MTH-04",
              "Mathematics & Statistics",
              "Balliol College",
              "Dr. M. Thorne & Prof. H. Green",
              "08 Dec 2026 • 09:00–17:00",
              "28 Candidates",
              { text: "Links Dispatched", cls: "pill_teal" },
              "Open Panel Room",
            ],
            [
              "PNL-PPE-02",
              "Philosophy, Politics & Econ",
              "Magdalen College",
              "Prof. C. Beaumont & Dr. J. Ross",
              "09 Dec 2026 • 09:30–16:30",
              "22 Candidates",
              { text: "Pre-Reading Set", cls: "pill_primary" },
              "Score Sheets",
            ],
            [
              "PNL-ENG-07",
              "Engineering Science",
              "St John's College",
              "Prof. R. Kulkarni & Dr. S. Lim",
              "10 Dec 2026 • 09:00–17:00",
              "26 Candidates",
              { text: "Ready", cls: "pill_teal" },
              "Score Sheets",
            ],
            [
              "PNL-MED-03",
              "Biomedical & Clinical Medicine",
              "New College",
              "Dr. D. Patel & Prof. L. Carter",
              "11 Dec 2026 • 09:00–16:00",
              "20 Candidates",
              { text: "MMI Stations Ready", cls: "pill_amber" },
              "Manage Stations",
            ],
          ],
        },
        {
          id: "adm-scholarships",
          label: "Scholarships & Financial Aid",
          icon: "fa-award",
          badge: "£42M Fund",
          eyebrow: "Student Funding Office • Endowments & Bursaries",
          title:
            "Scholarship Allocations, Clarendon Fellowships & Bursary Matching",
          subtitle:
            "Administer £42M+ in annual merit scholarships, Crankstart household income bursaries, and international fellowship endowments.",
          primaryBtn: "Issue Scholarship Award Letters",
          secondaryBtn: "Endowment Balance Sheet",
          kpis: [
            {
              label: "Total Annual Aid Pool",
              value: "£42.4M",
              trend: "100% Committed",
              foot: "950+ Full & Partial Awards",
              icon: "fa-sack-dollar",
              color: "kpi_primary",
            },
            {
              label: "Clarendon Scholars Selected",
              value: "210 Fellows",
              trend: "Full Fee + Stipend",
              foot: "Top 2% Graduate Cohort",
              icon: "fa-crown",
              color: "kpi_teal",
            },
            {
              label: "Crankstart Bursaries",
              value: "1,480 UG",
              trend: "Up to £6,200 / yr",
              foot: "Auto-Matched via SLC",
              icon: "fa-hand-holding-dollar",
              color: "kpi_amber",
            },
            {
              label: "Offer Acceptance Rate (Funded)",
              value: "97.8%",
              trend: "+11% vs Unfunded",
              foot: "Yield Benchmark #1",
              icon: "fa-chart-column",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Major University Endowment & Scholarship Programmes",
          cards: [
            {
              tag: "Graduate Flagship",
              tagColor: "tag_primary",
              code: "FND-CLAR27",
              title: "Oxford Clarendon Fund Endowment (210 Awards)",
              desc: "University Press-backed flagship graduate scholarship covering 100% of course fees and a tax-free living grant.",
              meta: [
                {
                  icon: "fa-sterling-sign",
                  label: "Fund Allocation",
                  val: "£14.8M (2026/27)",
                },
                {
                  icon: "fa-users",
                  label: "Offers Accepted",
                  val: "198 / 210 Confirmed",
                },
                {
                  icon: "fa-earth-europe",
                  label: "Eligibility",
                  val: "All Nationalities",
                },
              ],
              progressLabel: "Allocation Committed",
              progressVal: 94,
              btnLeft: "Manage Nominees",
              btnRight: "Reserve List",
            },
            {
              tag: "Global Access",
              tagColor: "tag_teal",
              code: "FND-REACH27",
              title: "Reach Oxford & Weidenfeld-Hoffmann Scholarships",
              desc: "Full undergraduate and graduate scholarships for outstanding scholars from low-income and developing economies.",
              meta: [
                {
                  icon: "fa-sterling-sign",
                  label: "Fund Allocation",
                  val: "£6.2M (2026/27)",
                },
                {
                  icon: "fa-plane",
                  label: "Includes",
                  val: "Fees + Stipend + Airfare",
                },
                {
                  icon: "fa-handshake-angle",
                  label: "Leadership Prog",
                  val: "Mandatory Seminar",
                },
              ],
              progressLabel: "Allocation Committed",
              progressVal: 91,
              btnLeft: "Scholar Roster",
              btnRight: "Trustees Report",
            },
            {
              tag: "Undergraduate Aid",
              tagColor: "tag_amber",
              code: "FND-CRANK27",
              title: "Crankstart & Oxford Opportunity Bursary Scheme",
              desc: "Non-repayable maintenance bursaries and paid internship stipends for UK undergraduates from lower-income households.",
              meta: [
                {
                  icon: "fa-sterling-sign",
                  label: "Fund Allocation",
                  val: "£11.5M (2026/27)",
                },
                {
                  icon: "fa-bolt",
                  label: "Assessment",
                  val: "Automated Household Sync",
                },
                {
                  icon: "fa-briefcase",
                  label: "Internships",
                  val: "450 Funded Placements",
                },
              ],
              progressLabel: "Assessments Verified",
              progressVal: 96,
              btnLeft: "Verify Assessments",
              btnRight: "Disbursement Run",
            },
          ],
          tableTitle: "Scholarship Nominees, Endowment Matching & Award Status",
          tableHeaders: [
            "Award ID",
            "Scholar Name",
            "Degree Track",
            "Scholarship Endowment",
            "Annual Value",
            "Offer Status",
            "Action",
          ],
          tableRows: [
            [
              "SCH-CLR-019",
              "Elena Rostova",
              "DPhil Autonomous Systems",
              "Clarendon Fund + Magdalen",
              "£38,400 / yr",
              { text: "Accepted & Signed", cls: "pill_teal" },
              "Award Contract",
            ],
            [
              "SCH-RCH-042",
              "Kwame Mensah",
              "MSc Financial Economics",
              "Reach Oxford Trust",
              "£41,200 / yr",
              { text: "Accepted & Signed", cls: "pill_teal" },
              "Award Contract",
            ],
            [
              "SCH-CRK-118",
              "Sophie Ashworth",
              "BA Computer Science & Phil",
              "Crankstart Honours Bursary",
              "£6,200 / yr",
              { text: "Auto-Approved", cls: "pill_teal" },
              "Disbursement",
            ],
            [
              "SCH-WDH-076",
              "Nadia Al-Mansoor",
              "MPP Public Policy",
              "Weidenfeld-Hoffmann Trust",
              "£39,500 / yr",
              { text: "Offer Issued", cls: "pill_amber" },
              "Send Reminder",
            ],
            [
              "SCH-DP-204",
              "Arjun Mehta",
              "MSc Advanced CompSci",
              "DeepMind AI Scholarship",
              "£36,800 / yr",
              { text: "Accepted & Signed", cls: "pill_primary" },
              "Award Contract",
            ],
          ],
        },
        {
          id: "adm-visas",
          label: "CAS & International Visas",
          icon: "fa-passport",
          badge: "96.4% Cleared",
          eyebrow: "Student Immigration & Compliance • UKVI Sponsor Licence",
          title:
            "Confirmation of Acceptance for Studies (CAS), ATAS & Right-to-Study",
          subtitle:
            "Generate UKVI CAS numbers, verify Academic Technology Approval Scheme (ATAS) certificates, and complete passport eVisa scans.",
          primaryBtn: "Batch Transmit CAS to UKVI",
          secondaryBtn: "ATAS Compliance Audit",
          kpis: [
            {
              label: "CAS Numbers Assigned",
              value: "1,890 / 1,960",
              trend: "96.4% Issued",
              foot: "UKVI SMS Synced Hourly",
              icon: "fa-passport",
              color: "kpi_teal",
            },
            {
              label: "ATAS Clearances Verified",
              value: "612 / 620",
              trend: "98.7% Cleared",
              foot: "STEM & Quantum Tracks",
              icon: "fa-shield-halved",
              color: "kpi_primary",
            },
            {
              label: "Financial Maintenance Checks",
              value: "100% Passed",
              trend: "Zero Visa Refusals",
              foot: "UKVI Track Record: A-Rated",
              icon: "fa-building-columns",
              color: "kpi_amber",
            },
            {
              label: "eVisa Share Code Checks",
              value: "1,740 Done",
              trend: "Ready for Matriculation",
              foot: "BodCard Activated",
              icon: "fa-id-card",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Immigration Compliance Workflows & International Onboarding",
          cards: [
            {
              tag: "UKVI SMS Gateway",
              tagColor: "tag_primary",
              code: "UKVI-CAS-27",
              title: "Automated UKVI Sponsor Management System (SMS) Bridge",
              desc: "Validates unconditional academic and financial fulfilment prior to transmitting XML CAS batches to the UK Home Office.",
              meta: [
                {
                  icon: "fa-bolt",
                  label: "Issuance SLA",
                  val: "24 Hours Post-Fulfilment",
                },
                {
                  icon: "fa-shield-check",
                  label: "Refusal Rate",
                  val: "0.08% (Threshold < 5%)",
                },
                {
                  icon: "fa-file-shield",
                  label: "Sponsor Licence",
                  val: "Highly Trusted Tier",
                },
              ],
              progressLabel: "2026/27 CAS Transmission",
              progressVal: 96,
              btnLeft: "Transmit Ready Batch",
              btnRight: "UKVI XML Logs",
            },
            {
              tag: "FCDO Clearance",
              tagColor: "tag_teal",
              code: "ATAS-STEM",
              title: "Academic Technology Approval Scheme (ATAS) Verification",
              desc: "Mandatory CAH3 code classification and FCDO certificate verification for postgraduate STEM researchers and visiting fellows.",
              meta: [
                {
                  icon: "fa-atom",
                  label: "CAH3 Codes",
                  val: "Physics, CS, Eng, Materials",
                },
                {
                  icon: "fa-file-contract",
                  label: "Research Statements",
                  val: "620 Supervisor Signed",
                },
                {
                  icon: "fa-check",
                  label: "Cleared",
                  val: "612 Certificates on File",
                },
              ],
              progressLabel: "ATAS Verification Rate",
              progressVal: 98,
              btnLeft: "Verify Pending ATAS",
              btnRight: "Generate CAH3 Text",
            },
            {
              tag: "Arrival & Enrolment",
              tagColor: "tag_amber",
              code: "EVISA-CHECK",
              title: "Digital Right-to-Study & eVisa Share Code Verification",
              desc: "Online UKVI share code validation and passport biometric check unlocking college key release and University Card printing.",
              meta: [
                {
                  icon: "fa-qrcode",
                  label: "Share Codes",
                  val: "1,740 Verified",
                },
                {
                  icon: "fa-id-badge",
                  label: "BodCards Printed",
                  val: "1,710 Dispatched",
                },
                {
                  icon: "fa-plane-arrival",
                  label: "Heathrow Welcome",
                  val: "Coach Transfers Live",
                },
              ],
              progressLabel: "Right-to-Study Onboarding",
              progressVal: 89,
              btnLeft: "Scan Share Code",
              btnRight: "Print BodCard Batch",
            },
          ],
          tableTitle: "International Student CAS, ATAS & Visa Tracking Ledger",
          tableHeaders: [
            "CAS Reference",
            "Scholar Name",
            "Nationality",
            "Degree Programme",
            "ATAS Status",
            "UKVI Visa Stage",
            "Action",
          ],
          tableRows: [
            [
              "CAS-4G2026-8812",
              "Arjun Mehta",
              "India",
              "MSc Advanced Computer Science",
              "ATAS Cleared",
              { text: "eVisa Granted", cls: "pill_teal" },
              "Verify Share Code",
            ],
            [
              "CAS-4G2026-8849",
              "Elena Rostova",
              "Switzerland",
              "DPhil Autonomous Systems",
              "ATAS Cleared",
              { text: "eVisa Granted", cls: "pill_teal" },
              "Verify Share Code",
            ],
            [
              "CAS-4G2026-8904",
              "Mei-Ling Zhou",
              "Singapore",
              "MCompSci Computer Science",
              "Exempt (UG)",
              { text: "CAS Assigned", cls: "pill_primary" },
              "Send CAS PDF",
            ],
            [
              "CAS-4G2026-8931",
              "Mateo Silva",
              "Brazil",
              "DPhil Quantum Materials",
              "ATAS Pending FCDO",
              { text: "Draft CAS Ready", cls: "pill_amber" },
              "Check ATAS",
            ],
            [
              "CAS-4G2026-8975",
              "Kwame Mensah",
              "Ghana",
              "MSc Financial Economics",
              "Exempt (Econ)",
              { text: "eVisa Granted", cls: "pill_teal" },
              "Issue BodCard",
            ],
          ],
        },
      ],
    },
    Alumni: {
      roleKey: "Alumni",
      roleBadge: "University Alumni Member",
      menuHeader: "Oxford Alumni Network Menu",
      avatarIcon: "fa-user-tie",
      department:
        "Oxford Alumni Society • Matriculated Senior Member (MA Oxon)",
      termStatus: "Lifetime Member • Bodleian Reader & High Table Privileges",
      helpTitle: "Alumni Relations Office",
      helpText:
        "2027 Summer Encaenia & Gaudy dining ballot closes 30 November.",
      tabs: [
        {
          id: "alu-overview",
          label: "Alumni Network Hub",
          icon: "fa-globe",
          badge: "48.5k Network",
          eyebrow: "Oxford Alumni Society • Global Senior Member Portal",
          title:
            "Collegiate Alumni Privileges, Mentorship Impact & Chapter Events",
          subtitle:
            "Access your digital Oxford Alumni Card, JSTOR & Bodleian reader privileges, career mentorship matches, and High Table dining invitations.",
          primaryBtn: "Download Digital Alumni Card",
          secondaryBtn: "Book College High Table",
          kpis: [
            {
              label: "Global Chapter Members",
              value: "48,500+",
              trend: "145 Regional Chapters",
              foot: "Verified Oxonians",
              icon: "fa-earth-americas",
              color: "kpi_primary",
            },
            {
              label: "Scholars Mentored",
              value: "12 Students",
              trend: "3 Active in Hilary",
              foot: "98% Placement Rate",
              icon: "fa-people-arrows",
              color: "kpi_teal",
            },
            {
              label: "Endowment Giving Impact",
              value: "£14,500",
              trend: "Chancellor's Circle",
              foot: "2 Bursary Scholars Funded",
              icon: "fa-hand-holding-heart",
              color: "kpi_amber",
            },
            {
              label: "Bodleian & JSTOR Access",
              value: "Lifetime Active",
              trend: "Reader Card #OX-994",
              foot: "8,000+ Journals Unlocked",
              icon: "fa-book-bookmark",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle: "Active Alumni Privileges & Collegiate Engagement",
          cards: [
            {
              tag: "Senior Member Privilege",
              tagColor: "tag_primary",
              code: "ALU-CARD-27",
              title: "Official Oxford MyOxford Card & College Gate Access",
              desc: "Complimentary entry to Oxford colleges, Bodleian Libraries reader registration, and Oxford University Press 30% book discount.",
              meta: [
                {
                  icon: "fa-id-card",
                  label: "Card Number",
                  val: "OXF-ALU-882410",
                },
                {
                  icon: "fa-landmark",
                  label: "College Gate",
                  val: "Trinity + 38 Colleges",
                },
                {
                  icon: "fa-bed",
                  label: "Guest Rooms",
                  val: "Alumni Tariff Active",
                },
              ],
              progressLabel: "Membership Verification",
              progressVal: 100,
              btnLeft: "Add to Apple/Google Wallet",
              btnRight: "Book College Room",
            },
            {
              tag: "Academic Mentorship",
              tagColor: "tag_teal",
              code: "OXF-CONNECT",
              title: "Oxford Career Weaver & Finalist Mentorship Programme",
              desc: "Guide final-year honours undergraduates and DPhil researchers transitioning into technology, finance, policy, and academia.",
              meta: [
                {
                  icon: "fa-user-graduate",
                  label: "Current Mentees",
                  val: "3 Honours Finalists",
                },
                {
                  icon: "fa-video",
                  label: "Next Session",
                  val: "Tue • 18:00 GMT",
                },
                {
                  icon: "fa-briefcase",
                  label: "Internships",
                  val: "2 Roles Posted",
                },
              ],
              progressLabel: "Hilary Mentorship Hours",
              progressVal: 80,
              btnLeft: "Message Mentees",
              btnRight: "Post Graduate Role",
            },
            {
              tag: "Collegiate Dining",
              tagColor: "tag_amber",
              code: "GAUDY-2027",
              title: "Trinity College Matriculation Gaudy & High Table Dinner",
              desc: "Black-tie collegiate reunion dinner in Hall with the President and Fellows, including overnight staircase accommodation.",
              meta: [
                {
                  icon: "fa-champagne-glasses",
                  label: "Event Date",
                  val: "20 Mar 2027 • 19:00",
                },
                {
                  icon: "fa-user-tie",
                  label: "Dress Code",
                  val: "Black Tie / Sub-Fusc",
                },
                {
                  icon: "fa-chair",
                  label: "Seat Status",
                  val: "High Table Confirmed",
                },
              ],
              progressLabel: "Cohort Table Reservations",
              progressVal: 92,
              btnLeft: "Download Dining Pass",
              btnRight: "Dietary & Wine List",
            },
          ],
          tableTitle: "Upcoming Alumni Chapter Events, Reunions & Privileges",
          tableHeaders: [
            "Event / Ref ID",
            "Event or Initiative Title",
            "Chapter / Venue",
            "Date & Time",
            "Tier",
            "Registration Status",
            "Action",
          ],
          tableRows: [
            [
              "GAU-TRN-2027",
              "Trinity College 10-Year Matriculation Gaudy Dinner",
              "Trinity Dining Hall, Oxford",
              "20 Mar 2027 • 19:00",
              "Black Tie",
              { text: "Seat Confirmed", cls: "pill_teal" },
              "View Ticket",
            ],
            [
              "CHP-LDN-084",
              "Oxford & Cambridge Club AI & Sovereign Tech Forum",
              "Pall Mall, London SW1Y",
              "19 Nov 2026 • 18:30",
              "Keynote + Drinks",
              { text: "RSVP Confirmed", cls: "pill_teal" },
              "Guest Pass",
            ],
            [
              "MNT-OXF-312",
              "1-on-1 Career Review with Finalist Cand. Oliver Bennett",
              "Oxford Career Weaver Zoom",
              "05 Nov 2026 • 17:30",
              "Mentorship",
              { text: "Scheduled", cls: "pill_primary" },
              "View CV",
            ],
            [
              "ENC-SHL-2027",
              "Encaenia Honorary Degrees Procession & Garden Party",
              "Sheldonian Theatre, Oxford",
              "23 Jun 2027 • 11:00",
              "Academic Dress",
              { text: "Ballot Entered", cls: "pill_amber" },
              "Manage Ballot",
            ],
            [
              "BOD-RDR-994",
              "Bodleian Libraries Alumni Digital JSTOR & ProQuest Renewal",
              "Online Proxy + Radcliffe",
              "Annual 2026/27",
              "Complimentary",
              { text: "Active Access", cls: "pill_teal" },
              "Launch JSTOR",
            ],
          ],
        },
        {
          id: "alu-directory",
          label: "Global Chapters & Directory",
          icon: "fa-address-book",
          badge: "145 Chapters",
          eyebrow: "Worldwide Oxonian Directory • Regional Societies",
          title:
            "Global Alumni Chapters, Cohort Directory & Fellow Connections",
          subtitle:
            "Reconnect with your matriculation staircase cohort and network across 145 accredited international Oxford Alumni chapters.",
          primaryBtn: "Search Alumni Directory",
          secondaryBtn: "Update Career Profile",
          kpis: [
            {
              label: "Accredited Global Chapters",
              value: "145 Cities",
              trend: "6 Continents",
              foot: "London, NY, Tokyo, Mumbai",
              icon: "fa-map-location-dot",
              color: "kpi_primary",
            },
            {
              label: "Cohort Classmates Indexed",
              value: "380 Peers",
              trend: "94% Opted-In",
              foot: "Direct Messaging Open",
              icon: "fa-user-group",
              color: "kpi_teal",
            },
            {
              label: "Professional Industry Groups",
              value: "28 Networks",
              trend: "AI, Law, Biotech, VC",
              foot: "Quarterly Roundtables",
              icon: "fa-briefcase",
              color: "kpi_amber",
            },
            {
              label: "Reciprocal Club Access",
              value: "75 Clubs",
              trend: "Worldwide Clubhaus",
              foot: "Oxford & Cambridge Club",
              icon: "fa-building-columns",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Regional Alumni Chapters & Professional Societies",
          cards: [
            {
              tag: "UK & Europe Hub",
              tagColor: "tag_primary",
              code: "CHP-LON-OX",
              title: "Oxford University Society of London & Thames Valley",
              desc: "Monthly speaker dinners at the Oxford & Cambridge Club on Pall Mall, private museum views, and Varsity Match hospitality.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Active Members",
                  val: "14,200 Alumni",
                },
                {
                  icon: "fa-user-tie",
                  label: "Chapter Chair",
                  val: "Lady Genevieve Sterling",
                },
                {
                  icon: "fa-calendar",
                  label: "Next Mixer",
                  val: "19 Nov 2026 • Pall Mall",
                },
              ],
              progressLabel: "2026 Event Series",
              progressVal: 85,
              btnLeft: "Chapter Directory",
              btnRight: "RSVP Events",
            },
            {
              tag: "North America",
              tagColor: "tag_teal",
              code: "CHP-NA-NYC",
              title: "Oxford North American Office (New York & San Francisco)",
              desc: "Transatlantic founders' network, Silicon Valley deep-tech showcase, and annual New York Boat Race Gala dinner.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Active Members",
                  val: "11,800 Alumni",
                },
                {
                  icon: "fa-location-dot",
                  label: "Headquarters",
                  val: "500 Fifth Ave, NYC",
                },
                {
                  icon: "fa-calendar",
                  label: "Next Summit",
                  val: "04 Dec 2026 • SF",
                },
              ],
              progressLabel: "2026 Event Series",
              progressVal: 78,
              btnLeft: "Chapter Directory",
              btnRight: "Founders Forum",
            },
            {
              tag: "Asia-Pacific & India",
              tagColor: "tag_amber",
              code: "CHP-APAC-9",
              title: "Oxford & Cambridge Society of India, Singapore & Tokyo",
              desc: "Pre-departure scholar send-offs, executive policy dialogues, and Vice-Chancellor visiting symposium receptions.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Active Members",
                  val: "9,600 Alumni",
                },
                {
                  icon: "fa-handshake",
                  label: "Scholar Mixers",
                  val: "12 Cities Annually",
                },
                { icon: "fa-calendar", label: "Next Gala", val: "15 Jan 2027" },
              ],
              progressLabel: "2026 Event Series",
              progressVal: 90,
              btnLeft: "Chapter Directory",
              btnRight: "Host New Scholars",
            },
          ],
          tableTitle: "Verified Alumni Directory & Cohort Connections",
          tableHeaders: [
            "Alumni ID",
            "Full Name & Honours",
            "College & Cohort",
            "Current Executive Role",
            "Chapter City",
            "Mentorship",
            "Action",
          ],
          tableRows: [
            [
              "OXF-MA-1042",
              "Lord Julian Vance, KC",
              "Balliol • BA Jurisprudence",
              "King's Counsel & Commercial Arbitrator",
              "London, UK",
              { text: "Open to Connect", cls: "pill_teal" },
              "Message",
            ],
            [
              "OXF-MA-1189",
              "Dr. Maya Lin-Sterling",
              "Trinity • DPhil Quantum Physics",
              "VP Quantum Architecture, Horizon Labs",
              "Zurich, CH",
              { text: "Cohort Peer", cls: "pill_teal" },
              "Message",
            ],
            [
              "OXF-MA-1254",
              "Siddharth Malhotra",
              "Magdalen • MSc Financial Econ",
              "Managing Partner, Sovereign Ventures",
              "Mumbai / London",
              { text: "Chapter Board", cls: "pill_primary" },
              "Connect",
            ],
            [
              "OXF-MA-1308",
              "Claire Dubois-Thorne",
              "New College • BA PPE",
              "Director of AI Policy, European Comm.",
              "Brussels, BE",
              { text: "Open to Connect", cls: "pill_teal" },
              "Message",
            ],
            [
              "OXF-MA-1412",
              "Dr. Marcus Chen",
              "St John's • DPhil Eng Science",
              "Co-Founder & CTO, Surgical Robotics AI",
              "San Francisco, US",
              { text: "Hiring Oxbridge", cls: "pill_amber" },
              "View Roles",
            ],
          ],
        },
        {
          id: "alu-mentorship",
          label: "Career Mentorship Board",
          icon: "fa-briefcase",
          badge: "12 Mentees",
          eyebrow:
            "The Careers Service • Alumni Mentorship & Executive Recruiting",
          title:
            "Student Mentorship Matches, Mock Interviews & Graduate Job Board",
          subtitle:
            "Review mentorship requests from current Oxford students, conduct mock fellowship interviews, and post fast-track graduate roles.",
          primaryBtn: "Post Fast-Track Job / Internship",
          secondaryBtn: "Set Mentorship Availability",
          kpis: [
            {
              label: "Total Scholars Mentored",
              value: "12 Scholars",
              trend: "100% 5-Star Feedback",
              foot: "Trinity & CS Department",
              icon: "fa-user-check",
              color: "kpi_teal",
            },
            {
              label: "Active Job / Internship Listings",
              value: "03 Roles Live",
              trend: "42 Oxford Applicants",
              foot: "Summer & Graduate Intake",
              icon: "fa-briefcase",
              color: "kpi_primary",
            },
            {
              label: "Guest Career Talks",
              value: "02 Delivered",
              trend: "Hilary Term",
              foot: "Wellington Career Hub",
              icon: "fa-microphone",
              color: "kpi_amber",
            },
            {
              label: "Micro-Internship Hosts",
              value: "04 Projects",
              trend: "2-Week Hilary Vacation",
              foot: "Funded by Crankstart",
              icon: "fa-laptop-code",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Mentorship Tracks & University Recruiting Programmes",
          cards: [
            {
              tag: "1-on-1 Advisory",
              tagColor: "tag_primary",
              code: "MNT-HON-27",
              title: "Finalist Honours & DPhil Career Transition Mentorship",
              desc: "Monthly 45-minute advisory calls reviewing CVs, deep-tech startup pitches, quant research prep, and fellowship applications.",
              meta: [
                {
                  icon: "fa-users",
                  label: "Active Pairings",
                  val: "3 Current Scholars",
                },
                {
                  icon: "fa-clock",
                  label: "Commitment",
                  val: "2 Hours / Month",
                },
                {
                  icon: "fa-award",
                  label: "Recognition",
                  val: "Vice-Chancellor Fellow",
                },
              ],
              progressLabel: "Hilary Session Goals",
              progressVal: 85,
              btnLeft: "Review Mentee CVs",
              btnRight: "Schedule Call",
            },
            {
              tag: "Direct Recruiting",
              tagColor: "tag_teal",
              code: "REC-FAST-27",
              title:
                "Oxford Exclusive Summer Internship & Graduate Talent Board",
              desc: "Recruit directly from Oxford's Mathematical, Physical, and Life Sciences (MPLS) and Humanities cohorts with zero agency fees.",
              meta: [
                {
                  icon: "fa-file-user",
                  label: "Applications",
                  val: "42 Shortlisted CVs",
                },
                {
                  icon: "fa-building",
                  label: "Campus Fair",
                  val: "Exam Schools • 14 Nov",
                },
                {
                  icon: "fa-check-double",
                  label: "Fast-Track",
                  val: "Direct First-Round",
                },
              ],
              progressLabel: "Shortlist Review",
              progressVal: 72,
              btnLeft: "Download CV Pack",
              btnRight: "Edit Job Postings",
            },
            {
              tag: "Startup Incubator",
              tagColor: "tag_amber",
              code: "OXF-FOUNDRY",
              title: "Oxford Foundry (OXFO) Entrepreneur-in-Residence Judge",
              desc: "Serve as an alumni venture mentor and demo-day judge for student-led AI, biotech, and clean-energy spinouts.",
              meta: [
                {
                  icon: "fa-rocket",
                  label: "Student Ventures",
                  val: "16 Cohort Teams",
                },
                {
                  icon: "fa-sterling-sign",
                  label: "Prize Grant",
                  val: "£100k Non-Dilutive",
                },
                {
                  icon: "fa-calendar",
                  label: "Demo Night",
                  val: "27 Nov 2026 • Saïd",
                },
              ],
              progressLabel: "Pitch Deck Evaluations",
              progressVal: 90,
              btnLeft: "View Startup Decks",
              btnRight: "Judge Ballot",
            },
          ],
          tableTitle:
            "Active Student Mentorship Requests & Recruiting Pipeline",
          tableHeaders: [
            "Request ID",
            "Scholar Name & College",
            "Degree Programme",
            "Advisory Focus",
            "Format",
            "Status",
            "Action",
          ],
          tableRows: [
            [
              "MNT-2026-41",
              "Oliver Bennett (New College)",
              "DPhil Autonomous Robotics",
              "Deep-Tech Spinout & Seed VC Pitch",
              "Zoom / In-Person",
              { text: "Active Mentee", cls: "pill_teal" },
              "Open Dossier",
            ],
            [
              "MNT-2026-58",
              "Priya Nair (Balliol)",
              "DPhil Quantum Information",
              "Postdoc vs Industry Quantum Lead",
              "Video Session",
              { text: "Active Mentee", cls: "pill_teal" },
              "Open Dossier",
            ],
            [
              "MNT-2026-73",
              "Lucas Meyer (Trinity)",
              "MCompSci Computer Science",
              "Quant Research & ML Systems Mock",
              "Mock Interview",
              { text: "Session: 08 Nov", cls: "pill_primary" },
              "Send Prep Sheet",
            ],
            [
              "JOB-2026-19",
              "14 Honours Applicants",
              "MPLS & Computer Science",
              "Summer 2027 AI Research Intern",
              "Fast-Track Board",
              { text: "14 CVs Ready", cls: "pill_amber" },
              "Review CVs",
            ],
            [
              "OXF-FND-08",
              "Team QubitShield (3 Founders)",
              "Oxford Foundry Accelerator",
              "Post-Quantum API Commercialisation",
              "Venture Advisory",
              { text: "Demo Day Finalist", cls: "pill_teal" },
              "Pitch Feedback",
            ],
          ],
        },
        {
          id: "alu-giving",
          label: "Endowment & Giving",
          icon: "fa-hand-holding-heart",
          badge: "Benefactor",
          eyebrow: "University Development Office • Collegiate Philanthropy",
          title:
            "Endowment Contributions, Bursary Sponsorship & Gift Aid Ledger",
          subtitle:
            "Track the direct academic impact of your collegiate giving, download UK Gift Aid / 501(c)(3) tax receipts, and view supported scholars.",
          primaryBtn: "Download Annual Tax Receipt",
          secondaryBtn: "Pledge to Bursary Endowment",
          kpis: [
            {
              label: "Lifetime Collegiate Giving",
              value: "£14,500",
              trend: "Chancellor's Circle",
              foot: "100% Directed to Scholars",
              icon: "fa-heart-circle-check",
              color: "kpi_primary",
            },
            {
              label: "UK Gift Aid Reclaimed",
              value: "+£3,625",
              trend: "25% HMRC Boost",
              foot: "Total Impact: £18,125",
              icon: "fa-sterling-sign",
              color: "kpi_teal",
            },
            {
              label: "Supported Bursary Scholars",
              value: "02 Scholars",
              trend: "Trinity Access Fund",
              foot: "Annual Impact Letters Sent",
              icon: "fa-user-graduate",
              color: "kpi_amber",
            },
            {
              label: "Benefactor Recognition",
              value: "Roll of Honour",
              trend: "Sheldonian Inscribed",
              foot: "Donor Dinner Invited",
              icon: "fa-medal",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle: "Supported Endowment Funds & Philanthropic Impact",
          cards: [
            {
              tag: "Undergraduate Bursaries",
              tagColor: "tag_primary",
              code: "END-TRIN-UG",
              title: "Trinity College Crankstart & Opportunity Bursary Fund",
              desc: "Provides non-repayable living stipends and laptop grants to first-generation undergraduates from low-income households.",
              meta: [
                {
                  icon: "fa-hand-holding-dollar",
                  label: "Your Contribution",
                  val: "£8,500 + Gift Aid",
                },
                {
                  icon: "fa-users",
                  label: "Scholars Helped",
                  val: "42 Undergraduates",
                },
                {
                  icon: "fa-envelope-open-text",
                  label: "Impact Report",
                  val: "2026 Letter Available",
                },
              ],
              progressLabel: "2026/27 College Campaign Goal",
              progressVal: 91,
              btnLeft: "Read Scholar Letters",
              btnRight: "Gift Aid Certificate",
            },
            {
              tag: "Heritage Preservation",
              tagColor: "tag_teal",
              code: "END-BOD-MSS",
              title:
                "Bodleian Libraries Rare Manuscript Digitisation Endowment",
              desc: "Funds multispectral conservation and open-access high-resolution digitisation of medieval and early modern scientific folios.",
              meta: [
                {
                  icon: "fa-scroll",
                  label: "Your Contribution",
                  val: "£4,000 + Gift Aid",
                },
                {
                  icon: "fa-book-atlas",
                  label: "Folios Digitised",
                  val: "1,240 Open Folios",
                },
                {
                  icon: "fa-award",
                  label: "Bookplate",
                  val: "Named Digital Plate",
                },
              ],
              progressLabel: "2026/27 Archive Target",
              progressVal: 84,
              btnLeft: "View Named Bookplates",
              btnRight: "Curator Report",
            },
            {
              tag: "Quantum Lab Fund",
              tagColor: "tag_amber",
              code: "END-CS-DPHIL",
              title: "Department of Computer Science DPhil Conference Fund",
              desc: "Enables doctoral researchers to present accepted first-author papers at premier international AI and systems conferences.",
              meta: [
                {
                  icon: "fa-plane-departure",
                  label: "Your Contribution",
                  val: "£2,000 + Gift Aid",
                },
                {
                  icon: "fa-ticket",
                  label: "Travel Awards",
                  val: "6 DPhil Grants",
                },
                {
                  icon: "fa-file-invoice",
                  label: "Tax Status",
                  val: "HMRC / IRS Cleared",
                },
              ],
              progressLabel: "Fund Disbursement",
              progressVal: 100,
              btnLeft: "Impact Breakdown",
              btnRight: "Manage Standing Order",
            },
          ],
          tableTitle:
            "Official Philanthropic Donation Ledger & Tax Certificates",
          tableHeaders: [
            "Receipt Ref",
            "Endowment / Fund Name",
            "Beneficiary College / Dept",
            "Donation Date",
            "Gift Amount",
            "Gift Aid (+25%)",
            "Action",
          ],
          tableRows: [
            [
              "GFT-OXF-99201",
              "Trinity College Undergraduate Access Bursary",
              "Trinity College",
              "15 Oct 2026",
              "£2,500.00",
              "+£625.00 HMRC",
              { text: "Tax Receipt Ready", cls: "pill_teal" },
              "Download PDF",
            ],
            [
              "GFT-OXF-88412",
              "Bodleian Rare Manuscript Digitisation Fund",
              "Bodleian Libraries",
              "01 Jun 2026",
              "£2,000.00",
              "+£500.00 HMRC",
              { text: "Tax Receipt Ready", cls: "pill_teal" },
              "Download PDF",
            ],
            [
              "GFT-OXF-77105",
              "Computer Science DPhil Conference Travel Pool",
              "Dept of Computer Science",
              "12 Jan 2026",
              "£2,000.00",
              "+£500.00 HMRC",
              { text: "Tax Receipt Ready", cls: "pill_teal" },
              "Download PDF",
            ],
            [
              "GFT-OXF-64019",
              "Trinity College Undergraduate Access Bursary",
              "Trinity College",
              "15 Oct 2025",
              "£4,000.00",
              "+£1,000.00 HMRC",
              { text: "Archived FY25", cls: "pill_primary" },
              "Download PDF",
            ],
            [
              "GFT-OXF-51902",
              "Trinity Staircase Heritage Restoration Appeal",
              "Trinity College",
              "10 Mar 2025",
              "£4,000.00",
              "+£1,000.00 HMRC",
              { text: "Archived FY25", cls: "pill_navy" },
              "Download PDF",
            ],
          ],
        },
        {
          id: "alu-events",
          label: "Reunions & High Table",
          icon: "fa-champagne-glasses",
          badge: "5 Confirmed",
          eyebrow: "Collegiate Hospitality • Gaudies, Encaenia & High Table",
          title: "Collegiate Reunions, High Table Dining & Academic Ceremonies",
          subtitle:
            "Reserve your seat at High Table, manage Encaenia procession ballots at the Sheldonian Theatre, and book guest rooms in College.",
          primaryBtn: "Reserve High Table Dining",
          secondaryBtn: "Download Event Calendar",
          kpis: [
            {
              label: "Confirmed Dining Bookings",
              value: "05 Events",
              trend: "Hilary + Trinity",
              foot: "High Table & Gaudy",
              icon: "fa-utensils",
              color: "kpi_primary",
            },
            {
              label: "Sheldonian Encaenia Passes",
              value: "02 Seated",
              trend: "Curators' Enclosure",
              foot: "23 June 2027 Confirmed",
              icon: "fa-landmark-dome",
              color: "kpi_teal",
            },
            {
              label: "College Guest Room Nights",
              value: "04 Nights",
              trend: "Fellows' Guest Suite",
              foot: "Trinity & Balliol",
              icon: "fa-bed",
              color: "kpi_amber",
            },
            {
              label: "Varsity Match Hospitality",
              value: "VIP Box",
              trend: "Twickenham / Putney",
              foot: "Boat Race & Rugby",
              icon: "fa-trophy",
              color: "kpi_navy",
            },
          ],
          cardsSectionTitle:
            "Signature Collegiate Ceremonies & Dining Traditions",
          cards: [
            {
              tag: "Collegiate Gaudy",
              tagColor: "tag_primary",
              code: "DIN-GAUDY-27",
              title: "Matriculation Cohort Gaudy Banquet & Chapel Evensong",
              desc: "Choral Evensong in the 17th-century college chapel followed by a five-course candlelit banquet and Senior Common Room port.",
              meta: [
                {
                  icon: "fa-calendar-star",
                  label: "Date",
                  val: "Saturday, 20 Mar 2027",
                },
                {
                  icon: "fa-bed",
                  label: "Accommodation",
                  val: "Staircase Guest Room",
                },
                {
                  icon: "fa-wine-glass",
                  label: "Cellar Selection",
                  val: "Fellows' Vintage Reserve",
                },
              ],
              progressLabel: "Hall Seating Allocation",
              progressVal: 95,
              btnLeft: "View Seating Plan",
              btnRight: "Download Pass",
            },
            {
              tag: "University Ceremony",
              tagColor: "tag_teal",
              code: "CER-ENCAENIA",
              title: "Sheldonian Encaenia & All Souls College Garden Party",
              desc: "Oxford's annual commemoration of benefactors and conferral of honorary degrees, followed by luncheon and garden reception.",
              meta: [
                {
                  icon: "fa-calendar-day",
                  label: "Date",
                  val: "Wednesday, 23 Jun 2027",
                },
                {
                  icon: "fa-graduation-cap",
                  label: "Dress Code",
                  val: "Full Academic Gown + Hood",
                },
                {
                  icon: "fa-ticket",
                  label: "Allocation",
                  val: "2 Semicircle Tickets",
                },
              ],
              progressLabel: "Gown & Ticket Confirmation",
              progressVal: 100,
              btnLeft: "Print Encaenia Pass",
              btnRight: "Gown Hire Desk",
            },
            {
              tag: "Weekly Privilege",
              tagColor: "tag_amber",
              code: "DIN-HIGHTBL",
              title:
                "Senior Member High Table & Senior Common Room (SCR) Rights",
              desc: "Exercise your MA (Oxon) dining privilege at High Table during Full Term with one accompanied guest.",
              meta: [
                {
                  icon: "fa-utensils",
                  label: "Term Quota",
                  val: "4 High Tables / Term",
                },
                {
                  icon: "fa-clock",
                  label: "Grace in Latin",
                  val: "19:15 Sharp in Hall",
                },
                {
                  icon: "fa-user-plus",
                  label: "Guest Policy",
                  val: "1 Guest Permitted",
                },
              ],
              progressLabel: "Hilary Term Quota Used (2/4)",
              progressVal: 50,
              btnLeft: "Book SCR Dinner",
              btnRight: "Wine Steward List",
            },
          ],
          tableTitle: "Confirmed Alumni Event Bookings & Hospitality Schedule",
          tableHeaders: [
            "Booking Ref",
            "Ceremony / Dining Event",
            "Oxford / London Venue",
            "Date & Time",
            "Dress Code",
            "Status",
            "Action",
          ],
          tableRows: [
            [
              "BKG-HT-4012",
              "Fellows' & MA High Table Dinner + SCR Dessert",
              "Trinity College Hall, Oxford",
              "12 Nov 2026 • 19:15",
              "Academic Gown / Lounge Suit",
              { text: "Seat Reserved", cls: "pill_teal" },
              "Dining Slip",
            ],
            [
              "BKG-CLB-4089",
              "Oxford & Cambridge Club Annual Advent Carol Dinner",
              "71 Pall Mall, London",
              "03 Dec 2026 • 19:00",
              "Black Tie",
              { text: "Table of 4 Booked", cls: "pill_teal" },
              "Guest Names",
            ],
            [
              "BKG-BR-4150",
              "The Boat Race 2027 — Oxford President's Launch",
              "Putney to Mortlake, Thames",
              "28 Mar 2027 • 14:00",
              "Blazer / Club Tie",
              { text: "VIP Pass Issued", cls: "pill_primary" },
              "Boarding Pass",
            ],
            [
              "BKG-GAU-4210",
              "2016–2020 Cohort Matriculation Gaudy Weekend",
              "Trinity College, Oxford",
              "20 Mar 2027 • 16:00",
              "Black Tie",
              { text: "Room + Dinner Paid", cls: "pill_teal" },
              "Itinerary PDF",
            ],
            [
              "BKG-ENC-4305",
              "Sheldonian Encaenia Procession & Garden Party",
              "Broad Street, Oxford",
              "23 Jun 2027 • 10:45",
              "Full Academic Sub-Fusc",
              { text: "Confirmed", cls: "pill_amber" },
              "Security Badge",
            ],
          ],
        },
      ],
    },
  };

  let activeRoleKey = "Student";
  let activeTabId = "stu-overview";
  let currentSession = null;

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Load login form data saved in localStorage (or URL parameters)
   */
  function loadSessionData() {
    let parsed = null;
    try {
      const raw = localStorage.getItem("stacklyPortalSession");
      if (raw) {
        parsed = JSON.parse(raw);
      }
    } catch (_) {}

    // Also check URL query parameter ?role=
    const params = new URLSearchParams(window.location.search);
    const urlRole = params.get("role");

    if (!parsed || typeof parsed !== "object") {
      // Check if user registered earlier
      let regUser = null;
      try {
        const regRaw = localStorage.getItem("stacklyRegisteredUser");
        if (regRaw) regUser = JSON.parse(regRaw);
      } catch (_) {}

      const fallbackRole =
        urlRole && ROLE_CONFIG[urlRole]
          ? urlRole
          : regUser && ROLE_CONFIG[regUser.role]
            ? regUser.role
            : "Student";

      const fallbackEmail =
        regUser && regUser.email
          ? regUser.email
          : "eleanor.scholar@stacklyuniversity.ac.uk";

      const fallbackName =
        regUser && regUser.username ? regUser.username : "Eleanor Scholar";

      parsed = {
        role: fallbackRole,
        roleLabel: ROLE_CONFIG[fallbackRole].roleBadge,
        email: fallbackEmail,
        displayName: fallbackName,
        passwordStatus: "Verified Strong (5/5 Security Rules)",
        rememberPolicy: "Trusted Device & Secure Session Confirmed",
        loginTime: new Date().toLocaleString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        ssoId: "OXF-" + fallbackRole.slice(0, 3).toUpperCase() + "-8492",
      };
    } else if (urlRole && ROLE_CONFIG[urlRole]) {
      parsed.role = urlRole;
      parsed.roleLabel = ROLE_CONFIG[urlRole].roleBadge;
    }

    if (!ROLE_CONFIG[parsed.role]) {
      parsed.role = "Student";
      parsed.roleLabel = ROLE_CONFIG.Student.roleBadge;
    }

    currentSession = parsed;
    activeRoleKey = parsed.role;
    activeTabId = ROLE_CONFIG[activeRoleKey].tabs[0].id;
  }

  /**
   * Populate the Login Session Data Banner, Sidebar Profile Card & Topbar
   */
  function renderSessionAndProfileUI() {
    const roleObj = ROLE_CONFIG[activeRoleKey];
    const nameStr = currentSession.displayName || "Oxford Scholar";
    const emailStr = currentSession.email || "scholar@stacklyuniversity.ac.uk";
    const roleLabelStr = roleObj.roleBadge;
    const ssoIdStr = currentSession.ssoId || "OXF-SSO-8492";
    const passStatusStr =
      currentSession.passwordStatus || "Verified Strong (5/5 Criteria)";
    const rememberStr =
      currentSession.rememberPolicy || "Trusted Device Confirmed";
    const loginTimeStr = currentSession.loginTime || "Active Session";

    // Sidebar user profile
    const avatarEl = document.getElementById("sidebarUserAvatar");
    const nameEl = document.getElementById("sidebarUserName");
    const emailEl = document.getElementById("sidebarUserEmail");
    const rolePillEl = document.getElementById("sidebarRolePill");
    const menuHeaderEl = document.getElementById("sidebarMenuHeaderLabel");
    const helpTitleEl = document.getElementById("sidebarHelpTitle");
    const helpTextEl = document.getElementById("sidebarHelpText");

    if (avatarEl) {
      avatarEl.innerHTML = `<i class="fa-solid ${escapeHtml(roleObj.avatarIcon)}"></i>`;
    }
    if (nameEl) nameEl.textContent = nameStr;
    if (emailEl) emailEl.textContent = emailStr;
    if (rolePillEl) {
      rolePillEl.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${escapeHtml(activeRoleKey)}`;
    }
    if (menuHeaderEl) {
      menuHeaderEl.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${escapeHtml(roleObj.menuHeader)}`;
    }
    if (helpTitleEl) helpTitleEl.textContent = roleObj.helpTitle;
    if (helpTextEl) helpTextEl.textContent = roleObj.helpText;

    // Topbar breadcrumb & role switcher
    const topTitleEl = document.getElementById("topbarPortalTitle");
    const topSubEl = document.getElementById("topbarPortalSubtitle");
    const roleSelectEl = document.getElementById("dashRoleSwitcher");

    if (topTitleEl) {
      topTitleEl.textContent = `${activeRoleKey} Portal Dashboard`;
    }
    if (topSubEl) {
      topSubEl.textContent = `${roleObj.department} • Signed in as ${emailStr}`;
    }
    if (roleSelectEl && roleSelectEl.value !== activeRoleKey) {
      roleSelectEl.value = activeRoleKey;
    }

    // Submitted Login Form Data Banner
    const bannerWelcomeEl = document.getElementById("sessionBannerWelcome");
    const bannerSubEl = document.getElementById("sessionBannerSubtitle");
    const tileRoleEl = document.getElementById("sessionTileRole");
    const tileEmailEl = document.getElementById("sessionTileEmail");
    const tilePassEl = document.getElementById("sessionTilePassword");
    const tilePolicyEl = document.getElementById("sessionTilePolicy");
    const tileSsoEl = document.getElementById("sessionTileSso");
    const tileTimeEl = document.getElementById("sessionTileTime");

    if (bannerWelcomeEl) {
      bannerWelcomeEl.textContent = `Welcome back, ${nameStr} (${activeRoleKey} Portal)`;
    }
    if (bannerSubEl) {
      bannerSubEl.textContent = `${roleObj.termStatus} — Displaying live role credentials submitted via the Stackly University Portal Login form.`;
    }
    if (tileRoleEl) {
      tileRoleEl.textContent = `${activeRoleKey} — ${roleLabelStr}`;
    }
    if (tileEmailEl) {
      tileEmailEl.textContent = emailStr;
    }
    if (tilePassEl) {
      tilePassEl.textContent = passStatusStr;
    }
    if (tilePolicyEl) {
      tilePolicyEl.textContent = rememberStr;
    }
    if (tileSsoEl) {
      tileSsoEl.textContent = `${ssoIdStr} (${nameStr})`;
    }
    if (tileTimeEl) {
      tileTimeEl.textContent = loginTimeStr;
    }
  }

  /**
   * Render Role-Specific Sidebar Menu Items
   */
  function renderSidebarMenu() {
    const navList = document.getElementById("dashSidebarNav");
    if (!navList) return;

    const roleObj = ROLE_CONFIG[activeRoleKey];
    navList.innerHTML = roleObj.tabs
      .map(function (tab) {
        const isActive = tab.id === activeTabId ? "active" : "";
        return `
          <li>
            <button
              type="button"
              class="dash_sidebar_link ${isActive}"
              data-sidebar-tab="${escapeHtml(tab.id)}"
              data-no-404="true"
            >
              <span class="dash_sidebar_link_left">
                <span class="dash_sidebar_icon">
                  <i class="fa-solid ${escapeHtml(tab.icon)}"></i>
                </span>
                <span>${escapeHtml(tab.label)}</span>
              </span>
              <span class="dash_sidebar_badge">${escapeHtml(tab.badge)}</span>
            </button>
          </li>
        `;
      })
      .join("");
  }

  /**
   * Render Active Sidebar Tab Content (KPI Cards, Equal-Height Content Cards & Responsive Table)
   */
  function renderActiveTabContent() {
    const container = document.getElementById("dashDynamicTabContent");
    if (!container) return;

    const roleObj = ROLE_CONFIG[activeRoleKey];
    const tabObj =
      roleObj.tabs.find(function (t) {
        return t.id === activeTabId;
      }) || roleObj.tabs[0];

    // 1. KPI Cards HTML (4 Equal-Height Cards)
    const kpiHtml = tabObj.kpis
      .map(function (kpi) {
        return `
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="dash_kpi_card ${escapeHtml(kpi.color)}">
              <div>
                <div class="dash_kpi_top">
                  <div class="dash_kpi_icon">
                    <i class="fa-solid ${escapeHtml(kpi.icon)}"></i>
                  </div>
                  <span class="dash_kpi_trend">${escapeHtml(kpi.trend)}</span>
                </div>
                <div class="dash_kpi_value">${escapeHtml(kpi.value)}</div>
                <div class="dash_kpi_label">${escapeHtml(kpi.label)}</div>
              </div>
              <div class="dash_kpi_foot">
                <span><i class="fa-solid fa-circle-check text-info me-1"></i> ${escapeHtml(kpi.foot)}</span>
                <a href="#" class="fw-bold" style="color: var(--primary-color)">Details <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    // 2. Featured Content Cards HTML (3 Equal-Height Cards)
    const cardsHtml = tabObj.cards
      .map(function (c) {
        const metaItems = c.meta
          .map(function (m) {
            return `
              <li>
                <span><i class="fa-solid ${escapeHtml(m.icon)}"></i> ${escapeHtml(m.label)}</span>
                <strong>${escapeHtml(m.val)}</strong>
              </li>
            `;
          })
          .join("");

        return `
          <div class="col-12 col-md-6 col-xl-4">
            <div class="dash_content_card">
              <div>
                <div class="dash_card_top_tags">
                  <span class="dash_tag_badge ${escapeHtml(c.tagColor)}">${escapeHtml(c.tag)}</span>
                  <span class="dash_card_code">${escapeHtml(c.code)}</span>
                </div>
                <h4>${escapeHtml(c.title)}</h4>
                <p>${escapeHtml(c.desc)}</p>
                <ul class="dash_card_meta_list">
                  ${metaItems}
                </ul>
                <div class="dash_progress_wrap">
                  <div class="dash_progress_label">
                    <span>${escapeHtml(c.progressLabel)}</span>
                    <span>${escapeHtml(c.progressVal)}%</span>
                  </div>
                  <div class="dash_progress_track">
                    <div class="dash_progress_fill" style="width: ${escapeHtml(c.progressVal)}%"></div>
                  </div>
                </div>
              </div>
              <div class="dash_card_footer">
                <button type="button" class="dash_btn_sm dash_btn_primary" data-redirect-404="true">
                  ${escapeHtml(c.btnLeft)} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
                <a href="#" class="dash_btn_sm dash_btn_outline">
                  ${escapeHtml(c.btnRight)}
                </a>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    // 3. Responsive Table HTML
    const theadHtml = tabObj.tableHeaders
      .map(function (th) {
        return `<th scope="col">${escapeHtml(th)}</th>`;
      })
      .join("");

    const tbodyHtml = tabObj.tableRows
      .map(function (row) {
        const codeCell = `<span class="table_code_badge">${escapeHtml(row[0])}</span>`;
        const titleCell = `<strong style="color: var(--theme-color-two)">${escapeHtml(row[1])}</strong>`;
        const col2 = escapeHtml(row[2]);
        const col3 = `<span class="text-nowrap">${escapeHtml(row[3])}</span>`;
        const col4 = `<span class="fw-semibold text-nowrap">${escapeHtml(row[4])}</span>`;
        const statusObj = row[5] || { text: "Verified", cls: "pill_teal" };
        const statusCell = `
          <span class="status_pill ${escapeHtml(statusObj.cls)}">
            <i class="fa-solid fa-circle-dot"></i> ${escapeHtml(statusObj.text)}
          </span>
        `;
        const actionLabel = escapeHtml(row[6] || "Manage");
        const actionCell = `
          <button type="button" class="dash_btn_sm dash_btn_teal" data-redirect-404="true">
            ${actionLabel} <i class="fa-solid fa-chevron-right"></i>
          </button>
        `;

        return `
          <tr>
            <td>${codeCell}</td>
            <td>${titleCell}</td>
            <td>${col2}</td>
            <td>${col3}</td>
            <td>${col4}</td>
            <td>${statusCell}</td>
            <td>${actionCell}</td>
          </tr>
        `;
      })
      .join("");

    container.innerHTML = `
      <!-- Active Sidebar Section Header -->
      <div class="dash_tab_header_card">
        <div class="dash_tab_header_left">
          <span class="tab_eyebrow">
            <i class="fa-solid ${escapeHtml(tabObj.icon)}"></i> ${escapeHtml(tabObj.eyebrow)}
          </span>
          <h3>${escapeHtml(tabObj.title)}</h3>
          <p>${escapeHtml(tabObj.subtitle)}</p>
        </div>
        <div class="dash_tab_header_actions">
          <button type="button" class="button-style-one py-2 px-3" data-redirect-404="true">
            <i class="fa-solid fa-cloud-arrow-down"></i> ${escapeHtml(tabObj.primaryBtn)}
          </button>
          <a href="#" class="button-style-three py-2 px-3">
            <i class="fa-solid fa-sliders"></i> ${escapeHtml(tabObj.secondaryBtn)}
          </a>
        </div>
      </div>

      <!-- 4 Equal-Height KPI Cards -->
      <div class="row g-4 align-items-stretch mb-4">
        ${kpiHtml}
      </div>

      <!-- 3 Equal-Height Role Content Cards -->
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <h4 class="mb-0" style="font-size: 20px; font-weight: 800; color: var(--theme-color-two)">
          <i class="fa-solid fa-cubes-stacked me-2" style="color: var(--primary-color)"></i>
          ${escapeHtml(tabObj.cardsSectionTitle)}
        </h4>
        <a href="#" class="fw-bold small" style="color: var(--theme-color-one)">
          View All Directory Items <i class="fa-solid fa-arrow-right ms-1"></i>
        </a>
      </div>
      <div class="row g-4 align-items-stretch mb-4">
        ${cardsHtml}
      </div>

      <!-- Responsive Data Table Panel -->
      <div class="row g-4 align-items-stretch">
        <div class="col-12">
          <div class="dash_panel_card">
            <div class="dash_panel_header">
              <h4>
                <i class="fa-solid fa-table-list"></i>
                ${escapeHtml(tabObj.tableTitle)}
              </h4>
              <div class="d-flex align-items-center flex-wrap gap-2">
                <button type="button" class="dash_btn_sm dash_btn_outline" data-redirect-404="true">
                  <i class="fa-solid fa-filter"></i> Filter Records
                </button>
                <a href="#" class="dash_btn_sm dash_btn_primary">
                  <i class="fa-solid fa-file-export"></i> Export CSV
                </a>
              </div>
            </div>
            <div class="table-responsive dashboard_table_wrap">
              <table class="table dashboard_table align-middle mb-0">
                <thead>
                  <tr>
                    ${theadHtml}
                  </tr>
                </thead>
                <tbody>
                  ${tbodyHtml}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Mobile Sidebar Drawer Controls
   */
  function closeMobileSidebar() {
    const sidebar = document.getElementById("dashSidebar");
    const backdrop = document.getElementById("dashSidebarBackdrop");
    if (sidebar) sidebar.classList.remove("open");
    if (backdrop) backdrop.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openMobileSidebar() {
    const sidebar = document.getElementById("dashSidebar");
    const backdrop = document.getElementById("dashSidebarBackdrop");
    if (sidebar) sidebar.classList.add("open");
    if (backdrop) backdrop.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  /**
   * Initialise Dashboard Events:
   * - Sidebar tab switching (NO 404 redirect)
   * - Logout buttons -> redirect to login.html (NO 404 redirect)
   * - Role switcher -> update role & sidebar (NO 404 redirect)
   * - All empty/# links and action buttons -> redirect to 404.html
   */
  function initDashboardEvents() {
    const openBtn = document.getElementById("dashMobileMenuBtn");
    const closeBtn = document.getElementById("dashSidebarCloseBtn");
    const backdrop = document.getElementById("dashSidebarBackdrop");
    const roleSelect = document.getElementById("dashRoleSwitcher");

    if (openBtn) {
      openBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        openMobileSidebar();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        closeMobileSidebar();
      });
    }

    if (backdrop) {
      backdrop.addEventListener("click", closeMobileSidebar);
    }

    // Role Switcher in Topbar (allows testing any role directly or from login)
    if (roleSelect) {
      roleSelect.addEventListener("change", function () {
        const newRole = roleSelect.value;
        if (ROLE_CONFIG[newRole]) {
          activeRoleKey = newRole;
          activeTabId = ROLE_CONFIG[activeRoleKey].tabs[0].id;
          currentSession.role = activeRoleKey;
          currentSession.roleLabel = ROLE_CONFIG[activeRoleKey].roleBadge;
          currentSession.ssoId =
            "OXF-" + activeRoleKey.slice(0, 3).toUpperCase() + "-8492";
          try {
            localStorage.setItem(
              "stacklyPortalSession",
              JSON.stringify(currentSession),
            );
          } catch (_) {}
          renderSessionAndProfileUI();
          renderSidebarMenu();
          renderActiveTabContent();
        }
      });
    }

    // Delegated click listener for Sidebar Tabs, Logout, and 404 Redirects
    document.addEventListener("click", function (e) {
      // 1. Sidebar Menu Item Click -> Switch Active Content (Never 404)
      const sidebarTabBtn = e.target.closest("[data-sidebar-tab]");
      if (sidebarTabBtn) {
        e.preventDefault();
        e.stopPropagation();
        const targetTabId = sidebarTabBtn.getAttribute("data-sidebar-tab");
        if (targetTabId && targetTabId !== activeTabId) {
          activeTabId = targetTabId;
          renderSidebarMenu();
          renderActiveTabContent();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        closeMobileSidebar();
        return;
      }

      // 2. Logout Button Click -> Redirect to Login Page (Never 404)
      const logoutBtn = e.target.closest(
        "#sidebarLogoutBtn, #dashLogoutBtn, .dash_logout_btn, [data-action='logout']",
      );
      if (logoutBtn) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = "login.html";
        return;
      }

      // 3. Ignore Mobile Sidebar Toggle / Close / Role Select Controls
      if (
        e.target.closest(
          "#dashMobileMenuBtn, #dashSidebarCloseBtn, #dashSidebarBackdrop, #dashRoleSwitcher, [data-no-404]",
        )
      ) {
        return;
      }

      // 4. Empty Links / "#" Links OR Dashboard Action Buttons -> Redirect to 404.html
      const link = e.target.closest("a");
      if (link) {
        const rawHref = (link.getAttribute("href") || "").trim();
        if (
          rawHref === "" ||
          rawHref === "#" ||
          rawHref.toLowerCase() === "javascript:void(0)" ||
          rawHref.toLowerCase() === "javascript:;"
        ) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "404.html";
          return;
        }
      }

      const btn = e.target.closest("button");
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = "404.html";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadSessionData();
    renderSessionAndProfileUI();
    renderSidebarMenu();
    renderActiveTabContent();
    initDashboardEvents();
  });
})();
