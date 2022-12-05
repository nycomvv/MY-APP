import React from "react";
import getBkd from "../../api/getBkd";
import { useEffect, useState } from "react";

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getBkd();
      setData(resp.data);
      console.log(resp.data);
      return resp;
    }
    showData();
  }, []);

  return (
    <div className="container">
      {data.map((actor) => (
        <div className="card">
          {actor.name}
          <img width="30%" src={actor.img} alt="" srcset="" />
        </div>
      ))}
    </div>
  );
}
