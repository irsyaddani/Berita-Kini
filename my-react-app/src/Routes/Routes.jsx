import Beranda from "../Pages/Beranda"
import KategoriBerita from "../Pages/KategoriBerita"
import DetailBerita from "../Pages/DetailBerita"

const base = "/Berita-Kini";

const routes = [
    { name: "Beranda", path: `${base}/`, component: <Beranda /> },
  {
    name: "Nasional",
    path: `${base}/nasional`,
    component: <KategoriBerita category="Nasional" />,
  },
  {
    name: "Internasional",
    path: `${base}/internasional`,
    component: <KategoriBerita category="Internasional" />,
  },
  {
    name: "Ekonomi",
    path: `${base}/ekonomi`,
    component: <KategoriBerita category="Ekonomi" />,
  },
  {
    name: "Olahraga",
    path: `${base}/olahraga`,
    component: <KategoriBerita category="Olahraga" />,
  },
  {
    name: "Teknologi",
    path: `${base}/teknologi`,
    component: <KategoriBerita category="Teknologi" />,
  },
  {
    name: "Hiburan",
    path: `${base}/hiburan`,
    component: <KategoriBerita category="Hiburan" />,
  },
  {
    name: "Gaya Hidup",
    path: `${base}/gaya-hidup`,
    component: <KategoriBerita category="Gaya Hidup" />,
  },
  { name: "Post Detail", path: `${base}/post/:title`, component: <DetailBerita /> },
]

export default routes