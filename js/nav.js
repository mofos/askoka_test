
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    <div class="hero-anime">	

	<div class="navigation-wrap bg-light start-header start-style "style="
    position: absolute;">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav class="navbar navbar-expand-md navbar-light">
					
						<a class="navbar-brand" href="/" ><img src="./assets/logo.png" alt="Ashoka-T"></a>	
						
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav ml-auto py-4 py-md-0">
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
									<a class="nav-link" href="/">HOME</a>
									
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="/aboutus.html">ABOUT US</a>
								</li>
                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="/Products.html">PRODUCTS</a>
                            </li>
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="/MagicWood.html">THE MAGIC WOOD</a>
                            </li>
								
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="/Contact.html">CONTACT</a>
								</li>
								
							</ul>
						</div>
						
					</nav>		
				</div>
			</div>
		</div>
	</div>
    </div>
    
    `;
  }
}

customElements.define('menu-nav', MyComponent);