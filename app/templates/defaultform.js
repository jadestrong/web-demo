export default () => {
	return `
		<form class="pure-form">
			<fieldset>
				<legend>Default Form</legend>
				<input type="text" placeholder="Username" required />
				<input type="password" placeholder="Password" disabled />
				<label>
					<input type="checkbox" />
					Remember me
				</label>
				<button class="pure-button pure-button-primary">Signin</button>
			</fieldset>
		</form>
		<form class="pure-form pure-form-stacked">
			<fieldset>
				<legend>Stacked Form</legend>
				<label>Email</label>
				<input type="text" placeholder="Username" readonly />
				<label>Password</label>
				<input type="password" placeholder="Password" />
				<label for="state">State</label>
				<select id="state">
					<option value="AL">AL</option>
					<option value="CA">CA</option>
					<option value="IL">IL</option>
				</select>
				<label  class="pure-checkbox">
					<input type="checkbox" />
					Remember me
				</label>
				<button class="pure-button pure-button-primary">Signin</button>
			</fieldset>
		</form>
		<form class="pure-form pure-form-aligned">
			<fieldset>
				<legend>Aligned Form</legend>
				<div class="pure-control-group">
					<label for="">Username</label>
					<input type="text" placeholder="Username" />
				</div>
				<div class="pure-control-group">
					<label for="">Password</label>
					<input type="password" placeholder="Password" />
				</div>
				<div class="pure-control-group">
					<label for="">Email</label>
					<input type="email" placeholder="Email" />
				</div>
				<div class="pure-control-group">
					<label for="">Supercalifragilistic Label</label>
					<input type="text" class="pure-input-rounded" placeholder="Enter something here..." />
				</div>
				<div class="pure-controls">
					<label class="pure-checkbox">
						<input type="checkbox" />
						I've read the terms and conditions
					</label>

					<button type="submit" class="pure-button pure-button-primary">Signin</button>
				</div>
			</fieldset>
		</form>
		<form class="pure-form pure-form-stacked">
			<fieldset>
				<legend>Mutil-Column Form</legend>
				<div class="pure-g">
					<div class="pure-u-1 pure-u-md-1-3">
						<label for="">First Name</label>
						<input type="text" placeholder="First Name" class="pure-u-23-24" />
					</div>
					<div class="pure-u-1 pure-u-md-1-3">
						<label for="">Last Name</label>
						<input type="text" placeholder="Last Name" class="pure-u-23-24" />
					</div>
					<div class="pure-u-1 pure-u-md-1-3">
						<label for="">Email</label>
						<input type="email" placeholder="Email" class="pure-u-23-24" />
					</div>
					<div class="pure-u-1 pure-u-md-1-3">
						<label for="">City</label>
						<input type="text" placeholder="City" class="pure-u-23-24" />
					</div>
					<div class="pure-u-1 pure-u-md-1-3">
						<label for="">State</label>
						<select name="state" class="pure-u-23-24">
							<option value="AL">AL</option>
							<option value="CA">CA</option>
							<option value="IL">IL</option>
						</select>
					</div>
				</div>
				<label class="pure-checkbox">
						<input type="checkbox" />
						I've read the terms and conditions.
					</label>
					<button class="pure-button pure-button-primary">Signin</button>
			</fieldset>
		</form>
		<form class="pure-form">
			<fieldset class="pure-group">
				<input type="text" class="pure-input-1-2" placeholder="Username" />
				<input type="password" class="pure-input-1-2" placeholder="Password" />
				<input type="email" class="pure-input-1-2" placeholder="Email" />
			</fieldset>
			<fieldset class="pure-group">
				<input type="text" class="pure-input-1-2" placeholder="A title" />
				<textarea name="" class="pure-input-1-2" placeholder="Textareas work too"></textarea>
			</fieldset>
			<button class="pure-buttn pure-input-1-2 pure-button-primary">Signin</button>
		</form>
		<form class="pure-form pure-g">
			<div class="pure-u-1-4">
				<input type="text" class="pure-input-1" placeholder=".pure-u-1-4" />
			</div>
			<div class="pure-u-3-4">
				<input type="text" class="pure-input-1" placeholder=".pure-u-3-4" />
			</div>
			<div class="pure-u-1-2">
				<input type="text" class="pure-input-1" placeholder=".pure-u-1-2" />
			</div>
			<div class="pure-u-1-2">
				<input type="text" class="pure-input-1" placeholder=".pure-u-1-2" />
			</div>
			<div class="pure-u-1-8">
			    <input class="pure-input-1" type="text" placeholder=".pure-u-1-8">
			</div>
			<div class="pure-u-1-8">
			    <input class="pure-input-1" type="text" placeholder=".pure-u-1-8">
			</div>
			<div class="pure-u-1-4">
			    <input class="pure-input-1" type="text" placeholder=".pure-u-1-4">
			</div>
			<div class="pure-u-1-2">
			    <input class="pure-input-1" type="text" placeholder=".pure-u-1-2">
			</div>

			<div class="pure-u-1-5">
			    <input class="pure-input-1" type="text" placeholder=".pure-u-1-5">
			</div>
			<div class="pure-u-2-5">
			    <input class="pure-input-1" type="text" placeholder=".pure-u-2-5">
			</div>
			<div class="pure-u-2-5">
			    <input class="pure-input-1" type="text" placeholder=".pure-u-2-5">
			</div>

			<div class="pure-u-1">
			    <input class="pure-input-1" type="text" placeholder=".pure-u-1">
			</div>
		</form>
		<form class="pure-form">
			<label class="pure-checkbox">
				<input type="checkbox" />
				Here is option one.
			</label>
			<label class="pure-radio">
				<input type="radio" name="optionRadios" value="option1" checked />
				Here's a radio button. You can choose this one..
			</label>
			<label class="pure-radio">
				<input type="radio"  name="optionRadios" value="option2" />
				..Or this one!
			</label>
		</form>
	`;
};