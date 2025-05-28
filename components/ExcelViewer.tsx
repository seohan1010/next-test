// components/ExcelViewer.tsx
export default function ExcelViewer({ data }: { data: string[][] }) {
    return (
      <div  style={{margin: 'auto',textAlign:'center',border: '1px solid black'}}>
        <table style={{border:'1px solid black',margin:'auto'}}>
          <tbody style={{margin: '0px', padding:'0px'}}>
            {data.map((row, rowIndex) => (
              <tr style={{margin:'0px'}} key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{border:'1px solid black',margin:'0px'}}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  