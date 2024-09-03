<aside class="main-sidebar sidebar-dark-primary bg-primary shadow-lg">
    <a href="{{URL::to('/')}}" class="brand-link bg-primary no-border">
      {{-- <img src="{{ asset('img/logo/') }}" alt="Presensi App"
        class="brand-image"> --}}
      <span class="brand-text text-bold ml-2">PRESENSI APP</span>
    </a>
    <div class="sidebar">
      <nav>
        <ul class="font-weight-light nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
          data-accordion="true">
          <li class="nav-item">
            <a class="nav-link" href="{{ route('home') }}">
              <i class="nav-icon fal fa-home"></i>
              <p>Home</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('kelas') }}">
              <i class="nav-icon fal fa-home"></i>
              <p>Kelas</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('mapel') }}">
              <i class="nav-icon fal fa-book"></i>
              <p>Mapel</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('guru') }}">
              <i class="nav-icon fal fa-user"></i>
              <p>Guru</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('siswa') }}">
              <i class="nav-icon fal fa-users"></i>
              <p>Siswa</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('siswa-create') }}">
              <i class="nav-icon fal fa-plus"></i>
              <p>Input Siswa</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('kehadiran') }}">
              <i class="nav-icon fal fa-file"></i>
              <p>Kehadiran</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('kehadiran-create') }}">
              <i class="nav-icon fal fa-plus"></i>
              <p>Kehadiran</p>
            </a>
          </li>
          {{-- <li class="nav-item">
            <a class="nav-link cKeluar" href="{{ route('logout') }}">
              <i class="nav-icon fal fa-sign-out-alt"></i>
              <p>Keluar</p>
            </a>
            <form action="{{ route('logout') }}" class="logout-form" method="POST" style="display: none;">
              @csrf
            </form>
          </li> --}}
        </ul>
      </nav>
    </div>
  </aside>
