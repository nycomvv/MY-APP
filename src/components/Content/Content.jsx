import React from 'react'
import { useEffect } from 'react';

export default function Content() {
    useEffect(() => {
        async function showData() {
            const resp = await getBkd();
            console.log(resp);
            return resp;
        }
        showData();
    }, []);

  return (
    <div>
      
    </div>
  )
}
