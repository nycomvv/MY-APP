import React from 'react'
import getBkd from "../../api/getBkd"
import { useEffect, useState } from 'react';

export default function Content() {
const [data, setData] = useState([]);

    useEffect(() => {
        async function showData() {
            const resp = await getBkd();
            setData(resp);
            console.log(resp);
            return resp;
        }
        showData();
    }, []);

  return (
    <div></div>
  );
}
