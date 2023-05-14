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

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
  dividerLG: {
    width: "100%",
    height: 1,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#e5e5e5",
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

const Letter = ({ data }: any) => {
  const vehicle = JSON.parse(data);
  return (
    <PDFViewer style={styles.viewer}>
      <Document
        subject="letter"
        creator="Tahaqoq International Co."
        style={styles.document}
        author="Tahaqoq International Co."
        title={`Letter-${vehicle.title}`}
      >
        <Page style={styles.page} size="A4">
          <HeaderSection vehicle={vehicle} />
          <ToSection vehicle={vehicle} />
          <VehicleDetails vehicle={vehicle} />
          <ResultSection vehicle={vehicle} />
          <FooterSection />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Letter;

const HeaderSection = ({ vehicle }: any) => {
  return (
    <View>
      <View style={styles.header}>
        <Image src="/images/tahaqoq.jpeg" style={styles.logo} />
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
const ToSection = ({ vehicle }: any) => {
  return (
    <View>
      <View
        style={[
          styles.headText,
          {
            display: "flex",
            fontSize: 14,
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 70,
          },
        ]}
      >
        <Text>
          <Text>
            {" "}
            {vehicle.requestOrigin}
            {`  `} مدير
          </Text>
          <Text>سعادة /</Text>
        </Text>
        <Text style={{ marginLeft: 50 }}>المحترم </Text>
      </View>
      <View>
        <Text
          style={[
            styles.subtitle,
            { textAlign: "center", marginTop: 16, fontSize: 12 },
          ]}
        >
          السلام عليكم ورحمة اللــه وبركاتـــه
        </Text>
      </View>
      <View style={[styles.subtitle]}>
        <View
          style={{
            textAlign: "right",
            display: "flex",
            flexDirection: "row-reverse",
            lineHeight: 2,
            marginTop: 16,
          }}
        >
          <Text>اشارة الي خطابكم رقم:</Text>
          <Text>
            {vehicle.requestNo} {`   `}
          </Text>
          <Text>بتاريخ:</Text>
          <Text>
            {vehicle.requestDate}
            {`   `}
          </Text>
        </View>
        <View
          style={{
            textAlign: "right",
            display: "flex",
            flexDirection: "row-reverse",
            lineHeight: 2,
          }}
        >
          <Text> بخصوص طلب المستفيد / </Text>
          <Text>{vehicle.owner}</Text>
          <Text> :حاسب الي رقم </Text>
          <Text>
            {vehicle.computerNo}
            {`   `}
          </Text>
        </View>
        <View style={{ textAlign: "right" }}>
          <Text>بتغيير طراز المركبة التالية :</Text>
        </View>
      </View>
    </View>
  );
};
const VehicleDetails = ({ vehicle }: any) => {
  return (
    <View style={{ marginTop: 16 }}>
      <View style={[styles.tableRow]}>
        <Text style={[styles.tableCol, styles.tableHeadText, { width: "20%" }]}>
          نوع المركبة{" "}
        </Text>
        <Text
          style={[
            styles.tableCol,
            styles.tableHeadText,
            { width: "20%", borderRight: "none" },
          ]}
        >
          رقم اللوحة{" "}
        </Text>
        <Text
          style={[
            styles.tableCol,
            styles.tableHeadText,
            { width: "20%", borderRight: "none" },
          ]}
        >
          الموديل
        </Text>
        <Text
          style={[
            styles.tableCol,
            styles.tableHeadText,
            { width: "20%", borderRight: "none" },
          ]}
        >
          الطراز الحالي{" "}
        </Text>
        <Text
          style={[
            styles.tableCol,
            styles.tableHeadText,
            { width: "20%", borderRight: "none" },
          ]}
        >
          الطراز الجديد
        </Text>
      </View>
      <View style={[styles.tableRow]}>
        <Text style={[styles.tableCol, { borderTop: "none", width: "20%" }]}>
          {vehicle.type}
        </Text>
        <Text
          style={[
            styles.tableCol,
            { borderTop: "none", width: "20%", borderRight: "none" },
          ]}
        >
          {vehicle.palette}
        </Text>
        <Text
          style={[
            styles.tableCol,
            { borderTop: "none", width: "20%", borderRight: "none" },
          ]}
        >
          {vehicle.modelYear}
        </Text>
        <Text
          style={[
            styles.tableCol,
            { borderTop: "none", width: "20%", borderRight: "none" },
          ]}
        >
          {vehicle.oldModel}
        </Text>
        <Text
          style={[
            styles.tableCol,
            { borderTop: "none", width: "20%", borderRight: "none" },
          ]}
        >
          {vehicle.newModel}
        </Text>
      </View>
    </View>
  );
};
const ResultSection = ({ vehicle }: any) => {
  return (
    <View style={[styles.subtitle, { marginTop: 16 }]}>
      <View
        style={{
          textAlign: "right",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Text>
          نفيدكم بانه بعد اجراء الكشف علي المركبة المعدلة تبين ان المركبة
          المذكورة اعلاه
        </Text>
        <Text wrap>
          {vehicle.finalResult === "PASS" ? "مطابقة" : "غير مطابقة"} {`   `}
        </Text>
      </View>
      <View
        style={{
          textAlign: "right",
          display: "flex",
          flexDirection: "row-reverse",
          lineHeight: 2,
        }}
      >
        <Text>
          لمتطلبات اللوائح الفنية الخليجية ولا مانع من تحويل الطراز من{" "}
        </Text>
        <Text wrap>{vehicle.oldModel}</Text>
        <Text wrap> الي</Text>
        <Text wrap>{vehicle.newModel}</Text>
        <Text wrap>.</Text>
      </View>
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
