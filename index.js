    // JavaScript untuk mengatur filter
    document.addEventListener("DOMContentLoaded", () => {
        const filterMenu = document.querySelectorAll(".filter-menu li");
        const images = document.querySelectorAll(".grid-wrapper .image");

        filterMenu.forEach((menu) => {
            menu.addEventListener("click", () => {
                // Hapus kelas 'active' dari semua menu
                filterMenu.forEach((item) => item.classList.remove("active"));
                menu.classList.add("active");

                const filter = menu.dataset.filter;

                images.forEach((image) => {
                    if (filter === "*" || image.dataset.category === filter.substring(1)) {
                        image.classList.add("show");
                    } else {
                        image.classList.remove("show");
                    }
                });
            });
        });

        // Tampilkan semua gambar saat halaman dimuat
        document.querySelector('.filter-menu li[data-filter="*"]').click();
    });