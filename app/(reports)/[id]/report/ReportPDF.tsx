"use client";
import { siteConfig } from "@/config/site";
import {
  Document,
  Page,
  Text,
  Image,
  Font,
  StyleSheet,
  PDFViewer,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Noto",
  fonts: [
    {
      src: "/fonts/NotoNaskhArabic/NotoNaskhArabic-Regular.ttf",
      fontWeight: "regular",
    },
    {
      src: "/fonts/NotoNaskhArabic/NotoNaskhArabic-Medium.ttf",
      fontWeight: "medium",
    },
    {
      src: "/fonts/NotoNaskhArabic/NotoNaskhArabic-SemiBold.ttf",
      fontWeight: "semibold",
    },
    {
      src: "/fonts/NotoNaskhArabic/NotoNaskhArabic-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "/fonts/Inter/Inter-Regular.ttf",
      fontWeight: "regular",
    },
    {
      src: "/fonts/Inter/Inter-Medium.ttf",
      fontWeight: "medium",
    },
    {
      src: "/fonts/Inter/Inter-SemiBold.ttf",
      fontWeight: "semibold",
    },
    {
      src: "/fonts/Inter/Inter-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh",
    border: "none",
  },
  document: { fontFamily: "Noto", color: "#000", lineHeight: 1.65 },
  page: {
    display: "flex",
    padding: "0.4in 0.4in",
    fontSize: 10,
    backgroundColor: "#fff",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerMiddle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  logo: {
    width: "120px",
    height: "auto",
  },
  signture: {
    marginTop: 8,
    textAlign: "right",
  },

  dividerLG: {
    width: "100%",
    height: 1,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#e5e5e5",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  tableCol: {
    paddingVertical: 1,
    textAlign: "right",
    paddingRight: 4,
    paddingLeft: 2,
    border: "1px solid #e5e5e5",
  },
  tableHead: {
    paddingVertical: 1,
    textAlign: "right",
    paddingRight: 4,
    paddingLeft: 2,
    fontSize: 10,
    backgroundColor: "#FDFDFD",
    fontWeight: "semibold",
    border: "1px solid #e5e5e5",
  },
  footer: {
    borderTop: "1px solid #e5e5e5",
    paddingTop: 8,
    marginTop: "auto",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  title: { fontSize: 14, fontWeight: "semibold" },
  subHeading: {
    fontSize: 12,
    fontWeight: "medium",
    textDecoration: "underline",
    marginBottom: 8,
  },
  headText: { fontSize: 12, fontWeight: "bold" },
  subtitle: { fontSize: 10, fontWeight: "semibold" },
  tableHeadText: { fontSize: 12, fontWeight: "medium" },
  tableCellText: { fontSize: 10, fontWeight: "normal" },
});

const Report = ({ data }: any) => {
  const vehicle = JSON.parse(data);

  return (
    <PDFViewer style={styles.viewer}>
      <Document
        style={styles.document}
        subject="Report"
        creator="Tahaqoq International Co."
        author="Tahaqoq International Co."
        title={vehicle.title}
      >
        <Page style={styles.page} size="A4">
          <HeaderSection vehicle={vehicle} />
          <VehicleInfoSection vehicle={vehicle} />
          <VehicleResultSection vehicle={vehicle} />
          <FinalResult finalResult={vehicle.finalResult} />
          <NoteSection vehicle={vehicle} />
          <ManagerSection />
          <FooterSection />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Report;

const HeaderSection = ({ vehicle }: any) => {
  return (
    <View>
      <View style={styles.header}>
        <Image src="/images/tahaqoq.jpeg" style={styles.logo} />
        <View style={[styles.headerMiddle]}>
          <Text style={[styles.headText]}>تقرير تفتيش مركبة معدلة</Text>
          <Text>
            <Text>
              {vehicle.title}
              {`  `}
            </Text>
            <Text style={[styles.subtitle]}>رقم التقرير:</Text>
          </Text>
          <View style={styles.dateContainer}>
            <Text>
              <Text>
                {vehicle.date} {`  `}
              </Text>
              <Text style={styles.subtitle}>التاريخ:</Text>
            </Text>
            <Text>
              <Text>
                {vehicle.arabicDate} {`  `}
              </Text>
              <Text style={styles.subtitle}>الموافق:</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.headerRight, styles.subtitle]}>
          <Text style={[styles.headText, { fontWeight: "semibold" }]}>
            مركز التحقق الدولية لفحص المركبات
          </Text>
          <Text>TAHAQOQ International Vehicle</Text>
          <Text> Inspection Center - {siteConfig.branch}</Text>
        </View>
      </View>
      <View style={styles.dividerLG} />
    </View>
  );
};

const VehicleInfoSection = ({ vehicle }: any) => {
  return (
    <View>
      <Text style={[styles.title, { textAlign: "center" }]}>
        معلومات المركبة :
      </Text>
      <View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHead, { width: "30%" }]}>
            رقـم الشاسيــة{" "}
          </Text>
          <Text
            style={[
              styles.tableCol,
              { width: "70%", fontFamily: "Inter", borderRight: "none" },
            ]}
          >
            {vehicle.vin}
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableHead, { width: "20%" }]}>
              رقــم اللوحـــة{" "}
            </Text>
            <Text
              style={[styles.tableCol, { width: "30%", borderRight: "none" }]}
            >
              {vehicle.palette}
            </Text>
            <Text
              style={[styles.tableHead, { width: "20%", borderRight: "none" }]}
            >
              اســم المـالك
            </Text>
            <Text
              style={[styles.tableCol, { width: "30%", borderRight: "none" }]}
            >
              {vehicle.owner}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[styles.tableHead, { width: "20%", borderTop: "none" }]}
            >
              نـوع المركبــة
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.type}
            </Text>
            <Text
              style={[
                styles.tableHead,
                { width: "20%", borderTop: "none", borderRight: "none" },
              ]}
            >
              المـــوديل
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.modelYear}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[styles.tableHead, { width: "20%", borderTop: "none" }]}
            >
              رقــم الاحــالة
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.requestNo}
            </Text>
            <Text
              style={[
                styles.tableHead,
                { width: "20%", borderTop: "none", borderRight: "none" },
              ]}
            >
              تاريخ الاحالة
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.requestDate}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[styles.tableHead, { width: "20%", borderTop: "none" }]}
            >
              مصدر الاحالة
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.requestOrigin}
            </Text>
            <Text
              style={[
                styles.tableHead,
                { width: "20%", borderTop: "none", borderRight: "none" },
              ]}
            >
              رقـم الــحاسب
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.computerNo}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[styles.tableHead, { width: "20%", borderTop: "none" }]}
            >
              الطراز الحالي
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.oldModel}
            </Text>
            <Text
              style={[
                styles.tableHead,
                { width: "20%", borderTop: "none", borderRight: "none" },
              ]}
            >
              الطراز الجديد
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.newModel}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[styles.tableHead, { width: "20%", borderTop: "none" }]}
            >
              اسم مركز التعديل
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.modifier}
            </Text>
            <Text
              style={[
                styles.tableHead,
                { width: "20%", borderTop: "none", borderRight: "none" },
              ]}
            >
              رقم تقرير المركز
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "30%", borderTop: "none", borderRight: "none" },
              ]}
            >
              {vehicle.reportNo}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const VehicleResultSection = ({ vehicle }: any) => {
  return (
    <View>
      <Text style={[styles.title, { textAlign: "center", marginTop: 5 }]}>
        نتــائج الـتفـتـيش:
      </Text>
      <View>
        <Text style={[styles.subHeading, { textAlign: "right" }]}>
          المتطلبات الاساسية للمركبات المعدلة:
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "10px",
          }}
        >
          <View style={[styles.tableRow, { width: "50%" }]}>
            <Text
              style={[
                styles.tableHead,
                {
                  width: "80%",
                  borderLeft: "none",
                  paddingVertical: 10,
                },
              ]}
            >
              تم تعديل المركبة لدي منشأة مسجلة :
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "20%", paddingVertical: 10, textAlign: "center" },
              ]}
            >
              {vehicle.result.hasModificationReport === true ? "نعم" : "لا"}
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <View style={[styles.tableRow]}>
              <Text
                style={[
                  styles.tableHead,
                  { width: "34%", borderLeft: "none", borderBottom: "none" },
                ]}
              >
                اللون
              </Text>
              <Text
                style={[
                  styles.tableHead,
                  { width: "33%", borderLeft: "none", borderBottom: "none" },
                ]}
              >
                الوزن
              </Text>
              <Text
                style={[
                  styles.tableHead,
                  { width: "33%", borderBottom: "none" },
                ]}
              >
                الابعاد
              </Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text
                style={[styles.tableCol, { width: "34%", borderLeft: "none" }]}
              >
                {vehicle.result.color}
              </Text>
              <Text
                style={[styles.tableCol, { width: "33%", borderLeft: "none" }]}
              >
                {vehicle.result.weight}
              </Text>
              <Text style={[styles.tableCol, { width: "33%" }]}>
                {vehicle.result.dimensions}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={[styles.subHeading, { textAlign: "right" }]}>
          المتطلبات الفنية للمركبة المعدلة:
        </Text>
        <View>
          <View style={[styles.tableRow]}>
            <Text
              style={[styles.tableHead, { width: "10%", borderLeft: "none" }]}
            >
              م
            </Text>
            <Text
              style={[styles.tableHead, { width: "15%", borderLeft: "none" }]}
            >
              المرجع
            </Text>
            <Text
              style={[styles.tableHead, { width: "45%", borderLeft: "none" }]}
            >
              البند
            </Text>
            <Text
              style={[styles.tableHead, { width: "15%", borderLeft: "none" }]}
            >
              تم التعديل
            </Text>
            <Text style={[styles.tableHead, { width: "15%" }]}>النتيجة </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ١
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              1.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              المحرك
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.engine.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {vehicle.result.engine.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ٢
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              2.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              نظام نقل الحركة
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.transmision.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.transmision.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ٣
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              3.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              انظمة العادم
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.exhaust.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.exhaust.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ٤
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              4.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              نظام الوقود
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.fuel.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.fuel.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ٥
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              5.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              نظام الفرامل
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.brake.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.brake.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ٦
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              6.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              الحواف والنتوءات الخارجية
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.edges.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.edges.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ٧
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              7.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              عجلة القيادة
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.steering.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.steering.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ٨
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              8.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              الاطارات والعجلات
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.wheels.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.wheels.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ٩
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              9.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              انظمة الترفية
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.entertainment.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.entertainment.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
          <View style={[styles.tableRow]}>
            <Text
              style={[
                styles.tableCol,
                { width: "10%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              ١٠
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              10.3.4
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "45%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              الهيكل والشاسية
            </Text>
            <Text
              style={[
                styles.tableCol,
                { width: "15%", borderLeft: "none", borderTop: "none" },
              ]}
            >
              {vehicle.result.chassis.modification ? "نعم" : "لا"}
            </Text>
            <Text style={[styles.tableCol, { width: "15%" }]}>
              {" "}
              {vehicle.result.chassis.pass ? "مطابق" : "غيرمطابق"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const FinalResult = ({ finalResult }: any) => {
  return (
    <View style={[styles.tableRow, { marginTop: 8, justifyContent: "center" }]}>
      <Text
        style={[
          styles.tableHead,
          {
            width: 100,
            borderLeft: "none",
            paddingVertical: 4,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 12,
          },
        ]}
      >
        النتيجة النهائية
      </Text>
      <Text
        style={[
          styles.tableHead,
          {
            width: 100,
            paddingVertical: 4,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 12,
          },
        ]}
      >
        {finalResult === "PASS" ? "مطابقة" : "غير مطابقة"}
      </Text>
    </View>
  );
};
const NoteSection = ({ vehicle }: any) => {
  return (
    <View>
      <Text style={[styles.tableCol, { marginTop: 8, paddingVertical: 4 }]}>
        <Text>{vehicle.result.remarks || "............"}</Text>
        <Text style={[styles.subtitle]}>ملاحظات: {"  "}</Text>
      </Text>
    </View>
  );
};
const ManagerSection = () => {
  return (
    <View>
      <Text style={styles.signture}>
        <Text>{siteConfig.manager}</Text>
        <Text style={[styles.subtitle]}>المدير الفني: {"  "}</Text>
      </Text>
      <Text style={[styles.signture, { marginTop: 4 }]}>
        <Text>...........</Text>
        <Text style={[styles.subtitle]}> التوقيع: {"  "}</Text>
      </Text>
    </View>
  );
};
const FooterSection = ({ vehicle }: any) => {
  return (
    <View style={[styles.footer]}>
      <View style={[styles.headerRight, styles.subtitle]}>
        <Text>
          <Text>{siteConfig.ar_branch}</Text>
          <Text>مركز التحقق الدولية لفحص السيارات </Text>
        </Text>
        <Text>
          <Text>{siteConfig.ar_address}</Text>
          <Text>العنوان :</Text>
        </Text>
        <Text>
          <Text>{siteConfig.phone}</Text>
          <Text> الهاتف:</Text>
        </Text>
        <Text>
          <Text>{siteConfig.email}</Text>
          <Text>: ايميل</Text>
        </Text>
      </View>
      <View>
        <Image src="/images/tahaqoq.jpeg" style={styles.logo} />
      </View>
      <View style={styles.subtitle}>
        <Text>TAHAQOQ Vehicle Inspection Center</Text>
        <Text>Address: {siteConfig.address}</Text>
        <Text>Phone: {siteConfig.phone}</Text>
        <Text>Email:{siteConfig.email}</Text>
      </View>
    </View>
  );
};
