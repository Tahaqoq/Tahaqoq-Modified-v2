import prisma from ".";

export const getResultByVehicleId = async (id: number) => {
  try {
    const result = await prisma.result.findUnique({
      where: { vehicleId: id },
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
        vehicle: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const addVehicleResult = async (data: any) => {
  try {
    const result = await prisma.result.create({
      data: {
        vehicleId: data.vehicleId,
        color: data.color,
        weight: data.weight,
        dimensions: data.dimensions,
        remarks: data.remarks,
        brake: {
          create: {
            modification: data.brakeModification,
            pass: data.brakeResult,
          },
        },
        chassis: {
          create: {
            modification: data.chassisModification,
            pass: data.chassisResult,
          },
        },
        edges: {
          create: {
            modification: data.edgesModification,
            pass: data.edgesResult,
          },
        },
        engine: {
          create: {
            modification: data.engineModification,
            pass: data.engineResult,
          },
        },
        entertainment: {
          create: {
            modification: data.entertainmentModification,
            pass: data.entertainmentResult,
          },
        },
        exhaust: {
          create: {
            modification: data.exhaustModification,
            pass: data.exhaustResult,
          },
        },
        fuel: {
          create: {
            modification: data.fuelModification,
            pass: data.fuelResult,
          },
        },
        steering: {
          create: {
            modification: data.steeringModification,
            pass: data.steeringResult,
          },
        },
        transmision: {
          create: {
            modification: data.transmisionModification,
            pass: data.transmisionResult,
          },
        },
        wheels: {
          create: {
            modification: data.wheelsModification,
            pass: data.wheelsResult,
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return { error };
  }
};
export const updateVehicleResult = async (data: any) => {
  try {
    const result = await prisma.result.update({
      where: { vehicleId: data.vehicleId },
      data: {
        vehicleId: data.vehicleId,
        color: data.color,
        weight: data.weight,
        dimensions: data.dimensions,
        remarks: data.remarks,
        hasModificationReport: data.hasModificationReport,
        brake: {
          update: {
            modification: data.brakeModification,
            pass: data.brakeResult,
          },
        },
        chassis: {
          update: {
            modification: data.chassisModification,
            pass: data.chassisResult,
          },
        },
        edges: {
          update: {
            modification: data.edgesModification,
            pass: data.edgesResult,
          },
        },
        engine: {
          update: {
            modification: data.engineModification,
            pass: data.engineResult,
          },
        },
        entertainment: {
          update: {
            modification: data.entertainmentModification,
            pass: data.entertainmentResult,
          },
        },
        exhaust: {
          update: {
            modification: data.exhaustModification,
            pass: data.exhaustResult,
          },
        },
        fuel: {
          update: {
            modification: data.fuelModification,
            pass: data.fuelResult,
          },
        },
        steering: {
          update: {
            modification: data.steeringModification,
            pass: data.steeringResult,
          },
        },
        transmision: {
          update: {
            modification: data.transmisionModification,
            pass: data.transmisionResult,
          },
        },
        wheels: {
          update: {
            modification: data.wheelsModification,
            pass: data.wheelsResult,
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const deleteVehicleResult = async (id: number) => {
  try {
    const result = await prisma.result.delete({
      where: {
        vehicleId: id,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return { error };
  }
};
