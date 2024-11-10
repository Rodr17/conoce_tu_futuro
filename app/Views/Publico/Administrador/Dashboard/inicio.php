<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Mi cuenta<?= $this->endSection() ?>

<?= $this->section('contenido') ?>
<!-- Main Start -->
<main class="main">
    <!-- Breadcrumb Start -->
    <div class="breadcrumb-wrap">
        <div class="banner">
            <img class="bg-img bg-top" src="/imagenes/banner-p.jpg" alt="banner" />
            <div class="container-lg">
                <div class="breadcrumb-box">
                    <div class="heading-box">
                        <h1>Mi cuenta</h1>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="<?= base_url() ?>">Inicio</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Mi cuenta</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Dashboard Start -->
    <?php

    $usuario_actual          = auth()->user();
    $datos['usuario_nombre'] = $usuario_actual->nombre . " " . explode(" ", $usuario_actual->apellidos)[0];
    $datos['usuario_correo'] = $usuario_actual->email;

    ?>
    <section class="user-dashboard">
        <div class="container-lg">
            <div class="row g-3 g-xl-4 tab-wrap">
                <div class="col-lg-4 col-xl-3 sticky">
                    <?= view('Publico/Administrador/includes/menu', $datos) ?>
                </div>

                <div class="col-lg-8 col-xl-9">
                    <div class="right-content tab-content" id="myTabContent">
                        <!-- User Dashboard Start -->
                        <div class="tab-pane show active" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <div class="dashboard-tab">
                                <div class="title-box3">
                                    <h3>Bienvenido <?= $datos['usuario_nombre'] ?></h3>
                                    <p>
                                        Bienvenido <?= $datos['usuario_nombre'] ?>, aquí puedes personalizar tu perfil y también hacer un seguimiento de tu separación o cita, además puedes acceder a tu dirección. Si quieres cambiar la configuración puedes hacerlo desde aquí
                                    </p>
                                </div>

                                <div class="row g-0 option-wrap">
                                    <div class="col-sm-6 col-xl-4">
                                        <a href="javascript:void(0)" data-class="profile" class="tab-box">
                                            <img src="/iconos/5.svg" alt="profile" />
                                            <h5>Mi perfil</h5>
                                            <p>Completa los datos de tu perfil, y así saber a quién entregaremos el pŕoximo automóvil, recuerda que protegemos tus datos</p>
                                        </a>
                                    </div>
                                    <div class="col-sm-6 col-xl-4">
                                        <a href="javascript:void(0)" data-class="orders" class="tab-box">
                                            <img src="/iconos/1.svg" alt="shopping bag" />
                                            <h5>Separaciones</h5>
                                            <p>Ver historial de separaciones actuales y anteriores</p>
                                        </a>
                                    </div>
                                    <div class="col-sm-6 col-xl-4">
                                        <a href="javascript:void(0)" data-class="savedAddress" class="tab-box">
                                            <img src="/iconos/3.svg" alt="address" />
                                            <h5>Citas agendadas</h5>
                                            <p>No olvides acudir a nosotros con tiempo para no perderte la experiencia y conocer el automóvil de tu elección</p>
                                        </a>
                                    </div>
                                    <div class="col-sm-6 col-xl-4">
                                        <a href="wishlist.html" data-class="wishlist" class="tab-box">
                                            <img src="/iconos/2.svg" alt="wishlist" />
                                            <h5>Lista de favoritos</h5>
                                            <p>Aquí están los automóviles que más se adaptan a ti</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- User Dashboard End -->

                        <!-- Order Tabs Start -->
                        <div class="tab-pane" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                            <div class="cart-wrap order-content">
                                <div class="title-box3">
                                    <h3>My Orders</h3>
                                    <p>H thanks for placing a delivery order with Oslo! Your order should be home with you in soon</p>
                                </div>

                                <div class="order-wraper">
                                    <div class="order-box">
                                        <div class="order-header">
                                            <span><i data-feather="box"></i></span>
                                            <div class="order-content">
                                                <h5 class="order-status success">Delivered</h5>
                                                <p>Place July 15 2022 and Delivered on July 18 2022</p>
                                            </div>
                                        </div>

                                        <div class="order-info">
                                            <div class="product-details" data-productDetail="product-detail">
                                                <div class="img-box"><img src="../assets/images/fashion/product/front/4.jpg" alt="product" /></div>
                                                <div class="product-content">
                                                    <h5>Women’s long sleeve Jacket</h5>
                                                    <p class="truncate-3">
                                                        Versatile sporty slogans short sleeve quirky laid back orange lux hoodies vests pins badges. Versatile sporty slogans short sleeve quirky laid back orange lux hoodies
                                                        vests pins badges. Cutting edge crops stone transparent.
                                                    </p>
                                                    <span>Prize : <span>$120.00</span></span>
                                                    <span>Size : <span>M</span></span>
                                                    <span>Order Id : <span>edf125qa1d35</span></span>
                                                </div>
                                            </div>

                                            <div class="rating-box">
                                                <span>Rate Product : </span>
                                                <ul class="rating p-0 mb">
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i data-feather="star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="order-box">
                                        <div class="order-header">
                                            <span><i data-feather="box"></i></span>
                                            <div class="order-content">
                                                <h5 class="order-status success">Delivered</h5>
                                                <p>Place July 15 2022 and Delivered on July 18 2022</p>
                                            </div>
                                        </div>

                                        <div class="order-info">
                                            <div class="product-details" data-productDetail="product-detail">
                                                <div class="img-box"><img src="../assets/images/fashion/product/front/5.jpg" alt="product" /></div>
                                                <div class="product-content">
                                                    <h5>Women’s long sleeve Jacket</h5>
                                                    <p class="truncate-3">
                                                        Tunic knitted stretch leather spaghetti straps triangle top patterned panelled purple blush. Versatile sporty slogans short sleeve quirky laid back orange lux hoodies
                                                        vests pins badges.
                                                    </p>
                                                    <span>Prize : <span>$120.00</span></span>
                                                    <span>Size : <span>M</span></span>
                                                    <span>Order Id : <span>edf125qa1d35</span></span>
                                                </div>
                                            </div>

                                            <div class="rating-box">
                                                <span>Rate Product : </span>
                                                <ul class="rating p-0 mb">
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i data-feather="star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="order-box">
                                        <div class="order-header">
                                            <span><i data-feather="box"></i></span>
                                            <div class="order-content">
                                                <h5 class="order-status success">Delivered</h5>
                                                <p>Place July 15 2022 and Delivered on July 18 2022</p>
                                            </div>
                                        </div>

                                        <div class="order-info">
                                            <div class="product-details" data-productDetail="product-detail">
                                                <div class="img-box"><img src="../assets/images/fashion/product/front/6.jpg" alt="product" /></div>
                                                <div class="product-content">
                                                    <h5>Women’s long sleeve Jacket</h5>
                                                    <p class="truncate-3">
                                                        Pop top sporty stripe trims mesh inserts denim turtle neck casual white cotton button silver.Back print tattoo graphics printed expensive photos colors sun psychedelic
                                                        super casual tag.
                                                    </p>
                                                    <span>Prize : <span>$120.00</span></span>
                                                    <span>Size : <span>M</span></span>
                                                    <span>Order Id : <span>edf125qa1d35</span></span>
                                                </div>
                                            </div>

                                            <div class="rating-box">
                                                <span>Rate Product : </span>
                                                <ul class="rating p-0 mb">
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="fill" data-feather="star"></i>
                                                    </li>
                                                    <li>
                                                        <i data-feather="star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Order Tabs End -->

                        <!-- Order Detail Tab Start -->
                        <div class="tab-pane" id="orders-details" role="tabpanel" aria-labelledby="orders-details">
                            <div class="order-detail-wrap order-content">
                                <div class="row g-3 g-md-4">
                                    <div class="col-12">
                                        <div class="order-summery-wrap mt-0 order-data">
                                            <div class="banner-box">
                                                <div class="media">
                                                    <div class="img">
                                                        <i data-feather="package"></i>
                                                    </div>
                                                    <div class="media-body">
                                                        <h2>Order Delivered</h2>
                                                        <span class="font-sm">Delivered On July 15 2022</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="product-details">
                                            <div class="img-box"><img src="../assets/images/fashion/product/front/4.jpg" alt="product" /></div>
                                            <div class="product-content">
                                                <h5>Women’s long sleeve Jacket</h5>
                                                <p class="truncate-3">
                                                    Versatile sporty slogans short sleeve quirky laid back orange lux hoodies vests pins badges. Versatile sporty slogans short sleeve quirky laid back orange lux hoodies
                                                    vests pins badges. Cutting edge crops stone transparent.
                                                </p>
                                                <span>Prize : <span>$120.00</span></span>
                                                <span>Size : <span>M</span></span>
                                                <span>Order Id : <span>edf125qa1d35</span></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="order-data summery-wrap">
                                            <div class="order-summery-box">
                                                <h5 class="cart-title">Price Details (1 Quantity)</h5>
                                                <ul class="order-summery">
                                                    <li>
                                                        <span>Bag total</span>
                                                        <span>$220.00</span>
                                                    </li>

                                                    <li>
                                                        <span>Bag savings</span>
                                                        <span class="theme-color">-$20.00</span>
                                                    </li>

                                                    <li>
                                                        <span>Coupon Discount</span>
                                                        <a href="offer.html" class="font-danger">$120.00</a>
                                                    </li>

                                                    <li>
                                                        <span>Delivery</span>
                                                        <span>$50.00</span>
                                                    </li>

                                                    <li class="pb-0">
                                                        <span>Total Amount</span>
                                                        <span>$270.00</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="row gy-3 gy-sm-0 g-3 g-md-4">
                                            <div class="col-sm-6">
                                                <div class="order-data general-details">
                                                    <!-- Payment Method Start -->
                                                    <div class="payment-method mt-0">
                                                        <h5 class="cart-title">Payment Method</h5>
                                                        <div class="payment-box">
                                                            <img src="../assets/icons/png/1.png" alt="card" />
                                                            <span class="font-sm title-color"> **** **** **** 6502</span>
                                                        </div>
                                                    </div>
                                                    <!-- Payment Method End -->

                                                    <button class="btn-solid mb-line btn-sm mt-4">Get Invoice <i class="arrow"></i></button>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="order-data general-details">
                                                    <!-- Contact Start -->
                                                    <div class="payment-method mt-0">
                                                        <h5 class="cart-title">Contact Us</h5>

                                                        <div class="payment-box">
                                                            <i data-feather="phone"></i>
                                                            <span class="font-sm title-color">
                                                                <a class="content-color fw-500" href="tel:2554-4454-5646">2554-4454-5646</a>
                                                            </span>
                                                        </div>

                                                        <div class="payment-box mt-3">
                                                            <i data-feather="phone"></i>
                                                            <span class="font-sm title-color">
                                                                <a class="content-color fw-500" href="tel:5452-2545-2154">5452-2545-2154</a>
                                                            </span>
                                                        </div>

                                                        <div class="payment-box mt-3">
                                                            <i data-feather="mail"></i>
                                                            <span class="font-sm title-color">
                                                                <a class="content-color fw-500" href="mailto:someone@example.com">someone@example.com</a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <!-- Contact End -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="order-data general-details">
                                            <!-- Address Section Start -->
                                            <div class="address-ordered p-0">
                                                <h5 class="cart-title">Order Address</h5>
                                                <div class="address">
                                                    <h5 class="font-default title-color">Nadine Vogt <span class="badges badges-pill badges-theme">Home</span></h5>
                                                    <p class="font-default content-color"><i data-feather="map-pin"></i> 1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United States</p>
                                                </div>
                                            </div>
                                            <!-- Address Section End -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Order Detail Tab End -->

                        <!-- Saved Address Tabs Start -->
                        <div class="tab-pane" id="savedAddress" role="tabpanel" aria-labelledby="savedAddress-tab">
                            <div class="address-tab">
                                <div class="title-box3">
                                    <h3>Your Saved Address</h3>
                                    <p>here is your saved address, from here you can easily add or modify your address</p>
                                </div>

                                <div class="row g-3 g-md-4">
                                    <div class="col-md-6 col-lg-12 col-xl-6">
                                        <div class="address-box checked">
                                            <div class="radio-box">
                                                <div>
                                                    <input class="radio-input" type="radio" checked id="radio1" name="radio1" />
                                                    <label class="radio-label" for="radio1">Abigail</label>
                                                </div>
                                                <span class="badges badges-pill badges-theme">Home</span>
                                                <div class="option-wrap">
                                                    <span class="edit" data-bs-toggle="modal" data-bs-target="#edditAddress"><i data-feather="edit"></i></span>
                                                    <span class="delet ms-0" data-bs-toggle="modal" data-bs-target="#conformation"><i data-feather="trash"></i></span>
                                                </div>
                                            </div>
                                            <div class="address-detail">
                                                <p class="content-color font-default">3385 Happy Hollow Road Wilmington, NC 28412</p>
                                                <p class="content-color font-default">United State,325014</p>
                                                <span class="content-color font-default">Mobile: <span class="title-color font-default fw-500"> 423-772-0570</span></span>
                                                <span class="content-color font-default mt-1">Delivery: <span class="title-color font-default fw-500"> 2 March</span></span>
                                                <span class="content-color font-default mt-1">Cash on Delivery: <span class="title-color font-default fw-500"> Available</span></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-12 col-xl-6">
                                        <div class="address-box">
                                            <div class="radio-box">
                                                <div>
                                                    <input class="radio-input" type="radio" id="radio3" name="radio1" />
                                                    <label class="radio-label" for="radio3">Freddy J. Burns</label>
                                                </div>
                                                <span class="badges badges-pill badges-theme">Home</span>
                                                <div class="option-wrap">
                                                    <span class="edit" data-bs-toggle="modal" data-bs-target="#edditAddress"><i data-feather="edit"></i></span>
                                                    <span class="delet ms-0" data-bs-toggle="modal" data-bs-target="#conformation"><i data-feather="trash"></i></span>
                                                </div>
                                            </div>
                                            <div class="address-detail">
                                                <p class="content-color font-default">198 Terry Lane Orlando, FL 32809</p>
                                                <p class="content-color font-default">Germany,254685</p>
                                                <span class="content-color font-default">Mobile: <span class="title-color font-default fw-500"> 353-582-5870</span></span>

                                                <span class="content-color font-default mt-1">Delivery: <span class="title-color font-default fw-500"> 4 March</span></span>
                                                <span class="content-color font-default mt-1">Cash on Delivery: <span class="title-color font-default fw-500"> Available</span></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-12 col-xl-6">
                                        <div class="address-box">
                                            <div class="radio-box">
                                                <div>
                                                    <input class="radio-input" type="radio" id="radio2" name="radio1" />
                                                    <label class="radio-label" for="radio2">Nadine Vogt</label>
                                                </div>
                                                <span class="badges badges-pill badges-theme">Office</span>
                                                <div class="option-wrap">
                                                    <span class="edit" data-bs-toggle="modal" data-bs-target="#edditAddress"><i data-feather="edit"></i></span>
                                                    <span class="delet ms-0" data-bs-toggle="modal" data-bs-target="#conformation"><i data-feather="trash"></i></span>
                                                </div>
                                            </div>
                                            <div class="address-detail">
                                                <p class="content-color font-default">Wachaustrasse 22 8045 WEINITZEN</p>
                                                <p class="content-color font-default">Austria,35546</p>
                                                <span class="content-color font-default">Mobile: <span class="title-color font-default fw-500"> 454-254-3654</span></span>
                                                <span class="content-color font-default mt-1">Delivery: <span class="title-color font-default fw-500"> 5 March</span></span>
                                                <span class="content-color font-default mt-1">Cash on Delivery: <span class="title-color font-default fw-500">Not Available</span></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-12 col-xl-6">
                                        <div class="address-box add-new d-flex flex-column gap-2 align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#addNewAddress">
                                            <span class="plus-icon"><i data-feather="plus"></i></span>
                                            <h4 class="theme-color font-xl fw-500">Add New Address</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Saved Address Tabs End -->

                        <!-- Profile Tabs Start -->
                        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="profile">
                                <div class="title-box3">
                                    <h3>Basics Information</h3>
                                </div>

                                <form action="javascript:void(0)" class="custom-form form-pill">
                                    <div class="row g-3 g-xl-4">
                                        <div class="col-sm-6">
                                            <div class="input-box">
                                                <label for="fullname">Full Name</label>
                                                <input class="form-control" id="fullname" name="fullname" type="text" value="Josephin water" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="input-box">
                                                <label for="email">Email</label>
                                                <input class="form-control" id="email" name="email" type="email" value="Josephin.water@gmail.com" />
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="input-box">
                                                <label for="mobile">Mobile</label>
                                                <input maxlength="10" class="form-control" id="mobile" name="mobile" type="number" value="9645823465" />
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="input-box">
                                                <label for="gender">Gender</label>
                                                <select name="gender" id="gender" class="form-control">
                                                    <option selected>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="input-box">
                                                <label for="location">Location</label>
                                                <select name="location" id="location" class="form-control">
                                                    <option selected>london</option>
                                                    <option>United State</option>
                                                    <option>India</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="input-box">
                                                <label for="photo">Profile Photo</label>
                                                <input class="form-control" id="photo" name="photo" accept="application/pdf" type="file" />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="input-box">
                                                <label for="address1">Address 1</label>
                                                <input class="form-control" id="address1" name="address1" type="text" value="123, Main Str." />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="input-box">
                                                <label for="address2">Address 1</label>
                                                <input class="form-control" id="address2" name="address2" type="text" value="123, Main Str." />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="input-box">
                                                <label for="al-mobile">Alternate Mobile</label>
                                                <input maxlength="10" class="form-control" id="al-mobile" name="al-mobile" type="number" value="7565441862" />
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="input-box">
                                                <label for="hint-name">Nick Name</label>
                                                <input class="form-control" id="hint-name" name="hint-name" type="text" value="Josephin " />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="btn-box">
                                        <button class="btn-outline btn-sm">Cancel</button>
                                        <button class="btn-solid btn-sm">Save Changes <i class="arrow"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Profile Tabs End -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Dashboard End -->
</main>
<!-- Main End -->
<?= $this->endSection() ?>