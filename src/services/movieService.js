import { https } from "./config";

export const movieServ = {
  getBanners: () => https.get("/QuanLyPhim/LayDanhSachBanner"),
  getMoviePagination: (pageSize, pageIndex) => {
    return https.get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
      params: {
        maNhom: "GP01",
        soTrang: pageIndex,
        // soTrang, // object literal
        soPhanTuTrenTrang: pageSize,
      },
    });
  },
  getScheduleByTheater: () => {
    const url = "/QuanLyRap/LayThongTinLichChieuHeThongRap";
    return https.get(url, {
      params: {
        maNhom: "GP01",
      },
    });
  },
  getScheduleDetail(id) {
    const url = '/QuanLyDatVe/LayDanhSachPhongVe'
    return https.get(url, {
      params:{
        MaLichChieu: id
      }
    })
  }
};

