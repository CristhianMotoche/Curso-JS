export class User {
  nombre: string;

  constructor(id?: number, nombre?: string, createdAt?: Date, updatedAt?:Date) {
    this.nombre = nombre
  }
}
