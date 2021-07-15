import DatabaseInterface from '../../domain/database/database.interface';
import prisma from './prisma.client';

export default class PrismaHelper implements DatabaseInterface {
  private isConnected: boolean;

  constructor() {
    this.isConnected = false;
  }

  async start(): Promise<void> {
    try {
      if (!this.isConnected) {
        await prisma.$connect();
        this.isConnected = true;

        console.log('Prisma: Connection established - Postgres');
      }
    } catch (error) {
      console.error('Prisma: Connection failed - Postgres:', error.message);
    }
  }

  async close(): Promise<void> {
    await prisma.$disconnect();
    this.isConnected = false;
  }
}
