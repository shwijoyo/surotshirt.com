(() => {
    let baseurl = `http://localhost:8001`;
    let source = `https://cdn.jsdelivr.net/gh/shwijoyo/surotshirt.com@v0.0.6`;
    let country = (()=>{
    	let c = countries[235];
        $.each(countries, (i, v) => {
        if (String(v.timezones).includes(Intl.DateTimeFormat().resolvedOptions().timeZone)) {
            c = v;
           }
       });
       return c;
    })();
    alert(JSON.stringify(country));
    let breadcrumbs = (data) => {
        let str = ``;
        $.each(data, (i, v) => {
            if (i == data.length - 1) {
                str += `<li class="breadcrumb-item active">${v.name}</li>`;
            } else {
                str += `<li class="breadcrumb-item"><a href="${v.link}">${v.name}</a></li>`;
            }
        });
        $("#breadcrumbs").html(`<ol class="breadcrumb">${str}</ol>`);
    }
    let format = (value) => {
        return currency(value, {
            precision: country.fixed,
            symbol: country.currencySymbol,
            decimal: ',',
            separator: '.'
        }).format();
    }
    let makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    let dataCart = (newdata = null) => {
        let data = [];
        if (window.localStorage.getItem(`${window.location.hostname}-cart`) != null) {
            data = JSON.parse(window.localStorage.getItem(`${window.location.hostname}-cart`));
        }
        if (newdata != null) {
            data.push(newdata);
            window.localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(data));
        }
        return data;
    }
    let dataCollection = (newdata = null) => {
        let data = [];
        if (window.localStorage.getItem(`${window.location.hostname}-collection`) != null) {
            data = JSON.parse(window.localStorage.getItem(`${window.location.hostname}-collection`));
        }
        if (newdata != null) {
            data.push(newdata);
            window.localStorage.setItem(`${window.location.hostname}-collection`, JSON.stringify(data));
        }
        return data;
    }
    let dataOrder = (newdata = null) => {
        let data = [];
        if (window.localStorage.getItem(`${window.location.hostname}-order`) != null) {
            data = JSON.parse(window.localStorage.getItem(`${window.location.hostname}-order`));
        }
        if (newdata != null) {
            data.push(newdata);
            window.localStorage.setItem(`${window.location.hostname}-order`, JSON.stringify(data));
        }
        return data;
    }
    let header = () => {
        return `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
      <a class="navbar-brand" href="${baseurl}" style="font-family: 'zen dots'">
      <img src="${source}/asset/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      SuroTShirt
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
      Order <span class="badge text-bg-secondary">${dataOrder().length}</span>
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
`
    }

    let footer = () => {
        return `
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
               <h6 class=" fw-bold mb-4" style="font-family: 'zen dots'">
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
`
    }



    let index = () => {
        $.getJSON(`${source}/data/data.json`, (data) => {
            let str = ``;
            $.each(data, (i, v) => {
                str += `<div class="col-md-6 col-lg-4 col-xl-3">
   <div id="product-1" class="single-product">
      <div class="part-1" style="background-image: url('${v.image[0][0]}')">
         <ul>
            <li><a href="${baseurl}/product/${v.slug}"><i class="fa fa-cart-plus me-1"></i> Detail</a></li>
            <li><a href="${baseurl}/design/${v.slug}"><i class="fa fa-paint-brush me-1"></i> Design</a></li>
         </ul>
      </div>
      <a href="${baseurl}/product/${v.slug}">
      <div class="part-2">
         <h3 class="product-title">${v.name}</h3>
         <h4 class="product-price">${format(country.pointer*v.price[0])} - ${format(country.pointer*v.price[4])}</h4>
      </div>
      </a>
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
            breadcrumbs([{
                name: "Home",
                link: `${baseurl}`
            }]);
        });
    }

    let product = (slug) => {
        $.getJSON(`${source}/data/data.json`, (data) => {
            $.each(data, (i, v) => {
                if (slug == v.slug) {
                    let image = ``;
                    let color = ``;
                    let size = ``;
                    $.each(v.image, (j, k) => {
                        $.each(k, (l, m) => {
                            image += `<div class="carousel-item ${(j==0&&l==0)?'active':''}"><img src="${m}" class="d-block w-100" alt="..."></div>`;
                        });
                    });
                    $.each(v.color, (j, k) => {
                        color += `<option ${(j==0)?'selected':''} value="${k}">${String(k).toUpperCase()}</option>`;
                    });
                    $.each(v.size, (j, k) => {
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
            <span class="float-end">: <span id="price">${format(country.pointer*v.price[0])}</span></span>
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
                    breadcrumbs([{
                        name: "Home",
                        link: `${baseurl}`
                    }, {
                        name: v.category,
                        link: `${baseurl}/category/${v.category}`
                    }, {
                        name: v.slug,
                        link: `${baseurl}/product/${v.slug}`
                    }]);
                    let cart = JSON.parse(`{"name":"${v.name}", "category": "${v.category}", "image":${JSON.stringify(v.image[0])}, "design":${JSON.stringify(v.design)}, "size":"${v.size[0]}", "price":${v.price[0]}, "color":"${v.color[0]}", "quantity":1, "created_at": "${new Date().toISOString()}"}`);
                    $("#color").on("change", function() {
                        cart.color = this.value;
                        $.each(v.color, (k, l) => {
                            if (cart.color == l) {
                                cart.image = v.image[k];
                            }
                        });
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $("#size").on("change", function() {
                        cart.size = this.value;
                        $.each(v.size, (k, l) => {
                            if (cart.size == l) {
                                cart.price = v.price[k];
                            }
                        });
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $("#quantity").on("input", function() {
                        cart.quantity = Number(this.value);
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $("#quantity-plus").on("click", function() {
                        cart.quantity = cart.quantity + 1
                        $("#quantity").val(cart.quantity);
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $("#quantity-min").on("click", function() {
                        cart.quantity = cart.quantity - 1
                        $("#quantity").val(cart.quantity);
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $("#addCart").on("click", () => {
                        dataCart(cart);
                        window.location.href = `${baseurl}/cart`;
                    });



                }
            })
        });
    }

    let design = (slug) => {

        $.getJSON(`${source}/data/data.json`, (data) => {
            $.each(data, (i, v) => {
                if (slug == v.slug) {
                    let size = "";
                    $.each(v.size, (j, k) => {
                        size += `<option ${(j==0)?'selected':''} value="${k}">${String(k).toUpperCase()}</option>`;
                    });
                    $("body").append(header()).append(`
<div class="container my-2 py-2 mt-5 ">
   <div class="row">
      <div class="col-md-7">
         <div id="design" class="m-0 p-0"></div>
      </div>
      
      <div class="col-md-5 mt-5">
         <h1 class="mt-2 mb-4 fs-4 name">${v.name}</h1>
         <h5 class="clearfix mb-3">
            <span class="float-start">Price</span>
            <span class="float-end">: <span id="price">${format(country.pointer*v.price[0])}</span></span>
         </h5>
         
         <div class="input-group mb-3">
            <label class="input-group-text">Name</label>
            <input type="text" class="form-control name" value="${v.name}"/>
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
                    breadcrumbs([{
                        name: "Home",
                        link: `${baseurl}`
                    }, {
                        name: "design",
                        link: `${baseurl}/design`
                    }, {
                        name: slug,
                        link: `${baseurl}/design/${slug}`
                    }]);
                    let cart = JSON.parse(`{"name":"${v.name}", "category": "${v.category}", "image":[], "design":[], "size":"${v.size[0]}", "price":${v.price[0]}, "color":"default", "quantity":1, "created_at": "${new Date().toISOString()}"}`);
                    $("input.name").on("input", function() {
                        cart.name = this.value;
                        $("h1.name").html(cart.name);
                    });
                    $("#size").on("input", function() {
                        cart.size = this.value;
                        $.each(v.size, (k, l) => {
                            if (cart.size == l) {
                                cart.price = v.price[k];
                            }
                        });
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $("#quantity").on("input", function() {
                        cart.quantity = Number(this.value);
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $("#quantity-plus").on("click", function() {
                        cart.quantity = cart.quantity + 1
                        $("#quantity").val(cart.quantity);
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $("#quantity-min").on("click", function() {
                        cart.quantity = cart.quantity - 1
                        $("#quantity").val(cart.quantity);
                        $("#price").html(format((country.pointer * cart.price) * cart.quantity));
                    });
                    $.getJSON(`${v.urldata}`, (data) => {
                        let d = {};
                        let c = null;
                        $('#design').customTShirt({
                            data: data,
                            onRender: (data, canvas) => {
                                d = data;
                                c = canvas;

                            },
                            onReady: (data, canvas) => {
                                $('#addCart').on("click", function() {
                                    c.captureAll(function(dt) {
                                        let nd = {
                                            image: [],
                                            design: []

                                        }

                                        let save = () => {
                                            if (dt.image.length + dt.design.length == dt.image.length + nd.design.length) {
                                                cart.image = dt.image;
                                                cart.design = dt.design;
                                                dataCart(cart);
                                                window.location.href = `${baseurl}/cart`;
                                            }
                                        }
                                        let upload = (img64, callback) => {

                                            $.ajax({
                                                "url": "https://api.imgbb.com/1/upload?key=9521afb2ee621053417d7b530c6e976a",
                                                "method": "POST",
                                                "timeout": 0,
                                                "processData": true,
                                                "mimeType": "multipart/form-data",
                                                "data": {
                                                    "image": String(img64).replace(/data\:image\/png\;base64\,/g, "")
                                                },
                                                "success": (response) => {
                                                    let res = JSON.parse(response);
                                                    callback(res.url);
                                                }
                                            });
                                        }
                                        let uploading = () => {
                                            if (dt.image.length != nd.image.length) {
                                                upload(dt.image[nd.image.length], (u) => {
                                                    nd.image.push(u);
                                                    save();
                                                    uploading()
                                                });
                                            } else {
                                                if (dt.design.length != nd.design.length) {
                                                    upload(dt.design[nd.design.length], (u) => {
                                                        nd.design.push(u);
                                                        save();
                                                        uploading()
                                                    });
                                                }

                                            }
                                        }
                                        uploading()

                                    });
                                });
                            }
                        });




                    });

                }
            });
        });

    }

    let cart = () => {
        let str = ``;
        let subtotal = 0;
        let pricepromo = 0.05;
        let promocode = "SPECIAL-FOR-YOU"
        let promo = 0;
        let items = 0;
        $.each(dataCart(), (i, v) => {
            subtotal += ((v.price * country.pointer) * v.quantity);
            promo += ((pricepromo * country.pointer) * v.quantity);
            items += (v.quantity);
            str = `
<tr>
   <td>
      <div class="d-flex align-items-center productPreview" data-bs-toggle="modal" data-bs-target="#exampleModal" data-cart-item="${i}">
         <img src="${v.image[0]}" alt="" style="width: 45px; height: 45px" class="rounded-square" />
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
         <button class="btn btn-outline-secondary quantityMin" type="button" data-cart-item="${i}"><i class="fa fa-minus"></i></button>
         <input type="Number" class="form-control text-center quantity" data-cart-item="${i}" value="${v.quantity}" style="width: 50px">
         <button class="btn btn-outline-secondary quantityPlus" type="button" data-cart-item="${i}"><i class="fa fa-plus"></i></button>
      </div>
   </td>
   <td>
      <p class="fw-normal mb-1"><span class="price" data-cart-item="${i}">${format((country.pointer*v.price)*v.quantity)}</span></p>
   </td>
   <td>
      <button type="button" class="btn btn-link btn-sm btn-rounded delete" data-cart-item="${i}">
      Delete
      </button>
   </td>
</tr>
` + str;
        });
        let listcountry = "";
        $.each(countries, (i, v) => {
            listcountry += `<option value="${v.name}" ${(v.name == country.name)?"selected":""}>${v.name}</option>`;
        });
        let liststate = "";
        $.each(country.states, (i, v) => {
            liststate += `<option value="${v}" ${(i == 0)?"selected":""}>${v}</option>`;
        });
        $("body").append(header()).append(`
<div class="container">
   <h4 class="d-flex justify-content-between align-items-center mb-3">
      Your cart
   </h4>
   <div class="table-responsive mt-2 mb-5">
      <table class="table align-middle mb-0 bg-white">
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
      </table>
   </div>
   <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
         <h4 class="d-flex justify-content-between align-items-center mb-3">
            Summary
         </h4>
         <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
               <div>
                  <h6 class="my-0">Sub-total</h6>
                  <small class="text-muted"><span class="items">${items}</span> item</small>
               </div>
               <span class="text-muted"><span class="subTotal">${format(subtotal)}</span></span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
               <div>
                  <h6 class="my-0">Shipping pay</h6>
                  <small class="text-muted">(free)</small>
               </div>
               <span class="text-muted">${format(0)}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
               <div>
                  <h6 class="my-0">Tax</h6>
                  <small class="text-muted">(free)</small>
               </div>
               <span class="text-muted">${format(0)}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
               <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small class="promoCode">${promocode}</small>
               </div>
               <span class="text-success">-<span class="promo">${format(promo)}</span></span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
               <span>Total (${country.currency})</span>
               <strong><span class="total">${format(subtotal-promo)}</span></strong>
            </li>
         </ul>
         <div class="card p-2">
            <div class="input-group">
               <input type="text" class="form-control redeem" placeholder="Promo code">
               <div class="input-group-append">
                  <button type="button" class="btn btn-primary redeem">Redeem</button>
               </div>
            </div>
         </div>
      </div>
      <div class="col-md-8 order-md-1">
         <h4 class="mb-3">Form orders</h4>
         <div>
            <div class="mb-3">
               <label class="form-label">Name</label>
               <input type="text" class="form-control name" placeholder="Your Name">
            </div>
            <div class="mb-3">
               <label class="form-label">Email address</label>
               <input type="email" class="form-control email" placeholder="youremail@example.com">
            </div>
            <div class="mb-3">
               <label class="form-label">Country</label>
               <select class="form-control country">${listcountry}</select>
            </div>
            <div class="mb-3">
               <label class="form-label">State</label>
               <select class="form-control state">${liststate}</select>
            </div>
            <div class="mb-3">
               <label class="form-label">Buy on marketplace</label>
               <select class="form-control marketplace">
                  <option value="amazon" selected>Amazon (global)</option>
                  <option value="etsy">Etsy (us)</option>
               </select>
            </div>
            <div class="mb-3">
               <label class="form-label">Message to seller (optional)</label>
               <textarea class="form-control message" rows="3" placeholder="your message"></textarea>
            </div>
            <button class="btn btn-primary order" type="submit">Order now</button>
            <hr class="mt-4 mb-3">
         </div>
      </div>
   </div>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Preview product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body"></div>
      </div>
   </div>
</div>
`).append(footer());
        breadcrumbs([{
            name: "Home",
            link: `${baseurl}`
        }, {
            name: "cart",
            link: `${baseurl}/cart`
        }]);
        $(".productPreview").on("click", function() {
            let item = this.getAttribute("data-cart-item");
            $(".modal-body").empty();
            $.each(dataCart()[item]["image"], (i, v) => {
                $(".modal-body").append(`<img src="${v}" class="img-thumbnail" alt="preview image ${i}">`);
            });
        });
        let render = (item) => {
            let data = dataCart();
            $(`.price[data-cart-item=${item}]`).html(`${format((data[item]["price"]*country.pointer)*data[item]["quantity"])}`);
            $(`.quantity[data-cart-item=${item}]`).val(data[item]["quantity"]);
            subtotal = 0;
            promo = 0;
            items = 0;

            promocode = "SPECIAL-FOR-YOU"
            $.each(data, (i, v) => {
                subtotal += (v.price * country.pointer) * v.quantity;
                promo += ((pricepromo * country.pointer) * v.quantity);
                items += (v.quantity);
            });
            $(`.items`).html(items);
            $(`.subTotal`).html(format(subtotal));
            $(`.promo`).html(format(promo));
            $(`.promoCode`).html(promocode);
            $(`.total`).html(format(subtotal - promo));

        }
        $(".quantity").on("input", function() {
            let item = this.getAttribute("data-cart-item");
            let data = dataCart();
            let value = (Number(this.value) <= 0) ? 0 : Number(this.value);
            data[item]["quantity"] = value;
            window.localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(data));
            render(item);
        });
        $(".quantityMin").on("click", function() {
            let item = this.getAttribute("data-cart-item");
            let data = dataCart();
            data[item]["quantity"] = (data[item]["quantity"] - 1 <= 0) ? 0 : data[item]["quantity"] - 1;
            window.localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(data));
            render(item);
        });
        $(".quantityPlus").on("click", function() {
            let item = this.getAttribute("data-cart-item");
            let data = dataCart();
            data[item]["quantity"] = data[item]["quantity"] + 1;
            window.localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(data));
            render(item);
        });
        $(".delete").on("click", function() {
            let item = this.getAttribute("data-cart-item");
            let data = [];
            $.each(dataCart(), (i, v) => {
                if (i != item) {
                    data.push(v);
                }
            });
            window.localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(data));
            location.reload();
        });

        $(`.redeem[type='button']`).on("click", function() {
            let code = $(`.redeem[type='text']`).val();
            switch (code) {
                case `SECRET-DISCOUNT`:
                    promo = (0.08 * country.pointer);
                    promocode = "SECRET-DISCOUNT";
                    break;
            }
            $(`.promo`).html(format(promo));
            $(`.promoCode`).html(promocode);
            $(`.total`).html(format(subtotal - promo));
        });
        $(".country").on("change", function() {

            $.each(countries, (i, v) => {
                if (v.name == this.value) {
                    liststate = "";
                    $.each(v.states, (j, k) => {
                        liststate += `<option value="${k}" ${(j == 0)?"selected":""}>${k}</option>`;
                    });
                    $(".state").html(liststate);
                }
            });

        });
        $(".order").on("click", function() {

            let order = JSON.parse(`
   {
  "id":"${makeid(7)}",
"name":"${$(".name").val()}",
"email":"${$(".email").val()}",
"country":"${$(".country").val()}",
"city":"${$(".state").val()}",
"marketplace":"${$(".marketplace").val()}",
"message":"${$(".message").val()}",
"status":"onproses",
"url":"",
"total":"${format(subtotal-promo)}",
"subtotal":"${format(subtotal)}",
"promo":"${format(promo)}",
"promocode":"${promocode}",
"cart":${JSON.stringify(dataCart())},
"created_at":"${new Date().toISOString()}"
}
   `);

            if (order.name == "" || order.email == "") {
                alert("can't be blank");
                return false;
            }


            $.ajax({
                type: 'POST',
                url: "https://www.blogger.com/contact-form.do",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                data: `name=adrian&email=adiran@gmail.com&message=Justtextit&blogId=3886148830722300504&token=AOuZoY5TzLI67rb_DCrFa7qjeMcqhn68vw:1700908758408`,
                success: function(response) {
                    dataOrder(order);
                    location.assign(`${baseurl}/order`);
                },
                error: () => {
                    order.status = "pending";
                    dataOrder(order);
                    location.assign(`${baseurl}/order`);
                    //window.location.href = "mailto:surotshirt@gmail.com?subject=Order&body=message%20goes%20here";
                }
            });
        });
    }


    let order = () => {
        let str = "";
        $.each(dataOrder(), (i, v) => {
            let item = 0;
            $.each(v.cart, (j, k) => {
                item += k.quantity;
            });
            let btn = "";
            switch (v.status) {
                case "pending":
                    btn = `<a href="mailto:surotshirt@gmail.com?subject=New%20Order&body=message%20goes%20here" type="button" class="btn btn-sm btn-primary text-nowrap" data-order-item="${i}">Contact us</a>`;
                    break;

            }
            str = `
<tr>
   <td>
   <a href="${baseurl}/order/${v.id}">
      <div class="d-flex align-items-center productPreview" data-bs-toggle="modal" data-bs-target="#exampleModal" data-order-item="${i}">
      
         <img src="${v.cart[0].image[0]}" alt="" style="width: 45px; height: 45px" class="rounded-square" />
         <div class="ms-3">
            <p class="fw-bold mb-1 text-nowrap">${v.name}</p>
            <p class="text-muted mb-0 text-nowrap">${v.email}</p>
         </div>
         
      </div>
      </a>
   </td>
   <td>
      <p class="fw-normal mb-1">${item} item</p>
   </td>
   <td>
      <p class="fw-normal mb-1"><span class="price" data-order-item="${i}">${v.total}</span></p>
   </td>
   <td>
      <p class="fw-normal mb-1">${v.marketplace}</p>
   </td>
   <td>
      <span class="badge text-bg-secondary">${v.status}</span>
   </td>
   <td>
      ${btn}
   </td>
</tr>
` + str;
        });
        $("body").append(header()).append(`
<div class="container">
   <h4 class="d-flex justify-content-between align-items-center mb-3">
      Your order
   </h4>
   <div class="table-responsive mt-2 mb-5">
      <table class="table align-middle mb-0 bg-white">
         <thead class="bg-light">
            <tr>
               <th>ID order</th>
               <th>Quantity</th>
               <th>Total</th>
               <th>Marketplace</th>
               <th>Status</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody>
            ${str}
         </tbody>
      </table>
   </div>
`).append(footer());
        breadcrumbs([{
            name: "Home",
            link: `${baseurl}`
        }, {
            name: "order",
            link: `${baseurl}/order`
        }]);
    }


    (() => {

        new Router((p) => {
            p.route("/", (data) => {
                index();
            });
            p.route("/product/:slug", (data) => {
                product(data.slug);
            });
            p.route("/design/:slug", (data) => {
                design(data.slug);
            });
            p.route("/cart", (data) => {
                cart();
            });
            p.route("/order", (data) => {
                order();
            });
        });

    })();
})();