// Data Default Portofolio Siswa SMK PINTAR
const initialData = {
    nama: "Ahmad Rizky",
    jurusan: "Rekayasa Perangkat Lunak (RPL)",
    email: "ahmad.rizky@smkpintar.sch.id",
    bio: "Siswa SMK PINTAR kelas XII yang berfokus pada pengembangan aplikasi web dan pembuatan antarmuka yang bersih dan efisien.",
    jadwal: [
        "Senin - Kamis: Pembelajaran Teori & Praktikum Koding",
        "Jumat: Pendalaman Proyek Portofolio Siswa",
        "Sabtu: Ekstrakurikuler Programming Club"
    ],
    skills: ["HTML5 / CSS3", "JavaScript ES6", "Git & GitHub", "UI/UX Design"],
    projects: [
        { judul: "Aplikasi Kasir Sekolah", desc: "Sistem POS sederhana menggunakan JavaScript." },
        { judul: "Website Perpustakaan", desc: "Portal peminjaman buku digital SMK." }
    ],
    certificates: [
        "Sertifikat Kelulusan Bootcamp Frontend - 2025",
        "Juara 2 LKS SMK Bidang Web Technologies - 2026"
    ]
};

// Render Data ke Tampilan
function renderPortfolio(data) {
    document.getElementById("disp-nama").innerText = data.nama;
    document.getElementById("disp-jurusan").innerText = data.jurusan;
    document.getElementById("disp-bio").innerText = data.bio;

    // Render Jadwal (Pencegahan Jadwal Kosong)
    const containerJadwal = document.getElementById("disp-jadwal");
    containerJadwal.innerHTML = "";
    data.jadwal.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        containerJadwal.appendChild(li);
    });

    // Render Skill
    const containerSkill = document.getElementById("disp-skills");
    containerSkill.innerHTML = "";
    data.skills.forEach(skill => {
        const div = document.createElement("div");
        div.className = "item-card";
        div.innerHTML = `<strong><i class="fa-solid fa-check"></i> ${skill}</strong>`;
        containerSkill.appendChild(div);
    });

    // Render Project
    const containerProject = document.getElementById("disp-projects");
    containerProject.innerHTML = "";
    data.projects.forEach(proj => {
        const div = document.createElement("div");
        div.className = "item-card";
        div.innerHTML = `<h4>${proj.judul}</h4><p style="color:#64748b; font-size: 0.9rem;">${proj.desc}</p>`;
        containerProject.appendChild(div);
    });

    // Render Sertifikat
    const containerCert = document.getElementById("disp-certificates");
    containerCert.innerHTML = "";
    data.certificates.forEach(cert => {
        const div = document.createElement("div");
        div.className = "item-card";
        div.innerHTML = `<i class="fa-solid fa-award" style="color: #06b6d4;"></i> ${cert}`;
        containerCert.appendChild(div);
    });
}

// Fitur Pencegahan Data & Jadwal Kosong (Form Submit Handler)
function handleFormSubmit(event) {
    event.preventDefault();

    const nama = document.getElementById("input-nama").value.trim();
    const jurusan = document.getElementById("input-jurusan").value.trim();
    const email = document.getElementById("input-email").value.trim();
    const bio = document.getElementById("input-bio").value.trim();
    const jadwal = document.getElementById("input-jadwal").value.trim();
    const alertBox = document.getElementById("alert-message");

    // Validasi pencegahan input kosong
    if (!nama || !jurusan || !email || !bio || !jadwal) {
        alertBox.style.display = "block";
        alertBox.style.backgroundColor = "#fef2f2";
        alertBox.style.color = "#ef4444";
        alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Gagal! Data atau Jadwal tidak boleh ada yang kosong.';
        return;
    }

    // Jika validasi sukses, perbarui data tampilan
    initialData.nama = nama;
    initialData.jurusan = jurusan;
    initialData.email = email;
    initialData.bio = bio;
    initialData.jadwal = [jadwal];

    renderPortfolio(initialData);

    // Tampilkan notifikasi sukses
    alertBox.style.display = "block";
    alertBox.style.backgroundColor = "#ecfdf5";
    alertBox.style.color = "#10b981";
    alertBox.style.borderColor = "#a7f3d0";
    alertBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> Data dan Jadwal Portofolio berhasil diperbarui!';
}

// Inisialisasi Tampilan Saat Halaman Dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderPortfolio(initialData);
});
