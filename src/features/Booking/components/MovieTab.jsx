import React, { Fragment, useEffect, useState } from "react";
import { movieServ } from "../../../services/movieService";
import { Tabs, Button } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const MovieTab = () => {
  const [dataMovie, setDataMovie] = useState([]);
  useEffect(() => {
    async function fetchScheduleByTheater() {
      let res = await movieServ.getScheduleByTheater();
      console.log(res);
      setDataMovie(res.data.content);
    }
    fetchScheduleByTheater();
  }, []);
  // chuyển trang
  const navigate = useNavigate();
  function goToBooking(id) {
    navigate("/seats/" + id);
  }
  // render antd tab
  let renderHeThongRap = () => {
    return dataMovie.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: <img className="w-16 h-16" src={heThongRap.logo} alt="img" />,
        children: (
          <Tabs
            style={{ height: "500px" }}
            tabPosition="left"
            items={heThongRap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.maCumRap,
                label: <div>{cumRap.tenCumRap}</div>,
                children: (
                  <Fragment>
                    {cumRap.danhSachPhim.map((movie) => {
                      return (
                        <div>
                          <h2>{movie.tenPhim}</h2>
                          {/* load suất chiếu */}
                          {movie.lstLichChieuTheoPhim.map((item) => {
                            return (
                              <Button key={item.maLichChieu} onClick={()=> {
                                goToBooking(item.maLichChieu)
                              }}>
                                {moment(item.ngayChieuGioChieu).format(
                                  "DD-MM hh:mm"
                                )}
                              </Button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Fragment>
                ),
              };
            })}
          />
        ),
      };
    });
  };
  return (
    <div className="container mx-auto">
      <Tabs tabPosition="left" items={renderHeThongRap()} />
    </div>
  );
};

export default MovieTab;
