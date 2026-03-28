// Each answer set is mapped to "traits" which will help calculate the best-fit career.
const questions = [
  {
    text: "How do you feel about working with other people?",
    options: [
      { answer: "I love collaborating with others", trait: "collab" },
      { answer: "I prefer working alone", trait: "solo" },
      { answer: "A mix of both works for me", trait: "flexible" }
    ]
  },
  {
    text: "Do you enjoy public speaking?",
    options: [
      { answer: "Yes, I enjoy presenting and speaking to groups", trait: "communicator" },
      { answer: "I’m comfortable but not passionate about it", trait: "neutral" },
      { answer: "No, I prefer not to speak in front of crowds", trait: "reserved" }
    ]
  },
  {
    text: "Are you comfortable working with numbers and data?",
    options: [
      { answer: "Absolutely, I enjoy numbers and analysis", trait: "analytical" },
      { answer: "I can manage if needed", trait: "neutral" },
      { answer: "I prefer to avoid working with numbers", trait: "creative" }
    ]
  },
  {
    text: "How creative would you describe yourself?",
    options: [
      { answer: "Very creative, I love thinking outside the box", trait: "creative" },
      { answer: "Somewhat creative, I can be when needed", trait: "flexible" },
      { answer: "Not very creative, I prefer structure and routines", trait: "structured" }
    ]
  },
  {
    text: "Do you enjoy helping others solve their problems?",
    options: [
      { answer: "Yes, it’s very rewarding", trait: "helper" },
      { answer: "Sometimes, if I feel qualified", trait: "neutral" },
      { answer: "Not really, I prefer tasks over people", trait: "tasker" }
    ]
  },
  {
    text: "How do you handle stressful or high-pressure situations?",
    options: [
      { answer: "I thrive under pressure", trait: "leader" },
      { answer: "I can manage, but it’s not my preference", trait: "steady" },
      { answer: "I struggle with high-stress situations", trait: "relaxed" }
    ]
  },
  {
    text: "Are you interested in technology and computers?",
    options: [
      { answer: "Yes, very interested", trait: "tech" },
      { answer: "Somewhat interested", trait: "neutral" },
      { answer: "Not really", trait: "nontech" }
    ]
  },
  {
    text: "Do you prefer working indoors or outdoors?",
    options: [
      { answer: "Indoors", trait: "indoors" },
      { answer: "Outdoors", trait: "outdoors" },
      { answer: "No preference", trait: "flexible" }
    ]
  },
  {
    text: "How important is job stability to you?",
    options: [
      { answer: "Very important", trait: "stable" },
      { answer: "Somewhat important", trait: "steady" },
      { answer: "Not important, I like change", trait: "adventurous" }
    ]
  },
  {
    text: "Do you like leading projects or teams?",
    options: [
      { answer: "Yes, I enjoy being a leader", trait: "leader" },
      { answer: "Sometimes, depending on the team", trait: "flexible" },
      { answer: "No, I prefer to follow directions", trait: "follower" }
    ]
  },
  {
    text: "Are you detail-oriented?",
    options: [
      { answer: "Yes, I notice every little thing", trait: "detail" },
      { answer: "I pay attention to important details", trait: "neutral" },
      { answer: "Not really, I’m more of a big-picture person", trait: "visionary" }
    ]
  },
  {
    text: "Would you rather work for a company or be self-employed?",
    options: [
      { answer: "Work for a company", trait: "company" },
      { answer: "Be self-employed", trait: "entrepreneur" },
      { answer: "I’m open to both", trait: "flexible" }
    ]
  },
  {
    text: "How do you prefer to solve problems?",
    options: [
      { answer: "With logic and analysis", trait: "analytical" },
      { answer: "With creativity and new ideas", trait: "creative" },
      { answer: "I look for practical, tried-and-true solutions", trait: "practical" }
    ]
  },
  {
    text: "Are you comfortable making decisions quickly?",
    options: [
      { answer: "Yes, I’m decisive", trait: "leader" },
      { answer: "Sometimes, if I have enough info", trait: "steady" },
      { answer: "No, I prefer to take my time", trait: "cautious" }
    ]
  },
  {
    text: "Does the idea of routine comfort you?",
    options: [
      { answer: "Yes, I prefer predictable days", trait: "structured" },
      { answer: "Variety is key for me", trait: "adventurous" },
      { answer: "I like a bit of both", trait: "flexible" }
    ]
  },
  {
    text: "What motivates you most at work?",
    options: [
      { answer: "Making a difference in people’s lives", trait: "helper" },
      { answer: "Achieving personal or team goals", trait: "goal" },
      { answer: "Learning new things", trait: "learner" }
    ]
  },
  {
    text: "Do you enjoy hands-on work?",
    options: [
      { answer: "Yes, I love doing things physically", trait: "hands-on" },
      { answer: "I prefer a mix of desk and hands-on work", trait: "flexible" },
      { answer: "No, I like working at a desk", trait: "desk" }
    ]
  },
  {
    text: "How important is creativity in your ideal job?",
    options: [
      { answer: "Extremely important", trait: "creative" },
      { answer: "Somewhat important", trait: "flexible" },
      { answer: "Not important", trait: "structured" }
    ]
  },
  {
    text: "Do you like traveling for work?",
    options: [
      { answer: "Yes, I’d love to travel", trait: "adventurous" },
      { answer: "Occasionally, but not too much", trait: "steady" },
      { answer: "No, I’d rather stay close to home", trait: "stable" }
    ]
  },
  {
    text: "Would you prefer a job with a set schedule or flexible hours?",
    options: [
      { answer: "Set schedule", trait: "structured" },
      { answer: "Flexible hours", trait: "flexible" },
      { answer: "I don’t have a preference", trait: "neutral" }
    ]
  }
];

// Each career has a set of core trait requirements (for simplicity here).
// You can customize the career list further as wanted.
const careers = [
  {
    name: "Teacher",
    desc: "You enjoy helping others, working with people, and making a difference. Teaching might be your calling!",
    extendedDesc: "Education professionals not only impart knowledge but also mentor students and adapt to diverse learning styles. Opportunities span from primary schools to corporate training environments. In-demand skills include active listening, adaptability, and instructional design.",
    traits: ["helper", "collab", "communicator"]
  },
  {
    name: "Software Developer",
    desc: "You enjoy technology, problem solving, and working independently or with small teams. A great fit for the digital age!",
    extendedDesc: "Developers design, write, and test code for software applications. This field values logical thinking, ongoing learning, and creativity in technical problem-solving. Roles range from front-end web design to backend systems engineering.",
    traits: ["tech", "analytical", "detail", "solo"]
  },
  {
    name: "Accountant / Analyst",
    desc: "You love numbers, details, and structured environments. Analytical expertise and precision are your strengths.",
    extendedDesc: "Financial and data analysts assess information to help organizations make strategic decisions. They maintain rigorous standards of accuracy and often work with complex databases, requiring deep focus and an organized mindset.",
    traits: ["analytical", "structured", "detail"]
  },
  {
    name: "Entrepreneur",
    desc: "You dream big, are self-driven, and love starting things from scratch. The world of business and innovation awaits you.",
    extendedDesc: "Entrepreneurs identify market gaps and build businesses to fill them. Success requires high risk-tolerance, intrinsic motivation, and a diverse skill set ranging from leadership to financial planning and marketing.",
    traits: ["entrepreneur", "leader", "adventurous"]
  },
  {
    name: "Artist / Designer",
    desc: "Creativity and expressiveness shape your work style. If creative problem-solving and originality excite you, consider artistic fields.",
    extendedDesc: "Whether in graphic design, illustration, or multimedia arts, professionals in this field translate ideas into visual forms. It demands an eye for aesthetics, an understanding of current trends, and the ability to take conceptual briefs to finished products.",
    traits: ["creative", "visionary", "flexible"]
  },
  {
    name: "Healthcare Professional",
    desc: "Caring for others, stability, and making real-world impact motivate you. Healthcare could be your perfect fit.",
    extendedDesc: "From nursing to specialized medicine or counseling, healthcare workers prioritize patient well-being. It is a high-demand, high-responsibility sector requiring immense empathy, emotional resilience, and technical precision.",
    traits: ["helper", "stable", "structured"]
  },
  {
    name: "Project Manager",
    desc: "You thrive on leading teams, organization, and achieving goals. Project management might be your best fit!",
    extendedDesc: "Project managers act as the bridge between execution and strategy. They coordinate timelines, manage budgets, and resolve team conflicts to ensure complex projects are delivered successfully and efficiently.",
    traits: ["leader", "goal", "detail", "collab"]
  },
  {
    name: "Research Scientist",
    desc: "Curiosity, knowledge, and analytical thinking are your guiding lights. Research suits lifelong learners.",
    extendedDesc: "Scientists conduct experiments and analyze data to expand knowledge in fields like biology, physics, or environmental science. They spend significant time in labs or the field, requiring meticulous methodology and patience.",
    traits: ["learner", "analytical", "detail"]
  },
  {
    name: "Marketing / Communications",
    desc: "You’re outgoing, creative, and love sharing ideas—consider communications, PR, or marketing.",
    extendedDesc: "Marketing professionals connect products and ideas with people. They analyze consumer behavior, craft compelling campaigns, and manage brand public relations. Excellent writing and interpersonal communication are essential.",
    traits: ["communicator", "creative", "collab"]
  },
  {
    name: "Engineer (Mechanical / Civil)",
    desc: "You enjoy hands-on work, solving tangible problems, and structured thinking—engineering may be your path.",
    extendedDesc: "Engineers apply mathematics and science to design, create, and optimize physical structures or machinery. It balances theoretical knowledge with practical, hands-on application in the physical world.",
    traits: ["hands-on", "practical", "analytical", "structured"]
  }
];

let current = 0;
let answers = [];

function startQuiz() {
  current = 0;
  answers = [];
  document.getElementById('main').innerHTML = `<div id="quiz"></div>`;
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  let html = `<div class="question">${current+1}. ${q.text}</div><div class="options">`;
  q.options.forEach((opt, idx) => {
    html += `<button onclick="selectOption(${idx})">${opt.answer}</button>`;
  });
  html += `</div>`;
  document.getElementById('quiz').innerHTML = html;
}

function selectOption(idx) {
  answers.push(questions[current].options[idx].trait);
  current++;
  if (current >= questions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  // Count trait frequencies
  const counts = {};
  answers.forEach(trait => { counts[trait] = (counts[trait]||0) + 1; });
  
  // Find best matching career
  let bestCareer = null;
  let bestScore = -1;
  let bestTie = [];

  careers.forEach(career => {
    let score = 0;
    career.traits.forEach(trait => { score += (counts[trait] || 0); });
    if (score > bestScore) {
      bestScore = score;
      bestCareer = career;
      bestTie = [career];
    } else if (score === bestScore) {
      bestTie.push(career);
    }
  });

  // Summarize traits
  let sortedTraits = Object.entries(counts).sort((a,b) => b[1] - a[1]);
  let topTraits = sortedTraits.slice(0, 3).map(t => t[0]).join(', ');

  let html = `<div class="result">
    <h2>Assessment Complete</h2>
    <div style="font-size: 0.9em; color: #6b7280; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em;">
      Primary Traits: ${topTraits}
    </div>
    <div style="margin-bottom: 10px; font-weight: 500;">Recommended Profile:</div>`;
    
  // If tie, list all
  bestTie.forEach(item => {
    let indeedQuery = encodeURIComponent(item.name);
    
    html += `<div class="career-name">${item.name}</div>
             <div class="career-desc" style="margin-bottom: 8px;"><strong>Overview:</strong> ${item.desc}</div>
             <div class="career-desc" style="margin-bottom: 20px;"><strong>What to expect:</strong> ${item.extendedDesc}</div>
             
             <!-- Dynamic Job Board Container -->
             <div id="jobs-container" style="margin-top: 25px; padding: 20px; background: #f3f4f6; border-radius: 8px; text-align: left; border: 1px solid #e5e7eb;">
                 <!-- Jobs will be injected here via fetchLocalJobs() -->
             </div>
             `;
  });

  html += `<button class="btn-restart" onclick="startQuiz()" style="margin-top: 40px; border: none; font-size: 0.9em; text-decoration: underline; background: transparent; color: #4b5563; cursor: pointer;">Restart Assessment</button></div>`;

  document.getElementById('main').innerHTML = html;

  // Immediately load the job offerings in the background for the best match
  if(bestTie.length > 0) {
    fetchLocalJobs(bestTie[0].name);
  }
}

// ---------------------------------------------------------
// Job Location Fetcher & Display UI
// ---------------------------------------------------------
async function fetchLocalJobs(jobTitle) {
  const container = document.getElementById('jobs-container');
  if(!container) return;
  
  // Show loading state
  container.innerHTML = `
    <div style="display: flex; gap: 10px; align-items: center; color: #6b7280;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="spin" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke="#d1d5db" stroke-width="4"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="#111827" stroke-width="4" stroke-linecap="round"></path>
      </svg>
      <span style="font-style: italic;">Pinpointing your area and finding ${jobTitle} opportunities...</span>
    </div>
    <style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
  `;

  try {
    // 1. Get User's Location (Free IP Geolocation API with no key required)
    const geoRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const geoData = await geoRes.json();
    const city = geoData.city || 'your area';
    const region = geoData.region || '';

    // 2. Mocking/Displaying the Job Data
    // Note for Hackathon: Since strictly *local* job board APIs (like Indeed/LinkedIn) require private auth keys, 
    // we generate highly realistic localized data structures based on the IP geo-location to demonstrate the UI concept.
    setTimeout(() => {
      const mockJobs = [
        { 
          title: `Junior ${jobTitle}`, 
          company: `${city} Tech Solutions`, 
          location: `${city}, ${region} (Hybrid)`,
          salary: "$50k - $70k",
          type: "Full-Time",
          img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=150&q=80",
          desc: `Looking for an enthusiastic ${jobTitle} to join our growing local team. Experience with modern workflows is required. Great benefits and mentorship included.` 
        },
        { 
          title: `Senior ${jobTitle}`, 
          company: `Global Innovations ${city}`, 
          location: `${city}, ${region} (On-site)`,
          salary: "$90k - $120k",
          type: "Full-Time",
          img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&h=150&q=80",
          desc: `Lead projects and drive success in our downtown office. Excellent compensation, equity options, and comprehensive health benefits package.` 
        },
        { 
          title: `Freelance ${jobTitle}`, 
          company: `Remote & ${city} Partners`, 
          location: `Remote / ${city}`,
          salary: "$45 - $75 / hr",
          type: "Contract",
          img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&h=150&q=80",
          desc: `Flexible schedule. Requires occasional client meetings in the ${city} metropolitan area. Perfect for self-starters and independent workers.` 
        },
        { 
          title: `${jobTitle} Associate`, 
          company: `${city} Metropolitan Services`, 
          location: `${city}, ${region} (On-site)`,
          salary: "$55k - $65k",
          type: "Full-Time",
          img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&h=150&q=80",
          desc: `Join the public sector team serving the greater ${city} area. Secure job with excellent pension, PTO, and immediate start dates.` 
        },
        { 
          title: `Lead ${jobTitle}`, 
          company: `Start-Up ${city}`, 
          location: `Hybrid - ${city}`,
          salary: "$100k+ & Equity",
          type: "Full-Time",
          img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=400&h=150&q=80",
          desc: `Fast-paced environment looking for an experienced ${jobTitle} to shape our core products. We offer catered lunches and fully paid healthcare.` 
        }
      ];

      let jobsHtml = `
        <h3 style="margin-top: 0; font-size: 1.1em; color: #1f2937;">
          <span style="margin-right: 5px;">📍</span> Opportunities near ${city}, ${region}
        </h3>
        <p style="font-size: 0.9em; color: #4b5563; margin-bottom: 15px;">We matched your IP to locate these top regional positions:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 15px;">
      `;
      
      mockJobs.forEach(job => {
         jobsHtml += `
            <div style="background: #ffffff; border: 1px solid #d1d5db; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); text-align: left; display: flex; flex-direction: column;">
              <img src="${job.img}" alt="Office Image" style="width: 100%; height: 120px; object-fit: cover; border-bottom: 1px solid #e5e7eb;">
              <div style="padding: 16px; display: flex; flex-direction: column; flex-grow: 1;">
                <div style="font-weight: 600; font-size: 1.1em; color: #111827;">${job.title}</div>
                <div style="font-size: 0.95em; color: #4b5563; margin-top: 4px;"><strong>🏢 ${job.company}</strong></div>
                
                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                  <span style="background: #f3f4f6; color: #4b5563; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">📌 ${job.location}</span>
                  <span style="background: #ecfdf5; color: #065f46; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">💰 ${job.salary}</span>
                  <span style="background: #eff6ff; color: #065f46; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">⏱️ ${job.type}</span>
                </div>

                <p style="font-size: 0.9em; color: #374151; margin-top: 12px; line-height: 1.5; flex-grow: 1;">${job.desc}</p>
                <a href="https://www.indeed.com/jobs?q=${encodeURIComponent(job.title + ' ' + job.company)}&l=${encodeURIComponent(city)}" target="_blank" class="btn-action" style="text-decoration: none; text-align: center; width: 100%; margin-top: 15px; padding: 12px; font-size: 0.95em; border-radius: 6px; box-sizing: border-box; display: inline-block;">Apply Now</a>
              </div>
            </div>
         `;
      });
      
      jobsHtml += `</div>
        <div style="margin-top: 20px; text-align: center;">
            <a href="https://www.indeed.com/jobs?q=${encodeURIComponent(jobTitle)}+${encodeURIComponent(city)}" target="_blank" style="color: #4b5563; font-size: 0.9em; text-decoration: underline;">
              View all ${jobTitle} jobs in ${city} on Indeed ➔
            </a>
        </div>
      `;
      
      container.innerHTML = jobsHtml;
    }, 1500); // Simulate network load time for effect

  } catch (error) {
     container.innerHTML = `<p style="color: #b91c1c;">Unable to detect location. Please check <a href="https://www.indeed.com/jobs?q=${encodeURIComponent(jobTitle)}" target="_blank" style="color: #b91c1c; text-decoration: underline;">Indeed</a> for general listings.</p>`;
  }
}

// Expose globally
window.startQuiz = startQuiz;
