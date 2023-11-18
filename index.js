(()=>{
	let baseurl = `http://localhost:8001`;
	let source = `https://cdn.jsdelivr.net/gh/shwijoyo/surotshirt.com@v0.0.5`;
	let pointer = 25;
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
let dataCart = (newdata = null)=>{
	let data = [];
	if(window.localStorage.getItem(`${window.location.hostname}-cart`) != null){
		data = JSON.parse(window.localStorage.getItem(`${window.location.hostname}-cart`));
		}
	if(newdata != null){
		data.push(newdata);
		window.localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(data));
		}
	return data;
	}
	let header = ()=>{
		return `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
      <a class="navbar-brand" href="${baseurl}">
      <img src="${source}/asset/logo.png" alt="Bootstrap" height="35">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
         <ul class="navbar-nav me-auto mt-lg-3 mb-2 mb-lg-0">
            <li class="nav-item">
               <a class="nav-link"href="${baseurl}/tshirt">Tshirt</a>
            </li>
            <li class="nav-item">
               <form class="input-group" method="GET" action="${baseurl}/search">
                  <input type="text" name="q" class="form-control" placeholder="Search">
                  <button type="submit" class="btn btn-outline-secondary"><i class="fa fa-search"></i></button>
               </form>
            </li>
         </ul>
         <ul class="nav col-md-4 justify-content-end list-unstyled d-flex" style="font-size: 20px">
            <div class="dropdown float-end">
         <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         design <span class="badge text-bg-secondary">0</span>
         </button>
         <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="${baseurl}/design/tshirt-plain">Create Tshirt</a></li>
            <li><a class="dropdown-item" href="${baseurl}/collection">My collection <span class="badge text-bg-secondary">0</span>
               </a>
            </li>
         </ul>
      </div>
      <a href="${baseurl}/cart" class="mx-1 btn btn-sm btn-outline-secondary float-end">
      Cart <span class="badge text-bg-secondary">${dataCart().length}</span>
      </a>
      <a href="${baseurl}/order" class="mx-1 btn btn-sm btn-outline-secondary float-end">
      Order <span class="badge text-bg-secondary">4</span>
      </a>
         </ul>
      </div>
   </div>
</nav>
<div class="container my-1 py-1 clearfix">
   <div class="float-start">
      <nav id="breadcrumbs"></nav>
   </div>
   <div class="float-end">
      
   </div>
</div>
`}

let footer = ()=>{return `
<footer class="text-center text-lg-start bg-light text-muted">
   <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div class="me-5 d-none d-lg-block">
         <span>Get connected with us on social networks:</span>
      </div>
      <div>
         <a href="" class="me-4 text-reset">
         <i class="fa fa-twitter"></i>
         </a>
         <a href="" class="me-4 text-reset">
         <i class="fa fa-instagram"></i>
         </a>
         <a href="" class="me-4 text-reset">
         <i class="fa fa-youtube"></i>
         </a>
         <a href="" class="me-4 text-reset">
         <i class="fa fa-pinterest-p"></i>
         </a>
         
      </div>
   </section>
   <section class="">
      <div class="container text-center text-md-start mt-5">
         <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
               <h6 class="text-uppercase fw-bold mb-4">
                  SuroTShirt
               </h6>
               <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
               </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
               <h6 class="text-uppercase fw-bold mb-4">
                  Services
               </h6>
               <p>
                  <a href="#!" class="text-reset">Global</a>
               </p>
               <p>
                  <a href="#!" class="text-reset">Indonesia</a>
               </p>
               <p>
                  <a href="#!" class="text-reset">Singapore</a>
               </p>
               <p>
                  <a href="#!" class="text-reset">United States</a>
               </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
               <h6 class="text-uppercase fw-bold mb-4">
                  Useful links
               </h6>
               <p>
                  <a href="#!" class="text-reset">About</a>
               </p>
               <p>
                  <a href="#!" class="text-reset">Contact</a>
               </p>
               <p>
                  <a href="#!" class="text-reset">FAQ</a>
               </p>
               <p>
                  <a href="#!" class="text-reset">Term of service</a>
               </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
               <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
               <p><i class="fa fa-home me-3"></i> Dusun II Gintung RT:10 RW:02, kec. Comal, kab. Pemalang, Jawa tengah Indonesia</p>
               <p>
                  <i class="fa fa-envelope me-3"></i>
                  surotshirt@gmail.com
               </p>
               <p><i class="fa fa-whatsapp me-3"></i> + 62 877 1814 1945</p>
               
            </div>
         </div>
      </div>
   </section>
   <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="${baseurl}">SuroTShirt.com</a>
   </div>
</footer>
`}
	
	
	
let index = ()=>{
	$.getJSON(`${source}/data/data.json`, (data)=>{
		let str = ``;
		$.each(data, (i, v)=>{
			str += `<div class="col-md-6 col-lg-4 col-xl-3">
   <div id="product-1" class="single-product">
      <div class="part-1" style="background-image: url('${v.image[0][0]}')">
         <ul>
            <li><a href="${baseurl}/product/${v.slug}"><i class="fa fa-cart-plus me-1"></i> Detail</a></li>
            <li><a href="${baseurl}/design/${v.slug}"><i class="fa fa-paint-brush me-1"></i> Design</a></li>
         </ul>
      </div>
      <div class="part-2">
         <h3 class="product-title">${v.name}</h3>
         <h4 class="product-price">$${Number(pointer*v.price[0]).toFixed(2)} - $${Number(pointer*v.price[4]).toFixed(2)}</h4>
      </div>
   </div>
</div>`;
			});
		$("body").append(header()).append(`
<section class="section-products">
   <div class="container">
      <div class="row justify-content-center text-center">
         <div class="col-md-8 col-lg-6">
            <div class="header">
               <h2>Products</h2>
            </div>
         </div>
      </div>
      <div class="row">
         ${str}
      </div>
   </div>
</section>`).append(footer());
		breadcrumbs([{name: "Home", link: `${baseurl}`}]);
		});
	}

let product = (slug)=>{
	$.getJSON(`${source}/data/data.json`, (data)=>{
		$.each(data, (i, v)=>{
			if(slug == v.slug){
				let image = ``;
				let color = ``;
				let size = ``;
				$.each(v.image, (j, k)=>{
					$.each(k, (l, m)=>{
						image += `<div class="carousel-item ${(j==0&&l==0)?'active':''}"><img src="${m}" class="d-block w-100" alt="..."></div>`;
						});
					});
				$.each(v.color, (j, k)=>{
					 color += `<option ${(j==0)?'selected':''} value="${k}">${String(k).toUpperCase()}</option>`;
					});
				$.each(v.size, (j, k)=>{
						size += `<option ${(j==0)?'selected':''} value="${k}">${String(k).toUpperCase()}</option>`;
						});
				$("body").append(header()).append(`
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
         <a class="btn btn-primary m-1" href="${baseurl}/design/${v.slug}"><i class="fa fa-paint-brush me-2"></i> Edit design</a><br />
         <a class="d-none btn btn-sm btn-primary m-1 border-0" href="#" role="button" style="background-color: #EE4D2D">Buy at shopee</a>
         <a class="d-none btn btn-sm btn-primary m-1 border-0" href="#" role="button" style="background-color: #42b549">Buy at tokopedia</a>
      </div>
      <div class="col-md-5 mt-5">
         <h1 class="mt-2 mb-4 fs-4">${v.name}</h1>
         <h5 class="clearfix mb-3">
            <span class="float-start">Price</span>
            <span class="float-end">: $<span id="price">${Number(pointer*v.price[0]).toFixed(2)}</span></span>
         </h5>
         <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Color</label>
            <select class="form-select" id="color">
            ${color}
            </select>
         </div>
         <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Size</label>
            <select class="form-select" id="size">
            ${size}
            </select>
         </div>
         <div class="input-group flex-nowrap mb-3">
            <span class="input-group-text" id="addon-wrapping">Quantity</span>
            <input id="quantity" type="Number" class="form-control" value="1">
            <button class="btn btn-outline-secondary" type="button" id="quantity-min"><i class="fa fa-minus"></i></button>
            <button class="btn btn-outline-secondary" type="button" id="quantity-plus"><i class="fa fa-plus"></i></button>
         </div>
         <button class="btn btn-primary m-1" id="addCart" role="button"><i class="fa fa-cart-plus me-2"></i> Add to cart</button>
      </div>
   </div>
</div>
`).append(footer());
		breadcrumbs([{name: "Home", link: `${baseurl}`}, {name: v.category, link: `${baseurl}/category/${v.category}`}, {name: v.slug, link: `${baseurl}/product/${v.slug}`}]);
		let cart = JSON.parse(`{"name":"${v.name}", "category": "${v.category}", "image":${JSON.stringify(v.image[0])}, "design":${JSON.stringify(v.design)}, "urldata":"${v.urldata}", "size":"${v.size[0]}", "price":${v.price[0]}, "color":"${v.color[0]}", "quantity":1, "created_at": "${new Date().toISOString()}"}`);
		$("#color").on("change", function (){
			cart.color = this.value;
			$.each(v.color, (k, l)=>{
				if(cart.color == l){
					cart.image = v.image[k];
					}
				});
			$("#price").html(Number((pointer*cart.price)*cart.quantity).toFixed(2));
			});
		$("#size").on("change", function (){
			cart.size = this.value;
			$.each(v.size, (k, l)=>{
				if(cart.size == l){
					cart.price = v.price[k];
					}
				});
				$("#price").html(Number((pointer*cart.price)*cart.quantity).toFixed(2));
			});
		$("#quantity").on("input", function (){
			cart.quantity = Number(this.value);
			$("#price").html(Number((pointer*cart.price)*cart.quantity).toFixed(2));
			});
		$("#quantity-plus").on("click", function (){
			cart.quantity = cart.quantity+1
			$("#quantity").val(cart.quantity);
			$("#price").html(Number((pointer*cart.price)*cart.quantity).toFixed(2));
			});
		$("#quantity-min").on("click", function (){
			cart.quantity = cart.quantity-1
			$("#quantity").val(cart.quantity);
			$("#price").html(Number((pointer*cart.price)*cart.quantity).toFixed(2));
			});
		$("#addCart").on("click", ()=>{
			dataCart(cart);
			alert(JSON.stringify(dataCart()));
			});
			
			
			
			}
			})
		});
	}

let cart = ()=>{
	let str = ``;
	$.each(dataCart().reverse(), (i, v)=>{
		str += `<tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="${v.image[0]}"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-square"
              />
          <div class="ms-3">
          
              <p class="fw-bold mb-1 text-nowrap">${v.name}</p>
            <p class="text-muted mb-0 text-nowrap">Color: ${String(v.color).toUpperCase()}, Size: ${String(v.size).toUpperCase()}</p>
         
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">${v.category}</p>
        
      </td>
      <td>
        <div class="input-group input-group-sm flex-nowrap mb-3">
            <button class="btn btn-outline-secondary" type="button" id="quantity-min"><i class="fa fa-minus"></i></button>
            <input id="quantity" type="Number" class="form-control text-center" value="${v.quantity}" style="width: 50px">
            
            <button class="btn btn-outline-secondary" type="button" id="quantity-plus"><i class="fa fa-plus"></i></button>
         </div>
      </td>
      <td>
      <p class="fw-normal mb-1">$${Number((pointer*v.price)*v.quantity).toFixed(2)}</p>
      </td>
      <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Delete
        </button>
      </td>
    </tr>`;
		});
	$("body").append(header()).append(`<div class="table-responsive mt-2 mb-5"><table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Name</th>
      <th>Category</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    ${str}
    
  </tbody>
</table></div>`).append(footer());
   breadcrumbs([{name: "Home", link: `${baseurl}`}, {name: "cart", link: `${baseurl}/cart`}]);
	}
	(()=>{
		new Router((p)=>{
			p.route("/", (data)=>{
				index();
				});
			p.route("/product/:slug", (data)=>{
				product(data.slug);
				});
			p.route("/cart", (data)=>{
				cart();
				});
			});
		
		})();
	})();