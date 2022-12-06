import React from "react";
import getBkd from "../../api/getBkd";
import { useEffect, useState } from "react";

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getBkd();
      setData(resp.data.tv_shows);
      //console.log(resp.data.tv_shows);
      return resp;
    }
    showData();
  }, []);

  return (
    <div className="container">
      {data.map((serie) => (
        <div className="card">
         <b> {serie.name} <br />({serie.network})</b>
        <img width="35%" src={serie.image_thumbnail_path} alt="" srcset="" />
         <br /> {serie.start_date} <br /> {serie.status}
        </div>
      ))}
    </div>
  );
}
