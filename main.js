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
    traits: ["helper", "collab", "communicator"]
  },
  {
    name: "Software Developer",
    desc: "You enjoy technology, problem solving, and working independently or with small teams. A great fit for the digital age!",
    traits: ["tech", "analytical", "detail", "solo"]
  },
  {
    name: "Accountant / Analyst",
    desc: "You love numbers, details, and structured environments. Analytical expertise and precision are your strengths.",
    traits: ["analytical", "structured", "detail"]
  },
  {
    name: "Entrepreneur",
    desc: "You dream big, are self-driven, and love starting things from scratch. The world of business and innovation awaits you.",
    traits: ["entrepreneur", "leader", "adventurous"]
  },
  {
    name: "Artist / Designer",
    desc: "Creativity and expressiveness shape your work style. If creative problem-solving and originality excite you, consider artistic fields.",
    traits: ["creative", "visionary", "flexible"]
  },
  {
    name: "Healthcare Professional",
    desc: "Caring for others, stability, and making real-world impact motivate you. Healthcare could be your perfect fit.",
    traits: ["helper", "stable", "structured"]
  },
  {
    name: "Project Manager",
    desc: "You thrive on leading teams, organization, and achieving goals. Project management might be your best fit!",
    traits: ["leader", "goal", "detail", "collab"]
  },
  {
    name: "Research Scientist",
    desc: "Curiosity, knowledge, and analytical thinking are your guiding lights. Research suits lifelong learners.",
    traits: ["learner", "analytical", "detail"]
  },
  {
    name: "Marketing / Communications",
    desc: "You’re outgoing, creative, and love sharing ideas—consider communications, PR, or marketing.",
    traits: ["communicator", "creative", "collab"]
  },
  {
    name: "Engineer (Mechanical / Civil)",
    desc: "You enjoy hands-on work, solving tangible problems, and structured thinking—engineering may be your path.",
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
    html += `<div class="career-name">${item.name}</div>
             <div class="career-desc">${item.desc}</div>
             
             <!-- Location and AI Feature Buttons -->
             <div style="margin-top: 25px; display: flex; flex-direction: column; gap: 12px; align-items: center;">
                 <button class="btn-action" onclick="findJobsNearMe('${item.name}')" style="width: 100%; max-width: 300px;">
                   Find Local Opportunities
                 </button>
                 <button class="btn-action btn-action-outline" onclick="openAIChat('${item.name}')" style="width: 100%; max-width: 300px;">
                   Query Database
                 </button>
             </div>
             `;
  });

  html += `<button class="btn-restart" onclick="startQuiz()" style="margin-top: 40px; border: none; font-size: 0.9em; text-decoration: underline; background: transparent; color: #4b5563;">Restart Assessment</button></div>`;
  
  // Container for AI Chat (Hidden by default)
  html += `
    <div id="ai-chat-box" style="display:none; margin-top:30px; text-align: left; background: #ffffff; padding: 20px; border-radius: 4px; border: 1px solid #e5e7eb;">
      <h3 style="margin-top:0; font-size: 1.1em; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Information Database</h3>
      <div id="ai-responses" style="max-height: 200px; overflow-y: auto; margin-bottom: 15px; font-size: 0.95em; color: #374151; line-height: 1.5;"></div>
      <div style="display: flex; gap: 8px;">
        <input type="text" id="ai-input" placeholder="Type your query..." style="flex: 1; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 4px; font-family: inherit;">
        <button onclick="askAIApi()" class="btn-action" style="margin-top: 0; padding: 10px 20px;">Submit</button>
      </div>
    </div>
  `;

  document.getElementById('main').innerHTML = html;
}

// ---------------------------------------------------------
// Job Location Finder (Using Geolocation + Google Maps)
// ---------------------------------------------------------
function findJobsNearMe(jobTitle) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let query = encodeURIComponent(jobTitle + ' companies jobs');
        let mapsUrl = `https://www.google.com/maps/search/\${query}/@\${lat},\${lng},12z\`;
        window.open(mapsUrl, '_blank');
      },
      (error) => {
        alert("Location access denied or unavailable. Opening general search instead.");
        window.open(\`https://www.indeed.com/jobs?q=\${encodeURIComponent(jobTitle)}\`, '_blank');
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// ---------------------------------------------------------
// Basic Public API "AI" Concept (Using Wikipedia API as free example)
// ---------------------------------------------------------
let currentAICareer = "";
function openAIChat(jobTitle) {
  currentAICareer = jobTitle;
  document.getElementById('ai-chat-box').style.display = 'block';
  document.getElementById('ai-responses').innerHTML = `<em>Query loaded for profile: ${jobTitle}. How may I assist?</em>`;
}

async function askAIApi() {
  const inputEl = document.getElementById('ai-input');
  const question = inputEl.value.trim();
  if(!question) return;

  const responsesEl = document.getElementById('ai-responses');
  responsesEl.innerHTML += \`<div style="margin-top:15px; padding-bottom: 5px; border-bottom: 1px solid #f3f4f6;"><strong>Query:</strong> \${question}</div>\`;
  responsesEl.innerHTML += \`<div id="ai-loading" style="color: #6b7280; margin-top:10px; font-style: italic;">Processing request...</div>\`;
  inputEl.value = '';

  try {
    // For a 100% free "AI" information fetch with no API keys, we can query Wikipedia's public API
    // If you ever get a free LLM API key, you'd replace this fetch URL with the LLM endpoint (e.g. HuggingFace, OpenAI, Gemini)
    let searchTerm = currentAICareer.split(' ')[0]; // Simplify term for better matching
    let response = await fetch(\`https://en.wikipedia.org/api/rest_v1/page/summary/\${encodeURIComponent(searchTerm)}\`);
    
    document.getElementById('ai-loading').remove();

    if(response.ok) {
      let data = await response.json();
      responsesEl.innerHTML += \`<div style="margin-top:10px; padding: 12px; background: #f9fafb; border-left: 3px solid #111827; border-radius: 0 4px 4px 0;"><strong>System:</strong> \${data.extract || "Insufficient data to provide a complete summary for this specific role."}</div>\`;
    } else {
      responsesEl.innerHTML += \`<div style="margin-top:10px; color: #b91c1c; padding: 10px; background: #fef2f2; border-left: 3px solid #b91c1c;"><strong>System Error:</strong> Unable to locate profile in database.</div>\`;
    }
  } catch (err) {
    document.getElementById('ai-loading')?.remove();
    responsesEl.innerHTML += \`<div style="margin-top:10px; color: #b91c1c; padding: 10px; background: #fef2f2; border-left: 3px solid #b91c1c;"><strong>Network Error:</strong> Connection to database failed.</div>\`;
  }
  
  // Auto-scroll to bottom
  responsesEl.scrollTop = responsesEl.scrollHeight;
}

// Expose globally
window.startQuiz = startQuiz;
window.findJobsNearMe = findJobsNearMe;
window.openAIChat = openAIChat;
window.askAIApi = askAIApi;
