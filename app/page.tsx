"use client";
import React from 'react';

export default function Portfolio() {
  const experiences = [
    {
      title: "Geospatial Reasoning Specialist",
      company: "Meridial Marketplace, by Invisible",
      date: "Jan 2026 - Present",
      logo: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/Experience_Meridial2.png",
      bullets: [
        "Train Prompts for Geospatial Artificial Intelligence from Google Geospatial Reasoning AI and Google Earth AI.",
        "Specify problems and ambiguities of AI prompts and assess clarifications to determine prompt urgency.",
        "Build processing structures for Geospatial Problems to ensure smooth and runnable workflows."
      ]
    },
    {
      title: "GIS Operator - M4CR Project",
      company: "Ministry of Forestry (The World Bank Project)",
      date: "Jul 2025 - Present",
      logo: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/Experience_M4CR.png",
      bullets: [
        "Evaluated and analyzed complex geospatial data to drive mangrove rehabilitation strategies across four provinces.",
        "Standardized and validated spatial datasets by aggregating and cleansing data for high accuracy.",
        "Facilitated community-based initiatives to strengthen sustainable coastal resilience."
      ]
    },
    {
      title: "GIS and Mangrove Rehabilitation Staff",
      company: "Peatland and Mangrove Restoration Agency (BRGM)",
      date: "Feb 2024 - Feb 2025",
      logo: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/Experience_BRGM.webp",
      bullets: [
        "Conducted 100+ site evaluations in North Sumatra and Riau to assess restoration suitability.",
        "Developed a GIS database to track planting progress, land use changes, and environmental risks.",
        "Coordinated with government agencies and NGOs to restore 1,000+ hectares of degraded forests."
      ]
    },
    {
      title: "Surveyor",
      company: "Ministry of Agriculture",
      date: "Oct 2023 - Dec 2023",
      logo: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/Experience_Kementan.png",
      bullets: [
        "Collected spatial data on coffee plantation areas for integrated application database (SiCantik) using SW Maps.",
        "Measured coffee beans seed plantations in Humbang Hasundutan and Bandung Regency.",
        "Interviewed agriculture data with coffee farmers."
      ]
    },
    {
      title: "Task Force Staff",
      company: "Bureau of Strategic Management - UGM",
      date: "Jul 2023 - Oct 2023",
      logo: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/Experience_UGM.png",
      bullets: [
        "Collaborated with the UGM rectorate to prepare proposals related to UGM's cooperation with external parties.",
        "Assisted the rectorate in meetings to advance UGM's expansion plans."
      ]
    }
  ];

  const techStacks = [
    { name: "ArcGIS Products", img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/techstack_ArcGisPro.png" },
    { name: "QGIS Environment", img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/techstack_QGIS.png" },
    { name: "Google Earth Engine", img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/techstack_GEE.png" },
    { name: "Agisoft Metashape", img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/techstack_Agisoft.png" },
    { name: "MapLibre", img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/techstack_MapLibre.png" },
    { name: "GlobalMapper", img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/techstack_GlobalMapper.png" },
    { name: "Avenza Maps", img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/techstack_AvenzaMaps.png" },
    { name: "Geoserver", img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/techstack_GeoServer.png" }
  ];

  const portfolios: { title: string; desc: string; tech: string[]; img: string }[] = [
    { title: "M4CR 3D Visualizations", desc: "Created 3D visualizations of four provinces in Indonesia as a baseline benchmark.", tech: ["ArcGIS Pro", "QGIS"], img: "https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/Portfolio_M4CR%203D%20Visualizations.png" },
    { title: "Mangrove Planting Map 2025", desc: "Designed planting maps for annual planning strategy meetings across 5000+ hectares.", tech: ["ArcGIS Pro", "QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_Mangrove%20Planting%20Map%202025.png?raw=true" },
    { title: "Drone Photos Acquisition", desc: "Captured drone oblique and orthophotos at mangrove sites in East Kalimantan.", tech: ["Agisoft Metashape", "QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_Drone%20Photos.png?raw=true" },
    { title: "Site Assessment Mangrove Planting Map", desc: "Analyzed suitable locations for mangrove rehabilitation planting in four provinces.", tech: ["ArcGIS Pro", "QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_Site%20Assesment.png?raw=true" },
    { title: "Forestry Zonation Map", desc: "Created forestry zonation for mangrove location analysis in North Sumatera Province.", tech: ["ArcGIS Pro", "QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_Mangrove%20Zonation%20Map.png?raw=true" },
    { title: "Drone Piloting & Postprocessing", desc: "Conducted aerial surveys of mangrove habitats using UAVs and produced orthophotos.", tech: ["Agisoft Metashape", "QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_Drone%20Piloting.png?raw=true" },
    { title: "Ethnicity and Ethnotourism in Serang", desc: "Analyzed and created ethnicity maps for the Student Community Services Program.", tech: ["ArcGIS Pro", "QGIS", "Canva"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_Ethnicity.png?raw=true" },
    { title: "Mangroves Infographic Map", desc: "Created infographic maps in Pedaleman Village for community conservation efforts.", tech: ["ArcGIS Pro", "QGIS", "Canva"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_MangroveInfographic.png?raw=true" },
    { title: "Electromagnetic Reflections Map", desc: "Mapped variations in electromagnetic reflections in coastal areas of Lombok.", tech: ["QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_EMReflection.png?raw=true" },
    { title: "Benthic Ecosystem Habitat Map", desc: "Created benthic ecosystem maps for the Kemujan Area.", tech: ["QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_BenthicEcosystem.png?raw=true" },
    { title: "Semarang City Flood Site Map", desc: "Mapped historical flood sites in Semarang City (2016-2020) using spatial data.", tech: ["QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_SemarangFlood.png?raw=true" },
    { title: "Regression Bathymetry Map", desc: "Produced the best regression bathymetry map in parts of Karimun Jawa.", tech: ["QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_RegressionBathymetry.png?raw=true" },
    { title: "Population Density Map", desc: "Generated population density class maps for Salatiga City.", tech: ["QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_PopulationDensityMap.png?raw=true" },
    { title: "Land Use Map", desc: "Classified and mapped land use distribution in Sedayu District.", tech: ["QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_LanduseMap.png?raw=true" },
    { title: "Potential Area for Mangroves", desc: "Mapped potential planting areas in Pedaleman Village based on site selection imagery.", tech: ["ArcGIS Pro", "QGIS"], img: "https://github.com/gardakalari-dev/gardakalari_portfolio2/blob/main/assets/img/Portfolio_PotentialAreaMangrove.png?raw=true" }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#1c2229] to-[#0d121c] text-black font-sans selection:bg-[#cdb494] overflow-hidden">
      
      {/* CSS For Fireflies and Hiding Scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
      .firefly { position: absolute; width: 4px; height: 4px; background: #cdb494; border-radius: 50%; opacity: 0; animation: float 8s ease-in-out infinite; box-shadow: 0 0 8px #cdb494, 0 0 12px #957d5e; }
      .ff-1 { top: 20%; left: 10%; animation: float-1 8s ease-in-out infinite; animation-delay: 0s; } 
      .ff-2 { top: 70%; left: 80%; animation: float-2 10s ease-in-out infinite; animation-delay: 2s; } 
      .ff-3 { top: 40%; left: 50%; animation: float-3 9s ease-in-out infinite; animation-delay: 4s; } 
      .ff-4 { top: 80%; left: 30%; animation: float-4 11s ease-in-out infinite; animation-delay: 6s; } 
      .ff-5 { top: 10%; left: 70%; animation: float-5 8.5s ease-in-out infinite; animation-delay: 3s; } 
      .ff-6 { top: 60%; left: 20%; animation: float-6 9.5s ease-in-out infinite; animation-delay: 1s; } 
      .ff-7 { top: 90%; left: 60%; animation: float-7 10.5s ease-in-out infinite; animation-delay: 5s; }
      @keyframes float-1 { 0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; } 25% { opacity: 1; } 50% { transform: translateY(-80px) translateX(60px) rotate(90deg); opacity: 1; } 75% { opacity: 1; } 100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0; } }
      @keyframes float-2 { 0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; } 25% { opacity: 1; } 50% { transform: translateY(60px) translateX(-70px) rotate(180deg); opacity: 1; } 75% { opacity: 1; } 100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0; } }
      @keyframes float-3 { 0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; } 25% { opacity: 1; } 50% { transform: translateY(-90px) translateX(-50px) rotate(270deg); opacity: 1; } 75% { opacity: 1; } 100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0; } }
      @keyframes float-4 { 0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; } 25% { opacity: 1; } 50% { transform: translateY(70px) translateX(65px) rotate(45deg); opacity: 1; } 75% { opacity: 1; } 100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0; } }
      @keyframes float-5 { 0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; } 25% { opacity: 1; } 50% { transform: translateY(-60px) translateX(-60px) rotate(135deg); opacity: 1; } 75% { opacity: 1; } 100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0; } }
      @keyframes float-6 { 0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; } 25% { opacity: 1; } 50% { transform: translateY(80px) translateX(-45px) rotate(225deg); opacity: 1; } 75% { opacity: 1; } 100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0; } }
      @keyframes float-7 { 0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; } 25% { opacity: 1; } 50% { transform: translateY(-75px) translateX(75px) rotate(315deg); opacity: 1; } 75% { opacity: 1; } 100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0; } }
      .hide-scroll::-webkit-scrollbar { display: none; } .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Firefly Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
      <div className="firefly ff-1"></div><div className="firefly ff-2"></div>
      <div className="firefly ff-3"></div><div className="firefly ff-4"></div>
      <div className="firefly ff-5"></div><div className="firefly ff-6"></div>
      <div className="firefly ff-7"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 space-y-20">
      
      {/* About Me Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center md:items-start border-b border-[#cdb494] pb-12">
        <img
        src="https://raw.githubusercontent.com/gardakalari-dev/gardakalari_portfolio2/refs/heads/main/assets/img/ProfilePic2.png"
        alt="Garda Kalari"
        className="w-48 h-48 rounded-full border-4 border-[#cdb494] shadow-lg object-cover
           transition-transform duration-300 ease-in-out
           hover:scale-110 hover:shadow-[0_0_20px_rgba(205,180,148,0.75)]"
        />
        <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[#957d5e]">Garda Kalari Yustisiansyah</h1>
        <h2 className="text-xl text-[#cdb494] font-bold">GIS Analyst & Geospatial Engineer</h2>
        <p className="text-white leading-relaxed">
          Geospatial and remote sensing specialist specializing in large-scale environmental monitoring and automated data pipelines. Passionate about leveraging geospatial technology to drive impactful environmental solutions.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-semibold">
          <a href="https://github.com" className="text-[#957d5e] hover:text-[#cdb494]">GitHub</a>
          <a href="mailto:ygardakalari@gmail.com" className="text-[#957d5e] hover:text-[#cdb494]">Email</a>
          <a href="https://www.linkedin.com/in/garda-yustisiansyah/" className="text-[#957d5e] hover:text-[#cdb494]">LinkedIn</a>
        </div>
        <div className="mt-4 p-4 bg-[#cdb494] text-black border-l-4 border-[#957d5e] text-sm text-left rounded-xl">
          <p><strong>Education:</strong> Bachelor's Degree in Cartography and Remote Sensing, Universitas Gadjah Mada (GPA: 3.67)</p>
          <p className="mt-2"><strong>Certification:</strong> Basic Remote Pilot License Course (Indonesian Air Force)</p>
        </div>
        </div>
      </section>

      {/* Tech Stack Slider */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold text-[#957d5e]">Application Stack</h3>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar cursor-grab active:cursor-grabbing">
        {techStacks.map((tech, index) => (
          <div
        key={index}
        className="snap-center shrink-0 w-24 flex flex-col items-center gap-6 transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
        <div className="w-20 h-20 rounded-2xl shadow-md overflow-hidden bg-white border border-[#cdb494]/20">
        <img src={tech.img} alt={tech.name} className="w-full h-full object-cover p-2" />
        </div>
        <span className="text-sm font-bold text-center text-[#957d5e]">{tech.name}</span>
          </div>
        ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold text-[#957d5e]">Professional Experience</h3>
        <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
        key={idx}
        className="flex gap-4 p-6 bg-white border border-[#cdb494] rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
        <img src={exp.logo} alt={exp.company} className="w-16 h-16 rounded-md object-cover border border-[#ffffff] hidden sm:block" />
        <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h4 className="text-xl font-bold text-black">{exp.title}</h4>
          <span className="text-sm font-bold text-[#957d5e] bg-[#cdb494]/20 px-3 py-1 rounded-full whitespace-nowrap">{exp.date}</span>
        </div>
        <p className="text-[#957d5e] font-bold mb-3">{exp.company}</p>
        <ul className="list-disc list-outside ml-4 text-sm text-black space-y-1">
          {exp.bullets.map((bullet, bIdx) => <li key={bIdx}>{bullet}</li>)}
        </ul>
        </div>
          </div>
        ))}
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
        <h3 className="text-3xl font-bold text-[#957d5e]">Map Portfolios</h3>
        <span className="text-sm text-[#cdb494] font-medium hidden md:block">
          Swipe to view 15 projects →
        </span>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing">
        {portfolios.map((item, index) => (
          <div
        key={index}
        className="snap-center shrink-0 w-[85vw] md:w-[450px] bg-[#957d5e] rounded-2xl shadow-lg border border-[#cdb494]/20 overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#957d5e]/50"
          >
        <div className="h-70 overflow-hidden bg-slate-100">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        </div>
        <div className="p-6 flex-1 flex flex-col">
        <h4 className="text-xl font-bold text-white mb-2">
          {item.title}
        </h4>
        <p className="text-white text-sm mb-4 flex-1">
          {item.desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tech.map((t: string) => (
          <span
        key={t}
        className="text-xs font-bold bg-[#ffffff]/20 text-[#ffffff] px-2 py-1 rounded-full"
          >
        {t}
          </span>
          ))}
        </div>
        </div>
          </div>
        ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-6 max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-[#957d5e]">Contact Me</h3>
        <form action="mailto:ygardakalari@gmail.com" method="post" encType="text/plain" className="space-y-4 bg-[#cdb494]/10 p-8 rounded-xl border border-[#cdb494]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded-md border border-[#cdb494] bg-white text-black outline-none focus:ring-2 focus:ring-[#957d5e]" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded-md border border-[#cdb494] bg-white text-black outline-none focus:ring-2 focus:ring-[#957d5e]" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" className="w-full p-3 rounded-md border border-[#cdb494] bg-white text-black outline-none focus:ring-2 focus:ring-[#957d5e]" required />
        <textarea name="message" rows={5} placeholder="Your Message" className="w-full p-3 rounded-md border border-[#cdb494] bg-white text-black outline-none focus:ring-2 focus:ring-[#957d5e]" required></textarea>
        <button type="submit" className="w-full py-3 bg-[#957d5e] hover:bg-[#cdb494] text-white font-bold rounded-md transition-colors">
          Send Message
        </button>
        </form>
      </section>

      {/* Footer Quote */}
      <footer className="text-center pt-16 pb-8">
        <p className="text-sm font-bold text-[#cdb494] tracking-widest max-w-2xl mx-auto leading-relaxed">
        "A MAP DOES NOT JUST CHART, IT UNLOCKS AND FORMULATES MEANING; IT FORMS BRIDGES BETWEEN HERE AND THERE."
        </p>
      </footer>

      </div>
    </main>
  );
}