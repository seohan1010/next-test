'use client';

import { useState } from 'react';
import ExcelViewer from '../../components/ExcelViewer';
import { parseExcel } from '../../utils/parseExcel'

export default function Home() {
  const [data, setData] = useState<string[][]>([]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const buffer = await file.arrayBuffer();
    const result = parseExcel(buffer);
    setData(result);
  };

  return (
    <div style={{margin:'auto',textAlign:'center'}}>
      <h1 className="text-xl font-bold mb-4">Excel 파일 업로드</h1>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        className="mb-4"
      />

      {data.length > 0 && (
        <div style={{textAlign:"center", margin:'auto', border: '1px solid black'}}>
          <h2 className="text-lg font-semibold mb-2">표 출력</h2>
          <ExcelViewer data={data} />
        </div>
      )}
      <div>
        
      </div>
    </div>
  );
}
