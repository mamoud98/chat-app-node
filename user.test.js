const user = require("./helper/user");

test("return user room", () => {
  expect(user.getUsersRoom("java")).toMatchObject([
    { id: 5, room: "java", username: "mahmoud" },
  ]);
});

test("return user room by id", () => {
  expect(user.getUserRoomById(5)).toBe("java");
});

test("return user room by id", () => {
  expect(user.getUserNameById(5)).toBe("mahmoud");
});
