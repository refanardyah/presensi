<nav class="main-header fixed-top navbar navbar-expand navbar-light no-border shadow-none">
    <div class="container-fluid">
        <ul class="navbar-nav" style="overflow:hidden">
            <li class="nav-item d-hide">
                <a class="nav-link material" style="color: #010203 !important" data-widget="pushmenu" href="#"><i
                        class="fal fa-bars mr-2"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link">
                    <button class="back-button nav-load btn btn no-border btn-top-back p-2" onclick="history.back(-1)">
                        <i class="fas fa-arrow-left fa-lg"></i>
                    </button>
                    <span class="text-dark title-menu" style="padding:10px;margin-left:30px !important;">
                        @yield('title')
                    </span>
                </a>
            </li>
        </ul>
        {{-- <ul class="navbar-nav ml-auto logout-user mr-3">
            <li class="nav-item dropdown no-border ml-2">
                <a class="nav-link top-icon" data-toggle="dropdown" href="#" aria-expanded="false"
                    style="padding-left:15px !important;">
                    <i class="fas fa-caret-down"></i>
                </a>
                <div class="notif-menu dropdown-menu dropdown-menu-right no-border"
                    style="border-radius:10px !important;overflow:hidden;width:360px;">
                    <a href="{{ route('logout') }}" class="row notif-item p-2 cKeluar">
                        <div class="col-2">
                            <i class="fas fa-sign-out-alt circle-icon text-muted"></i>
                        </div>
                        <div class="col-10 pl-2" style="padding-top:14px;">
                            <span class="text-bold">Keluar</span>
                        </div>
                    </a>
                    <form class="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </div>
            </li>
        </ul> --}}
    </div>
</nav>
