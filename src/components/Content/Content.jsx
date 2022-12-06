import React from "react";
import getBkd from "../../api/getBkd";
import { useEffect, useState } from "react";

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getBkd();
      setData(resp.tv_shows);
      console.log(resp);
      return resp;
    }
    showData();
  }, []);

  return (
    <div className="container">
      {data.map((actor) => (
        <div className="card">{actor.name}</div>
      ))}
    </div>
  );
}
