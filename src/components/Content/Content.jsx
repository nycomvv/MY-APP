import React from "react";
import getBkd from "../../api/getBkd";
import { useEffect, useState } from "react";

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getBkd();
      setData(resp.data);
      console.log(resp);
      return resp;
    }
    showData();
  }, []);

  return (
    <div>
      {data.map((actor) => (
        <div className="container">
          <div className="card">
            {actor.name}
            <img width="40%" src={actor.img} alt="" srcset="" />
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
