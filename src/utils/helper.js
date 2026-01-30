export const swalConfirm = (callback)=> {
    Swal.fire({
    title: "Yakin membatalkan?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Batalkan!"
  }).then(result => {
    callback(result)
  });
}