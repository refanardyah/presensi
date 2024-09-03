$(function () {
  var _token = $('input[name=_token]').val();
  var table = $('#admintable').DataTable({
    serverSide: true,
    processing: true,
    language: {
      processing: "Memuat data...",
      lengthMenu: "Menampilkan _MENU_ data",
      info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
      infoEmpty: "Tidak ada data untuk ditampilkan",
      infoFiltered: "(difilter dari _MAX_ total data)",
      infoPostFix: "",
      loadingRecords: "Memuat data...",
      zeroRecords: "Tidak ada data untuk ditampilkan",
      emptyTable: "Tidak ada data untuk ditampilkan",
      paginate: {
      "previous": "<",
      "next": ">"
    }
    },
    lengthMenu: [ [10, 25, 50, 100], [10, 25, 50, 100] ],
    ajax: {
    url: "{{ route('klinik.index') }}",
    data: {_token:_token}
    },
    columns: [
      {data: 'DT_RowIndex', name: 'DT_RowIndex', orderable: false, searchable: false},
      {
        data: 'IdKlinik', name: 'IdKlinik', render: function(data, type, full, meta){
        return "<a href='#' class='btn btn-primary btn-sm text-sm shadow-none btn-masuk' data-id="+data+"><i class='fas fa-copy'></i> Masuk</a>";
        }, orderable: false, searchable: false
      },
      {data: 'Nomor', name: 'Nomor'},
      {data: 'NmHewan', name: 'NmHewan'},
      {data: 'nm_anggota', name: 'nm_anggota'},
      {data: 'hp', name: 'hp'},
      {
        data: 'IdKlinik', name: 'IdKlinik', render: function(data, type, full, meta){
        return "<a href='#' class='btn btn-danger btn-sm text-sm shadow-none button' data-id="+data+"><i class='fas fa-trash'></i> Hapus</a>";
        }, orderable: false, searchable: false
      },
    ]
  });

  $('.content').on('click', '.add-problem', function(){
    $('.permasalahan').append("<div class='row problem-form' style='margin-top:10px'><div class='col-lg-6'><select name='problem' class='form-control shadow-none'><option value='1'>Permasalahan</option>@foreach($problem as $prbm) <option value='{{$prbm->IdProblem}}'>{{$prbm->NmProblem}}</option> @endforeach</select></div><div class='col-lg-6'><input type='text' class='form-control shadow-none' name='keterangan' value='-'></div></div>");
  });
  $('.content').on('click', '.btn-minus', function(){
    $('.problem-form:last-child').remove();
  })

  $('.filter-select').change(function(){
    table.column( $(this).data('column') )
    .search( $(this).val() )
    .draw();
  });

  $('.bcaris').on('click', function() {
    table.column( $('.icaris').data('column') )
    .search( $('.icaris').val() )
    .draw();
  });

  table.column(2).visible(true);
  var input = document.getElementById("myInput");
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
  });

  $("body").on('focus', '.spasien',function(){
    $('.suggest').removeClass('hide');
  });

  $('.btn-problem').click(function(){
    var hewan = $('input[name=idhewan]').val();
    if(hewan == ''){
      const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-left',
      showConfirmButton: false,
      timer: 3000
      });
      Toast.fire({
        type:'warning',
        title: 'Anda belum memilih hewan'});
    }else{
      $('#modal-save').modal('show');
    }
  })

  $("body").on('click', '.suggest-item',function(){
    var id = $(this).data('id');
    var nama = $(this).data('nama');
    var pemilik = $(this).data('pemilik');
    $('.spasien').val(nama);
    $.ajax({
      url: "<?php echo route('hewan-detail') ?>",
      method: 'POST',
      data: {id:id, _token:_token},
      success: function(data) {
        $(".detail-hewan").html(data.options);
        $(".kethewan").html(": "+nama);
        $(".ketpemilik").html(": "+pemilik);
      }
    });
    $('.suggest').addClass('hide');
  });

  $("body").on('click', '.edit-modal',function(){
    var id = $(this).data('id');
    var _token = $("input[name='_token']").val();
    $.ajax({
      url: "<?php echo route('anggota-edit') ?>",
      method: 'POST',
      data: {id:id, _token:_token},
      success: function(data) {
        $("#edit").html('');
        $("#edit").html(data.options);
      }
    });
  });

  $("body").on('click', '.btn-detail',function(){
    var id = $(this).data('id');
    var _token = $("input[name='_token']").val();
    $.ajax({
      url: "<?php echo route('klinik-detail') ?>",
      method: 'POST',
      data: {id:id, _token:_token},
      success: function(data) {
        $(".klinik-detail").html(data.options);
      }
    });
  });

  $(document).on('click', '.button', function (e) {
    e.preventDefault();
    var _token = $("input[name='_token']").val();
    var id = $(this).attr('data-id');
    swal({
      title: "Yakin akan menghapus data?",
      type: "warning",
      confirmButtonClass: "btn-danger",
      confirmButtonColor: '#aa0000',
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      },
      function() {
      $.ajax({
        type: "POST",
        url: "{{ URL::to('/') }}/klinik/delete",
        data: {_token:_token, id:id},
        success: function (data) {
          const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000
          });
          Toast.fire(data);
          table.draw();
        }         
      });
    });
  });

  $(document).on('click', '.btn-masuk', function (e) {
    e.preventDefault();
    var _token = $("input[name='_token']").val();
    var id = $(this).attr('data-id');
    swal({
      title: "Masuk Ruang Periksa?",
      type: "success",
      confirmButtonClass: "btn-success",
      confirmButtonColor: '#00aa00',
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      },
      function() {
      $.ajax({
        type: "POST",
        url: "{{ URL::to('/') }}/klinik/masuk",
        data: {_token:_token, id:id},
        success: function (data) {
          const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000
          });
          Toast.fire(data);
          table.draw();
        }         
      });
    });
  });

  $('#modal-save').on('shown.bs.modal', function(e){
    $('textarea[name=keterangan]').focus();
  })

  $(".btn-save").click(function(e){
    e.preventDefault();
    var _token = $("input[name='_token']").val();
    var hewan = $("input[name='idhewan']").val();
    var customer = $("input[name='idcustomer']").val();
    var dokter = $("select[name='pdokter']").val();
    var asisten = $("select[name='pasisten']").val();
    var ket = $("textarea[name=keterangan]").val();
     if(hewan == ""){
      $(".spasien").focus();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
      });
      Toast.fire({
        type: 'warning',
        title: 'Anda belum memilih hewan'
      })
    }else if(customer == ""){
      $(".spasien").focus();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
      });
      Toast.fire({
        type: 'warning',
        title: 'Anda belum memilih hewan'
      })
    }else if(dokter == ""){
      $("select[name='pdokter']").focus();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
      });
      Toast.fire({
        type: 'warning',
        title: 'Anda belum memilih dokter'
      })
    }else if(asisten == ""){
      $("select[name='pasisten']").focus();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
      });
      Toast.fire({
        type: 'warning',
        title: 'Anda belum memilih asisten'
      })
    }else{
      $.ajax({
        url: "{{ URL::to('/') }}/klinik/store",
        type:'POST',
        data: {_token:_token, hewan:hewan, dokter:dokter, asisten:asisten, customer:customer, ket:ket},
        success: function(data) {
          const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
          });
          Toast.fire(data);
          $(".spasien").val("");
          $("input[name='idhewan']").val("");
          $("textarea[name='keterangan']").val("");
          $("input[name='idcustomer']").val("");
          $("select[name='pdokter']").val("");
          $("select[name='pasisten']").val("");
          $('#modal-save').modal('hide');
          table.draw();
        }
      });
    }
  });

  $(".btn-next").click(function(e){
    e.preventDefault();
    var _token = $("input[name='_token']").val();
    var hewan = $("input[name='idhewan']").val();
    var customer = $("input[name='idcustomer']").val();
     if(customer == ""){
      $(".spasien").focus();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
      });
      Toast.fire({
        type: 'warning',
        title: 'Anda belum memilih hewan'
      })
    }else if(hewan == ""){
      $(".spasien").focus();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
      });
      Toast.fire({
        type: 'warning',
        title: 'Anda belum memilih hewan'
      })
    }else{
      $.ajax({
      url: "{{ URL::to('/') }}/booking/next",
      type:'POST',
      data: {_token:_token, hewan:hewan, customer:customer},
      success: function(data) {
        $(".content-klinik").html(data.options);
      }
    });
    }
  });
  
  $(".content").on("keyup", ".spasien", function(e){
    var q = $(this).val();
    var _token = $("input[name='_token']").val();
    if(e.keyCode === 13){
      $.ajax({
        url: "<?php echo route('pasien-search') ?>",
        method: 'POST',
        data: {q:q, _token:_token},
        success: function(data) {
          $(".result-pasien").html('');
          $(".result-pasien").html(data.options);
        }
      });
    }
  });
});