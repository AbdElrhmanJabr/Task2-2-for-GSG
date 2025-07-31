import { UserRepository, CourseRepository, BookingRepository } from "./repositories.js";

async function testRepositories() {
  const userRepo = new UserRepository();
  const courseRepo = new CourseRepository();
  const bookingRepo = new BookingRepository();

  console.log("\n📋 All Users:");
  console.log(await userRepo.getAll());

  console.log("\n🔍 User by ID 1:");
  console.log(await userRepo.getById(1));

  console.log("\n➕ Create New User:");
  await userRepo.create({ id: 3, name: "John", email: "john@example.com" });
  console.log(await userRepo.getAll());

  console.log("\n🛠️ Update User 1:");
  await userRepo.update({ id: 1, name: "Ali Updated", email: "ali@update.com" });
  console.log(await userRepo.getById(1));

  console.log("\n❌ Delete User ID 2:");
  await userRepo.delete(2);
  console.log(await userRepo.getAll());

  console.log("\n🔎 Filter User by name = John:");
  console.log(await userRepo.find({ name: "John" }));
}

testRepositories();
