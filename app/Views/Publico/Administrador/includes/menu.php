<button class="setting-menu btn-solid btn-sm d-lg-none">Setting Menu <i class="arrow"></i></button>
<div class="side-bar">
    <span class="back-side d-lg-none"> <i data-feather="x"></i></span>
    <div class="profile-box">
        <div class="img-box">
            <img class="img-fluid" src="/imagenes/avatar.jpg" alt="user" />
        </div>

        <div class="user-name">
            <h5><?= $usuario_nombre ?></h5>
            <h6><?= $usuario_correo ?></h6>
        </div>
    </div>

    <ul class="nav nav-tabs nav-tabs2" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="dashboard-tab" data-bs-toggle="tab" data-bs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">
                Dashboard
                <span><i data-feather="chevron-right"></i></span>
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false">
                Mis separaciones
                <span><i data-feather="chevron-right"></i></span>
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="savedAddress-tab" data-bs-toggle="tab" data-bs-target="#savedAddress" type="button" role="tab" aria-controls="savedAddress" aria-selected="false">
                Mis citas
                <span><i data-feather="chevron-right"></i></span>
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <a href="wishlist.html" class="nav-link">
                Mis favoritos
                <span><i data-feather="chevron-right"></i></span>
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                Mi perfil
                <span><i data-feather="chevron-right"></i></span>
            </button>
        </li>
    </ul>
</div>