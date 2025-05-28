'use client';

import { useState } from 'react';

const FileViewerPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    // 브라우저 메모리 내 임시 URL 생성
    const objectUrl = URL.createObjectURL(selectedFile); console.log(objectUrl);
    setPreviewUrl(objectUrl);
  };

  const renderPreview = () => {
    if (!file || !previewUrl) return null;

    const fileName = file.name.toLowerCase();

    if (file.type === 'application/pdf') {
      return <iframe src={previewUrl} width="100%" height="500px" />;
      // return <div>{previewUrl}</div>;
    }

    if (file.type.startsWith('image/')) {
      return <img src={previewUrl} alt="Uploaded preview" style={{ maxHeight: '400px' }} />;
    }

    if (
      fileName.endsWith('.xlsx') ||
      fileName.endsWith('.xls') ||
      fileName.endsWith('.ppt') ||
      fileName.endsWith('.pptx')
    ) {
      return (
        <div>
          <p>📄 Microsoft 파일은 Office Online Viewer에서만 미리보기가 가능합니다.</p>
          <p>⚠️ 로컬 파일(blob:)은 Viewer에서 작동하지 않습니다.</p>
          <p>
            파일을 서버에 업로드한 뒤, 퍼블릭 URL을 통해 아래 Viewer에 연결해야 합니다:
          </p>
          <code className="text-sm text-gray-600">
            https://view.officeapps.live.com/op/view.aspx?src=https://docs.google.com/presentation/d/1SbllySga8WExL2q47UOK3Cl7MJ-rmv2GSFpadEwIdZs/edit?usp=sharing
          </code>
          <iframe 
                 src='https://docs.google.com/presentation/d/1SbllySga8WExL2q47UOK3Cl7MJ-rmv2GSFpadEwIdZs/edit?usp=drive_link'
                 width="100%"
                 height="600px"
                 >
          </iframe>
        </div>
      );
    }

    if (fileName.endsWith('.hwp')) {
      return (
        <div>
          <p>📄 HWP 파일은 브라우저 미리보기를 지원하지 않습니다.</p>
          <a href={previewUrl} download className="text-blue-600 underline">
            다운로드 하기
          </a>
        </div>
      );
    }

    return <p>❓ 이 파일 형식은 미리보기를 지원하지 않습니다.</p>;
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">파일 업로드 및 미리보기</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <div className="border rounded p-4 bg-gray-50 shadow">{renderPreview()}</div>
    </div>
  );
}


export default FileViewerPage;