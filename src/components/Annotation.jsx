import { useEffect, useState } from "react";
import { ReactPictureAnnotation } from "react-picture-annotation";
import Input from "./Input";
import { style } from "./Style";

// const intialData = [
//   {
//     id: "12",
//     mark: {
//       type: "RECT",
//       x: 10,
//       y: 10,
//       width: 50,
//       height: 50,
//     },
//   },
//   {
//     id: "123",
//     mark: {
//       type: "RECT",
//       x: 70,
//       y: 70,
//       width: 50,
//       height: 50,
//     },
//   },
// ];

const intialData = [
    {
        "rect": {
          "x1": 199,
          "y1": 109,
          "x2": 407,
          "y2": 162
        },
        "value": "Invoice",
        "label": ""
      },
      {
        "rect": {
          "x1": 416,
          "y1": 115,
          "x2": 514,
          "y2": 169
        },
        "value": "no:",
        "label": ""
      },
      {
        "rect": {
          "x1": 528,
          "y1": 114,
          "x2": 806,
          "y2": 162
        },
        "value": "61356291",
        "label": "header:invoice_no"
      },
      {
        "rect": {
          "x1": 195,
          "y1": 209,
          "x2": 317,
          "y2": 264
        },
        "value": "Date",
        "label": ""
      },
      {
        "rect": {
          "x1": 317,
          "y1": 209,
          "x2": 381,
          "y2": 269
        },
        "value": "of",
        "label": ""
      },
      {
        "rect": {
          "x1": 381,
          "y1": 212,
          "x2": 519,
          "y2": 264
        },
        "value": "issue:",
        "label": ""
      },
      {
        "rect": {
          "x1": 1204,
          "y1": 215,
          "x2": 1469,
          "y2": 264
        },
        "value": "09/06/2012",
        "label": "header:invoice_date"
      },
      {
        "rect": {
          "x1": 199,
          "y1": 668,
          "x2": 382,
          "y2": 720
        },
        "value": "Seller:",
        "label": ""
      },
      {
        "rect": {
          "x1": 1239,
          "y1": 665,
          "x2": 1426,
          "y2": 716
        },
        "value": "Client:",
        "label": ""
      },
      {
        "rect": {
          "x1": 210,
          "y1": 756,
          "x2": 755,
          "y2": 918
        },
        "value": "Chapman, Kim and Green 64731 James Branch Smithmouth, NC 26872",
        "label": "header:seller"
      },
      {
        "rect": {
          "x1": 1247,
          "y1": 763,
          "x2": 1735,
          "y2": 918
        },
        "value": "Rodriguez-Stevens 2280 Angela Plain Hortonshire, MS 93248",
        "label": "header:client"
      },
      {
        "rect": {
          "x1": 1246,
          "y1": 968,
          "x2": 1336,
          "y2": 1025
        },
        "value": "Tax",
        "label": ""
      },
      {
        "rect": {
          "x1": 1334,
          "y1": 968,
          "x2": 1397,
          "y2": 1025
        },
        "value": "Id:",
        "label": ""
      },
      {
        "rect": {
          "x1": 366,
          "y1": 972,
          "x2": 639,
          "y2": 1020
        },
        "value": "949-84-9105",
        "label": "header:seller_tax_id"
      },
      {
        "rect": {
          "x1": 1406,
          "y1": 972,
          "x2": 1680,
          "y2": 1020
        },
        "value": "939-98-8477",
        "label": "header:client_tax_id"
      },
];

function Annotation() {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = (selectedId) => console.log(selectedId);
  const onChange = (data) => {
    console.log(data);
  };

  const conversion = ()=>{
    const convertedData = [] 
    intialData.map((data)=>{
        const dataObject = {
            id: Math.random(),
            mark:{
                type: "RECT",
                width :Math.abs(data.rect.x2-data.rect.x1),
                height: Math.abs(data.rect.y2-data.rect.y1),
                x: Math.min(data.rect.x1,data.rect.x2),
                y:Math.min(data.rect.y1,data.rect.y2)
            }
        }
        convertedData.push(dataObject)
        return 
    })
    setData(convertedData)
    console.log(convertedData)
  }

  useEffect(()=>{
    conversion()
  },[])

  return (
    <div className="App">
      <ReactPictureAnnotation
        image="http://192.168.2.48:8000/users/images/images.png"
        onSelect={onSelect}
        onChange={onChange}
        width={pageSize.width}
        height={pageSize.height}
        // width={1366}
        // height={768}
        annotationStyle={style}
        annotationData={data}
        inputElement={(data) => {
          return (
            <>
              <Input id={data.id} />
            </>
          );
        }}
      />
    </div>
  );
}

export default Annotation;
