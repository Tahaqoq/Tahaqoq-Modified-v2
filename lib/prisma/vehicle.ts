import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import prisma from ".";
import { leadingZeros } from "../utils/helpers";

export const getVehicles = async (
  page: number = 1,
  pageSize: number = 5,
  search = "*"
) => {
  const skip: number = (page - 1) * pageSize;
  try {
    const [vehicles, count] = await prisma.$transaction([
      prisma.vehicle.findMany({
        where: {
          title: {
            contains: search,
          },
        },
        skip,
        take: pageSize,
        include: {
          result: {
            include: {
              brake: true,
              chassis: true,
              edges: true,
              engine: true,
              entertainment: true,
              exhaust: true,
              fuel: true,
              steering: true,
              transmision: true,
              vehicle: true,
              wheels: true,
            },
          },
        },

        orderBy: {
          id: "desc",
        },
      }),
      prisma.vehicle.count(),
    ]);

    return {
      vehicles,
      totalPages: Math.ceil(count / pageSize),
      currentPage: page,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const getVehicleById = async (id: number) => {
  try {
    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
      include: {
        result: {
          include: {
            brake: true,
            chassis: true,
            edges: true,
            engine: true,
            entertainment: true,
            exhaust: true,
            fuel: true,
            steering: true,
            transmision: true,
            wheels: true,
          },
        },
      },
    });
    return vehicle;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const addVehicle = async (data: any) => {
  const { user }: any = await getServerSession(authOptions);

  try {
    prisma;
    const newVehicle = await prisma.vehicle.create({
      data: {
        userId: user.email,
        ...data,
      },
    });
    const vehicle = await prisma.vehicle.update({
      where: { id: newVehicle.id },
      data: {
        title: `${leadingZeros(newVehicle.id, 5)}/${new Date().getFullYear()}`,
      },
    });

    return vehicle;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const updateVehicle = async (data: any, id: number) => {
  try {
    const vehicle = await prisma.vehicle.update({
      where: { id },
      data: { ...data },
    });
    return vehicle;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const deleteVehicle = async (id: number) => {
  try {
    const vehicle = await prisma.vehicle.delete({
      where: { id },
    });
    return vehicle;
  } catch (error) {
    console.log(error);
    return { error };
  }
};
