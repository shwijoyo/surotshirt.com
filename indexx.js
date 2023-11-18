(()=>{
	let baseurl = "http://localhost:8001";
	let source = `https://cdn.jsdelivr.net/gh/shwijoyo/surotshirt.com@v0.0.5`;
	let region = "en-us";
	let lang = JSON.parse(`
	{
		"en-us": ["home", "about", "t-shirt", "product"]
		}
	`);
	let breadcrumbs = (data)=>{
		let str = ``;
		$.each(data, (i,v)=>{
			if(i == data.length-1){
				str += `<li class="breadcrumb-item active">${v.name}</li>`;
				}
			else{
			    str += `<li class="breadcrumb-item"><a href="${v.link}">${v.name}</a></li>`;
			}
			});
		$("#breadcrumbs").html(`<ol class="breadcrumb">${str}</ol>`);
		}
		
	let navbar = ()=>{
		return `
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand" href="${baseurl}/${region}">
      <img src="${source}/asset/logo.png" alt="Bootstrap" height="35">
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link"href="${baseurl}/${region}/${lang[region][2]}">${lang[region][2]}</a>
        </li>
        
        <li class="nav-item">
          <div class="input-group">
  <input type="text" class="form-control" placeholder="Search">
  <button class="btn btn-outline-secondary" type="button"><i class="fa fa-search"></i></button>
</div>
        </li>
      </ul>
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex" style="font-size: 20px">
      <li class="ms-3"><a class="text-muted" href="#"><i class="fa fa-twitter"></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="fa fa-instagram"></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="fa fa-youtube"></i></a></li>
    </ul>
    </div>
  </div>
</nav>
<div class="container my-1 py-1 clearfix">
  
    <div class="float-start">
      <nav id="breadcrumbs"></nav>
    </div>
    
    <div class="float-end">
    
      <div class="dropdown float-end">
  <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    design <span class="badge text-bg-secondary">4</span>

  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Create Tshirt</a></li>
    <li><a class="dropdown-item" href="#">Create Mug</a></li>
    <li><a class="dropdown-item" href="#">My collection <span class="badge text-bg-secondary">4</span>
</a></li>
  </ul>
</div>
    <a class="mx-1 btn btn-sm btn-outline-secondary float-end">
    Cart <span class="badge text-bg-secondary">4</span>
  </a>
  <a class="mx-1 btn btn-sm btn-outline-secondary float-end">
    Order <span class="badge text-bg-secondary">4</span>
  </a>
  
  </div>
</div>

		`;
		}
	let main = ()=>{
		return `<main></main>`;
		}
		
	let mainIndex = ()=>{
		
		$.getJSON(`${source}/data/data.json`, (data)=>{
			
			let str = ``;
			$.each(data, (i, v)=>{
    str += `<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" class="single-product">
										<div class="part-1" style="background-image: url('${v.image[0][0]}')">
												<ul>
														<li><a href="${baseurl}/${region}/${lang[region][3]}/${v.slug}"><i class="fa fa-cart-plus me-1"></i> View</a></li>
														<li><a href="#"><i class="fa fa-paint-brush me-1"></i> Design</a></li>
														
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">${v.name}</h3>
												
												<h4 class="product-price">$49.99</h4>
										</div>
								</div>
						</div>`;
				});
			$("main").append(`<div class="d-none container my-2 py-2"><div class="row">${str}</div></div>`).append(`<section class="section-products">
		<div class="container">
				<div class="row justify-content-center text-center">
						<div class="col-md-8 col-lg-6">
								<div class="header">
										
										<h2>Products</h2>
								</div>
						</div>
				</div>
				<div class="row">
						<!-- Single Product -->
						${str}
						
						
				</div>
		</div>
</section>`).append(`<nav>
  <ul class="pagination pagination-sm justify-content-center my-3 py-3">
    
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    
  </ul>
</nav>`);
			
			});
		}
	let mainProduct = (slug)=>{
		
		$.getJSON(`${source}/data/data.json`, (data)=>{
			
			let image = ``;
			let name = ``;
			let color = ``;
			let size = ``;
			let price = 0;
			$.each(data, (i, v)=>{
				
				if(slug == v.slug){
					name = v.name;
					price = v.price[0]
					$.each(v.image, (j, k)=>{
						$.each(k, (l, m)=>{
							image += `<div class="carousel-item ${(j==0&&l==0)?'active':''}">
      <img src="${m}" class="d-block w-100" alt="...">
    </div>`;
							});
						
						});
					$.each(v.color, (j, k)=>{
						color += `<option ${(j==0)?'selected':''} value="${k}">${k}</option>`;
						});
					$.each(v.size, (j, k)=>{
						size += `<option ${(j==0)?'selected':''} value="${k}">${k}</option>`;
						});
					breadcrumbs([{name: lang[region][0], link: `${baseurl}/${region}`}, {name: v.category, link: `${baseurl}/${region}/${v.category}`}, {name: slug, link: `${baseurl}/${region}/${v.category}/${slug}`}]);
					}
				
				});
			$("main").append(`
		<div class="container my-2 py-2 mt-5">

<div class="row">
<div class="col-md-7 text-center">
      <div id="carouselExample" class="carousel slide" data-bs-theme="dark" data-bs-ride="carousel">
  <div class="carousel-inner">
    ${image}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<a class="btn btn-primary m-1" href="#" role="button"><i class="fa fa-paint-brush me-2"></i> Edit design</a><br />
<a class="d-none btn btn-sm btn-primary m-1 border-0" href="#" role="button" style="background-color: #EE4D2D">Buy at shopee</a>
<a class="d-none btn btn-sm btn-primary m-1 border-0" href="#" role="button" style="background-color: #42b549">Buy at tokopedia</a>



    </div>
    <div class="col-md-5 mt-5">
    <h1 class="mt-2 mb-4 fs-4">${name}</h1>
    <h5 class="clearfix mb-3">
    <span class="float-start">Price</span>
    <span class="float-end">: ${price}</span>
    </h5>
    <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Color</label>
  <select class="form-select" id="inputGroupSelect01">
    ${color}
  </select>
</div>
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Size</label>
  <select class="form-select" id="inputGroupSelect01">
    
    ${size}
  </select>
</div>
<div class="input-group flex-nowrap mb-3">
  <span class="input-group-text" id="addon-wrapping">Quantity</span>
  <input type="Number" class="form-control" value="1">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-minus"></i></button>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-plus"></i></button>
</div>
<button class="btn btn-primary m-1" href="#" role="button"><i class="fa fa-cart-plus me-2"></i> Add to cart</button>
    </div>
    
</div></div>
		
		`);
			
			});
		
		}
		
	let footer = ()=>{
		return `<div class="container">
  <footer class="py-2 my-2">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="${baseurl}/${region}/${lang[region][1]}" class="nav-link px-2 text-muted">${lang[region][1]}</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Legal</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
    </ul>
    <p class="text-center text-muted">&copy; ${new Date().getFullYear()} SuroTShirt.com</p>
  </footer>
</div>`
		}
	
	(()=>{
		$("body").append(navbar()).append(main()).append(footer());
		new Router((p)=>{
			p.route("/", (data)=>{
				mainIndex();
				breadcrumbs([{name: lang[region][0], link: `${baseurl}/${region}`}]);
				});
			p.route("/:region", (data)=>{
				mainIndex();
				breadcrumbs([{name: lang[region][0], link: `${baseurl}/${data.region}`}]);
				});
			p.route(`/:region/${lang[region][3]}/:slug`, (data)=>{
				mainProduct(data.slug);
				
				});
			});
		})();
	})();