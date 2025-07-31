import { BaseRepository } from "./BaseRepository.js";
import { User, Course, Booking } from "./models.js";

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super([
      { id: 1, name: "AbdElrhamn", email: "AbdElrhamn@example.com" },
      { id: 2, name: "Aya", email: "Aya@example.com" },
    ]);
  }
}

export class CourseRepository extends BaseRepository<Course> {
  constructor() {
    super([
      { id: 1, title: "TypeScript", price: 100 },
      { id: 2, title: "React for Beginners", price: 150 },
    ]);
  }
}
export class BookingRepository extends BaseRepository<Booking> {
  constructor() {
    super([
    { id: 1, userId: 1, courseId: 2, date: new Date("2003-12-14") },
      { id: 2, userId: 2, courseId: 1, date: new Date("2005-7-14")  },
    ]);
  }
}
