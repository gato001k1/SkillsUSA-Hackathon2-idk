// SVG Definitions
const svgs = {
  pin: `<svg style="width:14px;height:14px;vertical-align:middle;margin-right:4px;margin-top:-2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  building: `<svg style="width:16px;height:16px;vertical-align:middle;margin-right:4px;margin-top:-2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`,
  money: `<svg style="width:14px;height:14px;vertical-align:middle;margin-right:4px;margin-top:-2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>`,
  clock: `<svg style="width:14px;height:14px;vertical-align:middle;margin-right:4px;margin-top:-2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
};

let userLocation = { city: "your area", region: "" };

// Standardized Job Object Format
class JobPosting {
  constructor({title, company, location, type, source, url, providerColor}) {
    this.title = title;
    this.company = company;
    this.location = location;
    this.type = type;
    this.source = source;
    this.url = url;
    this.providerColor = providerColor;
  }
}

// Automatically fetch location on load
window.addEventListener('load', async () => {
    try {
        const geoRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const geoData = await geoRes.json();
        if(geoData.city) {
            userLocation.city = geoData.city;
            userLocation.region = geoData.region || '';
            document.querySelectorAll('.filter-badge')[1].innerText = `Location: ${userLocation.city}, ${userLocation.region}`;
        }
    } catch (e) {
        document.querySelectorAll('.filter-badge')[1].innerText = `Location: Unknown (Global fallback)`;
    }
});

async function searchJobs() {
  const query = document.getElementById('search-query').value.trim();
  const container = document.getElementById('results-container');
  
  if (!query) return;

  // Show loading
  container.innerHTML = `
    <div style="grid-column: 1 / -1; text-align: center; color: #6b7280; padding: 40px;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style="animation: spin 1s linear infinite; margin-bottom: 15px;">
        <circle cx="12" cy="12" r="10" stroke="#d1d5db" stroke-width="4"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="#111827" stroke-width="4" stroke-linecap="round"></path>
      </svg>
      <p>Scraping and aggregating jobs for "${query}"...</p>
    </div>
  `;

  let allJobs = [];

  try {
    // ==========================================
    // PROVIDER 1: Public Job Board API (Arbeitnow)
    // ==========================================
    // We query a real, free API to represent external board integrations
    const apiRes = await fetch('https://www.arbeitnow.com/api/job-board-api');
    if (apiRes.ok) {
        const apiData = await apiRes.json();
        // Filter their data locally since their free API doesn't support complex querying
        const filteredApi = apiData.data.filter(job => job.title.toLowerCase().includes(query.toLowerCase()));
        
        filteredApi.slice(0, 4).forEach(job => {
            allJobs.push(new JobPosting({
                title: job.title,
                company: job.company_name,
                location: job.location || "Remote",
                type: job.job_types ? job.job_types[0] : "Full-Time",
                source: "Arbeitnow",
                url: job.url,
                providerColor: "#2563eb" // Blue for Arbeitnow indicator
            }));
        });
    }

    // ==========================================
    // PROVIDER 2: "Scraped" Mock Data Concept
    // ==========================================
    // Note: Actual scraping (like BeautifulSoup/Puppeteer) must happen on a backend server, not the browser.
    // This simulates the data our server scraper *would* return to us for Indeed.
    const mockScrapedJobs = simulateBackendScraper(query, userLocation.city);
    allJobs = allJobs.concat(mockScrapedJobs);

    // Shuffle Array to "Mix" the jobs together
    allJobs = allJobs.sort(() => 0.5 - Math.random());

    // Render Logic
    if (allJobs.length === 0) {
        container.innerHTML = `<div style="grid-column: 1 / -1; padding:40px; text-align:center;">No results found for "${query}".</div>`;
        return;
    }

    let html = '';
    allJobs.forEach(job => {
        html += `
        <div class="job-card">
            <div class="job-provider" style="background: ${job.providerColor};">${job.source}</div>
            <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                <div style="font-weight: 600; font-size: 1.15em; color: #111827;">${job.title}</div>
                <div style="font-size: 0.95em; color: #4b5563; margin-top: 6px; display: flex; align-items: center;">
                  <strong>${svgs.building} ${job.company}</strong>
                </div>
                
                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; margin-bottom: 15px;">
                  <span style="background: #f3f4f6; color: #4b5563; padding: 4px 8px; border-radius: 4px; font-size: 0.85em;">${svgs.pin} ${job.location}</span>
                  <span style="background: #eff6ff; color: #1e3a8a; padding: 4px 8px; border-radius: 4px; font-size: 0.85em;">${svgs.clock} ${job.type}</span>
                </div>
                
                <div style="flex-grow: 1;"></div>
                <a href="${job.url}" target="_blank" style="display: block; text-align: center; background: #111827; color: white; padding: 10px; border-radius: 6px; text-decoration: none; font-weight: 500; transition: background 0.2s;">
                    View on ${job.source}
                </a>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;

  } catch (err) {
      container.innerHTML = `<p style="grid-column: 1 / -1; color: #b91c1c;">An error occurred while fetching jobs.</p>`;
  }
}

// Simulated backend response for a web scraper
function simulateBackendScraper(query, city) {
    const scrapedList = [];
    const keywords = query.split(' ')[0];
    
    scrapedList.push(new JobPosting({
        title: `Junior ${query}`,
        company: `${city} Tech Partners`,
        location: `${city} (Hybrid)`,
        type: "Full-Time",
        source: "Indeed (Scraped)",
        url: `https://www.indeed.com/jobs?q=${encodeURIComponent(query)}&l=${encodeURIComponent(city)}`,
        providerColor: "#003A9B" // Indeed Blue
    }));

    scrapedList.push(new JobPosting({
        title: `Freelance ${keywords} Specialist`,
        company: `Corporate Innovations`,
        location: `Remote`,
        type: "Contract",
        source: "Indeed (Scraped)",
        url: `https://www.indeed.com/jobs?q=${encodeURIComponent(query)}`,
        providerColor: "#003A9B"
    }));

    return scrapedList;
}

// Add enter key support to search bar
document.getElementById('search-query')?.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') searchJobs();
});