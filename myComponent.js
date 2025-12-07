// NEW: Data object for all projects
// I've extracted the HTML content from the deleted divs into this object
    const projectsData = {
        'linkVilla': {
            title: "Link Villa",
            headerBg: "bg-gray-400/80",
            location: "Choam Chao, Porsenchey, Phnom Penh",
            status: "Under Construction",
            startDate: "June 2025",
            description: `This link villa has a <span class="font-bold">modern three-story design</span> with a stylish <span class="font-bold">white-and-gray exterior</span>. It features <span class="font-bold">4 bedrooms and 5 bathrooms</span>, large glass windows for natural light, and open area that can be used for parking or relaxation. The building has a <span class="font-bold">semi-attached layout</span>, sharing a side wall with the neighboring unit, making it part of a connected villa row.`,
            img1: "Picture/projects/lv-str.png",
            img2: "Picture/projects/lv-render.png",
            responsibilities: [
                { title: "Structural Framing Analysis", items: ["Load Calculation Table", "Modeling Structure Framing on RSA", "Reanalysis framing and panel due to reduce material cost."] },
                { title: "Modeler", items: ["Model Structure by using Autodesk Revit.", "Coordination structure with Architect and MEP to provide safety, structure integrity and avoided clashes and conflicts."] },
                { title: "Shop Drawing", items: ["Create Construction drawing (shop drawing)", "Material Standard for structure material."] },
                { title: "Site Spot Check", items: ["Spot check issues on site", "Tracking progress and support site team on technical problem."] }
            ],
            programs: [
                { alt: "Revit", src: "Picture/Skills/autodesk-revit.png" },
                { alt: "AutoCAD", src: "Picture/Skills/autodesk-autocad.png" },
                { alt: "RSA", src: "Picture/Skills/autodesk-rsa.png" },
                { alt: "Excel", src: "Picture/Skills/microsoftexcel.png" },
                { alt: "Mathcad", src: "Picture/Skills/mathcad-prime.png" }
            ],
            viewMoreBtnBg: "bg-gray-500/80 hover:bg-gray-600", 
            href:"https://drive.google.com/file/d/1Icvhkar1zypJAyLtEEtncx-aCU3qm_re/view?usp=sharing",
        },
        'twinVilla': {
            title: "Twin Villa",
            headerBg: "bg-amber-600/80",
            location: "Choam Chao, Porsenchey, Phnom Penh",
            status: "Under Construction",
            startDate: "June 2025",
            description: `This twin villa has a <span class="font-bold">modern three-story design</span> with a <span class="font-bold">warm orange and white exterior</span>. It includes <span class="font-bold">4 bedrooms and 5 bathrooms</span>, offering spacious living areas and private balconies. The house is <span class="font-bold">partly connected to the next unit</span>, sharing one wall, and features a <span class="font-bold">fenced yard with a gate</span>, providing both privacy and security.`,
            img1: "picture/projects/tw-str.png",
            img2: "picture/projects/tw-render.png",
            responsibilities: [
                { title: "Structural Framing Analysis", items: ["Load Calculation Table", "Modeling Structure Framing on RSA", "Reanalysis framing and panel due to reduce material cost."] },
                { title: "Modeler", items: ["Model Structure by using Autodesk Revit.", "Coordination structure with Architect and MEP to provide safety, structure integrity and avoided clashes and conflicts."] },
                { title: "Shop Drawing", items: ["Create Construction drawing (shop drawing)", "Material Standard for structure material."] },
                // FIXED: Removed extra 'T:' from 'title:T:'
                { title: "Site Spot Check", items: ["Spot check issues on site", "Tracking progress and support site team on technical problem."] }
            ],
            programs: [
                { alt: "Revit", src: "Picture/Skills/autodesk-revit.png" },
                { alt: "AutoCAD", src: "Picture/Skills/autodesk-autocad.png" },
                { alt: "RSA", src: "Picture/Skills/autodesk-rsa.png" },
                { alt: "Excel", src: "Picture/Skills/microsoftexcel.png" },
                { alt: "Mathcad", src: "Picture/Skills/mathcad-prime.png" }
            ],
            viewMoreBtnBg: "bg-amber-600/80 hover:bg-amber-700",
            href: "https://drive.google.com/file/d/1Icvhkar1zypJAyLtEEtncx-aCU3qm_re/view?usp=sharing", // EDIT 1: Added Link Here
        },
        'shopHouse': {
            title: "Shop House Grand",
            headerBg: "bg-amber-600/80",
            location: "Choam Chao, Porsenchey, Phnom Penh",
            status: "Under Construction",
            startDate: "2025",
            description: `This shophouse grand has a <span class="font-bold">classic three-story design</span> with a bright <span class="font-bold">yellow and white facade</span>. The ground floor is ideal for <span class="font-bold">shops or cafe</span>, while the upper floors provide <span class="font-bold">4 bedrooms and 5 bathrooms</span> for living space. It features <span class="font-bold">arched door, a wide front view</span>.`,
            img1: "picture/projects/shg-str.png",
            img2: "picture/projects/shg-render.png",
            responsibilities: [
                { title: "Modeler", items: ["Model Structure by using Autodesk Revit.", "Coordination structure with Architect and MEP to provide safety, structure integrity and avoided clashes and conflicts."] },
                { title: "Shop Drawing", items: ["Create Construction drawing (shop drawing)", "Material Standard for structure material."] },
                { title: "Site Spot Check", items: ["Spot check issues on site", "Tracking progress and support site team on technical problem."] }
            ],
            programs: [
                { alt: "AutoCAD", src: "Picture/Skills/autodesk-autocad.png" },
                { alt: "Excel", src: "Picture/Skills/microsoftexcel.png" }
            ],
            viewMoreBtnBg: "bg-amber-600/80 hover:bg-amber-700",
            href: "https://drive.google.com/file/d/1Icvhkar1zypJAyLtEEtncx-aCU3qm_re/view?usp=sharing", // EDIT 2: Added Link Here
        },
        'queenVilla': {
            title: "Queen Villa",
            headerBg: "bg-amber-600/80",
            location: "Choam Chao, Porsenchey, Phnom Penh",
            status: "Under Construction",
            startDate: "June 2025",
            description: `This Queen villa has a <span class="font-bold">modern three-story design</span> with a <span class="font-bold">warm orange and white exterior</span>. It includes <span class="font-bold">4 bedrooms and 5 bathrooms</span>, offering spacious living areas and private balconies. The house is <span class="font-bold">partly connected to the next unit</span>, sharing one wall, and features a <span class="font-bold">fenced yard with a gate</span>, providing both privacy and security.`,
            img1: "picture/projects/qv-str.png",
            img2: "picture/projects/qv-render.png",
            responsibilities: [
                { title: "Structural Framing Analysis", items: ["Load Calculation Table", "Modeling Structure Framing on RSA", "Reanalysis framing and panel due to reduce material cost."] },
                { title: "Modeler", items: ["Model Structure by using Autodesk Revit.", "Coordination structure with Architect and MEP to provide safety, structure integrity and avoided clashes and conflicts."] },
                { title: "Shop Drawing", items: ["Create Construction drawing (shop drawing)", "Material Standard for structure material."] },
                { title: "Site Spot Check", items: ["Spot check issues on site", "Tracking progress and support site team on technical problem."] }
            ],
            programs: [
                { alt: "Revit", src: "Picture/Skills/autodesk-revit.png" },
                { alt: "AutoCAD", src: "Picture/Skills/autodesk-autocad.png" },
                { alt: "RSA", src: "Picture/Skills/autodesk-rsa.png" },
                { alt: "Excel", src: "Picture/Skills/microsoftexcel.png" },
                { alt: "Mathcad", src: "Picture/Skills/mathcad-prime.png" }
            ],
            viewMoreBtnBg: "bg-amber-600/80 hover:bg-amber-700",
            href: "https://drive.google.com/file/d/1Icvhkar1zypJAyLtEEtncx-aCU3qm_re/view?usp=sharing", // EDIT 3: Added Link Here
        }
    };

// NEW: Function to build and show the project modal
function showProjectModal(projectKey) {
    const project = projectsData[projectKey];
    if (!project) return;

    // 1. Build Responsibilities HTML
    let respHTML = '';
    project.responsibilities.forEach(resp => {
        let itemsHTML = '';
        resp.items.forEach(item => {
            itemsHTML += `<li class="list-disc pl-6 space-y-1 mt-1">${item}</li>`;
        });
        respHTML += `
            <div>
                <span class="font-semibold">${resp.title}:</span>
                <ul class="list-disc pl-6 space-y-1 mt-1">${itemsHTML}</ul>
            </div>
        `;
    });

    // 2. Build Programs HTML
    let programsHTML = '';
    project.programs.forEach(prog => {
        // CHANGED: Added w-12 h-12 object-contain p-1 to fix the size
        programsHTML += `<img src="${prog.src}" alt="${prog.alt}" class="rounded w-12 h-12 object-contain p-1 bg-white/10">`;
    });

    // 3. Build Full Modal Content HTML
    const modalBodyHTML = `
        <!-- Header -->
        <div class="flex justify-center mb-6">
            <div class="inline-block ${project.headerBg} text-white py-3 px-10 rounded-full shadow-lg">
                <h1 class="text-3xl font-bold">${project.title}</h1>
            </div>
        </div>

        <!-- Info Block -->
        <div class="text-center text-gray-700 mb-6">
            <p>Location: <span class="font-semibold">${project.location}</span></p>
            <p>Status: <span class="font-semibold">${project.status}</span></p>
            <p>Construction start at <span class="font-semibold">${project.startDate}</span></p>
        </div>

        <!-- Project Description -->
        <div class="max-w-3xl mx-auto text-center mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-2">PROJECT DESCRIPTION</h3>
            <p class="text-gray-700 leading-relaxed">${project.description}</p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
            <div class="detail-card rounded-2xl shadow-lg p-2">
                <img src="${project.img1}" alt="${project.title} Structure" class="w-full h-auto object-cover rounded-lg">
            </div>
            <div class="detail-card rounded-2xl shadow-lg p-2">
                <img src="${project.img2}" alt="${project.title} Render" class="w-full h-auto object-cover rounded-lg">
            </div>
        </div>

        <!-- Key Responsibility -->
        <div class="key-resp-card rounded-2xl shadow-inner p-6 max-w-5xl mx-auto">
            <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">KEY RESPONSIBILITY</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-gray-700">
                ${respHTML}
            </div>
        </div>

        <!-- Footer Section -->
        <div class="flex flex-col md:flex-row justify-between items-center mt-8 gap-6">
            <!-- Program Used -->
            <div class="flex flex-col items-center">
                <div class="flex gap-2 p-2 border-2 border-green-500 rounded-lg">
                    ${programsHTML}
                </div>
                <span class="text-sm font-semibold text-gray-600 mt-1">Program Used</span>
            </div>
            <!-- View More Button (EDIT 4: Changed button to 'a' tag) -->
            <a href="${project.href || '#'}" target="_blank" class="${project.viewMoreBtnBg} text-white py-3 px-8 rounded-lg shadow-md transition-colors inline-block text-center hover:text-white">
                View More Resources
            </a>
        </div>
        `;

    // 4. Inject HTML into modal and show it
    $('#project-modal-body').html(modalBodyHTML);
    $('#project-modal').fadeIn(300);
    $('body').css('overflow', 'hidden'); // Prevent background scrolling
}

// NEW: Function to close the project modal
function closeProjectModal() {
    $('#project-modal').fadeOut(300, function() {
        $('#project-modal-body').empty(); // Clear content after fade out
    });
    $('body').css('overflow', 'auto'); // Re-enable background scrolling
}


$(document).ready(function () {
    
    // --- FIXED: Re-added skillsData and skillsMap ---
    // --- Helper Data: Skills with Details ---
    const skillsData = [
        { name: "Revit", icon: "Picture/Skills/autodesk-revit.png", proficiency: 80, creativity: 90,
          description: "Proficiency in Autodesk Revit for BIM modeling, focusing on structural drawing, documentation, and coordination. Experienced in creating complex structural models, families, and drawing sheets compliant with international standards.",
          projects: ["High-rise Residential Tower Structural Model (Self Growing Project)", "Residential Villa", "Custom Revit Family Development"]
        },
        { name: "AutoCAD", icon: "Picture/Skills/autodesk-autocad.png", proficiency: 80, creativity: 90,
          description: "Highly skilled in 2D drafting and detailing using AutoCAD. Proficient in producing construction drawings, structural plans, and section details accurately and efficiently for QA/QC submission.",
          projects: ["Foundation Detailing", "As-Built Drawing Documentation", "Steel Structure Connection Detailing"]
        },
        { name: "Navisworks", icon: "Picture/Skills/autodesk-navisworks.png", proficiency: 50, creativity: 50,
          description: "Foundational knowledge in Navisworks for model aggregation, clash detection, and project review. Capable of preparing models for 4D scheduling and generating coordinated project views.",
          projects: ["Multi-discipline Model Clash Detection Report", "4D Construction Simulation Preparation"]
        },
        { name: "RSA", icon: "Picture/Skills/autodesk-rsa.png", proficiency: 80, creativity: 70,
          description: "Strong ability to use Autodesk Robot Structural Analysis (RSA) for advanced structural modeling and load analysis, including static, dynamic, and seismic analysis of various building types.",
          projects: ["Concrete Frame Structure", "Steel Truss Optimization Study"]
        },
        { name: "Inventor", icon: "Picture/Skills/inventor.png", proficiency: 20, creativity: 70,
          description: "Basic experience in Autodesk Inventor for mechanical design and 3D part modeling, primarily focusing on civil engineering components and fixtures.",
          projects: ["Mechanical Fixture Design", "Custom Formwork Modeling"]
        },
        { name: "Dynamo", icon: "Picture/Skills/dynamo.png", proficiency: 40, creativity: 40,
          description: "Basic skills in visual programming with Dynamo for automating repetitive BIM tasks, generating complex geometry, and integrating data flows between Revit and Excel, significantly boosting workflow efficiency.",
          projects: ["Automated Rebar Tagging Script", "Parametric Façade Generation Tool", "BIM Data Extraction and Reporting"]
        },
        { name: "ETAB", icon: "Picture/Skills/ETAB.png", proficiency: 80, creativity: 70,
          description: "Experienced in structural analysis and design using CSI ETABS for concrete and steel buildings, including gravity and lateral load analysis.",
          projects: ["Concrete Frame Structure", "Steel Truss Optimization Study"]
        },
        { name: "Mathcad Prime", icon: "Picture/Skills/mathcad-prime.png", proficiency: 80, creativity: 80,
          description: "Used Mathcad Prime for engineering calculations, technical documentation, and unit management, ensuring traceable and verifiable design documentation.",
          projects: ["Automative WInd Load Calculation", "Manual Beam, Column, Slab Design Check Calculations"]
        },
        { name: "Mathcad15", icon: "Picture/Skills/mathcad15.png", proficiency: 50, creativity: 80,
          description: "Used Mathcad Prime for engineering calculations, technical documentation, and unit management, ensuring traceable and verifiable design documentation.",
          projects: ["Automative WInd Load Calculation", "Manual Beam, Column, Slab Design Check Calculations"]
        },
        { name: "MS Word", icon: "Picture/Skills/microsoftword.png", proficiency: 90, creativity: 100,
          description: "Proficient in generating professional technical reports, proposals, and project documentation with complex formatting and cross-references.",
          projects: ["QA/QC Manual Drafting", "Monthly Progress Reports"]
        },
        { name: "MS Excel", icon: "Picture/Skills/microsoftexcel.png", proficiency: 90, creativity: 100,
          description: "Custom formula creation, and template development for engineering design checks, material tracking, and cost estimations.",
          projects: ["Concrete Mix Design Spreadsheet", "Formwork Material Take-off"]
        },
        { name: "MS Powerpoint", icon: "Picture/Skills/microsoftpowerpoint.png", proficiency: 90, creativity: 100,
          description: "Skilled in creating engaging presentations for project pitches, internal training sessions, and design review meetings.",
          projects: ["Project Status Presentations", "Safety Training Slides"]
        },
        { name: "MS Project", icon: "Picture/Skills/microsoftproject.png", proficiency: 75, creativity: 75,
          description: "Basic knowledge of Microsoft Project for construction scheduling, task dependency, and resource management planning.",
          projects: ["Construction Phase Planning"]
        },
        { name: "HTML5", icon: "Picture/Skills/html.png", proficiency: 20, creativity: 90,
          description: "Solid command of HTML5 for structuring web content, ensuring semantic correctness and accessibility. Highly experienced in building responsive, well-organized website layouts.",
          projects: ["Personal Portfolio Website (This Site)", "E-commerce Front-end Structure", "Responsive Landing Page Templates"]
        },
        { name: "CSS3", icon: "Picture/Skills/css.png", proficiency: 20, creativity: 90,
          description: "Proficient in modern CSS3, including Flexbox, Grid, and Tailwind CSS framework for responsive and aesthetic web design. Skilled in creating custom animations and maintaining clean, scalable stylesheets.",
          projects: ["Custom Tailwind Components", "Responsive Portfolio Design", "CSS Animation Experiments"]
        },
        { name: "Python", icon: "Picture/Skills/python.png", proficiency: 20, creativity: 90,
          description: "Familiar with Python for scripting, data processing, and basic web development tasks, often used for automating file processing in engineering contexts.",
          projects: ["Simple Data Scraping Script", "Automated File Renamer"]
        },
        // FIXED: Removed extra 'A:' from 'name:A:'
        { name: "Java", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png", proficiency: 20, creativity: 90,
          description: "Introductory experience with Java programming for object-oriented concepts and basic application development, focused on foundational logic.",
          projects: ["Console-based Calculator App"]
        },
        { name: "Blender", icon: "Picture/Skills/blender.png", proficiency: 20, creativity: 90,
          description: "Creative skills in 3D modeling and rendering using Blender for architectural visualization, concept modeling, and presentations of structural solutions.",
          projects: ["Architectural Concept Renderings", "Structural Connection Visualization"]
        },
    ];
    
    // Convert array to a map for easy lookup
    const skillsMap = skillsData.reduce((acc, skill) => {
        acc[skill.name] = skill;
        return acc;
    }, {});

    // Mobile Menu Toggle
    $('#menu-btn').click(function () {
        $('#mobile-menu').toggleClass('hidden');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Close mobile menu on link click
    $('#mobile-menu a').click(function() {
        $('#mobile-menu').addClass('hidden');
        $('#menu-btn').find('i').removeClass('fa-times').addClass('fa-bars');
    });

    // Scroll Spy & Smooth Scrolling
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const targetId = $(this).attr('href');
        const target = $(targetId);
        if(target.length) {
            // Adjusted scroll top calculation to account for fixed header
            $('html, body').animate({
                scrollTop: target.offset().top - $('#header').outerHeight()
            }, 800);
        }
    });

    // Update active nav link on scroll
    $(window).on('scroll', function() {
        let scrollPos = $(document).scrollTop();

        // Scroll Top button logic - REMOVED
        /*
        if (scrollPos > 300) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
        */
        
        // Nav Active link logic
        $('section').each(function() {
            let currLink = $(this);
            // Check if the current section is within the viewport's top portion (adjust for header height)
            if (currLink.position().top - $(window).scrollTop() <= $('#header').outerHeight() + 50 && currLink.position().top + currLink.height() > $(window).scrollTop()) {
                $('.nav-link').removeClass('nav-active');
                $(`.nav-link[href="#${$(this).attr('id')}"]`).addClass('nav-active');
            }
        });
    });

    // Typed.js effect for Hero Section
    if ($(".typing-text").length) {
        new Typed(".typing-text", {
            strings: ["Structure Engineer", "Draftsman", "QA/QC Engineer"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 500,
        });
    }

    // Typed.js effect for About Section role
    if ($(".role-text").length) {
        new Typed(".role-text", {
            strings: ["Structure Engineer", "Draftsman", "QA/QC Engineer"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 500,
        });
    }

    // Particles.js config
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#a1a1aa" },
            "shape": { "type": "star" }, // Changed from "circle" to "star"
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#a1a1aa", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });

    // Initializations for static elements
    VanillaTilt.init(document.querySelectorAll(".home .tilt, .about .tilt"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });

    sr.reveal('.home .text-3x1, .home .text-2xl, .about .md\\:w-2\\/3, .contact form', {}); // Corrected selector for h2
    sr.reveal('.home .inline-block, .about .md\\:w-1\\/3', { delay: 400 });
    sr.reveal('.home .flex.space-x-4', { delay: 600 });

    // Dynamic Skills Injection and Initialization
    let skillsHTML = '';
    skillsData.forEach(skill => {
        // Added data-skill-name for easy lookup
        skillsHTML += `
            <div class="skill-card tilt" data-skill-name="${skill.name}">
                <div class="skill-card-content">
                    <div class="flex items-center h-full">
                         <!-- Left Side: Icon and Name -->
                        <div class="flex-shrink-0 mr-4 text-center w-1/3">
                            <div class="bg-gray-800 bg-opacity-50 p-2 rounded-lg inline-block">
                                <img src="${skill.icon}" alt="${skill.name}" class="h-12 w-12" onerror="this.src='https://placehold.co/48x48/718096/FFFFFF?text=${skill.name.substring(0,2)}'; this.onerror=null;"/>
                            </div>
                            <h3 class="mt-2 text-lg font-bold">${skill.name}</h3>
                        </div>

                        <!-- Right Side: Progress Bars -->
                        <div class="flex-grow space-y-2 w-2/3">
                            <div>
                                <h4 class="font-semibold text-md">Proficiency</h4>
                                <div class="skill-progress-bar mt-1">
                                    <div class="skill-progress" style="width: ${skill.proficiency}%;">${skill.proficiency}%</div>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-md">Creativity</h4>
                                <div class="skill-progress-bar mt-1">
                                    <div class="skill-progress" style="width: ${skill.creativity}%;">${skill.creativity}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="view-details-btn" data-skill-name="${skill.name}">
                    View Details
                </button>
            </div>
        `;
    });
    $('#skillsContainer').html(skillsHTML);

    // Initializations for dynamically added skill cards
    VanillaTilt.init(document.querySelectorAll(".skills .tilt"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });
    sr.reveal('#skillsContainer .skill-card', { interval: 200 }); // Corrected selector

    // --- Skill Modal Logic ---
    const $skillModal = $('#skill-modal'); // Renamed to avoid confusion
    $('#skillsContainer').on('click', '.skill-card, .view-details-btn', function() {
        // Find the closest parent element with the skill name data attribute
        const skillName = $(this).closest('.skill-card').data('skill-name');
        const skill = skillsMap[skillName];

        if (skill) {
            // Populate modal content
            $('#modal-skill-name').text(skill.name);
            $('#modal-skill-icon').attr('src', skill.icon);
            $('#modal-skill-description').text(skill.description);

            // Update proficiency bar
            $('#modal-skill-proficiency')
                .css('width', skill.proficiency + '%')
                .text(skill.proficiency + '%');

            // Update creativity bar
            $('#modal-skill-creativity')
                .css('width', skill.creativity + '%')
                .text(skill.creativity + '%');

            // Populate projects list
            const $projectsList = $('#modal-skill-projects');
            $projectsList.empty();
            if (skill.projects && skill.projects.length > 0) {
                skill.projects.forEach(project => {
                    $projectsList.append(`<li>${project}</li>`);
                });
                $('#modal-skill-projects-container').show();
            } else {
                $projectsList.append('<li>No specific projects listed for this skill yet.</li>');
                $('#modal-skill-projects-container').show(); // Still show message
            }


            // Show modal (acts as the new page)
            $skillModal.fadeIn(300);
            $('body').css('overflow', 'hidden'); // Prevent scrolling of the background page
        }
    });

    // Close modal handler (Back button / X button)
    $('#modal-close-btn, #modal-back-button').on('click', function() {
        $skillModal.fadeOut(300, function() {
            $('body').css('overflow', 'auto'); // Re-enable background scrolling
        });
    });

    // NEW: Add click handlers for the project modal
    $('.project-modal-close-btn, .project-modal-back-btn').on('click', function() {
        closeProjectModal();
    });


    // THIS DYNAMIC PROJECTS SECTION IS NO LONGER NEEDED
    // It has been replaced by the new project modal system
    /*
    const projects = [ ... ];
    let workHTML = '';
    projects.forEach(project => { ... });
    $('#workContainer').html(workHTML);
    */

    // Contact Form Mailto - REMOVED
    /*
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        const name = $('#contact-name').val();
        const email = $('#contact-email').val();
        const phone = $('#contact-phone').val();
        const message = $('#contact-message').val();

        const subject = `New Contact from ${name}`;
        let body = `You have a new message from your portfolio website:\n\n`;
        body += `Name: ${name}\n`;
        body += `Email: ${email}\n`;
        if (phone) {
            body += `Phone: ${phone}\n`;
        }
        body += `Message: ${message}\n`;

        const recipientEmail = 'chanvirakbothbo@gmail.com';
        // NOTE: This will open the user's default email client
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        $('#contact-form')[0].reset();
    });
    */

    // THIS IS NO LONGER NEEDED
    // sr.reveal('#workContainer > div', { interval: 100 });
});