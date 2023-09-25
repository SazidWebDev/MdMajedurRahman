(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const g=document.querySelector(".sun"),p=document.querySelector(".moon");localStorage.setItem("theme","dark");const f=localStorage.getItem("theme"),v=()=>{p.classList.toggle("display-none"),g.classList.toggle("display-none")},S=()=>{if(f==="dark"||!f&&systemTheme){document.documentElement.classList.add("dark"),p.classList.add("display-none");return}g.classList.add("display-none")},y=()=>{if(document.documentElement.classList.contains("dark")){document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),v();return}document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),v()};g.addEventListener("click",()=>{y()});p.addEventListener("click",()=>{y()});S();const b=[{title:"HTML",description:"Structuring web content for optimal presentation.",image:"https://i.postimg.cc/jd8LZTMT/html.png"},{title:"CSS",description:"Styling web elements with precision and creativity.",image:"https://i.postimg.cc/XqkyVyKB/css.png"},{title:"JavaScript",description:"Enhancing web interactivity with dynamic scripting.",image:"https://i.postimg.cc/sf4BG7Sv/javascript.png"},{title:"UI/UX design",description:"Creating intuitive and visually appealing user experiences.",image:"https://i.postimg.cc/SxMkCb5D/ui-ux-design.png"},{title:"Web Form",description:"Building interactive web forms for user-friendly experiences.",image:"https://i.postimg.cc/Tw9R1jSx/sign-form.png"},{title:"WinForm",description:"Developing robust Windows desktop applications with WinForms.",image:"https://i.postimg.cc/26zDsb5K/winform.png"},{title:"ASP.NET Core",description:"Crafting modern and efficient server applications.",image:"https://i.postimg.cc/xTgbhMTW/aspnet.png"},{title:"ASP.NET Web API",description:"Creating powerful server-side APIs for seamless data communication.",image:"https://i.postimg.cc/wxXN5SKx/api.png"},{title:"Web UI",description:"Crafting dynamic and responsive user interfaces.",image:"https://i.postimg.cc/q7crDXpK/webui.png"},{title:"jQuery",description:"Simplifying DOM manipulation for efficient web development.",image:"https://i.postimg.cc/7ZdbrVvQ/jquery.webp"},{title:"Entity Framework",description:"Achieving high-performance data access in .NET.",image:"https://i.postimg.cc/jjnwD1Qb/entity-framework.png"},{title:"Data",description:"Seamlessly connecting .NET applications to databases.",image:"https://i.postimg.cc/XYJybqrX/data.png"},{title:"Dapper",description:"Leveraging efficient data access in .NET applications.",image:"https://i.postimg.cc/ht5QPnms/dapper.png"},{title:"SQL Server",description:"Managing and querying data efficiently.",image:"https://i.postimg.cc/NfVQKjNK/sql-server.png"},{title:"ORACLE PL/SQL",description:"Leveraging Oracle's powerful database capabilities.",image:"https://i.postimg.cc/G3XL1QGJ/sqlpl.png"},{title:"PostgreSQL",description:"Utilizing a robust open-source relational database.",image:"https://i.postimg.cc/Wz1skFLk/postgresql.webp"},{title:"MongoDB",description:"Storing and retrieving data in flexible, NoSQL fashion.",image:"https://i.postimg.cc/26F5vN1P/mongobd.webp"},{title:"MariaDB",description:"Ensuring reliable and scalable database solutions.",image:"https://i.postimg.cc/cLp1bLYp/mariadb.png"}],k=[{title:"Software Development",description:"Visual Studio,PHP, JQuery, HTML, JavaScript, MS SQL Server, MySQL, C#.Net",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round"
    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
</svg>`},{title:"IT Infrastructure Planning & Implementation",description:"Network Design, System Architecture, Deployment",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round"
    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>`},{title:"Vulnerability Scanning & Software Security",description:"Assessment, Risk Mitigation, Threat Analysis",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round"
    d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
</svg>`},{title:"Data Backup & Secure Communication",description:"Backup Strategies, Encryption, VPN",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round"
    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
</svg>`},{title:"Technical Support & End User IT Support",description:"Issue Resolution, Troubleshooting, User Assistance",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path d="M12 3c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 18.523 2 13 6.477 3 12 3z"></path>
  <path d="M8 10h8M8 14h3m4 0h3m0-4h-3m0 8h3"></path>
</svg>`},{title:"ORACLE FLEXCUBE",description:"Banking Solutions, Implementation, Maintenance",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
</svg>`},{title:"ERP Development (Desktop & Web)",description:"Customized Solutions, Modules Integration",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
</svg>`},{title:"IT Security Policy Development",description:"Policy Creation, Compliance, Risk Assessment",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14l-4-4h8l-4 4zm0-8V8">
  </path>
</svg>`},{title:"Project Management & Implementation",description:"Planning, Execution, Team Collaboration",svg:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" class="w-12 h-12 text-sky-500 mb-3" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round"
    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>`}];function x(e,i,s){return`<div class="p-4 w-full md:w-1/2 lg:w-1/3 animateonscroll">
  <div
    class="h-full border-2 shadow-xl duration-300 hover:scale-105 shadow-gray-800 dark:shadow-sky-500 dark:shadow-lg border-gray-200 dark:border-transparent border-opacity-60 rounded-lg overflow-hidden">
    <div class="p-6">
      ${e}
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 dark:text-gray-400 mb-1">${i}</h2>
      <h2 class="title-font md:text-lg font-medium text-base dark:text-white text-gray-900 mb-3">${s}</h2>
    </div>
  </div>
</div>`}const M=document.getElementById("servicesCard");k.forEach(e=>{const i=x(e.svg,e.title,e.description);M.innerHTML+=i});function L(e,i,s){return`
    <div class="animateonscroll">
      <div class="p-6 bg-white h-full dark:bg-gray-950 shadow-gray-800 dark:shadow-sky-500 rounded-lg shadow-lg hover:scale-[1.05] duration-300">
        <div class="flex items-center justify-center mb-4">
          <img src="${s}" alt="dummy.png" class="w-14 pointer-events-none select-none" draggable="false">
        </div>
        <h3 class="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          ${e}
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          ${i}
        </p>
      </div>
    </div>
  `}const C=document.getElementById("moreSkills");b.forEach(e=>{const i=L(e.title,e.description,e.image);C.innerHTML+=i});const I=[{number:"1",image:"https://i.postimg.cc/FsKKfqNB/mss.jpg",title:"Midas Software Solutions LTD",description:"Developing, maintaining and implementing Banking solutions with ORACLE FLEXCUBE.",role:"Lead Consultant PL/SQL<br>June 2022 - Present",location:"Dhaka, Bangladesh"},{number:"2",image:"https://i.postimg.cc/j2b70hfr/cop.jpg",title:"ChefOnline Partners",description:"Working with EPoS system. Using C# .net, SQL Server 2014, nodejs & MongoDB.",role:"Software Engineer<br>June 2021 - May 2022 (1 year)",location:"United Kingdom"},{number:"3",image:"https://i.postimg.cc/FFC46KXT/yob2.jpg",title:"Youngones Bangladesh",description:"Customized Inventory Management System (Desktop & Web Based). Using C# .net, AngularJS, Java, JavaScript, RDLC & SQL Server 2016.",role:"Assistant Manager (Software)<br>March 2020 - June 2021 (1 year 4 months)",location:"Chittagong, Bangladesh"},{number:"4",image:"https://i.postimg.cc/43YtzyGj/btl.jpg",title:"Base Textiles Limited",description:`<ul class="ml-4 list-disc text-xs md:text-base font-sans text-gray-900 dark:text-gray-100">
  <li>Conducted vulnerability assessments on servers, networks, and client PCs.</li>
  <li>Assessed software security before implementation.</li>
  <li>Audited data center for vulnerabilities.</li>
  <li>Ensured compliance with IT policies through end-user visits.</li>
  <li>Protected organization from insider and outsider threats.</li>
  <li>Maintained data and file security with regular backups.</li>
  <li>Established secure data communication between offices.</li>
  <li>Monitored and remediated new IT infrastructure threats.</li>
  <li>Planned and implemented IT infrastructure projects.</li>
  <li>Led a 10-member IT team.</li>
  <li>Developed customized ERP, quality inspection, and inventory management systems.</li>
</ul>`,role:"HRIS (Human Resource Information System)<br>Sr. Asst. Manager (HRIS)<br>July 2018 - February 2020 (1 year 8 months)",location:"Chittagong, Bangladesh"},{number:"5",image:"https://i.postimg.cc/5yb6k2c4/hkd.jpg",title:"HKD International (CEPZ) Ltd.",description:`<ul class="list-disc ml-4 text-xs md:text-base font-sans text-gray-900 dark:text-gray-100">
  <li>Software Development (Visual Studio 2010, PHP, JQuery, HTML, JavaScript, MS SQL Server, SQL Server
    Reporting Tools, and MySQL)</li>
  <li>Maintenance of Redhat Linux Server</li>
  <li>Maintenance of Time attendance devices</li>
  <li>Technical Support for Offices</li>
  <li>Training for better Implementation of E-Service</li>
  <li>Technical Documentation</li>
  <li>End User IT Support</li>
  <li>Development of HR Management System, Attendance System, Payroll Management System (PMS), Provident
    Fund Management System (PF), Inventory Management System (IMS) and Customs Bond Records Information
    System (CBRIS)</li>
</ul>`,role:`Sr. Executive (MIS)
<br>February 2014 - February 2017 (3 years 1 month)`,location:"Chittagong, Bangladesh."},{number:"6",image:"https://i.postimg.cc/FFC46KXT/yob2.jpg",title:"YOUNGONE CEPZ LTD.",description:`<ul class="ml-4 list-disc text-xs md:text-base font-sans text-gray-900 dark:text-gray-100">
  <li>Software Development (C#.Net, MS SQL Server 2008 R2, SQL Server Reporting Tools, and MySQL)</li>
  <li>Implement New Software</li>
  <li>Maintenance of Existing Software</li>
  <li>Support to Offices on Technical Issues</li>
  <li>Regular Data Backup</li>
  <li>End User IT Support</li>
  <li>Development of Automatic Attendance Download System</li>
  <li>Development of Human Resource Management System (HRMS)</li>
  <li>Development of Payroll Management System (PMS)</li>
  <li>Development of Provident Fund Management System (PF)</li>
  <li>Development of Inventory Management System (IMS)</li>
</ul>`,role:`Team Leader-IT
(Software) <br>March 2013 - February 2014 (1 year)`,location:"Chittagong, Bangladesh"},{number:"7",image:"https://i.postimg.cc/BnXtzzzK/ksrm.png",title:"Kabir Group Of Industries",description:`<ul class="ml-4 list-disc text-xs md:text-base font-sans text-gray-900 dark:text-gray-100">
  <li>Software Programming with Visual Basic, C#.Net, MS SQL Server 2008 R2, SQL Server Reporting Tools,
    MySQL & Crystal Reports</li>
  <li>Organization Requirement Analyst, Support & Liaison</li>
  <li>Maintenance of Existing Software</li>
  <li>Support to Offices on Technical Issues</li>
  <li>Regular Data Backup</li>
  <li>End User IT Support</li>
  <li>Development of Automatic Attendance Download System</li>
  <li>Development of Human Resource Management System (HRMS)</li>
  <li>Development of Payroll Management System (PMS)</li>
  <li>Development of Provident Fund Management System (PF)</li>
  <li>Development of Inventory Management System (IMS)</li>
  <li>Development of Purchase Information System (PIS)</li>
</ul>`,role:`Programmer <br>December
2011 - March 2013 (1 year 4 months)`,location:"Chittagong, Bangladesh."},{number:"8",image:"https://i.postimg.cc/vBMYG20X/scl.jpg",title:"SYSCARE Limited",description:`<ul class="ml-4 list-disc text-xs md:text-base font-sans text-gray-900 dark:text-gray-100">
  <li>Software Programming with Visual Basic, C#.Net, MS SQL Server 2000, 2008, 2008 R2, and Crystal Reports
  </li>
  <li>Customer Requirement Analyst, Support & Liaison</li>
  <li>Technical and Financial Project Proposal Preparation</li>
  <li>Project Time Schedule Preparation</li>
  <li>Client End Software Support</li>
  <li>Responsible for project maintenance</li>
  <li>Delivered Software to the client site</li>
  <li>In addition, other responsibilities as and when assigned</li>
  <li>Development of Accounting Management System (AMC)</li>
  <li>Development of Finance Management System (FMS)</li>
  <li>Development of Sales Management System (SMS)</li>
  <li>Development of Delivery Management System (DMS)</li>
  <li>Development of Attendance Download System, HRMS, PMS, IMS, PIS</li>
  <li>Involvement in Successful Implementation of 10 Projects</li>
</ul>`,role:`Asst. Programmer <br>
March 2010 - December 2011 (1 year 10 months)`,location:"Chittagong, Bangladesh."}];function P(e,i,s,r,t,n){return`
  <div class="flex relative pt-10 pb-20 sm:items-center w-full sm:w-2/3 mx-6 sm:mx-auto">
  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
    <div class="h-full w-1 bg-gray-200 dark:bg-gray-600 pointer-events-none"></div>
  </div>
  <div
    class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-400 text-white relative z-10 title-font font-medium text-sm">
    ${e}</div>
  <div class="flex-grow flex pl-2 sm:items-center items-start flex-col sm:flex-row timeline animateonscroll">
    <div class="flex-shrink-0 w-24 h-24 dark:text-white rounded-full inline-flex items-center justify-center">
      <img src="${i}" alt="company image" draggable="false"
        class="border-[3px] border-gray-300 dark:border-gray-500 border-x-sky-500 dark:border-x-sky-500 select-none pointer-events-none rounded-full w-16 mt-2 md:mt-0 md:w-24">
    </div>
    <div
      class="bg-white shadow-xl dark:bg-gray-950 shadow-gray-800 dark:shadow-sky-600 duration-300 hover:scale-[1.02] p-5 md:p-7 w-[97%] sm:w-3/4 md:w-full rounded-lg ml-4 mt-3 md:mt-0">
      <h3 class="font-sans font-[600] text-black dark:text-white text-lg sm:text-xl md:text-2xl mb-1">${s}
      </h3>
      <h4 class="text-[10px] md:text-sm font-[400] text-gray-600 dark:text-gray-400 mb-4">${r}
      </h4>
      <p class="text-sm md:text-base font-sans text-gray-900 dark:text-gray-100">${t}
      </p>
      <br>
      <div class="inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="w-5 h-5 -mb-4 md:mb-0 md:w-6 md:h-6 -ml-1">
          <path fill-rule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd" />
        </svg>

        <h4 class="text-sm md:text-base ml-2 font-[400] text-gray-600 dark:text-gray-400 mb-4">${n}
        </h4>
      </div>
    </div>
  </div>
</div>
  `}const D=document.getElementById("jobs");I.forEach(e=>{const i=P(e.number,e.image,e.title,e.role,e.description,e.location);D.innerHTML+=i});const T=new IntersectionObserver(B,{rootMargin:"0px",threshold:.5}),E=document.querySelectorAll(".animateonscroll");function B(e,i){e.forEach((s,r)=>{s.isIntersecting&&(s.target.style.transitionDelay=`${r*100}ms`,s.target.classList.add("visibley"),i.unobserve(s.target))})}E.forEach(e=>T.observe(e));document.addEventListener("click",function(e){if(e.target.classList.contains("scroll-to")){let d=function(o){m===null&&(m=o);const l=o-m,c=h(l,n,a-n,u);window.scrollTo(0,c),l<u&&requestAnimationFrame(d)},h=function(o,l,c,w){return o/=w/2,o<1?c/2*o*o*o+l:(o-=2,c/2*(o*o*o+2)+l)};var i=d,s=h;e.preventDefault();const r=e.target.getAttribute("href").substring(1),t=document.getElementById(r);if(!t)return;const n=window.pageYOffset,a=t.getBoundingClientRect().top+n,u=1e3;let m=null;requestAnimationFrame(d)}});
