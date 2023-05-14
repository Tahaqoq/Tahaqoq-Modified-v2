import { siteConfig } from "@/config/site";
import { arabicDate, finalResult, formatDate } from "@/lib/utils/helpers";
import Image from "next/image";

const Report = ({ vehicle }: any) => {
  const { createdAt } = vehicle;
  const result = finalResult(vehicle.result);

  return (
    <div className="flex flex-col justify-between h-full px-16 pt-8 pb-6 text-xs ">
      <header>
        <div className="flex items-start justify-between">
          {/* rigth section */}
          <div className="flex flex-col items-start justify-start flex-1">
            <h1 className="subtitle">شركة التحقق الدولية لفحص السيارات</h1>
            <h1>
              TAHAQOQ International Vehicle Inspection Center -{" "}
              {siteConfig.branch}
            </h1>
          </div>
          {/* middle section */}
          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="title">تقرير تفتيش مركبة معدلة</h1>
            <h1 className="mt-2">
              <span className="subtitle"> رقم التقرير: </span>
              <span>{vehicle.title}</span>
            </h1>
            <div className="flex items-center justify-center gap-2">
              <span className="subtitle">تاريخ:</span>
              <span>{formatDate(createdAt)}</span>
              <span className="subtitle">الموافق:</span>
              <span className="whitespace-nowrap">{arabicDate(createdAt)}</span>
            </div>
          </div>

          {/* left section */}
          <div className="flex items-center justify-end flex-1">
            <Image
              width={150}
              height={150}
              src={"/images/tahaqoq.jpeg"}
              alt="logo"
            />
          </div>
        </div>
      </header>
      <div className="w-full h-[1.5px] mt-2 bg-gray-500 "></div>
      <main className="">
        {/* معلومات المركبه */}
        <section className="mt-4">
          <h1 className="text-lg text-center  mb-0.5 title">
            معلومات المركبة :
          </h1>
          <table className="w-full mb-0.5 ">
            <tbody className="">
              <tr className="">
                <th className="w-[140px]"> رقـم الشاسيــة</th>
                <td>{vehicle.vin} </td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <table className="w-full [&_th]:w-[140px]">
              <tbody className="">
                <tr className="">
                  <th>رقــم اللوحـــة</th>
                  <td>{vehicle.palette} </td>
                  <th> اســم المـالك</th>
                  <td>{vehicle.owner} </td>
                </tr>
                <tr className="">
                  <th>نـوع المركبــة</th>
                  <td>{vehicle.type} </td>
                  <th> المـــوديل</th>
                  <td>{vehicle.modelYear} </td>
                </tr>

                <tr className="">
                  <th> رقــم الاحــالة</th>
                  <td>{vehicle.requestNo} </td>
                  <th> تاريخ الاحالة</th>
                  <td>{vehicle.requestDate} </td>
                </tr>
                <tr className="">
                  <th> مصدر الاحالة</th>
                  <td>{vehicle.requestOrigin} </td>
                  <th>رقـم الــحاسب</th>
                  <td>{vehicle.computerNo} </td>
                </tr>
                <tr>
                  <th> الطراز الحالي</th>
                  <td>{vehicle.oldModel} </td>
                  <th> الطراز الجديد</th>
                  <td>{vehicle.newModel} </td>
                </tr>
                <tr className="">
                  <th> اسم مركز التعديل</th>
                  <td>{vehicle.modifier} </td>
                  <th>رقم تقرير المركز</th>
                  <td>{vehicle.reportNo} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* نتائج التفتيش */}
        <section>
          <h1 className="mt-4 text-center title ">نتــائج الـتفـتـيش:</h1>
          <div>
            <p className="mb-2 text-sm font-bold underline underline-offset-2 ">
              المتطلبات الاساسية للمركبات المعدلة:
            </p>
            <div className="flex justify-start gap-4">
              <table className="flex-1 ">
                <tbody>
                  <tr>
                    <th>تم تعديل المركبة لدي منشأة مسجلة :</th>
                    <td className="px-4 min-w-[80px] text-center font-semibold ">
                      {vehicle.result.hasModificationReport === true
                        ? "نعم"
                        : "لا"}
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="flex-1">
                <tbody className="">
                  <tr className="border ">
                    <th> اللون</th>
                    <th> الوزن</th>
                    <th>الابعاد</th>
                  </tr>
                  <tr className="border [&_td]:min-w-[100px]">
                    <td>{vehicle.result.color} </td>
                    <td>{vehicle.result.weight} </td>
                    <td>{vehicle.result.dimensions} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="my-2 text-sm font-bold underline underline-offset-2 ">
              المتطلبات الفنية للمركبة المعدلة :
            </p>

            <div className="">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="">
                    <th>م</th>
                    <th>المرجع</th>
                    <th className="grow">البند</th>
                    <th className="text-center">تم التعديل</th>
                    <th className="text-center">النتيجة</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="">
                    <td> ١</td>
                    <td>1.3.4</td>
                    <td>المحرك</td>
                    <td className="font-medium text-center">
                      {vehicle.result.engine.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.engine.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ٢</td>
                    <td>2.3.4</td>
                    <td>نظام نقل الحركة</td>
                    <td className="font-medium text-center">
                      {vehicle.result.transmision.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.transmision.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ٣</td>
                    <td>3.3.4</td>
                    <td>انظمة العادم</td>
                    <td className="font-medium text-center">
                      {vehicle.result.exhaust.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.exhaust.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ٤</td>
                    <td>4.3.4</td>
                    <td>نظام الوقود</td>
                    <td className="font-medium text-center">
                      {vehicle.result.fuel.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.fuel.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ٥</td>
                    <td>5.3.4</td>
                    <td>نظام الفرامل</td>
                    <td className="font-medium text-center">
                      {vehicle.result.brake.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.brake.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ٦</td>
                    <td>6.3.4</td>
                    <td>الحواف والنتوءات الخارجية</td>
                    <td className="font-medium text-center">
                      {vehicle.result.edges.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.edges.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ٧</td>
                    <td>7.3.4</td>
                    <td>عجلة القيادة</td>
                    <td className="font-medium text-center">
                      {vehicle.result.steering.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.steering.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ٨</td>
                    <td>8.3.4</td>
                    <td>الاطارات والعجلات</td>
                    <td className="font-medium text-center">
                      {vehicle.result.wheels.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.wheels.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ٩</td>
                    <td>9.3.4</td>
                    <td>انظمة الترفية</td>
                    <td className="font-medium text-center">
                      {vehicle.result.entertainment.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.entertainment.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                  <tr className="">
                    <td> ١٠</td>
                    <td>10.3.4</td>
                    <td>الهيكل والشاسية</td>
                    <td className="font-medium text-center">
                      {vehicle.result.chassis.modification ? "نعم" : "لا"}
                    </td>
                    <td className="font-medium text-center">
                      {vehicle.result.chassis.pass ? "مطابق" : "غيرمطابق"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* final result */}
        <section className="flex items-center justify-center mt-3">
          <table>
            <tbody>
              <tr>
                <th className="px-4 py-2 bg-gray-50">النتيجة النهائية</th>
                <td className="px-4 subtitle">
                  {result === "PASS" ? "مطابقة" : "غيرمطابقة"}{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* notes section */}
        <div className="w-full p-2 mt-2 border ">
          <span className="subtitle"> ملاحظات: </span>
          <span>{vehicle.result.remarks || "............"}</span>
        </div>
        {/* manager section */}
        <section className="relative flex gap-10 mt-4">
          <div className="">
            <h1>
              <span className="subtitle">المدير الفني :</span>
              <span className="text-sm"> عبدالحكيم البريه</span>
            </h1>
            <h1>
              <span className="subtitle "> التوقيع :</span>{" "}
              {/* <Image
                src="/images/sign.png"
                width={120}
                height={120}
                alt="sign"
                className="relative right-16 -top-4"
              /> */}
            </h1>
          </div>
          {/* <Image
            src="/images/stamp.png"
            width={150}
            height={150}
            alt="sign"
            className="absolute bottom-2 left-80"
          /> */}
        </section>
      </main>
      <footer className="-mt-2">
        <div className="w-full h-[1.5px] mb-2 bg-gray-500 " />

        <div className="flex items-start justify-between">
          <div className="flex-1 text-sm">
            <h1>مركز التحقق الدولية لفحص السيارات {siteConfig.ar_branch}</h1>
            <h1>العنوان : {siteConfig.ar_address}</h1>
            <h1>الهاتف : {siteConfig.phone}</h1>
            <h1>ايميل : {siteConfig.email}</h1>
          </div>
          <div className="flex flex-col items-center justify-between flex-1">
            <Image
              width={150}
              height={150}
              src={"/images/tahaqoq.jpeg"}
              alt="logo"
            />
            <span className="text-sm">صفحة ١ من ١</span>
          </div>
          <div className="flex-1 text-end">
            <h1>TAHAQOQ Vehicle Inspection Center {siteConfig.branch}</h1>
            <h1>Address: {siteConfig.address}</h1>
            <h1> Phone: {siteConfig.phone}</h1>
            <h1>Email : {siteConfig.email}</h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Report;
