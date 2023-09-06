import { useState } from "react";
import { AnnotationsViewer } from "react-img-annotation";
import { AnnotationsEditor } from "react-img-annotation";
import Input from "./Input";
const initialRectangles = [
    {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      fill: "transparent",
      id: "rect1",
    },
    {
      x: 150,
      y: 150,
      width: 300,
      height: 100,
      fill: "transparent",
      id: "rect2",
    },
  ];

function ImgAnnotation() {
  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <>
      <AnnotationsEditor
        onChange={(newattr) => {
          setRectangles((rectangles) =>
            rectangles.map((rect) => {
              if (rect.id === newattr.id) {
                return { ...rect, ...newattr };
              }
              return rect;
            })
          );
        }}
        onAddAnnotation={(annotation) => {
          setRectangles((rectangles) => [...rectangles, annotation]);
        }}
        image={"https://source.unsplash.com/random/800x600"}
        width={1144}
        height={643}
        options={[
          { label: "field one", value: "3" },
          { label: "field two", value: "4" },
        ]}
        disabledOptions={["field one"]}
        highlightedAnnotations={[]}
      />
    </>
  );
}

export default ImgAnnotation;
