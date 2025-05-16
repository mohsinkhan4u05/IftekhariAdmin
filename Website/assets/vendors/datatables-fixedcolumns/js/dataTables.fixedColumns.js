i> Menu Level 3.3</a></li>
														</ul>
													</li>
													<li><a role="button" tabindex="0"><i class="fa fa-angle-right"></i> Menu Level 2.2</a></li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
								<!--/ NAVIGATION Content --> 
							</div>
						</div>
					</div>
					<div class="panel settings panel-default">
						<div class="panel-heading" role="tab">
							<h4 class="panel-title"><a data-toggle="collapse" href="#leftmenuControls">General Settings <i class="fa fa-angle-up"></i></a></h4>
						</div>
						<div id="leftmenuControls" class="panel-collapse collapse in" role="tabpanel">
							<div class="panel-body">
								<div class="form-group">
									<div class="row">
										<label class="col-xs-8">Switch ON</label>
										<div class="col-xs-4 control-label">
											<div class="togglebutton">
												<label>
													<input type="checkbox" checked="">
												</label>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<label class="col-xs-8">Switch OFF</label>
										<div class="col-xs-4 control-label">
											<div class="togglebutton">
												<label>
													<input type="checkbox" >
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="milestone-sidbar">
							<div class="text-center-folded"> <span class="pull-right pull-none-folded">60%</span> <span class="hidden-folded">Milestone</span> </div>
							<div class="progress progress-xxs m-t-sm dk">
								<div class="progress-bar progress-bar-info" style="width: 60%;"> </div>
							</div>
							<div class="text-center-folded"> <span class="pull-right pull-none-folded">35%</span> <span class="hidden-folded">Release</span> </div>
							<div class="progress progress-xxs m-t-sm dk">
								<div class="progress-bar progress-bar-primary" style="width: 35%;"> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
		<!--/ SIDEBAR Content --> 
		
		<!--RIGHTBAR Content -->
		<aside id="rightmenu">
			<div role="tabpanel"> 
				<!-- Nav tabs -->
				<ul class="nav nav-tabs" role="tablist">
					<li role="presentation" class="active"><a href="#chat" aria-controls="chat" role="tab" data-toggle="tab">Chat</a></li>
					<li role="presentation"><a href="#todo" aria-controls="todo" role="tab" data-toggle="tab">Todo</a></li>
					<li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
				</ul>
				<!-- Tab panes -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="chat">
						<div class="search">
							<div class="form-group is-empty">
								<input type="text" class="form-control underline-input" placeholder="Search...">
								<span class="material-input"></span></div>
						</div>
						<h6>Recent</h6>
						<ul>
							<li class="online">
								<div class="media"> <a class="pull-left thumb thumb-sm" role="button" tabindex="0"> <img class="media-object " src="assets/images/pi-avatar.jpg" alt=""> </a>
									<div class="media-body"> <span class="name">Claire Sassu</span> <span class="message">Can you share the...</span> <span class="badge badge-outline status"></span> </div>
								</div>
							</li>
							<li class="online">
								<div class="media"> <a class="pull-left thumb thumb-sm" role="button" tabindex="0"> <img class="media-object " src="assets/images/John-avatar.jpg" alt=""> </a>
									<div class="media-body">
										<div class="media-body"> <span class="name">Maggie jackson</span> <span class="message">Can you share the...</span> <span class="badge badge-outline status"></span> </div>
									</div>
								</div>
							</li>
							<li class="online">
								<div class="media"> <a class="pull-left thumb thumb-sm" role="button" tabindex="0"> <img class="media-object " src="assets/images/Jane-avatar.jpg" alt=""> </a>
									<div class="media-body">
										<div class="media-body"> <span class="name">Joel King</span> <span class="message">Ready for the meeti...</span> <span class="badge badge-outline status"></span> </div>
									</div>
								</div>
							</li>
						</ul>
						<h6>Contacts</h6>
						<ul>
							<li class="offline">
								<div class="media"> <a class="pull-left thumb thumb-sm" role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar4.jpg" alt=""> </a>
									<div class="media-body">
										<div class="media-body"> <span class="name">Joel King</span> <span class="badge badge-outline status"></span> </div>
									</div>
								</div>
							</li>
							<li class="online">
								<div class="media"> <a class="pull-left thumb thumb-sm" role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar5.jpg" alt=""> </a>
									<div class="media-body">
										<div class="media-body"> <span class="name">Joel King</span> <span class="badge badge-outline status"></span> </div>
									</div>
								</div>
							</li>
							<li class="offline">
								<div class="media"> <a class="pull-left thumb thumb-sm" role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar6.jpg" alt=""> </a>
									<div class="media-body">
										<div class="media-body"> <span class="name">Joel King</span> <span class="badge badge-outline status"></span> </div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div role="tabpanel" class="tab-pane" id="todo">
						<div class="form-group">
							<input type="text" value="" placeholder="Create new task..." class="form-control" />
							<span class="fa fa-plus"></span> </div>
						<h6>Today</h6>
						<ul class="todo-list">
							<li>
								<div class="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes">
										Initialize the project</label>
								</div>
							</li>
							<li>
								<div class="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes">
										Create the main structure</label>
								</div>
							</li>
							<li>
								<div class="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes">
										Create the main structure</label>
								</div>
							</li>
						</ul>
						<h6>Tomorrow</h6>
						<ul class="todo-list">
							<li>
								<div class="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes">
										Initialize the project</label>
								</div>
							</li>
							<li>
								<div class="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes">
										Create the main structure</label>
								</div>
							</li>
							<li>
								<div class="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes">
										displayed in a normal space!</label>
								</div>
							</li>
						</ul>
					</div>
					<div role="tabpanel" class="tab-pane" id="settings">
						<h6>Chat Settings</h6>
						<ul class="settings">
							<li>
								<div class="form-group">
									<label class="col-xs-8 control-label">Show Offline Users</label>
									<div class="col-xs-4 control-label text-right">
										<div class="togglebutton">
											<label>
												<input type="checkbox" checked="">
											</label>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="form-group">
									<label class="col-xs-8 control-label">Show Fullname</label>
									<div class="col-xs-4 control-label text-right">
										<div class="togglebutton">
											<label>
												<input type="checkbox" >
											</label>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="form-group">
									<label class="col-xs-8 control-label">History Enable</label>
									<div class="col-xs-4 control-label text-right">
										<div class="togglebutton">
											<label>
												<input type="checkbox" checked="">
											</label>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="form-group">
									<label class="col-xs-8 control-label">Show Locations</label>
									<div class="col-xs-4 control-label text-right">
										<div class="togglebutton">
											<label>
												<input type="checkbox" checked="">
											</label>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="form-group">
									<label class="col-xs-8 control-label">Notifications</label>
									<div class="col-xs-4 control-label text-right">
										<div class="togglebutton">
											<label>
												<input type="checkbox" >
											</label>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="form-group">
									<label class="col-xs-8 control-label">Show Undread Count</label>
									<div class="col-xs-4 control-label text-right">
										<div class="togglebutton">
											<label>
												<input type="checkbox" >
											</label>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</aside>
		<!--/ RIGHTBAR Content --> 
	</div>
	<!--/ CONTROLS Content --> 
	<!--  CONTENT  -->
	<section id="content">
		<div class="page page-forms-common"> 
			
			<!-- bradcome -->
			<div class="bg-light lter b-b wrapper-md mb-10">
				<div class="row">
					<div class="col-sm-6 col-xs-12">
						<h1 class="font-thin h3 m-0">Material Elements</h1>
						<small class="text-muted">Welcome to Oakleaf application</small>
					</div>
				</div>
			</div>
			<!-- row -->
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Buttons</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row">								
								<h4>Colors</h4>
								<p>We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:</p>
								<p>
										<button class="btn btn-raised btn-default">Default</button>
										<button class="btn btn-raised btn-primary">Primary</button>
										<button class="btn btn-raised btn-info">Info</button>
										<button class="btn btn-raised btn-success">Success</button>
										<button class="btn btn-raised btn-warning">Warning</button>
										<button class="btn btn-raised btn-danger">Danger</button>
									</p>
								<pre class="prettyprint">

&lt;button class=&quot;btn btn-raised btn-default&quot;&gt;Default&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-primary&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-info&quot;&gt;Info&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-success&quot;&gt;Success&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-warning&quot;&gt;Warning&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-danger&quot;&gt;Danger&lt;/button&gt;
    			</pre>
								<h4>Sizes</h4>
								<p>Buttons come in all needed sizes:</p>
								<p>
										<button class="btn btn-raised btn-primary btn-lg">Large</button>
										<button class="btn btn-raised btn-primary">Normal</button>
										<button class="btn btn-raised btn-primary btn-sm">Small</button>
										<button class="btn btn-raised btn-primary btn-xs">Extra Small</button>
									</p>
								<pre class="prettyprint">

&lt;button class=&quot;btn btn-raised btn-primary btn-lg&quot;&gt;Large&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-primary&quot;&gt;Normal&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-primary btn-sm&quot;&gt;Small&lt;/button&gt;
&lt;button class=&quot;btn btn-raised btn-primary btn-xs&quot;&gt;Extra Small&lt;/button&gt;
    			</pre>
								<h4>Styles</h4>
								<p>We added extra classes that can help you better customise the look. You can use regular buttons, raised buttons, rounded corners buttons or plain link buttons. Let's see some examples: </p>
								<p>
										<button class="btn btn-primary btn-raised">Raised</button>
										<button class="btn btn-primary btn-raised btn-round">Round</button>
										<button class="btn btn-primary btn-raised btn-round"> <i class="fa fa-heart-o"></i> With Icon </button>
										<button class="btn btn-primary btn-raised btn-fab btn-fab-mini btn-round"> <i class="fa fa-heart"></i> </button>
										<button class="btn btn-primary">Default</button>
									</p>
								<pre class="prettyprint">
&lt;button class=&quot;btn btn-primary btn-raised&quot;&gt;Raised&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-raised btn-round&quot;&gt;Round&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-raised btn-round&quot;&gt;
	&lt;i class=&quot;material-icons&quot;&gt;favorite&lt;/i&gt; With Icon
&lt;/button&gt;
&lt;button class=&quot;btn btn-primary btn-raised btn-fab btn-fab-mini btn-round&quot;&gt;
	&lt;i class=&quot;material-icons&quot;&gt;favorite&lt;/i&gt;
&lt;/button&gt;
&lt;button class=&quot;btn btn-primary&quot;&gt;Default&lt;/button&gt;
    			</pre>
								<p> Button groups, toolbars, and disabled state all work like they are supposed to. We used the Font Awesome icons that can be found <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">here</a> and Material Design Icons that can be found <a href="https://design.google.com/icons/" target="_blank"> here</a>. </p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Checkboxes</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row">								
								<p> To use the custom checkboxes, you don't need to import any separate Javascript file, everything is inside material.min.js </p>
								<p>
									<div class="checkbox">
										<label>
											<input type="checkbox" name="optionsCheckboxes">
											Unchecked </label>
									</div>
								<div class="checkbox">
										<label>
										<input type="checkbox" name="optionsCheckboxes" checked>
										Checked </label>
									</div>
								<div class="checkbox">
										<label>
										<input type="checkbox" name="optionsCheckboxes" disabled>
										Disabled Unchecked </label>
									</div>
								<div class="checkbox">
										<label>
										<input type="checkbox" name="optionsCheckboxes" disabled checked>
										Disabled Checked </label>
									</div>
								</p>
								<pre class="prettyprint">
&lt;div class=&quot;checkbox&quot;&gt;
	&lt;label&gt;
		&lt;input type=&quot;checkbox&quot; name=&quot;optionsCheckboxes&quot;&gt;
		Unchecked
	&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox&quot;&gt;
	&lt;label&gt;
		&lt;input type=&quot;checkbox&quot; name=&quot;optionsCheckboxes&quot; checked&gt;
		Checked
	&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox&quot;&gt;
	&lt;label&gt;
		&lt;input type=&quot;checkbox&quot; name=&quot;optionsCheckboxes&quot; disabled&gt;
		Disabled Unchecked
	&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;checkbox&quot;&gt;
	&lt;label&gt;
		&lt;input type=&quot;checkbox&quot; name=&quot;optionsCheckboxes&quot; disabled checked&gt;
		Disabled Checked
	&lt;/label&gt;
&lt;/div&gt;

				</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Radio Buttons</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" id="radio-row">								
								<p> To use the custom radio buttons, you don't need to import any separate Javascript file, everything is inside material.min.js. </p>
								<p>
									<div class="radio">
										<label>
											<input type="radio" name="optionsRadios">
											Radio is off </label>
									</div>
								<div class="radio">
										<label>
										<input type="radio" name="optionsRadios" checked="true">
										Radio is on </label>
									</div>
								<div class="radio">
										<label>
										<input type="radio" name="optionsRadiosDisabled" disabled>
										Disabled Radio is off </label>
									</div>
								<div class="radio">
										<label>
										<input type="radio" name="optionsRadiosDisabled" checked="true" disabled>
										Disabled Radio is on </label>
									</div>
								</p>
								<pre class="prettyprint">
&lt;div class=&quot;radio&quot;&gt;
	&lt;label&gt;
		&lt;input type=&quot;radio&quot; name=&quot;optionsRadios&quot;&gt;
		Radio is off
	&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio&quot;&gt;
	&lt;label&gt;
		&lt;input type=&quot;radio&quot; name=&quot;optionsRadios&quot; checked=&quot;true&quot;&gt;
		Radio is on
	&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio&quot;&gt;
	&lt;label&gt;
		&lt;input type=&quot;radio&quot; name=&quot;optionsRadiosDisabled&quot; disabled&gt;
		Disabled Radio is off
	&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;radio&quot;&gt;
	&lt;label&gt;
		&lt;input type=&quot;radio&quot; name=&quot;optionsRadiosDisabled&quot; checked=&quot;true&quot; disabled&gt;
		Disabled Radio is on
	&lt;/label&gt;
&lt;/div&gt;
    			</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Toggle Buttons</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" id="switch-row">								
								<p>If you want to use something more special than a checkbox, we recomment the toggle buttons.</p>
								<div class="togglebutton">
										<label>
										<input type="checkbox" checked="">
										Toggle is on </label>
									</div>
								<div class="togglebutton">
										<label>
										<input type="checkbox">
										Toggle is off </label>
									</div>
								<pre class="prettyprint">

&lt;div class=&quot;togglebutton&quot;&gt;
	&lt;label&gt;
    	&lt;input type=&quot;checkbox&quot; checked=&quot;&quot;&gt;
		Toggle is on
	&lt;/label&gt;
&lt;/div&gt;

&lt;div class=&quot;togglebutton&quot;&gt;
	&lt;label&gt;
    	&lt;input type=&quot;checkbox&quot;&gt;
		Toggle is off
	&lt;/label&gt;
&lt;/div&gt;
    			</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Dropdown</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" id="dropdown-row">								
								<p> We are very proud to present the dropdown which has a subtle animation. We also thought of another use-case: dropdown with flags. <b>IMPORTANT!</b> The focus state is <b>Purple</b> by default, on the dropdowns from the navbars will take the color of the navbar parent.</p>
								<div class="row">
										<div class="col-md-3 dropdown"> <a href="#" class="btn btn-simple dropdown-toggle" data-toggle="dropdown"> Regular <b class="caret"></b> </a>
										<ul class="dropdown-menu">
												<li><a href="#">Action</a></li>
												<li><a href="#">Another action</a></li>
												<li><a href="#">Something else here</a></li>
												<li class="divider"></li>
												<li><a href="#">Separated link</a></li>
												<li class="divider"></li>
												<li><a href="#">One more separated link</a></li>
											</ul>
									</div>
										<div class="col-md-3 dropdown"> <a href="#" class="btn btn-simple dropdown-toggle " data-toggle="dropdown"> <img src="assets/images/flags/US.png"/> Flags <b class="caret"></b> </a>
										<ul class="dropdown-menu">
												<li><a href="#"><img src="assets/images/flags/DE.png"/> Deutsch</a></li>
												<li><a href="#"><img src="assets/images/flags/GB.png"/> English(UK)</a></li>
												<li><a href="#"><img src="assets/images/flags/FR.png"/> Français</a></li>
												<li><a href="#"><img src="assets/images/flags/RO.png"/> Română</a></li>
												<li><a href="#"><img src="assets/images/flags/IT.png"/> Italiano</a></li>
												<li class="divider"></li>
												<li><a href="#"><img src="assets/images/flags/ES.png"/> Español <span class="label label-default">soon</span></a></li>
												<li><a href="#"><img src="assets/images/flags/BR.png"/> Português <span class="label label-default">soon</span></a></li>
												<li><a href="#"><img src="assets/images/flags/JP.png"/> 日本語 <span class="label label-default">soon</span></a></li>
											</ul>
									</div>
									</div>
								<pre class="prettyprint">
&lt;div class=&quot;col-md-3 dropdown&quot;&gt;
	&lt;a href=&quot;#&quot; class=&quot;btn btn-simple dropdown-toggle&quot; data-toggle=&quot;dropdown&quot;&gt;
    	Regular
    	&lt;b class=&quot;caret&quot;&gt;&lt;/b&gt;
	&lt;/a&gt;
	&lt;ul class=&quot;dropdown-menu&quot;&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
		&lt;li class=&quot;divider&quot;&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
		&lt;li class=&quot;divider&quot;&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;One more separated link&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;
    			</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Inputs</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" id="inputs-row">								
								<p> We restyled the Bootstrap input to give it a more flat, minimal look. You can use them with regular labels, floating labels and states or input groups. </p>
								<div class="row">
										<div class="col-sm-4">
										<div class="form-group">
												<input type="text" value="" placeholder="Regular" class="form-control" />
											</div>
									</div>
										<div class="col-sm-4">
										<div class="form-group label-floating">
												<label class="control-label">With Floating Label</label>
												<input type="email" class="form-control">
											</div>
									</div>
										<div class="col-sm-4">
										<div class="form-group label-floating has-success">
												<label class="control-label">Success input</label>
												<input type="text" value="Success" class="form-control" />
												<span class="form-control-feedback"> <i class="material-icons">done</i> </span> </div>
									</div>
										<div class="col-sm-4">
										<div class="form-group label-floating has-error">
												<label class="control-label">Error input</label>
												<input type="email" value="Error Input" class="form-control" />
												<span class="material-icons form-control-feedback">clear</span> </div>
									</div>
										<div class="col-sm-4">
										<div class="input-group"> <span class="input-group-addon"> <i class="material-icons">group</i> </span>
												<input type="text" class="form-control" placeholder="With Material Icons">
											</div>
									</div>
										<div class="col-sm-4">
										<div class="input-group"> <span class="input-group-addon"> <i class="fa fa-group"></i> </span>
												<input type="text" class="form-control" placeholder="With Font Awesome Icons">
											</div>
									</div>
									</div>
								<pre class="prettyprint">

&lt;div class=&quot;col-sm-4&quot;&gt;
	&lt;div class=&quot;form-group&quot;&gt;
    	&lt;input type=&quot;text&quot; value=&quot;&quot; placeholder=&quot;Regular&quot; class=&quot;form-control&quot; /&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;col-sm-4&quot;&gt;
	&lt;div class=&quot;form-group label-floating&quot;&gt;
		&lt;label class=&quot;control-label&quot;&gt;With Floating Label&lt;/label&gt;
		&lt;input type=&quot;email&quot; class=&quot;form-control&quot;&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;col-sm-4&quot;&gt;
	&lt;div class=&quot;form-group label-floating has-success&quot;&gt;
		&lt;label class=&quot;control-label&quot;&gt;Success input&lt;/label&gt;
		&lt;input type=&quot;text&quot; value=&quot;Success&quot; class=&quot;form-control&quot; /&gt;
		&lt;span class=&quot;form-control-feedback&quot;&gt;
			&lt;i class=&quot;material-icons&quot;&gt;done&lt;/i&gt;
		&lt;/span&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;col-sm-4&quot;&gt;
	&lt;div class=&quot;form-group label-floating has-error&quot;&gt;
		&lt;label class=&quot;control-label&quot;&gt;Error input&lt;/label&gt;
		&lt;input type=&quot;email&quot; value=&quot;Error Input&quot; class=&quot;form-control&quot; /&gt;
		&lt;span class=&quot;material-icons form-control-feedback&quot;&gt;clear&lt;/span&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;col-sm-4&quot;&gt;
	&lt;div class=&quot;input-group&quot;&gt;
		&lt;span class=&quot;input-group-addon&quot;&gt;
			&lt;i class=&quot;material-icons&quot;&gt;group&lt;/i&gt;
		&lt;/span&gt;
		&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;With Material Icons&quot;&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;col-sm-4&quot;&gt;
	&lt;div class=&quot;input-group&quot;&gt;
		&lt;span class=&quot;input-group-addon&quot;&gt;
			&lt;i class=&quot;fa fa-group&quot;&gt;&lt;/i&gt;
		&lt;/span&gt;
		&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;With Font Awesome Icons&quot;&gt;
	&lt;/div&gt;
&lt;/div&gt;

				</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Textarea</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" id="textarea-row">								
								<p>The textarea has a new style, so it looks similar to all other inputs.</p>
								<textarea class="form-control" placeholder="Here can be your nice text" rows="5"></textarea>
								<pre class="prettyprint">
&lt;textarea class=&quot;form-control&quot; placeholder=&quot;Here can be your nice text&quot; rows=&quot;5&quot;&gt;&lt;/textarea&gt;
				</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Navbar</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" id="navbar-row">								
								<p>The classic Bootstrap Navbar was restyled:</p>
								<div id="navbar">
										<nav class="navbar navbar-default" role="navigation">
										<div class="container-fluid">
												<div class="navbar-header">
												<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
												<a class="navbar-brand" href="#">Brand</a> </div>
												<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
												<ul class="nav navbar-nav">
														<li class="active"><a href="#">Link</a></li>
														<li><a href="#">Link</a></li>
														<li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
														<ul class="dropdown-menu">
																<li><a href="#">Action</a></li>
																<li><a href="#">Another action</a></li>
																<li><a href="#">Something else here</a></li>
																<li class="divider"></li>
																<li><a href="#">Separated link</a></li>
																<li class="divider"></li>
																<li><a href="#">One more separated link</a></li>
															</ul>
													</li>
													</ul>
											</div>
											</div>
									</nav>
									</div>
								<!--  end navbar -->
								
								<pre class="prettyprint">
&lt;nav class=&quot;navbar navbar-default&quot; role=&quot;navigation&quot;&gt;
	&lt;div class=&quot;container-fluid&quot;&gt;
    	&lt;div class=&quot;navbar-header&quot;&gt;
    		&lt;button type=&quot;button&quot; class=&quot;navbar-toggle&quot; data-toggle=&quot;collapse&quot; data-target=&quot;#bs-example-navbar-collapse-1&quot;&gt;
                &lt;span class=&quot;sr-only&quot;&gt;Toggle navigation&lt;/span&gt;
                &lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
                &lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
                &lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
    		&lt;/button&gt;
    		&lt;a class=&quot;navbar-brand&quot; href=&quot;#&quot;&gt;Brand&lt;/a&gt;
    	&lt;/div&gt;

    	&lt;div class=&quot;collapse navbar-collapse&quot; id=&quot;bs-example-navbar-collapse-1&quot;&gt;
    		&lt;ul class=&quot;nav navbar-nav&quot;&gt;
				&lt;li class=&quot;active&quot;&gt;&lt;a href=&quot;#&quot;&gt;Link&lt;/a&gt;&lt;/li&gt;
        		&lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link&lt;/a&gt;&lt;/li&gt;
        		&lt;li class=&quot;dropdown&quot;&gt;
        			&lt;a href=&quot;#&quot; class=&quot;dropdown-toggle&quot; data-toggle=&quot;dropdown&quot;&gt;Dropdown &lt;b class=&quot;caret&quot;&gt;&lt;/b&gt;&lt;/a&gt;
        			&lt;ul class=&quot;dropdown-menu&quot;&gt;
					  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
					  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
					  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
					  &lt;li class=&quot;divider&quot;&gt;&lt;/li&gt;
					  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
					  &lt;li class=&quot;divider&quot;&gt;&lt;/li&gt;
				      &lt;li&gt;&lt;a href=&quot;#&quot;&gt;One more separated link&lt;/a&gt;&lt;/li&gt;
        			&lt;/ul&gt;
        		&lt;/li&gt;
    		&lt;/ul&gt;
    	&lt;/div&gt;
	&lt;/div&gt;
&lt;/nav&gt;
	    		</pre>
								<p class="space-top">Besides the default navbar, we added 4 new colors: blue, green, orange, red. If you want to use one of them, you have to replace the <code>.navbar-default</code> or <code>navbar-primary</code> with the class for the chosen color <code>.navbar-info</code>, <code>.navbar-success</code>, <code>.navbar-warning</code>, <code>.navbar-danger</code>.</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Pagination</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row">
								
								<p>The Bootstrap pagination elements were customised to fit the overall theme. Besides the classic look, we also added the color classes to offer more customisation like <code>.pagination-info</code>, <code>.pagination-success</code>, <code>.pagination-warning</code>, <code>.pagination-danger</code>. </p>
								<ul class="pagination pagination-primary">
										<li><a href="#"><</a></li>
										<li class="active"><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#">></a></li>
									</ul>
								<ul class="pagination pagination-info">
										<li><a href="#"><</a></li>
										<li><a href="#">1</a></li>
										<li class="active"><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#">></a></li>
									</ul>
								<ul class="pagination pagination-success">
										<li><a href="#"><</a></li>
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li class="active"><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#">></a></li>
									</ul>
								<ul class="pagination pagination-warning">
										<li><a href="#"><</a></li>
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li class="active"><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#">></a></li>
									</ul>
								<ul class="pagination pagination-danger">
										<li><a href="#"><</a></li>
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li class="active"><a href="#">5</a></li>
										<li><a href="#">></a></li>
									</ul>
								<pre class="prettyprint">

&lt;ul class=&quot;pagination pagination-primary&quot;&gt;
	&lt;li&gt;&lt;a href=&quot;#&quot;&gt;<&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=_.html#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=_.html#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
	&lt;li class=&quot;active&quot;&gt;&lt;a href=_.html#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=_.html#&quot;&gt;4&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=_.html#&quot;&gt;5&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=_.html#&quot;&gt;>&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt
		    </pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Progress Bars</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" >
								
								<p>The progress bars from Bootstrap hold the same classes and functionality. Adding this kit over your existing project will only make it look more clean. The default line is gray, each bar has a specific color but you can add some colors for the background lines using the next classes <code>.progress-line-primary</code>, <code>.progress-line-info</code>, <code>.progress-line-success</code>, <code>.progress-line-warning</code>, <code>.progress-line-danger</code>, </p>
								<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 30%;"> <span class="sr-only">60% Complete</span> </div>
									</div>
								<div class="progress">
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"> <span class="sr-only">60% Complete</span> </div>
									</div>
								<div class="progress progress-line-primary">
										<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 30%;"> <span class="sr-only">60% Complete</span> </div>
									</div>
								<div class="progress progress-line-info">
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"> <span class="sr-only">60% Complete</span> </div>
									</div>
								<div class="progress">
										<div class="progress-bar progress-bar-success" style="width: 35%"> <span class="sr-only">35% Complete (success)</span> </div>
										<div class="progress-bar progress-bar-warning" style="width: 20%"> <span class="sr-only">20% Complete (warning)</span> </div>
										<div class="progress-bar progress-bar-danger" style="width: 10%"> <span class="sr-only">10% Complete (danger)</span> </div>
									</div>
								<pre class="prettyprint">
&lt;div class=&quot;progress&quot;&gt;
	&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; style=&quot;width: 30%;&quot;&gt;
	&lt;span class=&quot;sr-only&quot;&gt;30% Complete&lt;/span&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress&quot;&gt;
	&lt;div class=&quot;progress-bar progress-bar-info&quot; role=&quot;progressbar&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; style=&quot;width: 60%;&quot;&gt;
	&lt;span class=&quot;sr-only&quot;&gt;60% Complete&lt;/span&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;progress progress-line-primary&quot;&gt;
	&lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; style=&quot;width: 30%;&quot;&gt;
	&lt;span class=&quot;sr-only&quot;&gt;30% Complete&lt;/span&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;progress progress-line-info&quot;&gt;
	&lt;div class=&quot;progress-bar progress-bar-info&quot; role=&quot;progressbar&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; style=&quot;width: 60%;&quot;&gt;
	&lt;span class=&quot;sr-only&quot;&gt;60% Complete&lt;/span&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;progress&quot;&gt;
	&lt;div class=&quot;progress-bar progress-bar-success&quot; style=&quot;width: 35%&quot;&gt;
	&lt;span class=&quot;sr-only&quot;&gt;35% Complete (success)&lt;/span&gt;
	&lt;/div&gt;
	&lt;div class=&quot;progress-bar progress-bar-warning&quot; style=&quot;width: 20%&quot;&gt;
	&lt;span class=&quot;sr-only&quot;&gt;20% Complete (warning)&lt;/span&gt;
	&lt;/div&gt;
	&lt;div class=&quot;progress-bar progress-bar-danger&quot; style=&quot;width: 10%&quot;&gt;
	&lt;span class=&quot;sr-only&quot;&gt;10% Complete (danger)&lt;/span&gt;
	&lt;/div&gt;
&lt;/div&gt;
			    </pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Sliders</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row">
								
								<p>We restyled noUIslider, while keeping the design consistent. You can use other classes for colors like <code>.slider-info</code>, <code>.slider-success</code>, <code>.slider-warning</code>, <code>.slider-danger</code>, . Check also <a href="http://refreshless.com/nouislider/" target="_blank">noUISlider Full Documentation</a>.</p>
								<div id="sliderRegular" class="slider"></div>
								<br />
								<div id="sliderDouble" class="slider slider-info"></div>
								<pre class="prettyprint">
&lt;!-- Markup --&gt;
&lt;div id=&quot;sliderRegular&quot; class=&quot;slider&quot;&gt;&lt;/div&gt;
&lt;div id=&quot;sliderDouble&quot; class=&quot;slider slider-info&quot;&gt;&lt;/div&gt;

&lt;!-- Javascript --&gt;
$(&#39;#sliderRegular&#39;).noUiSlider({
	start: 40,
	connect: &quot;lower&quot;,
	range: {
	    min: 0,
	    max: 100
	}
});

$(&#39;#sliderDouble&#39;).noUiSlider({
	start: [20, 60] ,
	connect: true,
	range: {
	    min: 0,
	    max: 100
	}
});
		    	</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Labels</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" >
								
								<p>We restyled the default options for labels and we added the filled class, that can be used in any combination.</p>
								<span class="label label-default">Default</span> <span class="label label-primary">Primary</span> <span class="label label-success">Success</span> <span class="label label-info">Info</span> <span class="label label-warning">Warning</span> <span class="label label-danger">Danger</span>
								<pre class="prettyprint">

&lt;span class=&quot;label label-default&quot;&gt;Default&lt;/span&gt;
&lt;span class=&quot;label label-primary&quot;&gt;Primary&lt;/span&gt;
&lt;span class=&quot;label label-success&quot;&gt;Success&lt;/span&gt;
&lt;span class=&quot;label label-info&quot;&gt;Info&lt;/span&gt;
&lt;span class=&quot;label label-warning&quot;&gt;Warning&lt;/span&gt;
&lt;span class=&quot;label label-danger&quot;&gt;Danger&lt;/span&gt;
			    	</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="boxs">
						<div class="boxs-header dvd dvd-btm">
							<h1 class="custom-font"><strong>Material </strong>Tables</h1>
							
						</div>
						<div class="boxs-body">
							<div class="tim-row" >
								
								<p>All Boostrap classes for tables are supported and improved.</p>
								<h4>Simple Table with Actions</h4>
								<div class="table-responsive">
										<table class="table">
										<thead>
												<tr>
												<th class="text-center">#</th>
												<th>Name</th>
												<th>Job Position</th>
												<th>Since</th>
												<th class="text-right">Salary</th>
												<th class="text-right">Actions</th>
											</tr>
											</thead>
										<tbody>
												<tr>
												<td class="text-center">1</td>
												<td>Andrew Mike</td>
												<td>Develop</td>
												<td>2013</td>
												<td class="text-right">&euro; 99,225</td>
												<td class="td-actions text-right"><button type="button" rel="tooltip" title="View Profile" class="btn btn-info btn-simple btn-xs"> <i class="fa fa-user"></i> </button>
														<button type="button" rel="tooltip" title="Edit Profile" class="btn btn-success btn-simple btn-xs"> <i class="fa fa-edit"></i> </button>
														<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs"> <i class="fa fa-times"></i> </button></td>
											</tr>
												<tr>
												<td class="text-center">2</td>
												<td>John Doe</td>
												<td>Design</td>
												<td>2012</td>
												<td class="text-right">&euro; 89,241</td>
												<td class="td-actions text-right"><button type="button" rel="tooltip" title="View Profile" class="btn btn-info btn-simple btn-xs"> <i class="fa fa-user"></i> </button>
														<button type="button" rel="tooltip" title="Edit Profile" class="btn btn-success btn-simple btn-xs"> <i class="fa fa-edit"></i> </button>
														<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs"> <i class="fa fa-times"></i> </button></td>
											</tr>
												<tr>
												<td class="text-center">3</td>
												<td>Alex Mike</td>
												<td>Design</td>
												<td>2010</td>
												<td class="text-right">&euro; 92,144</td>
												<td class="td-actions text-right"><button type="button" rel="tooltip" title="View Profile" class="btn btn-info btn-simple btn-xs"> <i class="fa fa-user"></i> </button>
														<button type="button" rel="tooltip" title="Edit Profile" class="btn btn-success btn-simple btn-xs"> <i class="fa fa-edit"></i> </button>
														<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs"> <i class="fa fa-times"></i> </button></td>
											</tr>
											</tbody>
									</table>
									</div>
								<pre class="prettyprint">

&lt;table class=&quot;table&quot;&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th class=&quot;text-center&quot;&gt;#&lt;/th&gt;
            &lt;th&gt;Name&lt;/th&gt;
            &lt;th&gt;Job Position&lt;/th&gt;
            &lt;th&gt;Since&lt;/th&gt;
            &lt;th class=&quot;text-right&quot;&gt;Salary&lt;/th&gt;
            &lt;th class=&quot;text-right&quot;&gt;Actions&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td class=&quot;text-center&quot;&gt;1&lt;/td&gt;
            &lt;td&gt;Andrew Mike&lt;/td&gt;
            &lt;td&gt;Develop&lt;/td&gt;
   