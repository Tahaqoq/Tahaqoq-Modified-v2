import { Result } from "@/types";
import bcrypt from "bcrypt";

export function leadingZeros(num: number, totalLength: number) {
  return String(num).padStart(totalLength, "0");
}

export const finalResult = (result: Result) => {
  if (!result.hasModificationReport) return "FAIL";
  const inspectionItems = [
    result.engine,
    result.transmision,
    result.exhaust,
    result.fuel,
    result.brake,
    result.edges,
    result.steering,
    result.wheels,
    result.entertainment,
    result.chassis,
  ];

  const allPassed = inspectionItems.every((test) => test?.pass);
  return allPassed ? "PASS" : "FAIL";
};

export const arabicDate = (date: any) => {
  const formatter = Intl.DateTimeFormat("ar-sa", {
    dateStyle: "short",
  });
  return formatter.format(date);
};
export const formatDate = (date: any) => {
  const formatter = Intl.DateTimeFormat("ar-ae", {
    dateStyle: "short",
  });
  return formatter.format(date);
};

export const hashPassword = async (unhashed: string) => {
  const hashed = await bcrypt.hash(unhashed, 10);
  return hashed;
};

export const comparePasswords = async (unhased: string, hashed: string) => {
  return await bcrypt.compare(unhased, hashed);
};

export function getCombinedColors(colors: any[]) {
  const combinedColors = [];

  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      const combinedName = `${colors[i].name}/${colors[j].name}`;
      const combinedValue = `${colors[i].value} / ${colors[j].value}`;
      combinedColors.push({ name: combinedName, value: combinedValue });
    }
  }

  return combinedColors;
}
