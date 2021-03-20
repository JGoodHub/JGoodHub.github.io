$(document).ready(() => {
	$("#portfolio-header").html(/*html*/`
		<header class="page-header" role="banner">
			<img class="profile-image" src="https://jgoodhub.github.io/assets/images/logo.png" width=220 height=220>

			<h1 class="project-name">James Goodman Portfolio</h1>
			<h2 class="project-tagline">
				Hello and welcome to my portfolio. Here you can find a collection of projects that I have worked on, ranging
				from personal projects done in my spare time to those completed as part of my degree.
			</h2>

			<a href="https://www.linkedin.com/in/james-goodman-151b69142/" class="btn">My LinkedIn</a>
			<a href="https://jgoodhub.github.io/assets/documents/James_Goodman_CV.pdf" class="btn">My Resume</a>
			<a href="mailto:jagoodmail@gmail.com" class="btn">E-Mail: jagoodmail@gmail.com</a>
			<a href="https://github.com/JGoodHub" class="btn">My Github</a>
		</header>
    `);

	$("#portfolio-footer").html(/*html*/`	
		<footer class="site-footer">
			<span class="site-footer-owner">
				<a href="https://github.com/JGoodHub/JGoodHub.github.io">JGoodHub.github.io</a>
				is maintained by
				<a href="https://github.com/JGoodHub">James Goodman</a>.
			</span>

			<span class="site-footer-credits">
				This site is hosted by <a href="https://pages.github.com">GitHub Pages</a>.
			</span>
		</footer>
	`);

});