export type User = {
  id: string;
  name?: string;
  email: string;
  role: "user" | "admin";
  image?: string;
  active: boolean;
  password: string;
  vehicles: Vehicle[];
};

export type Vehicle = {
  id: number;
  title: string | null;
  type: string;
  palette: string;
  modelYear: string;
  oldModel: string;
  newModel: string;
  vin: string;
  requestNo: string;
  requestDate: string;
  requestOrigin: string;
  owner: string;
  computerNo: string;
  modifier: string | null;
  reportNo: string | null;
  createdAt: Date;
  result: Result | null;
  userId?: string;
};

export type Result = {
  vehicleId: number;
  vehicle: Vehicle | undefined;
  hasModificationReport?: boolean;
  color: string | null;
  weight: string | null;
  dimensions: string | null;
  engine: Test | null;
  transmision: Test | null;
  exhaust: Test | null;
  fuel: Test | null;
  brake: Test | null;
  edges: Test | null;
  steering: Test | null;
  wheels: Test | null;
  entertainment: Test | null;
  chassis: Test | null;
  remarks?: string;
  createdAt: Date;
};

export type Test = {
  id: number;
  result: Result;
  modification: boolean;
  pass: boolean;
  createdAt: Date;
};

export type UrlSearchParams = {
  page: string | undefined;
  pageSize?: string | undefined;
  search?: string | undefined;
};

export type Vehicles = {
  vehicles: Vehicle[];
  totalPages: number | undefined;
  currentPage: number | undefined;
};
export type SiteConfig = {
  title: string;
  branch: string;
  ar_branch: string;
  description: string;
  address: string;
  ar_address: string;
  phone: string;
  email: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};
