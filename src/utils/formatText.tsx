import React from 'react';

export const formatText = (text: string): React.ReactNode => {
  // Dividir el texto en párrafos
  const paragraphs: string[] = text.split('\n\n');

  // Procesar cada párrafo
  return paragraphs.map((paragraph: string, index: number) => (
    <React.Fragment key={index}>
      {paragraph.split('\n').map((line: string, lineIndex: number) => (
        <React.Fragment key={lineIndex}>
          {line}
          <br />
        </React.Fragment>
      ))}
      <br />
    </React.Fragment>
  ));
};
