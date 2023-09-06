import React, { useState } from 'react';
import { Annotation, IAnnotation } from 'react-mark-image';

function MarkAnnotation() {
  const [annotations, setAnnotations] = useState([]);

  return (
    <Annotation
      src={"https://source.unsplash.com/random/800x600"}
      alt="Cats"
      annotations={annotations}
      onAnnotationsUpdate={setAnnotations}
      allowTouch
    />
  );
}

export default MarkAnnotation