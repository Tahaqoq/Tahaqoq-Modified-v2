import { finalResult } from "@/lib/utils/helpers";
import React from "react";

const Letter = ({ vehicle }: any) => {
  const result = finalResult(vehicle.result);
  return (
    <div className="px-16 py-16 text-base">
      <p className="text-xl font-bold">
        سعادة / مدير شعبة مرور <span>{vehicle.requestOrigin}</span>
      </p>
      <p>السلام عليكم ورحمة الله وبركاته</p>
      <p className="mt-16">
        اشارة الي خطابكم رقم{" "}
        <span className="px-1"> : {vehicle.requestNo}</span> بتاريخ{" "}
        <span className="px-1">{vehicle.requestDate}</span> بخصوص طلب المستفيد{" "}
        <span>/ {vehicle.owner}</span> حاسب الي رقم{" "}
        <span className="px-1"> : {vehicle.computerNo}</span>
        بتغيير طراز المركبة التالية :
      </p>
      <table className="w-full my-8">
        <thead className="">
          <tr className="">
            <th>نوع المركبة </th>
            <th>رقم اللوحة </th>
            <th>الموديل</th>
            <th>الطراز الحالي</th>
            <th>الطراز الجديد</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {vehicle.type} </td>
            <td> {vehicle.palette} </td>
            <td>{vehicle.modelYear}</td>
            <td> {vehicle.oldModel}</td>
            <td> {vehicle.newModel}</td>
          </tr>
        </tbody>
      </table>

      <p>
        نفيدكم بانه بعد اجراء الكشف علي المركبة المعدلة تبين ان المركبة المذكورة
        اعلاه
        <span className="px-1 font-bold">
          {result === "PASS" ? " مطابقة " : " غيرمطابقة "}
        </span>
        لمتطلبات اللوائح الفنية الخليجية ولا مانع من تحويل الطراز من{" "}
        <span className="px-1"> {vehicle.oldModel}</span> الي
        <span className="px-1"> {vehicle.newModel}</span>.
      </p>
    </div>
  );
};

export default Letter;
