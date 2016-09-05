export default () => {
	return `
		<form class="pure-form pure-form-stacked">
			<fieldset>
				<legend>System Signin</legend>
				<div class="pure-g">
					<div class="pure-u-1 pure-u-md-1-3">
						<label for="">User name</label>
						<input type="email" class="pure-u-23-24" placeholder="Email" data-email />
					</div>
					<div class="pure-u-1 pure-u-md-1-3">
						<label>Password</label>
						<input type="password" class="pure-u-23-24" placeholder="Password" data-password />
					</div>
				</div>
				<label for="remember">
					<input type="checkbox" id="remember" /> Remember me
				</label>
				<button class="pure-button pure-button-primary">Sign in</button>
			</fieldset>
		</form>
	`
};