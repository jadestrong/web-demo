export default () => {
	return `
		<div class="pure-menu custom-restricted-width">
			<span class="pure-menu-heading">PURE</span>
			<ul class="pure-menu-list">
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Get Started</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Layouts</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Base</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Grids</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Forms</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Buttons</a></li>
			</ul>
		</div>
		<div class="pure-menu pure-menu-horizontal">
			<a href="#" class="pure-menu-heading pure-menu-link">PURE</a>
			<ul class="pure-menu-list">
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Get Started</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Layouts</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Base</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Grids</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Forms</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Buttons</a></li>
			</ul>
		</div>
		<div class="pure-menu pure-menu-horizontal">
			<ul class="pure-menu-list">
				<li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Get Started</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Layouts</a></li>
				<li class="pure-menu-item pure-menu-disabled"><a href="#" class="pure-menu-link">Base</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Grids</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Forms</a></li>
				<li class="pure-menu-item"><a href="#" class="pure-menu-link">Buttons</a></li>
			</ul>
		</div>
		<div class="pure-menu pure-menu-horizontal">
			<ul class="pure-menu-list">
				<li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
				<li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
					<a href="#" class="pure-menu-link">Contack</a>
					<ul class="pure-menu-children">
							<li class="pure-menu-item"><a href="#" class="pure-menu-link">Email</a></li>
							<li class="pure-menu-item"><a href="#" class="pure-menu-link">Twitter</a></li>
							<li class="pure-menu-item"><a href="#" class="pure-menu-link">Tumber Blog</a></li>
					</ul>
				</li>
			</ul>
		</div>
	`;
};