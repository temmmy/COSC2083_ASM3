<script>
    import { onMount } from 'svelte'
    import {isOverlayOpen, Noverlay} from '../stores/OverlayStore'
    import MovingDiv from 'svelte-moving-div'
    import { base } from "$app/paths";
    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } 
            })
        })
        const hiddenElements = document.querySelectorAll('.fadee, .flyinr, .flyinl')
        hiddenElements.forEach((el) => observer.observe(el))
        function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
    }

    updateList();
    window.addEventListener('scroll', () => {
        updateList();
    });

	});   
</script>
<head>
    <title>Nikitech</title>
</head>
<body class="bg-body text-white pb-12 scrollbar">
    <!-- Home Page -->
    <header class="py-6">
        <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <MovingDiv>
                <div class="text-2xl font-bold">Nikitech Inc.</div>
            </MovingDiv>
            <div>
                <div class="hidden md:flex space-x-12 items-center">
                    <a href="#" class="text-selected-text">Home</a>
                    <a href="#team" class="">Our Team</a>
                    <a href="#project">Project & Description</a>
                        <a href="#hire"><button class="px-6 py-2 bg-selected-text rounded-md font-bold">Contact us</button></a>
                </div>
            </div>
            <div class="md:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
            </div>
        </div>
    </header>
    <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">
            <nav class="inline-block mt-48 lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
                <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-37">
                    <a href="#" class="nav-dot selected-circle block w-9 h-9 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                    </a>
                    <a href="#team" class="nav-dot block w-9 h-9 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black  px-2 py-1 rounded-md ml-10 opacity-0">Our_Team</span>
                    </a>
                    <a href="#project" class="nav-dot  block w-9 h-9 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Project_Description</span>
                    </a>
                    <a href="#hire" class="nav-dot block w-9 h-9 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact_us</span>
                    </a>
                </div>
            </nav>
            <div class="hiddden fadee flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
                <MovingDiv>
                <h1 class="font-bold text-5xl md:text-6xl lg:text-8xl text-center md:text-left">Helping<br> businesses to grow.</h1>
                </MovingDiv>
                <div class="w-full flex justify-center md:justify-start">
                    <button class="px-8 py-4 rounded-full bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                        <div>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                            </svg>								
                        </div>
                        <span class="transform transition duration-300 hover:scale-110"><a href='#team'>Learn More</a></span>
                    </button>
                </div>
            </div>
            <img src="/AI.png" alt="braidn" class="fadee w-2/4 h-2/4 mx-auto mt-10 right-0 transform transition duration-100 hover:scale-125">
        </div>
    </div>
    <!-- Our Team -->
    
    <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
            <h2 id="team" class="secondary-title">Our Team</h2>
            <p class="section-paragraph">We are a team of talented and passionate IT world students. As a good team, we ensure good communication between each member, freely share our thoughts, opinions, ideas as well as taking into consideration what others have to say. Everyone contributes their fair share of the workload and offers each other support whenever and wherever it is needed. Our team is focused on goals and results, but most importantly we have fun and we are friends.</p>

            <!-- Members -->
            <div class="space-y-12 my-16">
                <div class="flyinr wfull border rounded-full border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center flex-wrap lg:flex-nowrap">
                    
                    <!-- Member image -->
                    <div class="self-center mb-6 lg:mb-0">
                        <img class="self-center max-w-fit w-72 h-72 rounded-full" src="/nghia.png" alt="ayo">
                    </div>

                    <!-- Member info -->
                    <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 class="text-white text-3xl font-semibold">Nguyen Chi Nghia</h3>

                        <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div class="badge">Mr. CEO</div>
                            <div class="badge">Machine Learning Development</div>
                        </div>

                        <p class="text-secondary">Nguyen Chi Nghia ( s3979170 ). As of January 2023, I am currently a freshman at RMIT University. Up until recently I had been living in Russia, where I was taught coding and where I fell in love with the IT industry in general. One of the fastest-growing sectors worldwide that never stands still, provides interesting, challenging problems and a variety of career opportunities. I tried to follow different IT roadmaps (Game-Development, Web-Development), but so far finding Data Science to be the most suitable one. In my leisure time, I really enjoy reading, hanging out with my friends as well as working on personal projects.</p>
                    </div>

                </div>
                <div class="flyinl w-full border rounded-lg border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                
                    <!-- Member image -->
                    <div class="mb-6 lg:mb-0">
                        <img class="max-w-fit w-72 h-72  rounded-full" src="/kiet.png" alt="ayo">
                    </div>

                    <!-- Member Info -->
                    <div class="flex flex-wrap justify-center text-center lg:text-left lg:block ">
                        <h3 class="text-white text-3xl font-semibold">Luong Tuan Kiet</h3>

                        <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div class="badge">UI/UX</div>
                            <div class="badge">Front-End Development</div>
                        </div>

                        <p class="text-secondary">Luong Tuan Kiet (s3980288). Freshman at RMIT University 2023. Ever since I was a kid, I’ve always been fascinated by how computers operate and what values they bring to life. When I got my first personal computer, my passion for IT only grew stronger, and as a result, I started doing more and more research about this field. Everyday learning something new about IT truly makes me feel that I chose the right profession. For this reason, I’ve decided to choose Computer Science as a career path.
                        </p>
                    </div>

                </div>
                <div class="flyinr w-full border rounded-full  border-nav  p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    
                    <!-- Member Image -->
                    <div class="mb-6 lg:mb-0">
                        <img class="max-w-fit w-72 h-72  rounded-full" src="/nhan.png" alt="ayo">
                    </div>

                    <!-- Member Logo -->
                    <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 class="text-white text-3xl font-semibold">Phan Nguyen Viet Nhan</h3>

                        <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div class="badge">Human Resources</div>
                            <div class="badge">Data Analytics</div>
                        </div>

                        <p class="text-secondary">Phan Nguyen Viet Nhan (s3978145). I am a first year student at RMIT Vietnam. Prior to learning to code, my heart was only big enough for basketball, a fast-paced sport that emphasizes teamwork and focus. However, after progressing through the course to gain a better understanding of contemporary information technology areas, I started to get attracted to this new knowledge, which drove me to explore and be curious about this field.Not to mention programing and basketball have alot in common as both require great precision, agility, quick processing, and superb team coordination.</p>
                    </div>

                </div>
                <div class="flyinl w-full border rounded-lg border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    
                    <!-- Member image -->
                    <div class="mb-6 lg:mb-0">
                        <img class="max-w-fit w-72 h-72  rounded-full"  src="/minh.png" alt="ayo">
                    </div>

                    <!-- Member info -->
                    <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 class="text-white text-3xl font-semibold">Tran Nhat Minh</h3>

                        <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div class="badge">Data Visualization</div>
                            <div class="badge">Business Intelligence</div>
                        </div>

                        <p class="text-secondary">Tran Nhat Minh (s3977767). Currently at the moment, I am a freshman at RMIT University, majoring in IT. I have always been interested in technology and have a strong passion for IT. My interests include programming, machine learning and artificial intelligence. I am always looking to learn more and expand my knowledge in this field and also ready to use my skills and experience to help others with their IT-related questions and problems.</p>
                    </div>

                </div>
            </div>

        </section>
    </div>
    <!-- Project & Description -->
    <div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
            <h2 id="project" class="text-center m-auto secondaryy-title">Project & Description</h2>
            <p class="text-secondary block text-center m-auto"><a href='https://github.com/temmmy/IntroToIT'><strong>Full report</strong></a> you can read on our github page</p>
            <div class="block m-auto mt-16 mb-32 max-w-md   bg-white border border-gray-200 rounded-lg shadow-md dark:bg-theme dark:border-selected-text">
                <a href="#">
                    <img class="rounded-t-lg" src="/sales.jpg" alt="" />
                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Sales Predictor Prototype v0.1</h5>
                    <a href="https://colab.research.google.com/drive/1YI4CDWcbRqcuCZ3HQ17S2VyOgtZ9_XmO?usp=sharing" class="inline-flex items-center px-3 py-2 text-sm font-bold text-center  text-white bg-theme rounded-lg hover:bg-selected-text focus:ring-4 focus:outline-none focus:ring-theme dark:bg-green-300 dark:hover:bg-selected-text dark:focus:ring-selected-text">
                        Open
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 1}} type="button" class='relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1581934932994-e4ac37c0c882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" class="w-full brightness-50  rounded-3xl  bg-nav h-36 lg:h-60  drop-shadow-2xl  object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Topic</h3>
                </button>
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 2}} type="button"  class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-full brightness-50 rounded-3xl bg-nav h-36 lg:h-60  drop-shadow-2xl object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Motivation</h3>
                </button>    
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 3}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-full brightness-50 rounded-3xl  bg-nav h-36 lg:h-60  drop-shadow-2xl object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Landscape</h3>
                </button>    
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 4}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1564993719576-7b00be6317cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" class="w-full brightness-50 rounded-3xl  bg-nav h-36 lg:h-60  drop-shadow-2xl object-cover"> 
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Aims</h3>
                </button>    
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 5}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" class="w-full brightness-50 rounded-3xl  bg-nav h-36 lg:h-60  drop-shadow-2xl object-cover"> 
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Plans</h3>
                </button>   
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 6}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1624557835271-306e581b1496?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" class="w-full brightness-50 rounded-3xl   bg-nav h-36 lg:h-60  drop-shadow-2xl object-cover"> 
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Progress</h3>
                </button>    
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 7}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1588412079929-790b9f593d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-full brightness-50 rounded-3xl  bg-nav h-36 lg:h-60  drop-shadow-2xl object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Roles</h3>
                </button>    
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 8}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1516867155773-0a95d01e4b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-full brightness-50 rounded-3xl brightness bg-nav h-36 lg:h-60  drop-shadow-2xl object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Scope/Limits</h3>
                </button>    
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 9}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1613206485381-b028e578e791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-full brightness-50 rounded-3xl brightness-50  bg-nav h-36 lg:h-60  drop-shadow-2xl object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Tools & Technologies</h3>
                </button>
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 10}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'>
                    <img src="https://images.unsplash.com/photo-1535161531861-4a5d0a14bf40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-full brightness-50 rounded-3xl brightness-50  bg-nav h-36 lg:h-60 object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Testing</h3>
                </button>
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 11}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'> 
                    <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" class="w-full brightness-50 rounded-3xl brightness-50  bg-nav h-36 lg:h-60 object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Risks</h3>
                </button>
                <button on:click={() => {isOverlayOpen.set(true); Noverlay.n = 12}} type="button" class= 'relative trasnform transition duration-300 hover:scale-110'> 
                    <img src="https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="w-full brightness-50 rounded-3xl brightness-50  bg-nav h-36 lg:h-60 object-cover">
                    <h3 class='absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Communication</h3>
                </button>
            </div>
        </section>
    </div>
    <!-- Hire us -->
    <div class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full flyinl">
            <h2 id="hire" class="secondary-title">Contact us</h2>
            <p class="section-paragraph">If you are interested and have any further questions regarding the project please do not hesitate to contact us. We will get back to you as soon as possible</p>
				<div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
					<div class="space-y-12">
						<div>
							<label class="text-white block mb-6 text-xl font-bold">Name</label>
							<input class="w-full border border-input-border bg-input px-4 py-4">
						</div>
						<div>
							<label class="text-white block mb-6 text-xl font-bold">Email</label>
							<input type="email" class="w-full border border-input-border bg-input px-4 py-4">
						</div>
						<div>
							<label class="text-white block mb-6 text-xl font-bold">Message</label>
							<textarea class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
						</div>
						<button class="px-6 py-2 bg-theme rounded-sm text-white font-bold">Send it!</button>
					</div>

					<div class="mt-12">
						<!-- Contact info -->
						<p class="text-secondary">XXX-XXX-XXX</p>
						<a href="mailto:email@mydomain.com" class="text-secondary underline mt-3 block">Nikitech@HDgrade.com</a>
					</div>
				</div>
        </section>
    </div>
    <div class="mt-16 mb-0 pd-0 flex justify-between items-center m-auto px-8 md:px-14 lg:px-24 w-full">
        <footer class="block m-auto text-secondary"> <small>&copy; Copyright 2023, Nikitech Inc.</small> </footer> 
    </div>
</body>