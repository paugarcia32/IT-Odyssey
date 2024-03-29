'use client'

import {Button} from "@nextui-org/react";
import { DownloadIcon } from "./icons";

interface DownloadButtonProps {
  slug: string;
}

const DownloadButton = (props: DownloadButtonProps) => {
  const PDFFile = `/docs/${props.slug}.pdf`;


  const downloadPDF = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${props.slug}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadClick = () => {
    downloadPDF(PDFFile);
  };

  return (
      <Button radius="md" className="bg-accent-500 hover:bg-accent-600 text-background dark:bg-accent-400 dark:hover:accent-300 font-body" onClick={handleDownloadClick} startContent={<DownloadIcon/>}>
        Download PDF
      </Button>
  );
};

export default DownloadButton;
