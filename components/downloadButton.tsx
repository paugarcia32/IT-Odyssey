'use client'

import {Button} from "@nextui-org/react";
import { DownloadIcon } from "./icons";

interface DownloadButtonProps {
  slug: string;
}

const DownloadButton = (props: DownloadButtonProps) => {
  // const PDFFile = window.location.origin + `/docs/${props.slug}.pdf`;
  const baseURL = 'https://it-odyssey.vercel.app';
  // const baseURL = process.env.BASE_URL || 'http://localhost:3000';
  const PDFFile = `${baseURL}/docs/${props.slug}.pdf`;


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
      <Button radius="md" className="bg-accent hover:bg-primary text-background  font-body" onClick={handleDownloadClick} startContent={<DownloadIcon/>}>
        Download PDF
      </Button>
  );
};

export default DownloadButton;
