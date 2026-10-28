export interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
  content: string;
  author: string;
  category?: string;
}

export const articles: Article[] = [
  {
    slug: "tips-produktif-di-coworking-space",
    title: "5 Tips Produktif Bekerja di Coworking Space",
    date: "2026-10-10",
    summary: "Temukan cara memaksimalkan produktivitas Anda saat bekerja di coworking space dengan tips praktis ini.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    author: "Admin",
    content: `Bekerja di coworking space menawarkan fleksibilitas dan lingkungan yang inspiratif. Namun, tanpa strategi yang tepat, produktivitas bisa terganggu. Berikut adalah lima tips untuk memaksimalkan waktu kerja Anda di coworking space.

**1. Pilih Spot yang Tepat**
Setiap orang memiliki preferensi berbeda. Jika Anda butuh fokus, pilih area yang lebih tenang. Jika butuh energi dan inspirasi, duduk di area komunal bisa menjadi pilihan.

**2. Gunakan Noise-Cancelling Headphone**
Coworking space bisa ramai. Headphone dengan fitur noise-cancelling membantu Anda tetap fokus tanpa terganggu suara sekitar.

**3. Tetapkan Jadwal Kerja**
Meski fleksibel, tetapkan jam kerja yang konsisten. Ini membantu membangun rutinitas dan menjaga work-life balance.

**4. Manfaatkan Fasilitas**
Meeting room, printer, pantry — gunakan semua fasilitas yang tersedia untuk mendukung pekerjaan Anda.

**5. Networking**
Salah satu keunggulan coworking space adalah komunitas. Jangan ragu untuk berkenalan dan membangun koneksi baru.`,
  },
  {
    slug: "menu-kopi-terbaru-workspace",
    title: "Menu Kopi Terbaru di Workspace Cafe",
    date: "2026-10-05",
    summary: "Kami hadirkan varian kopi baru yang terinspirasi dari biji kopi lokal Nusantara. Wajib dicoba!",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    author: "Admin",
    content: `Workspace Cafe kembali menghadirkan inovasi dengan menu kopi terbaru yang terinspirasi dari kekayaan biji kopi Nusantara. Setiap cangkir menceritakan kisah dari petani lokal yang kami dukung.

**Flores Single Origin**
Biji kopi dari Flores dengan notes coklat, rempah, dan sedikit fruity. Disajikan sebagai pour-over atau cold brew.

**Sumatera Honey Process**
Proses honey memberikan karakter manis alami dengan body yang full. Cocok untuk pecinta kopi dengan rasa yang bold.

**Java Signature Blend**
Campuran khas kami dari biji Jawa dan Bali. Seimbang antara acidity dan sweetness, perfect untuk everyday coffee.

Kunjungi cafe kami dan rasakan pengalaman kopi yang berbeda!`,
  },
  {
    slug: "workshop-digital-marketing-2026",
    title: "Recap: Workshop Digital Marketing 2026",
    date: "2026-09-28",
    summary: "Workshop digital marketing yang dihadiri 50+ peserta sukses diselenggarakan. Simak highlight-nya!",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    author: "Admin",
    content: `Workshop Digital Marketing 2026 yang kami selenggarakan pada akhir September lalu sukses dihadiri oleh lebih dari 50 peserta dari berbagai latar belakang bisnis.

**Topik yang Dibahas:**
- Social Media Strategy untuk UMKM
- Content Marketing yang Efektif
- Google Ads & Meta Ads untuk Pemula
- Analytics & Pengukuran ROI

**Highlight:**
Workshop ini menghadirkan praktisi berpengalaman yang memberikan insight langsung dari lapangan. Peserta tidak hanya mendapat teori, tetapi juga hands-on practice langsung.

Terima kasih kepada seluruh peserta dan pembicara. Nantikan workshop selanjutnya!`,
  },
  {
    slug: "kolaborasi-komunitas-kreatif",
    title: "Kolaborasi Bersama Komunitas Kreatif Lokal",
    date: "2026-09-20",
    summary: "Workspace membuka pintu kolaborasi dengan komunitas kreatif lokal untuk event dan program bersama.",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    author: "Admin",
    content: `Kami percaya bahwa kolaborasi adalah kunci pertumbuhan. Oleh karena itu, Workspace membuka kesempatan bagi komunitas kreatif lokal untuk berkolaborasi dalam berbagai program.

**Bentuk Kolaborasi:**
- Co-hosting event dan workshop
- Penggunaan space untuk kegiatan komunitas
- Program mentoring bersama
- Pameran dan showcase karya

**Komunitas yang Sudah Bergabung:**
Saat ini, kami telah berkolaborasi dengan komunitas desain grafis, fotografi, startup, dan penulisan kreatif.

Jika komunitas Anda tertarik untuk berkolaborasi, hubungi kami melalui halaman Kolaborasi atau datang langsung ke Workspace!`,
  },
  {
    slug: "desain-interior-workspace-baru",
    title: "Transformasi Interior Workspace: Lebih Fresh & Modern",
    date: "2026-09-15",
    summary: "Workspace baru saja merenovasi interior dengan konsep biophilic design. Lebih hijau, lebih segar!",
    thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    author: "Admin",
    content: `Workspace telah menyelesaikan renovasi interior dengan konsep biophilic design — mengintegrasikan unsur alam ke dalam ruang kerja modern.

**Apa yang Berubah:**
- Penambahan tanaman indoor di setiap area
- Pencahayaan alami yang dimaksimalkan
- Material kayu dan batu alam untuk furnitur
- Area outdoor workspace baru
- Vertical garden di area lounge

Konsep ini bukan hanya soal estetika, tetapi juga kesehatan dan produktivitas. Riset menunjukkan bahwa ruang kerja dengan elemen alam dapat meningkatkan kreativitas hingga 15%.

Datang dan rasakan suasana baru Workspace!`,
  },
  {
    slug: "panduan-memilih-coworking-space",
    title: "Panduan Memilih Coworking Space yang Tepat",
    date: "2026-09-08",
    summary: "Bingung memilih coworking space? Simak panduan lengkap kami untuk menemukan tempat kerja ideal Anda.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    author: "Admin",
    content: `Memilih coworking space yang tepat bisa menjadi keputusan penting untuk produktivitas dan kenyamanan kerja Anda. Berikut panduan lengkapnya.

**1. Lokasi**
Pilih yang mudah diakses dan dekat dengan transportasi umum. Pertimbangkan juga area parkir jika Anda membawa kendaraan.

**2. Fasilitas**
Pastikan coworking space memiliki WiFi yang stabil, meja dan kursi ergonomis, meeting room, dan pantry.

**3. Komunitas**
Lingkungan yang mendukung sangat penting. Coworking space dengan komunitas aktif bisa menjadi nilai tambah besar.

**4. Harga**
Bandingkan paket yang ditawarkan. Beberapa menyediakan day pass, weekly, hingga monthly membership.

**5. Suasana**
Kunjungi dulu sebelum memutuskan. Pastikan suasananya sesuai dengan gaya kerja Anda.`,
  },
];

export interface Program {
  title: string;
  description: string;
  schedule: string;
  image: string;
}

export const programs: Program[] = [
  {
    title: "Digital Marketing Bootcamp",
    description: "Program intensif 4 minggu untuk menguasai strategi pemasaran digital. Mencakup social media, SEO, dan paid advertising.",
    schedule: "Setiap Senin & Rabu, 19:00 - 21:00",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "UI/UX Design Workshop",
    description: "Belajar merancang antarmuka digital yang intuitif dan menarik. Dari riset pengguna hingga prototyping dengan Figma.",
    schedule: "Setiap Sabtu, 10:00 - 14:00",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
  },
  {
    title: "Photography Masterclass",
    description: "Kuasai teknik fotografi dari dasar hingga advanced. Termasuk editing dengan Lightroom dan komposisi visual.",
    schedule: "Setiap Jumat, 15:00 - 17:00",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop",
  },
  {
    title: "Startup Weekend",
    description: "Program akhir pekan untuk validasi ide bisnis Anda. Mentoring dari praktisi, pitch deck, dan networking.",
    schedule: "Setiap bulan, Sabtu - Minggu",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
  {
    title: "Creative Writing Club",
    description: "Komunitas menulis kreatif untuk mengasah kemampuan storytelling. Sharing session dan workshop reguler.",
    schedule: "Setiap Kamis, 18:00 - 20:00",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
  },
  {
    title: "Public Speaking Training",
    description: "Tingkatkan kepercayaan diri berbicara di depan umum. Latihan presentasi, storytelling, dan komunikasi efektif.",
    schedule: "Setiap Selasa, 19:00 - 21:00",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Andi Pratama",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sari Dewi",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Budi Santoso",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Maya Sari",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", alt: "Coworking space area" },
  { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop", alt: "Meeting room" },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop", alt: "Cafe corner" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", alt: "Workshop session" },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop", alt: "Community event" },
  { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop", alt: "Open workspace" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop", alt: "Presentation area" },
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop", alt: "Lounge area" },
  { src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop", alt: "Design workshop" },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop", alt: "Photography class" },
  { src: "https://images.unsplash.com/photo-1517502884422-41eae6c63f6e?w=800&h=600&fit=crop", alt: "Outdoor area" },
];

export const testimonials = [
  {
    name: "Rina Kusuma",
    role: "Freelance Designer",
    quote: "Workspace adalah tempat favorit saya untuk bekerja. Suasananya nyaman, kopinya enak, dan komunitasnya supportive!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dimas Wahyu",
    role: "Startup Founder",
    quote: "Sejak pindah ke Workspace, produktivitas tim kami meningkat drastis. Fasilitas lengkap dan harga terjangkau.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Ayu Lestari",
    role: "Content Creator",
    quote: "Workshop dan kelas di Workspace sangat berkualitas. Saya belajar banyak hal baru dan mendapat banyak koneksi.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Fajar Ramadhan",
    role: "Senior Software Engineer",
    quote: "Koneksi internet fiber optic-nya sangat stabil untuk deployment & video call seharian. Private meeting booth-nya penyelamat saat sprint review!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Nadya Putri",
    role: "Managing Director, Creative Labs",
    quote: "Kami rutin mengadakan sesi workshop mingguan di Workspace. Timnya sangat responsif dan fasilitas audionya sangat profesional.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Reza Pratama",
    role: "Remote Business Consultant",
    quote: "Kombinasi cafe dengan kopi artisan dan coworking space yang tenang ini adalah yang terbaik di kota. Klien saya selalu terkesan saat meeting di sini.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
];

