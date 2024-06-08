/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Prediction as PrismaPrediction,
  Match as PrismaMatch,
  Player as PrismaPlayer,
} from "@prisma/client";

export class PredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PredictionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.prediction.count(args);
  }

  async predictions<T extends Prisma.PredictionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionFindManyArgs>
  ): Promise<PrismaPrediction[]> {
    return this.prisma.prediction.findMany<Prisma.PredictionFindManyArgs>(args);
  }
  async prediction<T extends Prisma.PredictionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionFindUniqueArgs>
  ): Promise<PrismaPrediction | null> {
    return this.prisma.prediction.findUnique(args);
  }
  async createPrediction<T extends Prisma.PredictionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionCreateArgs>
  ): Promise<PrismaPrediction> {
    return this.prisma.prediction.create<T>(args);
  }
  async updatePrediction<T extends Prisma.PredictionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionUpdateArgs>
  ): Promise<PrismaPrediction> {
    return this.prisma.prediction.update<T>(args);
  }
  async deletePrediction<T extends Prisma.PredictionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PredictionDeleteArgs>
  ): Promise<PrismaPrediction> {
    return this.prisma.prediction.delete(args);
  }

  async getMatch(parentId: string): Promise<PrismaMatch | null> {
    return this.prisma.prediction
      .findUnique({
        where: { id: parentId },
      })
      .match();
  }

  async getPlayer(parentId: string): Promise<PrismaPlayer | null> {
    return this.prisma.prediction
      .findUnique({
        where: { id: parentId },
      })
      .player();
  }
}
